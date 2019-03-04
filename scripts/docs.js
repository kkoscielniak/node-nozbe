const path = require('path');
const fs = require('fs');
const jsdoc2md = require('jsdoc-to-markdown');

const files = [
  { name: 'oauth', title: 'Authorization' },
  { name: 'task', title: 'Tasks' },
  { name: 'comment', title: 'Comments' },
  { name: 'project', title: 'Projects' },
];

const generateTemplate = (file, markdown) => `---
id: ${file.name}
title: ${file.title}
sidebar_label: ${file.sidebar_title || file.title}
---
${markdown}`;

files.forEach(file => {
  const pathName = path.join(__dirname, '..', `/docs/${file.name}.md`);
  jsdoc2md.render({ files: `src/${file.name}.js` }).then(markdown => {
    fs.writeFile(pathName, generateTemplate(file, markdown), err => {
      console.error(err);
    });
  });
});
