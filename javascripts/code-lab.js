(() => {
  const lab = document.querySelector('.code-lab');
  if (!lab) return;

  const questionCard = document.querySelector('.question-card');
  if (questionCard) {
    document.querySelector('.code-lab-jump')?.remove();
    questionCard.querySelector('#answer-options')?.after(lab);
  }

  const language = lab.dataset.language;
  const editor = lab.querySelector('#code-input');
  const preview = lab.querySelector('#code-preview');
  const results = lab.querySelector('#sql-results');
  const status = lab.querySelector('#code-lab-status');
  const runButton = lab.querySelector('#run-code');
  const resetButton = lab.querySelector('#reset-code');
  const samples = {
    HTML: '<h1>Hello, world!</h1>\n<p>I\'m learning HTML.</p>\n<a href="#">A sample link</a>',
    CSS: 'body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\n\nh1 {\n  color: #586439;\n}\n\nbutton {\n  padding: 8px 12px;\n  border: 0;\n  border-radius: 6px;\n  background: #d8f36a;\n}',
    JavaScript: 'const message = "Hello from JavaScript!";\ndocument.querySelector("#output").textContent = message;\nconsole.log("Your code ran successfully.");',
    SQL: "SELECT name, language\nFROM learners\nWHERE level = 'Beginner';"
  };
  let currentStarter = samples[language] || '';

  const prompt = lab.querySelector('.code-lab-heading p');
  if (prompt) prompt.textContent = language === 'SQL'
    ? 'Write your SQL statement, then choose Check answer. SELECT queries can also be previewed against sample data.'
    : 'Write your solution, run it to preview, then check your answer.';
  lab.querySelector('.code-lab-heading .kicker').textContent = 'Code practice';
  lab.querySelector('.code-lab-heading h2').textContent = `Try this question in ${language}`;
  resetButton.textContent = 'Reset code';
  editor.value = samples[language] || '';
  const demoLearners = [
    { name: 'Ava', language: 'HTML', level: 'Beginner' },
    { name: 'Kai', language: 'CSS', level: 'Beginner' },
    { name: 'Mina', language: 'JavaScript', level: 'Intermediate' },
    { name: 'Noah', language: 'SQL', level: 'Beginner' },
    { name: 'Rae', language: 'Python', level: 'Intermediate' }
  ];

  function makePreviewDocument(body, style = '', script = '') {
    return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font:16px/1.5 Arial,sans-serif;color:#171918;padding:18px;margin:0}a{color:#343a35}button{cursor:pointer}${style}</style></head><body>${body}${script}</body></html>`;
  }

  function renderPreview(documentText) {
    results.hidden = true;
    preview.hidden = false;
    preview.removeAttribute('srcdoc');
    preview.setAttribute('srcdoc', documentText);
    preview.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  function runHtml() {
    const source = editor.value;
    const documentText = /<html\b/i.test(source) ? source : makePreviewDocument(source);
    renderPreview(documentText);
    status.textContent = 'HTML preview updated.';
  }

  function runCss() {
    const safeCss = editor.value.replace(/<\/style/gi, '<\\/style');
    renderPreview(makePreviewDocument('<h1>A page with your styles</h1><p>Change the CSS to update this sample.</p><button type="button">Sample button</button>', safeCss));
    status.textContent = 'CSS preview updated.';
  }

  function runJavaScript() {
    const source = JSON.stringify(editor.value).replace(/</g, '\\u003c');
    const script = `<script>
      const userCode = ${source};
      const output = document.querySelector('#console-output');
      const writeOutput = (...values) => { output.textContent += values.map(value => typeof value === 'object' ? JSON.stringify(value) : String(value)).join(' ') + '\\n'; };
      console.log = writeOutput;
      console.info = writeOutput;
      console.warn = writeOutput;
      try { new Function(userCode)(); }
      catch (error) { writeOutput(error.name + ': ' + error.message); }
    <\/script>`;
    renderPreview(makePreviewDocument('<h2>JavaScript output</h2><p id="output">Edit the code to change this message.</p><pre id="console-output" style="white-space:pre-wrap"></pre>', '', script));
    status.textContent = 'JavaScript ran in a sandboxed preview. Console messages appear below.';
  }

  function renderSqlTable(columns, rows) {
    results.replaceChildren();
    const summary = document.createElement('p');
    summary.className = 'sql-result-summary';
    summary.textContent = `${rows.length} row${rows.length === 1 ? '' : 's'} returned from the sample learners table.`;
    results.append(summary);
    if (!rows.length) return;

    const table = document.createElement('table');
    const head = table.createTHead().insertRow();
    columns.forEach(column => {
      const cell = document.createElement('th');
      cell.scope = 'col';
      cell.textContent = column;
      head.append(cell);
    });
    const body = table.createTBody();
    rows.forEach(row => {
      const line = body.insertRow();
      columns.forEach(column => {
        const cell = line.insertCell();
        cell.textContent = row[column];
      });
    });
    results.append(table);
  }

  function runSql() {
    preview.hidden = true;
    results.hidden = false;
    results.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    const pattern = /^\s*SELECT\s+(\*|[a-z_]\w*(?:\s*,\s*[a-z_]\w*)*)\s+FROM\s+learners(?:\s+WHERE\s+([a-z_]\w*)\s*(=|<>|!=|>=|<=|>|<|LIKE)\s*(?:'((?:''|[^'])*)'|"((?:""|[^"])*)"|(-?\d+(?:\.\d+)?)))?(?:\s+ORDER\s+BY\s+([a-z_]\w*)(?:\s+(ASC|DESC))?)?(?:\s+LIMIT\s+(\d+))?\s*;?$/i;
    const match = editor.value.trim().match(pattern);
    if (!match) {
      renderSqlTable([], []);
      results.replaceChildren(Object.assign(document.createElement('p'), { className: 'sql-error', textContent: 'This practice runner supports SELECT from learners with an optional WHERE, ORDER BY, and LIMIT. Check the query and try again.' }));
      status.textContent = 'The query could not be run. Review the supported SQL format in the message.';
      return;
    }

    const columns = match[1] === '*' ? Object.keys(demoLearners[0]) : match[1].split(',').map(column => column.trim().toLowerCase());
    const knownColumns = Object.keys(demoLearners[0]);
    if (columns.some(column => !knownColumns.includes(column)) || (match[2] && !knownColumns.includes(match[2].toLowerCase())) || (match[7] && !knownColumns.includes(match[7].toLowerCase()))) {
      results.replaceChildren(Object.assign(document.createElement('p'), { className: 'sql-error', textContent: 'Use the sample table columns: name, language, and level.' }));
      status.textContent = 'One or more column names are not in the sample learners table.';
      return;
    }

    let rows = [...demoLearners];
    if (match[2]) {
      const column = match[2].toLowerCase();
      const operator = match[3].toUpperCase();
      const rawValue = match[4] ?? match[5] ?? match[6];
      const value = match[6] !== undefined ? Number(rawValue) : rawValue.replace(/''/g, "'").replace(/""/g, '"');
      rows = rows.filter(row => {
        const left = row[column];
        if (operator === 'LIKE') {
          const expression = String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/%/g, '.*').replace(/_/g, '.');
          return new RegExp(`^${expression}$`, 'i').test(String(left));
        }
        const a = typeof left === 'number' ? left : String(left).toLowerCase();
        const b = typeof left === 'number' ? Number(value) : String(value).toLowerCase();
        if (operator === '=' ) return a === b;
        if (operator === '!=' || operator === '<>') return a !== b;
        if (operator === '>') return a > b;
        if (operator === '<') return a < b;
        if (operator === '>=') return a >= b;
        return a <= b;
      });
    }
    if (match[7]) {
      const orderColumn = match[7].toLowerCase();
      const direction = match[8]?.toUpperCase() === 'DESC' ? -1 : 1;
      rows.sort((a, b) => String(a[orderColumn]).localeCompare(String(b[orderColumn])) * direction);
    }
    if (match[9]) rows = rows.slice(0, Number(match[9]));
    const projected = rows.map(row => Object.fromEntries(columns.map(column => [column, row[column]])));
    renderSqlTable(columns, projected);
    status.textContent = 'Query ran against sample data. Try changing the columns or filter.';
  }

  function runCode() {
    if (language === 'HTML') runHtml();
    else if (language === 'CSS') runCss();
    else if (language === 'JavaScript') runJavaScript();
    else if (language === 'SQL') runSql();
  }

  window.setExerciseCodeTask = (question, answer) => {
    window.currentExerciseAnswer = answer;
    const starters = {
      HTML: '<!-- Write your HTML here -->',
      CSS: '/* Write your CSS here */',
      JavaScript: '// Write your JavaScript here',
      SQL: '-- Write your SQL query here'
    };
    currentStarter = starters[language] || '';
    editor.value = currentStarter;
    status.textContent = language === 'SQL'
      ? 'Write the statement, then use Check answer to test the exercise.'
      : 'Write your solution, then run it to preview the result.';
    results.replaceChildren();
    if (language === 'SQL') {
      preview.hidden = true;
      results.hidden = false;
    } else {
      preview.hidden = false;
      results.hidden = true;
      if (preview) preview.srcdoc = '';
    }
  };

  window.checkExerciseCodeTask = () => {
    const code = editor.value.trim();
    if (!code || /^<!--[\s\S]*-->$/.test(code) || /^\/\*[\s\S]*\*\/$/.test(code) || /^\/\/.*$/.test(code) || /^--.*$/.test(code)) return false;
    const answer = String(window.currentExerciseAnswer || '').trim();
    const compact = value => value.toLowerCase().replace(/[\s"'`]/g, '');

    if (language === 'HTML') {
      const tag = answer.match(/^<([a-z][a-z0-9-]*)>$/i)?.[1];
      if (answer.toLowerCase() === '<!doctype html>') return /<!doctype\s+html\s*>/i.test(code);
      if (tag) {
        if (!new RegExp(`<${tag}\\b`, 'i').test(code)) return false;
        const document = new DOMParser().parseFromString(code, 'text/html');
        const element = document.querySelector(tag);
        if (!element) return false;
        if (['h1','h2','h3','h4','h5','h6','p','strong','li','td','th','button','header','main','nav','footer'].includes(tag)) return Boolean(element.textContent.trim());
        if (tag === 'html') return /<html\b/i.test(code) && Boolean(document.body.textContent.trim());
        if (tag === 'body') return /<body\b/i.test(code) && Boolean(element.textContent.trim());
        if (tag === 'title') return /<title\b/i.test(code) && Boolean(element.textContent.trim());
        if (tag === 'a') return Boolean(element.textContent.trim() && element.getAttribute('href'));
        if (tag === 'img') return Boolean(element.getAttribute('src') && element.hasAttribute('alt'));
        if (tag === 'ul' || tag === 'ol') return Boolean(element.querySelector('li'));
        if (tag === 'table') return Boolean(element.querySelector('tr'));
        if (tag === 'form') return Boolean(element.querySelector('input,button,select,textarea'));
        return true;
      }
      if (answer === 'href') return /<a\b[^>]*\bhref\s*=/i.test(code);
      if (answer === 'src') return /<img\b[^>]*\bsrc\s*=/i.test(code);
      if (answer === 'alt') return /<img\b[^>]*\balt\s*=/i.test(code);
      if (answer === 'It describes the image') return /<img\b[^>]*\balt\s*=\s*(["'])[^"']+\1/i.test(code);
      if (answer === 'target="_blank"') return /<a\b[^>]*target\s*=\s*(["'])_blank\1/i.test(code);
      if (answer === 'type="text"') return /<input\b[^>]*type\s*=\s*(["'])text\1/i.test(code);
      if (answer === '<button type="submit">') return /<button\b[^>]*type\s*=\s*(["'])submit\1/i.test(code);
    }

    if (language === 'CSS' && !/\{[^}]*:[^}]*\}/s.test(code)) return false;
    if (language === 'SQL' && !/\b(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER)\b/i.test(code)) return false;
    const token = answer.replace(/^.*\((.*)\).*$/, '$1');
    if (answer === 'Colon (:)') return code.includes(':');
    if (answer === '{ }') return code.includes('{') && code.includes('}');
    if (answer === '/*') return code.includes('/*') && code.includes('*/');
    if (answer === 'SELECT Name') return /\bselect\s+name\b/i.test(code);
    if (answer === 'target="_blank"') return /target\s*=\s*(["'])_blank\1/i.test(code);
    if (answer.startsWith('INSERT INTO table')) return /\binsert\s+into\s+[\w]+\s*\([^)]*\)\s*values\s*\([^)]*\)/i.test(code);
    if (language === 'CSS') {
      if (answer === 'width=device-width') return /@media\b|max-width\s*:/i.test(code);
    }
    if (language === 'JavaScript') {
      try { new Function(code); } catch { return false; }
      if (answer === 'Boolean') return /\b(true|false)\b/.test(code);
      if (answer === 'argument') return /function\s+\w+\s*\([^)]*\)/.test(code) && /\w+\([^)]*\)/.test(code);
      if (answer === 'parameter') return /function\s+\w+\s*\(\s*\w+\s*\)/.test(code);
    }
    return compact(code).includes(compact(token));
  };

  runButton.addEventListener('click', runCode);
  resetButton.addEventListener('click', () => {
    editor.value = currentStarter;
    runCode();
    status.textContent = 'Starter restored and run.';
    editor.focus();
  });
  editor.addEventListener('keydown', event => {
    if (event.key === 'Tab') {
      event.preventDefault();
      editor.setRangeText('  ', editor.selectionStart, editor.selectionEnd, 'end');
      return;
    }
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      event.preventDefault();
      runCode();
    }
  });

  runCode();
})();
