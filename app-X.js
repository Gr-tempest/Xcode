// app-X.js - Event handlers and functionality
function setupEventListeners() {
  // Run button
  document.getElementById('runBtn').addEventListener('click', runCode);
  
  // Check solution button
  document.getElementById('checkBtn').addEventListener('click', checkSolution);
  
  // Next level button
  document.getElementById('nextBtn').addEventListener('click', nextLevel);
  
  // Hint button
  document.getElementById('hintBtn').addEventListener('click', showHint);
  
  // Theme toggle
  document.getElementById('themeBtn').addEventListener('click', toggleTheme);
  
  // Code input
  document.getElementById('code').addEventListener('input', function() {
    clearTimeout(this.timer);
    this.timer = setTimeout(runCode, 300);
  });
  
  // Toolbar buttons
  document.querySelectorAll('.toolbar button').forEach(btn => {
    btn.addEventListener('click', function() {
      insertText(this.dataset.s);
    });
  });
}

// Insert text at cursor
function insertText(text) {
  const textarea = document.getElementById('code');
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const content = textarea.value;
  
  textarea.value = content.substring(0, start) + text + content.substring(end);
  textarea.focus();
  textarea.selectionStart = textarea.selectionEnd = start + text.length;
  runCode();
}

// Check solution
function checkSolution() {
  const code = document.getElementById('code').value;
  const levelData = window.levels[window.currentLang][window.currentLevel];
  
  if (levelData && levelData.check.test(code)) {
    // Complete the level if not already completed
    if (window.currentLevel === window.currentUser.progress[window.currentLang]) {
      window.currentUser.progress[window.currentLang]++;
      window.currentUser.xp += 10;
      saveUser();
      
      // Celebration
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      alert('✅ Level Completed! +10 XP');
    }
    
    // Enable next button
    document.getElementById('nextBtn').disabled = false;
    updateUI();
  } else {
    alert('❌ Not quite right. Try again!');
  }
}

// Next level
function nextLevel() {
  if (window.currentLevel < 19) {
    window.currentLevel++;
    document.getElementById('nextBtn').disabled = true;
    loadLevel();
  } else {
    alert('🎉 All levels completed in this module!');
  }
}

// Show hint
function showHint() {
  const levelData = window.levels[window.currentLang][window.currentLevel];
  if (levelData) {
    alert(`💡 Hint: Your code needs to match this pattern:\n${levelData.check.toString()}`);
  }
}

// Toggle theme
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode', !isDark);
  document.getElementById('themeBtn').textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('codex_theme', isDark ? 'dark' : 'light');
}

// Save user data
function saveUser() {
  let users = JSON.parse(localStorage.getItem('codex_users') || '{}');
  users[window.currentUser.username.toLowerCase()] = window.currentUser;
  localStorage.setItem('codex_users', JSON.stringify(users));
  localStorage.setItem('codex_current_user', JSON.stringify(window.currentUser));
}