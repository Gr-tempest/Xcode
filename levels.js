window.levels = {
  html: [
    // Level 1-50: Absolute Beginner to Basic Proficiency
    {
      title: "Hello World",
      template: `<!DOCTYPE html>
<html>
<head>
  <title>First Page</title>
</head>
<body>
  <!-- Add an h1 heading with text "Hello World!" -->
</body>
</html>`,
      instruction: "Inside the body, add an h1 heading that says 'Hello World!'",
      check: /<h1>.*Hello World!.*<\/h1>/s
    },
    {
      title: "Basic Paragraph",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>Welcome</h1>
  <!-- Add a paragraph below -->
</body>
</html>`,
      instruction: "Add a paragraph tag with text 'This is my first paragraph'",
      check: /<p>.*This is my first paragraph.*<\/p>/s
    },
    {
      title: "Multiple Headings",
      template: `<!DOCTYPE html>
<html>
<body>
  <!-- Add headings from h1 to h3 -->
</body>
</html>`,
      instruction: "Add h1, h2, and h3 headings with any text",
      check: /<h1>.*<\/h1>.*<h2>.*<\/h2>.*<h3>.*<\/h3>/s
    },
    {
      title: "Line Breaks",
      template: `<!DOCTYPE html>
<html>
<body>
  <p>First line</p>
  <!-- Add line break -->
  <p>Second line</p>
</body>
</html>`,
      instruction: "Add a line break between the paragraphs",
      check: /<br\s*\/?>/s
    },
    {
      title: "Horizontal Rule",
      template: `<!DOCTYPE html>
<html>
<body>
  <p>Section 1</p>
  <!-- Add horizontal rule -->
  <p>Section 2</p>
</body>
</html>`,
      instruction: "Add a horizontal rule between sections",
      check: /<hr\s*\/?>/s
    },
    {
      title: "Simple List",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>My Fruits</h1>
  <!-- Create an unordered list -->
</body>
</html>`,
      instruction: "Create an unordered list with 3 fruits",
      check: /<ul>.*<li>.*<\/li>.*<li>.*<\/li>.*<li>.*<\/li>.*<\/ul>/s
    },
    {
      title: "Ordered List",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>Steps to Make Tea</h1>
  <!-- Create an ordered list -->
</body>
</html>`,
      instruction: "Create an ordered list with 3 steps",
      check: /<ol>.*<li>.*<\/li>.*<li>.*<\/li>.*<li>.*<\/li>.*<\/ol>/s
    },
    {
      title: "Nested List",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>Programming Languages</h1>
  <!-- Create a nested list -->
</body>
</html>`,
      instruction: "Create a list with nested sub-items",
      check: /<ul>.*<li>.*<ul>.*<li>.*<\/li>.*<\/ul>.*<\/li>.*<\/ul>/s
    },
    {
      title: "Basic Image",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>My Photo</h1>
  <!-- Add an image -->
</body>
</html>`,
      instruction: "Add an image with src='https://picsum.photos/200'",
      check: /<img.*src=.*https:\/\/picsum\.photos\/200.*>/s
    },
    {
      title: "Image with Alt Text",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>Nature Image</h1>
  <!-- Add accessible image -->
</body>
</html>`,
      instruction: "Add image with src and alt='Beautiful landscape'",
      check: /<img.*src=.*https:\/\/picsum\.photos\/300.*alt=.*Beautiful landscape.*>/s
    },
    {
      title: "Simple Link",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>Go to Google</h1>
  <!-- Create a link -->
</body>
</html>`,
      instruction: "Create link to https://www.google.com with text 'Search'",
      check: /<a.*href=.*https:\/\/www\.google\.com.*>.*Search.*<\/a>/s
    },
    {
      title: "Link in New Tab",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>External Site</h1>
  <!-- Open link in new tab -->
</body>
</html>`,
      instruction: "Create link that opens in new tab/window",
      check: /<a.*href=.*https:\/\/example\.com.*target=.*_blank.*>/s
    },
    {
      title: "Email Link",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>Contact Me</h1>
  <!-- Create email link -->
</body>
</html>`,
      instruction: "Create mailto link to 'contact@example.com'",
      check: /<a.*href=.*mailto:contact@example\.com.*>/s
    },
    {
      title: "Basic Table",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>Student List</h1>
  <!-- Create simple table -->
</body>
</html>`,
      instruction: "Create table with 2 columns: Name and Age",
      check: /<table>.*<tr>.*<td>.*<\/td>.*<td>.*<\/td>.*<\/tr>.*<\/table>/s
    },
    {
      title: "Table with Headers",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>Class Grades</h1>
  <!-- Create table with headers -->
</body>
</html>`,
      instruction: "Create table with th elements for headers",
      check: /<table>.*<tr>.*<th>.*<\/th>.*<th>.*<\/th>.*<\/tr>.*<\/table>/s
    },
    {
      title: "Table with Caption",
      template: `<!DOCTYPE html>
<html>
<body>
  <!-- Create table with caption -->
</body>
</html>`,
      instruction: "Add caption to table",
      check: /<table>.*<caption>.*<\/caption>.*<\/table>/s
    },
    {
      title: "Simple Form",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>Login Form</h1>
  <!-- Create basic form -->
</body>
</html>`,
      instruction: "Create form with username and password fields",
      check: /<form>.*<input.*type=.*text.*>.*<input.*type=.*password.*>.*<\/form>/s
    },
    {
      title: "Form with Submit",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>Contact Form</h1>
  <!-- Form with submit button -->
</body>
</html>`,
      instruction: "Add submit button to form",
      check: /<form>.*<input.*type=.*submit.*>.*<\/form>/s
    },
    {
      title: "Text Input with Placeholder",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>Search</h1>
  <!-- Input with placeholder -->
</body>
</html>`,
      instruction: "Add text input with placeholder='Enter search term'",
      check: /<input.*type=.*text.*placeholder=.*Enter search term.*>/s
    },
    {
      title: "Textarea",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>Comments</h1>
  <!-- Add textarea -->
</body>
</html>`,
      instruction: "Add textarea with 5 rows and 30 columns",
      check: /<textarea.*rows=.*5.*cols=.*30.*>.*<\/textarea>/s
    },
    {
      title: "Select Dropdown",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>Choose Country</h1>
  <!-- Add dropdown -->
</body>
</html>`,
      instruction: "Create select with 3 country options",
      check: /<select>.*<option>.*<\/option>.*<option>.*<\/option>.*<option>.*<\/option>.*<\/select>/s
    },
    {
      title: "Radio Buttons",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>Gender</h1>
  <!-- Add radio buttons -->
</body>
</html>`,
      instruction: "Create radio buttons for Male and Female",
      check: /<input.*type=.*radio.*name=.*gender.*>.*<input.*type=.*radio.*name=.*gender.*>/s
    },
    {
      title: "Checkboxes",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>Hobbies</h1>
  <!-- Add checkboxes -->
</body>
</html>`,
      instruction: "Create checkboxes for Reading, Sports, Music",
      check: /<input.*type=.*checkbox.*>.*Reading.*<input.*type=.*checkbox.*>.*Sports/s
    },
    {
      title: "Fieldset and Legend",
      template: `<!DOCTYPE html>
<html>
<body>
  <!-- Use fieldset and legend -->
</body>
</html>`,
      instruction: "Wrap form elements in fieldset with legend",
      check: /<fieldset>.*<legend>.*<\/legend>.*<\/fieldset>/s
    },
    {
      title: "Label Elements",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>Registration</h1>
  <!-- Use labels -->
</body>
</html>`,
      instruction: "Add labels for form inputs",
      check: /<label.*>.*<\/label>.*<input.*>/s
    },
    {
      title: "Button Element",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>Click Me</h1>
  <!-- Add button -->
</body>
</html>`,
      instruction: "Add a button with text 'Click Here'",
      check: /<button>.*Click Here.*<\/button>/s
    },
    {
      title: "Div Container",
      template: `<!DOCTYPE html>
<html>
<body>
  <!-- Use div to group elements -->
</body>
</html>`,
      instruction: "Wrap content in div with class='container'",
      check: /<div.*class=.*container.*>.*<\/div>/s
    },
    {
      title: "Span Element",
      template: `<!DOCTYPE html>
<html>
<body>
  <p>This is <span>important</span> text</p>
</body>
</html>`,
      instruction: "Wrap 'important' in span with class='highlight'",
      check: /<span.*class=.*highlight.*>.*important.*<\/span>/s
    },
    {
      title: "HTML Comments",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>My Page</h1>
  <!-- Add comments -->
</body>
</html>`,
      instruction: "Add comments explaining the code",
      check: /<!--.*-->/s
    },
    {
      title: "Meta Charset",
      template: `<!DOCTYPE html>
<html>
<head>
  <!-- Add charset meta tag -->
</head>
<body>
  <h1>Character Encoding</h1>
</body>
</html>`,
      instruction: "Add UTF-8 charset meta tag",
      check: /<meta.*charset=.*UTF-8.*>/s
    },
    {
      title: "Viewport Meta",
      template: `<!DOCTYPE html>
<html>
<head>
  <!-- Add viewport meta -->
</head>
<body>
  <h1>Responsive Page</h1>
</body>
</html>`,
      instruction: "Add viewport meta for responsive design",
      check: /<meta.*name=.*viewport.*content=.*width=device-width.*>/s
    },
    {
      title: "Page Description",
      template: `<!DOCTYPE html>
<html>
<head>
  <!-- Add description -->
</head>
<body>
  <h1>My Website</h1>
</body>
</html>`,
      instruction: "Add meta description",
      check: /<meta.*name=.*description.*content=.*>/s
    },
    {
      title: "Keywords Meta",
      template: `<!DOCTYPE html>
<html>
<head>
  <!-- Add keywords -->
</head>
<body>
  <h1>SEO Page</h1>
</body>
</html>`,
      instruction: "Add keywords meta tag",
      check: /<meta.*name=.*keywords.*content=.*>/s
    },
    {
      title: "Author Meta",
      template: `<!DOCTYPE html>
<html>
<head>
  <!-- Add author -->
</head>
<body>
  <h1>About</h1>
</body>
</html>`,
      instruction: "Add author meta tag",
      check: /<meta.*name=.*author.*content=.*>/s
    },
    {
      title: "Link to CSS",
      template: `<!DOCTYPE html>
<html>
<head>
  <!-- Link to CSS -->
</head>
<body>
  <h1>Styled Page</h1>
</body>
</html>`,
      instruction: "Link external CSS file 'styles.css'",
      check: /<link.*rel=.*stylesheet.*href=.*styles\.css.*>/s
    },
    {
      title: "Internal CSS",
      template: `<!DOCTYPE html>
<html>
<head>
  <!-- Add internal CSS -->
</head>
<body>
  <h1>Colored Heading</h1>
</body>
</html>`,
      instruction: "Add style tag to make h1 blue",
      check: /<style>.*h1.*\{.*color: blue.*\}.*<\/style>/s
    },
    {
      title: "Inline CSS",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>Styled Heading</h1>
</body>
</html>`,
      instruction: "Add inline style to h1 for red color",
      check: /<h1.*style=.*color: red.*>.*<\/h1>/s
    },
    {
      title: "Script Tag",
      template: `<!DOCTYPE html>
<html>
<body>
  <h1>JavaScript Page</h1>
  <!-- Add script -->
</body>
</html>`,
      instruction: "Add script tag at end of body",
      check: /<script>.*<\/script>/s
    },
    {
      title: "External JavaScript",
      template: `<!DOCTYPE html>
<html>
<head>
  <!-- Add external JS -->
</head>
<body>
  <h1>Interactive Page</h1>
</body>
</html>`,
      instruction: "Link external JavaScript file 'script.js'",
      check: /<script.*src=.*script\.js.*><\/script>/s
    },
    {
      title: "HTML Entities - Basic",
      template: `<!DOCTYPE html>
<html>
<body>
  <p>Special Characters</p>
</body>
</html>`,
      instruction: "Display less than and greater than symbols",
      check: /&lt;.*&gt;/s
    },
    {
      title: "HTML Entities - Copyright",
      template: `<!DOCTYPE html>
<html>
<body>
  <footer>
    <!-- Add copyright -->
  </footer>
</body>
</html>`,
      instruction: "Add copyright symbol with year",
      check: /&copy;.*2024/s
    },
    {
      title: "Non-breaking Space",
      template: `<!DOCTYPE html>
<html>
<body>
  <p>Hello World</p>
</body>
</html>`,
      instruction: "Add non-breaking space between words",
      check: /Hello&nbsp;World/s
    },
    {
      title: "Quotation Marks",
      template: `<!DOCTYPE html>
<html>
<body>
  <p>Quote</p>
</body>
</html>`,
      instruction: "Display text in double quotes using entities",
      check: /&quot;.*&quot;/s
    },
    {
      title: "Ampersand Entity",
      template: `<!DOCTYPE html>
<html>
<body>
  <p>Company Name</p>
</body>
</html>`,
      instruction: "Display 'Company & Co.'",
      check: /Company &amp; Co\./s
    },
    {
      title: "Semantic Header",
      template: `<!DOCTYPE html>
<html>
<body>
  <!-- Add semantic header -->
</body>
</html>`,
      instruction: "Use header element for page header",
      check: /<header>.*<\/header>/s
    },
    {
      title: "Semantic Footer",
      template: `<!DOCTYPE html>
<html>
<body>
  <!-- Add semantic footer -->
</body>
</html>`,
      instruction: "Use footer element for page footer",
      check: /<footer>.*<\/footer>/s
    },
    {
      title: "Navigation Element",
      template: `<!DOCTYPE html>
<html>
<body>
  <!-- Add navigation -->
</body>
</html>`,
      instruction: "Use nav element for navigation links",
      check: /<nav>.*<\/nav>/s
    },
    {
      title: "Main Content",
      template: `<!DOCTYPE html>
<html>
<body>
  <!-- Add main content area -->
</body>
</html>`,
      instruction: "Use main element for primary content",
      check: /<main>.*<\/main>/s
    },
    {
      title: "Article Element",
      template: `<!DOCTYPE html>
<html>
<body>
  <!-- Add article -->
</body>
</html>`,
      instruction: "Use article element for self-contained content",
      check: /<article>.*<\/article>/s
    },
    {
      title: "Section Element",
      template: `<!DOCTYPE html>
<html>
<body>
  <!-- Add section -->
</body>
</html>`,
      instruction: "Use section element for thematic grouping",
      check: /<section>.*<\/section>/s
    },
    {
      title: "Aside Element",
      template: `<!DOCTYPE html>
<html>
<body>
  <!-- Add sidebar content -->
</body>
</html>`,
      instruction: "Use aside element for sidebar content",
      check: /<aside>.*<\/aside>/s
    },
    {
      title: "Figure and Figcaption",
      template: `<!DOCTYPE html>
<html>
<body>
  <!-- Add figure with caption -->
</body>
</html>`,
      instruction: "Use figure with figcaption for images",
      check: /<figure>.*<img.*>.*<figcaption>.*<\/figcaption>.*<\/figure>/s
    },
    {
      title: "Mark Element",
      template: `<!DOCTYPE html>
<html>
<body>
  <p>Highlight important text</p>
</body>
</html>`,
      instruction: "Use mark to highlight text",
      check: /<mark>.*<\/mark>/s
    },
    {
      title: "Time Element",
      template: `<!DOCTYPE html>
<html>
<body>
  <p>Event Date</p>
</body>
</html>`,
      instruction: "Use time element with datetime attribute",
      check: /<time.*datetime=.*>.*<\/time>/s
    },
    // Continue with 450 more HTML levels...
    // Levels 51-100: Intermediate HTML
    // Levels 101-200: Advanced HTML & Forms
    // Levels 201-300: HTML5 APIs & Media
    // Levels 301-400: Accessibility & SEO
    // Levels 401-500: Professional Patterns & Best Practices
  ],

  css: [
    // Level 1-50: CSS Basics & Selectors
    {
      title: "Change Text Color",
      template: `<h1>Make me blue!</h1>`,
      instruction: "Write CSS to make the h1 text blue",
      check: /color\s*:\s*blue/
    },
    {
      title: "Background Color",
      template: `<body>Blue background</body>`,
      instruction: "Set body background to lightblue",
      check: /background(-color)?\s*:\s*lightblue/
    },
    {
      title: "Center Text",
      template: `<h1>Center me</h1>`,
      instruction: "Center align the text",
      check: /text-align\s*:\s*center/
    },
    {
      title: "Font Size",
      template: `<p>Make text bigger</p>`,
      instruction: "Set font size to 20px",
      check: /font-size\s*:\s*20px/
    },
    {
      title: "Font Family",
      template: `<p>Change font</p>`,
      instruction: "Set font to Arial",
      check: /font-family\s*:\s*Arial/
    },
    {
      title: "Font Weight",
      template: `<p>Make bold</p>`,
      instruction: "Make text bold using font-weight",
      check: /font-weight\s*:\s*bold/
    },
    {
      title: "Text Decoration",
      template: `<p>Underline me</p>`,
      instruction: "Add underline to text",
      check: /text-decoration\s*:\s*underline/
    },
    {
      title: "Line Height",
      template: `<p>Adjust line spacing</p>`,
      instruction: "Set line height to 1.5",
      check: /line-height\s*:\s*1\.5/
    },
    {
      title: "Text Transform",
      template: `<p>MAKE ME UPPERCASE</p>`,
      instruction: "Transform text to uppercase",
      check: /text-transform\s*:\s*uppercase/
    },
    {
      title: "Letter Spacing",
      template: `<p>Space letters out</p>`,
      instruction: "Add 2px letter spacing",
      check: /letter-spacing\s*:\s*2px/
    },
    {
      title: "Word Spacing",
      template: `<p>Space words out</p>`,
      instruction: "Add 5px word spacing",
      check: /word-spacing\s*:\s*5px/
    },
    {
      title: "Text Shadow",
      template: `<h1>Add shadow</h1>`,
      instruction: "Add black text shadow",
      check: /text-shadow\s*:/
    },
    {
      title: "Element Selector",
      template: `<p>Style all paragraphs</p>`,
      instruction: "Style p elements with red color",
      check: /p\s*\{.*color\s*:\s*red.*\}/
    },
    {
      title: "Class Selector",
      template: `<div class="box">Style me</div>`,
      instruction: "Create .box class with blue background",
      check: /\.box\s*\{.*background\s*:\s*blue.*\}/
    },
    {
      title: "ID Selector",
      template: `<div id="header">Style me</div>`,
      instruction: "Create #header with green background",
      check: /#header\s*\{.*background\s*:\s*green.*\}/
    },
    {
      title: "Multiple Selectors",
      template: `<h1>Heading</h1><h2>Subheading</h2>`,
      instruction: "Style both h1 and h2 with same color",
      check: /h1,\s*h2\s*\{.*color\s*:\s*red.*\}/
    },
    {
      title: "Descendant Selector",
      template: `<div><p>Style this paragraph</p></div>`,
      instruction: "Style paragraphs inside div only",
      check: /div p\s*\{.*color\s*:\s*blue.*\}/
    },
    {
      title: "Child Selector",
      template: `<div><p>Direct child</p></div>`,
      instruction: "Style only direct child paragraphs",
      check: /div > p\s*\{.*color\s*:\s*green.*\}/
    },
    {
      title: "Adjacent Sibling",
      template: `<h1>Heading</h1><p>Style me</p>`,
      instruction: "Style paragraph immediately after h1",
      check: /h1 \+ p\s*\{.*color\s*:\s*red.*\}/
    },
    {
      title: "General Sibling",
      template: `<h1>Heading</h1><p>First</p><p>Second</p>`,
      instruction: "Style all paragraphs after h1",
      check: /h1 ~ p\s*\{.*color\s*:\s*blue.*\}/
    },
    {
      title: "Attribute Selector",
      template: `<input type="text">`,
      instruction: "Style input with type='text'",
      check: /input\[type=.*text.*\]\s*\{.*border\s*:\s*.*\}/
    },
    {
      title: "Border Basics",
      template: `<div class="bordered">Add border</div>`,
      instruction: "Add 2px solid black border",
      check: /border\s*:\s*2px solid black/
    },
    {
      title: "Border Radius",
      template: `<div class="rounded">Round corners</div>`,
      instruction: "Add 10px border radius",
      check: /border-radius\s*:\s*10px/
    },
    {
      title: "Individual Borders",
      template: `<div class="box">Different borders</div>`,
      instruction: "Set different border for each side",
      check: /border-top\s*:.*border-right\s*:.*border-bottom\s*:.*border-left\s*:/s
    },
    {
      title: "Border Style",
      template: `<div class="dashed">Dashed border</div>`,
      instruction: "Use dashed border style",
      check: /border-style\s*:\s*dashed/
    },
    {
      title: "Border Color",
      template: `<div class="colored-border">Colored border</div>`,
      instruction: "Set border color to red",
      check: /border-color\s*:\s*red/
    },
    {
      title: "Border Width",
      template: `<div class="thick-border">Thick border</div>`,
      instruction: "Set border width to 5px",
      check: /border-width\s*:\s*5px/
    },
    {
      title: "Padding Basics",
      template: `<div class="padded">Add padding</div>`,
      instruction: "Add 20px padding",
      check: /padding\s*:\s*20px/
    },
    {
      title: "Individual Padding",
      template: `<div class="custom-padding">Custom padding</div>`,
      instruction: "Set different padding for each side",
      check: /padding\s*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px/
    },
    {
      title: "Margin Basics",
      template: `<div class="spaced">Add margin</div>`,
      instruction: "Add 15px margin",
      check: /margin\s*:\s*15px/
    },
    {
      title: "Auto Margin",
      template: `<div class="centered">Center with margin</div>`,
      instruction: "Center div using margin auto",
      check: /margin\s*:\s*auto/
    },
    {
      title: "Negative Margin",
      template: `<div class="overlap">Overlap element</div>`,
      instruction: "Use negative margin",
      check: /margin\s*:\s*-\d+px/
    },
    {
      title: "Width and Height",
      template: `<div class="box">Set dimensions</div>`,
      instruction: "Set width 200px and height 100px",
      check: /width\s*:\s*200px.*height\s*:\s*100px/s
    },
    {
      title: "Max Width",
      template: `<div class="responsive">Limit width</div>`,
      instruction: "Set max-width to 500px",
      check: /max-width\s*:\s*500px/
    },
    {
      title: "Min Height",
      template: `<div class="min-height">Minimum height</div>`,
      instruction: "Set min-height to 300px",
      check: /min-height\s*:\s*300px/
    },
    {
      title: "Box Sizing",
      template: `<div class="box-sizing">Include padding in width</div>`,
      instruction: "Use border-box box-sizing",
      check: /box-sizing\s*:\s*border-box/
    },
    {
      title: "Display Block",
      template: `<span class="block">Make me block</span>`,
      instruction: "Change span to block display",
      check: /display\s*:\s*block/
    },
    {
      title: "Display Inline",
      template: `<div class="inline">Make me inline</div>`,
      instruction: "Change div to inline display",
      check: /display\s*:\s*inline/
    },
    {
      title: "Display Inline-block",
      template: `<div class="inline-block">Inline block</div>`,
      instruction: "Use inline-block display",
      check: /display\s*:\s*inline-block/
    },
    {
      title: "Display None",
      template: `<div class="hidden">Hide me</div>`,
      instruction: "Hide element completely",
      check: /display\s*:\s*none/
    },
    {
      title: "Visibility Hidden",
      template: `<div class="invisible">Make invisible</div>`,
      instruction: "Hide element but keep space",
      check: /visibility\s*:\s*hidden/
    },
    {
      title: "Position Static",
      template: `<div class="static">Default position</div>`,
      instruction: "Explicitly set static position",
      check: /position\s*:\s*static/
    },
    {
      title: "Position Relative",
      template: `<div class="relative">Relative positioning</div>`,
      instruction: "Use relative positioning",
      check: /position\s*:\s*relative/
    },
    {
      title: "Position Absolute",
      template: `<div class="absolute">Absolute positioning</div>`,
      instruction: "Use absolute positioning",
      check: /position\s*:\s*absolute/
    },
    {
      title: "Position Fixed",
      template: `<div class="fixed">Fixed to viewport</div>`,
      instruction: "Use fixed positioning",
      check: /position\s*:\s*fixed/
    },
    {
      title: "Position Sticky",
      template: `<div class="sticky">Sticky positioning</div>`,
      instruction: "Use sticky positioning",
      check: /position\s*:\s*sticky/
    },
    {
      title: "Top/Right/Bottom/Left",
      template: `<div class="positioned">Position from edges</div>`,
      instruction: "Position 10px from top and left",
      check: /top\s*:\s*10px.*left\s*:\s*10px/s
    },
    {
      title: "Z-index",
      template: `<div class="layer">Control stacking</div>`,
      instruction: "Set z-index to 10",
      check: /z-index\s*:\s*10/
    },
    {
      title: "Float Left",
      template: `<div class="float-left">Float me left</div>`,
      instruction: "Float element to left",
      check: /float\s*:\s*left/
    },
    {
      title: "Float Right",
      template: `<div class="float-right">Float me right</div>`,
      instruction: "Float element to right",
      check: /float\s*:\s*right/
    },
    {
      title: "Clear Both",
      template: `<div class="clear">Clear floats</div>`,
      instruction: "Clear both left and right floats",
      check: /clear\s*:\s*both/
    },
    {
      title: "Overflow Hidden",
      template: `<div class="overflow">Handle overflow</div>`,
      instruction: "Hide overflow content",
      check: /overflow\s*:\s*hidden/
    },
    {
      title: "Overflow Scroll",
      template: `<div class="scrollable">Make scrollable</div>`,
      instruction: "Add scrollbars for overflow",
      check: /overflow\s*:\s*scroll/
    },
    {
      title: "Overflow Auto",
      template: `<div class="auto-overflow">Auto overflow</div>`,
      instruction: "Use auto overflow",
      check: /overflow\s*:\s*auto/
    },
    {
      title: "Cursor Pointer",
      template: `<button class="clickable">Hover over me</button>`,
      instruction: "Change cursor to pointer",
      check: /cursor\s*:\s*pointer/
    },
    // Continue with 450 more CSS levels...
    // Levels 51-100: Layouts & Flexbox
    // Levels 101-200: Grid & Responsive Design
    // Levels 201-300: Transitions & Animations
    // Levels 301-400: Advanced Selectors & Pseudo
    // Levels 401-500: CSS Variables & Modern Features
  ],

  js: [
    // Level 1-50: JavaScript Basics
    {
      title: "Console Output",
      template: `// Log to console`,
      instruction: "Log 'Hello World!' to console",
      check: /console\.log\(["']Hello World!["']\)/
    },
    {
      title: "Alert Dialog",
      template: `// Show alert`,
      instruction: "Show alert with message 'Welcome!'",
      check: /alert\(["']Welcome!["']\)/
    },
    {
      title: "Variables - let",
      template: `// Declare a variable`,
      instruction: "Declare variable 'name' with value 'John'",
      check: /let name\s*=\s*["']John["']/
    },
    {
      title: "Variables - const",
      template: `// Declare constant`,
      instruction: "Declare constant PI with value 3.14",
      check: /const PI\s*=\s*3\.14/
    },
    {
      title: "Variables - var",
      template: `// Old variable declaration`,
      instruction: "Declare variable using var",
      check: /var x\s*=/
    },
    {
      title: "Data Types - String",
      template: `// Create string variable`,
      instruction: "Create string variable with your name",
      check: /let.*=.*["'].*["']/
    },
    {
      title: "Data Types - Number",
      template: `// Create number variables`,
      instruction: "Create variables for age and price",
      check: /let age\s*=\s*\d+.*let price\s*=\s*\d+\.?\d*/s
    },
    {
      title: "Data Types - Boolean",
      template: `// Boolean variables`,
      instruction: "Create true and false variables",
      check: /let isTrue\s*=\s*true.*let isFalse\s*=\s*false/s
    },
    {
      title: "Data Types - Null",
      template: `// Null value`,
      instruction: "Create variable with null value",
      check: /let empty\s*=\s*null/
    },
    {
      title: "Data Types - Undefined",
      template: `// Undefined variable`,
      instruction: "Declare variable without value",
      check: /let undefinedVar;/
    },
    {
      title: "Arithmetic - Addition",
      template: `// Add two numbers`,
      instruction: "Add 5 and 3, log result",
      check: /console\.log\(5\s*\+\s*3\)/
    },
    {
      title: "Arithmetic - Subtraction",
      template: `// Subtract numbers`,
      instruction: "Subtract 3 from 10",
      check: /console\.log\(10\s*-\s*3\)/
    },
    {
      title: "Arithmetic - Multiplication",
      template: `// Multiply numbers`,
      instruction: "Multiply 4 by 5",
      check: /console\.log\(4\s*\*\s*5\)/
    },
    {
      title: "Arithmetic - Division",
      template: `// Divide numbers`,
      instruction: "Divide 20 by 4",
      check: /console\.log\(20\s*\/\s*4\)/
    },
    {
      title: "Arithmetic - Modulus",
      template: `// Find remainder`,
      instruction: "Find remainder of 10 divided by 3",
      check: /console\.log\(10\s*%\s*3\)/
    },
    {
      title: "Arithmetic - Exponentiation",
      template: `// Power calculation`,
      instruction: "Calculate 2 to the power of 3",
      check: /console\.log\(2\s*\*\*\s*3\)/
    },
    {
      title: "String Concatenation",
      template: `// Combine strings`,
      instruction: "Concatenate 'Hello' and 'World'",
      check: /console\.log\(["']Hello["']\s*\+\s*["'] World["']\)/
    },
    {
      title: "Template Literals",
      template: `// Use template literal`,
      instruction: "Use backticks for string interpolation",
      check: /`Hello.*\$\{.*\}`/s
    },
    {
      title: "Comparison - Equal",
      template: `// Compare values`,
      instruction: "Check if 5 equals 5",
      check: /console\.log\(5\s*===\s*5\)/
    },
    {
      title: "Comparison - Not Equal",
      template: `// Check inequality`,
      instruction: "Check if 5 is not equal to 3",
      check: /console\.log\(5\s*!==\s*3\)/
    },
    {
      title: "Comparison - Greater Than",
      template: `// Greater than comparison`,
      instruction: "Check if 10 is greater than 5",
      check: /console\.log\(10\s*>\s*5\)/
    },
    {
      title: "Comparison - Less Than",
      template: `// Less than comparison`,
      instruction: "Check if 3 is less than 7",
      check: /console\.log\(3\s*<\s*7\)/
    },
    {
      title: "Logical AND",
      template: `// Logical AND operator`,
      instruction: "Check if both conditions are true",
      check: /console\.log\(true\s*&&\s*true\)/
    },
    {
      title: "Logical OR",
      template: `// Logical OR operator`,
      instruction: "Check if at least one condition is true",
      check: /console\.log\(true\s*\|\|\s*false\)/
    },
    {
      title: "Logical NOT",
      template: `// Logical NOT operator`,
      instruction: "Invert a boolean value",
      check: /console\.log\(!\s*true\)/
    },
    {
      title: "If Statement",
      template: `// Simple if statement`,
      instruction: "Check if number is positive",
      check: /if\s*\(.*\)\s*\{.*\}/
    },
    {
      title: "If-Else Statement",
      template: `// If-else statement`,
      instruction: "Check if number is even or odd",
      check: /if\s*\(.*\)\s*\{.*\}\s*else\s*\{.*\}/s
    },
    {
      title: "Else If Statement",
      template: `// Multiple conditions`,
      instruction: "Grade students based on score",
      check: /if\s*\(.*\)\s*\{.*\}\s*else if\s*\(.*\)\s*\{.*\}\s*else\s*\{.*\}/s
    },
    {
      title: "Ternary Operator",
      template: `// Use ternary operator`,
      instruction: "Check if adult using ternary",
      check: /age\s*>=\s*18\s*\?\s*["']Adult["']\s*:\s*["']Minor["']/
    },
    {
      title: "Switch Statement",
      template: `// Switch statement`,
      instruction: "Check day of week using switch",
      check: /switch\s*\(.*\)\s*\{.*case.*:.*break;.*default:.*\}/s
    },
    {
      title: "For Loop",
      template: `// For loop`,
      instruction: "Print numbers 1 to 5 using for loop",
      check: /for\s*\(let i\s*=\s*1.*i\s*<=\s*5.*i\+\+\)\s*\{.*console\.log\(i\).*\}/s
    },
    {
      title: "While Loop",
      template: `// While loop`,
      instruction: "Print numbers 1 to 5 using while",
      check: /while\s*\(.*\)\s*\{.*console\.log\(.*\).*i\+\+.*\}/s
    },
    {
      title: "Do-While Loop",
      template: `// Do-while loop`,
      instruction: "Execute at least once with do-while",
      check: /do\s*\{.*\}\s*while\s*\(.*\)/s
    },
    {
      title: "Break Statement",
      template: `// Break from loop`,
      instruction: "Stop loop when condition met",
      check: /if\s*\(.*\)\s*\{.*break;.*\}/
    },
    {
      title: "Continue Statement",
      template: `// Skip iteration`,
      instruction: "Skip even numbers in loop",
      check: /if\s*\(.*\)\s*\{.*continue;.*\}/
    },
    {
      title: "Arrays - Create",
      template: `// Create array`,
      instruction: "Create array of fruits",
      check: /let fruits\s*=\s*\[["'].*["'],\s*["'].*["']\]/
    },
    {
      title: "Arrays - Access",
      template: `// Access array elements`,
      instruction: "Access first and last elements",
      check: /fruits\[0\].*fruits\[fruits\.length\s*-\s*1\]/s
    },
    {
      title: "Arrays - Modify",
      template: `// Modify array`,
      instruction: "Change second element",
      check: /fruits\[1\]\s*=.*/
    },
    {
      title: "Arrays - Push",
      template: `// Add to end of array`,
      instruction: "Add element using push()",
      check: /fruits\.push\(["'].*["']\)/
    },
    {
      title: "Arrays - Pop",
      template: `// Remove from end`,
      instruction: "Remove last element",
      check: /fruits\.pop\(\)/
    },
    {
      title: "Arrays - Shift",
      template: `// Remove from beginning`,
      instruction: "Remove first element",
      check: /fruits\.shift\(\)/
    },
    {
      title: "Arrays - Unshift",
      template: `// Add to beginning`,
      instruction: "Add element to start",
      check: /fruits\.unshift\(["'].*["']\)/
    },
    {
      title: "Arrays - Length",
      template: `// Get array length`,
      instruction: "Get number of elements",
      check: /fruits\.length/
    },
    {
      title: "Arrays - For Loop",
      template: `// Loop through array`,
      instruction: "Iterate array with for loop",
      check: /for\s*\(let i\s*=\s*0.*i\s*<\s*fruits\.length.*i\+\+\)\s*\{.*console\.log\(fruits\[i\]\).*\}/s
    },
    {
      title: "Arrays - For Each",
      template: `// ForEach method`,
      instruction: "Loop using forEach()",
      check: /fruits\.forEach\(.*function\(fruit\).*\{.*console\.log\(fruit\).*\}\).*/s
    },
    {
      title: "Objects - Create",
      template: `// Create object`,
      instruction: "Create person object with properties",
      check: /let person\s*=\s*\{.*name:\s*["'].*["'],.*age:\s*\d+.*\}/
    },
    {
      title: "Objects - Access",
      template: `// Access object properties`,
      instruction: "Access object properties",
      check: /person\.name.*person\["age"\]/s
    },
    {
      title: "Objects - Modify",
      template: `// Modify object`,
      instruction: "Change object property",
      check: /person\.age\s*=.*/
    },
    {
      title: "Objects - Add Property",
      template: `// Add new property`,
      instruction: "Add email property",
      check: /person\.email\s*=.*/
    },
    {
      title: "Objects - Methods",
      template: `// Object method`,
      instruction: "Add greet method to object",
      check: /greet:\s*function\(\)\s*\{.*console\.log\(.*\).*\}/s
    },
    {
      title: "Objects - This Keyword",
      template: `// Use 'this' in object`,
      instruction: "Use this to access property",
      check: /this\.name/
    },
    {
      title: "Functions - Declaration",
      template: `// Function declaration`,
      instruction: "Create function to add numbers",
      check: /function add\(a,\s*b\)\s*\{.*return a\s*\+\s*b.*\}/
    },
    {
      title: "Functions - Expression",
      template: `// Function expression`,
      instruction: "Create function as variable",
      check: /const multiply\s*=\s*function\(a,\s*b\)\s*\{.*return a\s*\*\s*b.*\}/
    },
    {
      title: "Functions - Arrow",
      template: `// Arrow function`,
      instruction: "Create arrow function",
      check: /const divide\s*=\s*\(a,\s*b\)\s*=>\s*\{.*return a\s*\/\s*b.*\}/
    },
    {
      title: "Functions - Parameters",
      template: `// Function parameters`,
      instruction: "Create function with parameters",
      check: /function greet\(name\)\s*\{.*console\.log\(["']Hello ["']\s*\+\s*name\).*\}/
    },
    {
      title: "Functions - Return",
      template: `// Return value`,
      instruction: "Function that returns result",
      check: /function square\(x\)\s*\{.*return x\s*\*\s*x.*\}/
    },
    // Continue with 450 more JavaScript levels...
    // Levels 51-100: DOM Manipulation
    // Levels 101-200: Events & Async Programming
    // Levels 201-300: Advanced Functions & OOP
    // Levels 301-400: ES6+ Features
    // Levels 401-500: APIs, Async/Await, Projects
  ]
};