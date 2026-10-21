const exerciseSets = {
  CSS: {
    description:
      "Practice CSS one idea at a time. Choose a topic, answer a question, and check what you know.",
    categories: {
      "CSS Syntax": [
        "Rules, selectors, and declarations",
        [
          {
            question: "Which symbol separates a CSS property from its value?",
            options: ["Colon (:)", "Semicolon (;)", "Comma (,)"],
            answer: "Colon (:)",
          },
          {
            question: "Which characters wrap a group of CSS declarations?",
            options: ["{ }", "( )", "[ ]"],
            answer: "{ }",
          },
          {
            question: "Which character begins a CSS comment?",
            options: ["/*", "//", "<!--"],
            answer: "/*",
          },
        ],
      ],
      Selectors: [
        "Target elements to style",
        [
          {
            question: "Which selector targets every paragraph element?",
            options: [".p", "p", "#p"],
            answer: "p",
          },
          {
            question: 'Which selector targets an element with id="menu"?',
            options: [".menu", "#menu", "menu"],
            answer: "#menu",
          },
          {
            question: 'Which selector targets all elements with class="card"?',
            options: ["#card", ".card", "card"],
            answer: ".card",
          },
          {
            question: "Which selector targets every element on the page?",
            options: ["*", "all", "body * only"],
            answer: "*",
          },
          {
            question: "Which selector groups h1 and h2 under the same rule?",
            options: ["h1, h2", "h1 + h2", "h1 h2"],
            answer: "h1, h2",
          },
        ],
      ],
      "Colors & Backgrounds": [
        "Set text colors and page backgrounds",
        [
          {
            question: "Which property changes the text color?",
            options: ["font-color", "color", "text-color"],
            answer: "color",
          },
          {
            question: "Which property sets an element’s background color?",
            options: ["background-color", "color-background", "fill"],
            answer: "background-color",
          },
          {
            question:
              "Which property adds an image behind an element’s content?",
            options: ["background-image", "image", "src"],
            answer: "background-image",
          },
          {
            question:
              "Which value makes a background image cover its container?",
            options: [
              "background-size: cover",
              "background-fit: full",
              "image-size: cover",
            ],
            answer: "background-size: cover",
          },
        ],
      ],
      "Borders & Box Model": [
        "Style borders and understand element size",
        [
          {
            question:
              "Which property controls the space inside an element’s border?",
            options: ["margin", "padding", "gap"],
            answer: "padding",
          },
          {
            question:
              "Which property controls the space outside an element’s border?",
            options: ["padding", "margin", "outline"],
            answer: "margin",
          },
          {
            question: "Which CSS property rounds the corners of a box?",
            options: ["border-radius", "corner-style", "round"],
            answer: "border-radius",
          },
          {
            question: "Which property sets the border thickness?",
            options: ["border-width", "border-size", "outline-size"],
            answer: "border-width",
          },
          {
            question:
              "Which box-sizing value includes padding and border in the declared width?",
            options: ["border-box", "content-box", "padding-box"],
            answer: "border-box",
          },
        ],
      ],
      "Text & Fonts": [
        "Format text and choose typefaces",
        [
          {
            question: "Which property aligns text to the center?",
            options: [
              "text-align: center",
              "align: center",
              "font-align: center",
            ],
            answer: "text-align: center",
          },
          {
            question: "Which property changes the font size?",
            options: ["text-size", "font-size", "size"],
            answer: "font-size",
          },
          {
            question: "Which property sets the typeface?",
            options: ["font-family", "font-style", "font-weight"],
            answer: "font-family",
          },
          {
            question: "Which property makes text bold?",
            options: ["font-weight", "font-style", "text-decoration"],
            answer: "font-weight",
          },
        ],
      ],
      "Display & Position": [
        "Control layout and element placement",
        [
          {
            question: "Which display value starts an element on a new line?",
            options: ["inline", "block", "contents"],
            answer: "block",
          },
          {
            question:
              "Which position value keeps an element in normal document flow?",
            options: ["static", "absolute", "fixed"],
            answer: "static",
          },
          {
            question:
              "Which property hides an element and removes its layout space?",
            options: ["visibility: hidden", "display: none", "opacity: 0"],
            answer: "display: none",
          },
        ],
      ],
      "Flexbox & Grid": [
        "Arrange elements in flexible layouts",
        [
          {
            question:
              "Which declaration turns an element into a flex container?",
            options: ["display: flex", "position: flex", "flex: on"],
            answer: "display: flex",
          },
          {
            question:
              "Which flex property distributes items along the main axis?",
            options: ["align-items", "justify-content", "flex-wrap"],
            answer: "justify-content",
          },
          {
            question: "Which property defines columns in a CSS Grid container?",
            options: ["grid-columns", "grid-template-columns", "columns"],
            answer: "grid-template-columns",
          },
          {
            question: "Which property lets flex items wrap onto another line?",
            options: ["flex-wrap", "flex-flow: none", "wrap-items"],
            answer: "flex-wrap",
          },
          {
            question: "Which property defines the gap between grid tracks?",
            options: ["gap", "grid-space", "track-margin"],
            answer: "gap",
          },
        ],
      ],
      "Responsive Design": [
        "Adapt layouts to different screen sizes",
        [
          {
            question: "Which CSS feature applies styles based on screen width?",
            options: ["@media", "@screen", "@responsive"],
            answer: "@media",
          },
          {
            question: "Which width unit is relative to the viewport width?",
            options: ["vw", "px", "pt"],
            answer: "vw",
          },
          {
            question:
              "Write a mobile media query that applies a style on smaller screens.",
            options: ["@media", "@screen", "@responsive"],
            answer: "@media",
          },
          {
            question:
              "Which CSS unit is relative to the root element font size?",
            options: ["rem", "px", "vh"],
            answer: "rem",
          },
        ],
      ],
    },
  },
  JavaScript: {
    description:
      "Practice JavaScript one idea at a time. Choose a topic, answer a question, and check what you know.",
    categories: {
      "JavaScript Basics": [
        "Statements and values",
        [
          {
            question: "Which character commonly ends a JavaScript statement?",
            options: [";", "?", ":"],
            answer: ";",
          },
          {
            question: "Which method writes a message to the browser console?",
            options: ["console.log()", "print()", "write.console()"],
            answer: "console.log()",
          },
          {
            question: "Which keyword creates a function?",
            options: ["function", "method", "define"],
            answer: "function",
          },
        ],
      ],
      "Variables & Data Types": [
        "Store values and identify their types",
        [
          {
            question:
              "Which keyword declares a variable that can be reassigned?",
            options: ["let", "const", "static"],
            answer: "let",
          },
          {
            question: "Which keyword declares a block-scoped constant?",
            options: ["var", "const", "fixed"],
            answer: "const",
          },
          {
            question:
              "Which value represents an intentional absence of a value?",
            options: ["null", "zero", "false"],
            answer: "null",
          },
          {
            question: "Which operator can reveal the type of a value?",
            options: ["typeof", "type", "instance"],
            answer: "typeof",
          },
          {
            question: "Which JavaScript value represents a true/false state?",
            options: ["Boolean", "String", "Array"],
            answer: "Boolean",
          },
        ],
      ],
      Operators: [
        "Work with values and comparisons",
        [
          {
            question: "Which operator checks both value and type equality?",
            options: ["==", "===", "="],
            answer: "===",
          },
          {
            question: "What is the result of 7 % 3?",
            options: ["1", "2", "2.33"],
            answer: "1",
          },
          {
            question: "Which operator means logical AND?",
            options: ["&&", "||", "!"],
            answer: "&&",
          },
          {
            question: "Which operator increases a number by one?",
            options: ["++", "+=0", "**"],
            answer: "++",
          },
        ],
      ],
      "Strings & Arrays": [
        "Work with text and collections",
        [
          {
            question:
              "Which property returns the number of characters in a string?",
            options: ["length", "size", "count"],
            answer: "length",
          },
          {
            question: "Which array method adds an item to the end?",
            options: ["push()", "pop()", "shift()"],
            answer: "push()",
          },
          {
            question:
              "What is the index of the first item in a JavaScript array?",
            options: ["0", "1", "-1"],
            answer: "0",
          },
          {
            question: "Which method combines array items into a string?",
            options: ["join()", "split()", "slice()"],
            answer: "join()",
          },
          {
            question: "Which string method changes text to lowercase?",
            options: ["toLowerCase()", "lower()", "caseDown()"],
            answer: "toLowerCase()",
          },
        ],
      ],
      Conditions: [
        "Choose what code runs based on a condition",
        [
          {
            question: "Which keyword runs code when an if condition is false?",
            options: ["else", "otherwise", "when"],
            answer: "else",
          },
          {
            question: "Which keyword tests another condition after an if?",
            options: ["elseif", "else if", "then if"],
            answer: "else if",
          },
          {
            question: "Which operator means “greater than or equal to”?",
            options: [">=", "=>", "><"],
            answer: ">=",
          },
        ],
      ],
      Loops: [
        "Repeat code safely",
        [
          {
            question:
              "Which loop is commonly used when the number of repeats is known?",
            options: ["for", "if", "switch"],
            answer: "for",
          },
          {
            question: "Which keyword exits a loop immediately?",
            options: ["break", "stop", "exit"],
            answer: "break",
          },
          {
            question: "Which keyword skips to the next loop iteration?",
            options: ["continue", "next", "skip"],
            answer: "continue",
          },
          {
            question: "Which loop checks its condition before each iteration?",
            options: ["while", "do...while only", "repeat"],
            answer: "while",
          },
        ],
      ],
      Functions: [
        "Create reusable blocks of code",
        [
          {
            question: "How does a function send a value back to its caller?",
            options: ["return", "send", "yield"],
            answer: "return",
          },
          {
            question: "What is a value passed into a function called?",
            options: ["argument", "selector", "property"],
            answer: "argument",
          },
          {
            question: "Which syntax creates an arrow function?",
            options: ["() => {}", "function => ()", "-> () {}"],
            answer: "() => {}",
          },
          {
            question:
              "What name is given to a variable listed in a function definition?",
            options: ["parameter", "argument", "return"],
            answer: "parameter",
          },
          {
            question:
              "Which keyword stops a function and optionally returns a value?",
            options: ["return", "break", "stop"],
            answer: "return",
          },
        ],
      ],
      "DOM & Events": [
        "Update web pages and respond to actions",
        [
          {
            question: "Which method selects an element by its CSS selector?",
            options: ["querySelector()", "getSelector()", "findElement()"],
            answer: "querySelector()",
          },
          {
            question: "Which event fires when a user clicks an element?",
            options: ["click", "press", "hover"],
            answer: "click",
          },
          {
            question: "Which method attaches an event handler to an element?",
            options: ["addEventListener()", "onEvent()", "listen()"],
            answer: "addEventListener()",
          },
          {
            question: "Which property changes the text content of an element?",
            options: ["textContent", "innerStyle", "textValue"],
            answer: "textContent",
          },
        ],
      ],
    },
  },
  SQL: {
    description:
      "Practice SQL one idea at a time. Choose a topic, answer a question, and check what you know.",
    categories: {
      "SQL Basics": [
        "Commands, tables, and database structure",
        [
          {
            question: "Create a table named learners with a name column.",
            options: ["CREATE TABLE", "MAKE TABLE", "NEW TABLE"],
            answer: "CREATE TABLE",
          },
          {
            question:
              "Write a query that reads all rows from the learners table.",
            options: [
              "SELECT * FROM learners",
              "GET ALL learners",
              "READ learners",
            ],
            answer: "FROM",
          },
          {
            question: "Which command creates a new table?",
            options: ["CREATE TABLE", "MAKE TABLE", "NEW TABLE"],
            answer: "CREATE TABLE",
          },
        ],
      ],
      SELECT: [
        "Retrieve rows and columns from tables",
        [
          {
            question: "Which command retrieves data from a table?",
            options: ["SELECT", "GET", "SHOW ROW"],
            answer: "SELECT",
          },
          {
            question: "Which symbol selects all columns?",
            options: ["*", "%", "&"],
            answer: "*",
          },
          {
            question: "Which keyword specifies the table to read from?",
            options: ["FROM", "INTO", "WITH"],
            answer: "FROM",
          },
          {
            question: "How do you select only the Name column?",
            options: ["SELECT Name", "GET Name", "SELECT COLUMN Name"],
            answer: "SELECT Name",
          },
          {
            question: "Which keyword removes duplicate rows from a result?",
            options: ["DISTINCT", "UNIQUE ROWS", "NO DUPLICATES"],
            answer: "DISTINCT",
          },
        ],
      ],
      WHERE: [
        "Filter results with conditions",
        [
          {
            question: "Which clause filters rows in a query?",
            options: ["WHERE", "ORDER BY", "VALUES"],
            answer: "WHERE",
          },
          {
            question: "Which operator tests whether a value matches a pattern?",
            options: ["LIKE", "MATCHES", "SAME"],
            answer: "LIKE",
          },
          {
            question: "Which operator combines two required conditions?",
            options: ["AND", "OR", "NOT"],
            answer: "AND",
          },
          {
            question: "Which condition finds values within a range?",
            options: ["BETWEEN", "RANGE", "INRANGE"],
            answer: "BETWEEN",
          },
        ],
      ],
      "Sorting & Filtering": [
        "Sort and limit query results",
        [
          {
            question: "Which clause sorts query results?",
            options: ["ORDER BY", "SORT", "GROUP"],
            answer: "ORDER BY",
          },
          {
            question: "Which keyword sorts values from largest to smallest?",
            options: ["DESC", "ASC", "DOWN"],
            answer: "DESC",
          },
          {
            question: "Which clause groups rows with matching values?",
            options: ["GROUP BY", "ORDER BY", "WHERE"],
            answer: "GROUP BY",
          },
        ],
      ],
      INSERT: [
        "Add new rows to a table",
        [
          {
            question: "Which command adds a new row to a table?",
            options: ["INSERT INTO", "ADD ROW", "UPDATE"],
            answer: "INSERT INTO",
          },
          {
            question: "Which keyword introduces the row values to insert?",
            options: ["VALUES", "SET", "DATA"],
            answer: "VALUES",
          },
          {
            question: "In INSERT, which clause names the destination table?",
            options: ["INTO", "FROM", "WHERE"],
            answer: "INTO",
          },
          {
            question:
              "Which statement inserts a single value into a specific column?",
            options: [
              "INSERT INTO table (column) VALUES (value)",
              "ADD column VALUE",
              "SET table column=value",
            ],
            answer: "INSERT INTO table (column) VALUES (value)",
          },
        ],
      ],
      "UPDATE & DELETE": [
        "Change or remove existing rows",
        [
          {
            question: "Which command changes existing data in a table?",
            options: ["UPDATE", "ALTER", "REPLACE TABLE"],
            answer: "UPDATE",
          },
          {
            question: "Which keyword assigns new column values in an UPDATE?",
            options: ["SET", "VALUES", "CHANGE"],
            answer: "SET",
          },
          {
            question: "Which command removes rows from a table?",
            options: ["DELETE", "DROP ROW", "REMOVE"],
            answer: "DELETE",
          },
          {
            question:
              "Which clause should target the rows to change or delete?",
            options: ["WHERE", "ORDER BY", "VALUES"],
            answer: "WHERE",
          },
          {
            question:
              "Write a DELETE statement with a WHERE clause so it targets only matching rows.",
            options: ["WHERE", "ORDER BY", "VALUES"],
            answer: "WHERE",
          },
        ],
      ],
      "Aggregate Functions": [
        "Summarize data across multiple rows",
        [
          {
            question: "Which function counts rows?",
            options: ["COUNT()", "SUM()", "TOTAL()"],
            answer: "COUNT()",
          },
          {
            question: "Which function calculates the average?",
            options: ["AVG()", "MEAN()", "MID()"],
            answer: "AVG()",
          },
          {
            question: "Which function returns the largest value?",
            options: ["MAX()", "TOP()", "HIGH()"],
            answer: "MAX()",
          },
          {
            question: "Which function returns the smallest value?",
            options: ["MIN()", "LOW()", "BOTTOM()"],
            answer: "MIN()",
          },
        ],
      ],
      JOINs: [
        "Combine related rows from tables",
        [
          {
            question: "Which JOIN returns matching rows from both tables?",
            options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN"],
            answer: "INNER JOIN",
          },
          {
            question: "Which JOIN keeps every row from the left table?",
            options: ["LEFT JOIN", "INNER JOIN", "RIGHT ONLY"],
            answer: "LEFT JOIN",
          },
          {
            question:
              "Which keyword specifies how two tables are related in a JOIN?",
            options: ["ON", "WHERE", "FROM"],
            answer: "ON",
          },
          {
            question: "Which JOIN keeps every row from the right table?",
            options: ["RIGHT JOIN", "INNER JOIN", "LEFT ONLY"],
            answer: "RIGHT JOIN",
          },
          {
            question:
              "Which clause usually connects rows with equal key values?",
            options: [
              "ON tableA.id = tableB.id",
              "WHERE tableA = tableB",
              "FROM tableA AND tableB",
            ],
            answer: "ON tableA.id = tableB.id",
          },
        ],
      ],
    },
  },
};

