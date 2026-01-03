let currentUser = null;
let currentLang = "", currentLevel = 0;

// Check if logged in on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedUser = localStorage.getItem("codex_current_user");
  const authCheck = document.getElementById("authCheck");
  const app = document.getElementById("app");
  
  if (!savedUser) {
    // Not logged in - show auth message
    authCheck.classList.remove("hidden");
    app.classList.add("hidden");
    return;
  }
  
  // User is logged in - load app
  currentUser = JSON.parse(savedUser);
  authCheck.classList.add("hidden");
  app.classList.remove("hidden");
  loadUser();
  updateUI();
});

// Load user data
function loadUser() {
  document.getElementById("userName").textContent = currentUser.username;
  document.getElementById("greeting").textContent = currentUser.username;
  updateUI();
}

// Update UI with user progress
function updateUI() {
  const total = currentUser.progress.html + currentUser.progress.css + currentUser.progress.js;
  document.getElementById("level").textContent = Math.floor(total/10) + 1;
  document.getElementById("xp").textContent = total * 10;
  
  ["html","css","js"].forEach(l => {
    const p = currentUser.progress[l];
    const percent = (p/100*100);
    document.getElementById(l+"Done").textContent = p;
    document.getElementById(l+"Bar").style.width = percent + "%";
  });
}

// Open module
function openModule(lang) {
  currentLang = lang;
  currentLevel = currentUser.progress[lang];
  
  // Make sure level is within bounds
  if (currentLevel >= 20) {
    currentLevel = 19; // Start from last level if all completed
  }
  
  loadLevel();
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("editor").classList.remove("hidden");
}

// Close editor
function closeEditor() {
  document.getElementById("editor").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  updateUI();
}

// Load level into editor
function loadLevel() {
  const lvl = window.levels[currentLang][currentLevel];
  if (!lvl) {
    console.error("Level not found:", currentLang, currentLevel);
    return;
  }
  
  document.getElementById("title").textContent = `${currentLang.toUpperCase()} • ${lvl.title}`;
  document.getElementById("currentLevelNum").textContent = currentLevel + 1;
  document.getElementById("code").value = lvl.code || "";
  
  // Enable/disable next button based on completion
  const nextBtn = document.getElementById("nextBtn");
  const isCompleted = currentUser.progress[currentLang] > currentLevel;
  nextBtn.disabled = !isCompleted;
  
  run();
}

// Run code in preview
function run() {
  const code = document.getElementById("code").value;
  const preview = document.getElementById("preview");
  
  if (!preview) return;
  
  if (currentLang === "html") {
    preview.srcdoc = code;
  } else if (currentLang === "css") {
    preview.srcdoc = `<style>${code}</style><body><h1>CSS Preview</h1><p>Styled paragraph</p></body>`;
  } else if (currentLang === "js") {
    preview.srcdoc = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>JS Output</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          #console { background: #000; color: #0f0; padding: 15px; border-radius: 5px; margin: 10px 0; }
        </style>
      </head>
      <body>
        <h1>JavaScript Output</h1>
        <div id="console"></div>
        <button id="testBtn">Test Button</button>
        <script>
          // Redirect console.log to display
          const consoleDiv = document.getElementById('console');
          const originalLog = console.log;
          console.log = function(...args) {
            originalLog.apply(console, args);
            consoleDiv.innerHTML += args.map(arg => 
              typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
            ).join(' ') + '\\n';
          };
          
          try {
            ${code}
          } catch(e) {
            console.log('Error:', e.message);
          }
          
          // Add test button handler
          document.getElementById('testBtn').onclick = function() {
            console.log('Button clicked!');
          };
        <\/script>
      </body>
      </html>
    `;
  }
}

// Toolbar buttons
document.querySelectorAll(".toolbar button").forEach(b => {
  b.onclick = function() {
    const textarea = document.getElementById("code");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const insert = this.dataset.s;
    
    textarea.value = text.substring(0, start) + insert + text.substring(end);
    textarea.focus();
    textarea.selectionStart = textarea.selectionEnd = start + insert.length;
    
    run();
  };
});

// Run button
document.getElementById("runBtn").onclick = run;

// Check solution
document.getElementById("checkBtn").onclick = function() {
  const code = document.getElementById("code").value;
  const level = window.levels[currentLang][currentLevel];
  
  if (level.check.test(code)) {
    // Complete level if not already completed
    if (currentLevel === currentUser.progress[currentLang]) {
      currentUser.progress[currentLang]++;
      currentUser.xp += 10;
      saveUser();
      
      // Celebration!
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      alert("CORRECT! +10 XP 🎉");
    }
    
    // Enable next button
    document.getElementById("nextBtn").disabled = false;
  } else {
    alert("Not quite right... Keep trying!");
  }
};

// Next level
document.getElementById("nextBtn").onclick = function() {
  if (currentLevel < 19) {
    currentLevel++;
    this.disabled = true; // Disable until next level is completed
    loadLevel();
  } else {
    alert("🎉 Congratulations! You've completed all levels in this module!");
  }
};

// Hint button
document.getElementById("hintBtn").onclick = function() {
  const level = window.levels[currentLang][currentLevel];
  alert(`💡 Hint: The code needs to match this pattern: ${level.check.toString()}`);
};

// Theme toggle
document.getElementById("themeBtn").onclick = function() {
  const isDark = document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode", !isDark);
  this.textContent = isDark ? "🌙" : "☀️";
  
  // Save theme preference
  localStorage.setItem("codex_theme", isDark ? "dark" : "light");
};

// Logout
document.getElementById("logoutBtn").onclick = function() {
  if (confirm("Are you sure you want to logout?")) {
    localStorage.removeItem("codex_current_user");
    window.location.href = "LandX.html";
  }
};

// Save user data
function saveUser() {
  let users = JSON.parse(localStorage.getItem("codex_users") || "{}");
  users[currentUser.username.toLowerCase()] = currentUser;
  localStorage.setItem("codex_users", JSON.stringify(users));
  localStorage.setItem("codex_current_user", JSON.stringify(currentUser));
  updateUI();
}

// Auto-run on code change
document.getElementById("code").addEventListener("input", function() {
  clearTimeout(this.timer);
  this.timer = setTimeout(run, 300);
});

// Load saved theme
(function loadTheme() {
  const savedTheme = localStorage.getItem("codex_theme");
  const themeBtn = document.getElementById("themeBtn");
  
  if (savedTheme === "light") {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    themeBtn.textContent = "☀️";
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "🌙";
  }
})();