const subject = document.body.dataset.subject;
const set = exerciseSets[subject];
const categoriesGrid = document.querySelector("#category-grid");
const categoryNames = Object.keys(set.categories);
document.title = `${subject} Exercises — Programming Simulator`;
document.querySelector('meta[name="description"]').content =
  `Practice ${subject} with beginner-friendly exercises and track your progress.`;
document.querySelector(".page-intro h1").textContent = `${subject} Exercises`;
document.querySelector(".page-intro p").textContent = set.description;
document
  .querySelector(".progress-row")
  .setAttribute("aria-label", `${subject} exercise progress`);
document.querySelector(".progress-count span").textContent =
  `/ ${categoryNames.length} done`;
document.querySelector("footer strong").nextSibling.textContent =
  ` · ${subject} practice`;
document.querySelector("#dialog-question-title").textContent =
  `${subject} Exercises`;
document.querySelector("#exercise-category-count").textContent =
  `Topic 1 of ${categoryNames.length}`;

categoryNames.forEach((name, index) => {
  const [description] = set.categories[name];
  const card = document.createElement("button");
  card.className = "category";
  card.type = "button";
  card.dataset.category = name;
  card.innerHTML = `<span class="category-icon">${String(index + 1).padStart(2, "0")}</span><span class="category-info"><strong></strong><span></span><span class="category-progress"><span class="category-progress-track"><i class="category-progress-fill"></i></span><small>0 / 3</small></span></span><span class="category-action"><span>Start</span><b>→</b></span>`;
  card.querySelector(".category-info strong").textContent = name;
  card.querySelector(
    ".category-info > span:not(.category-progress)",
  ).textContent = description;
  categoriesGrid.append(card);
});

const exercises = Object.fromEntries(
  categoryNames.map((name) => [name, set.categories[name][1]]),
);
const categories = [...document.querySelectorAll(".category")];
const questionDialog = document.querySelector("#question-dialog");
const answerOptions = document.querySelector("#answer-options");
const feedback = document.querySelector("#answer-feedback");
const successPanel = document.querySelector("#success-panel");
const wrongPanel = document.querySelector("#wrong-panel");
const progressKey = `programming-simulator-${subject.toLowerCase()}-coding-exercise-progress-v2`;
let completedQuestions = {};
try {
  completedQuestions = JSON.parse(localStorage.getItem(progressKey) || "{}");
} catch {
  completedQuestions = {};
}
let selected = "";
let expected = "";
let currentCategory = "";
let currentQuestionIndex = 0;
function practicalPrompt(question, answer) {
  if (subject === "HTML" && answer === "<h1>")
    return "Create a heading text using the <h1> element.";
  if (subject === "HTML" && answer === "<p>")
    return "Make a paragraph using <p> and </p>.";
  if (
    /^(create|write|add|make|build|select|update|delete|insert)\b/i.test(
      question,
    )
  )
    return question;
  const action = {
    HTML: "Write a small HTML example",
    CSS: "Write a CSS snippet",
    JavaScript: "Write a short JavaScript example",
    SQL: "Write a SQL statement",
  }[subject];
  return `${action} using “${answer}” to practice this concept: ${question}`;
}
function completedInCategory(name) {
  return completedQuestions[name] || [];
}
function updateProgress() {
  const completedTopics = categories.filter(
    (card) =>
      completedInCategory(card.dataset.category).length ===
      exercises[card.dataset.category].length,
  ).length;
  document.querySelector("#done-count").textContent = completedTopics;
  document.querySelector("#progress-fill").style.width =
    `${(completedTopics / categories.length) * 100}%`;
  categories.forEach((card) => {
    const total = exercises[card.dataset.category].length;
    const count = completedInCategory(card.dataset.category).length;
    card.classList.toggle("done", count === total);
    card.querySelector(".category-action span").textContent =
      count === total ? "Done" : "Start";
    card.querySelector(".category-progress small").textContent =
      `${count} / ${total}`;
    card.querySelector(".category-progress-fill").style.width =
      `${(count / total) * 100}%`;
  });
}
function openCategory(name) {
  const questions = exercises[name];
  currentCategory = name;
  const completed = completedInCategory(name);
  currentQuestionIndex = questions.findIndex(
    (_, index) => !completed.includes(index),
  );
  if (currentQuestionIndex < 0) currentQuestionIndex = 0;
  const data = questions[currentQuestionIndex];
  selected = "";
  expected = data.answer;
  document.querySelector("#dialog-question-title").textContent = name;
  document.querySelector("#exercise-category-count").textContent =
    `Topic ${categories.findIndex((card) => card.dataset.category === name) + 1} of ${categories.length}`;
  document.querySelector("#question-progress-fill").style.width =
    `${(completed.length / questions.length) * 100}%`;
  document.querySelector("#question-progress-count").textContent =
    `${completed.length} / ${questions.length} complete`;
  document.querySelector("#question-number").textContent =
    `QUESTION ${currentQuestionIndex + 1} OF ${questions.length}`;
  document.querySelector("#question-text").textContent = practicalPrompt(
    data.question,
    data.answer,
  );
  window.setExerciseCodeTask?.(data.question, data.answer);
  successPanel.classList.remove("show");
  wrongPanel.classList.remove("show");
  feedback.textContent = "Write your code, then check your answer.";
  answerOptions.hidden = true;
  answerOptions.replaceChildren();
  if (!questionDialog.open) questionDialog.showModal();
  document.querySelector("#question-dialog-close").focus();
}
categories.forEach((card) =>
  card.addEventListener("click", () => openCategory(card.dataset.category)),
);
document
  .querySelector("#question-dialog-close")
  .addEventListener("click", () => questionDialog.close());
document.querySelector("#check-answer").addEventListener("click", () => {
  if (!window.checkExerciseCodeTask?.()) {
    feedback.textContent =
      "That code does not meet the task yet. Edit it and try again.";
    wrongPanel.classList.add("show");
    document.querySelector("#try-again").focus();
    return;
  }
  const completed = completedInCategory(currentCategory);
  if (!completed.includes(currentQuestionIndex))
    completed.push(currentQuestionIndex);
  completedQuestions[currentCategory] = completed;
  localStorage.setItem(progressKey, JSON.stringify(completedQuestions));
  updateProgress();
  document.querySelector("#question-progress-fill").style.width =
    `${(completed.length / exercises[currentCategory].length) * 100}%`;
  document.querySelector("#question-progress-count").textContent =
    `${completed.length} / ${exercises[currentCategory].length} complete`;
  document.querySelector("#success-next-question").textContent =
    completed.length === exercises[currentCategory].length
      ? "Next Category »"
      : "Next Question »";
  feedback.textContent = "Correct! Question completed.";
  successPanel.classList.add("show");
  document.querySelector("#success-next-question").focus();
});
document.querySelector("#try-again").addEventListener("click", () => {
  wrongPanel.classList.remove("show");
  feedback.textContent = "Edit your code, then check your answer again.";
  document.querySelector("#code-input")?.focus();
});
document
  .querySelector("#success-next-question")
  .addEventListener("click", () => {
    if (
      completedInCategory(currentCategory).length <
      exercises[currentCategory].length
    ) {
      openCategory(currentCategory);
      return;
    }
    const currentIndex = categories.findIndex(
      (card) => card.dataset.category === currentCategory,
    );
    const next =
      categories
        .slice(currentIndex + 1)
        .find(
          (card) =>
            completedInCategory(card.dataset.category).length <
            exercises[card.dataset.category].length,
        ) ||
      categories.find(
        (card) =>
          completedInCategory(card.dataset.category).length <
          exercises[card.dataset.category].length,
      );
    if (next) openCategory(next.dataset.category);
    else questionDialog.close();
  });
updateProgress();
