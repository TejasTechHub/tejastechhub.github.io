const fs = require('fs');
const projects = JSON.parse(fs.readFileSync('projects.json', 'utf8'));

projects.forEach(project => {
    const slug = project.title.toLowerCase().replace(/[ ]+/g, '-').replace(/[^a-z0-9-]/g, '');
    const yaml = `---
title: "${project.title}"
slug: "${slug}"
fullDescription: "${project.fullDescription}"
shortDescription: "${project.shortDescription}"
tags: [${project.tags.map(t => `"${t}"`).join(', ')}]
status: "${project.status}"
date: "${project.date}"
links: [${project.links.map(l => `{"label": "${l.label}", "url": "${l.url}"}`).join(', ')}]
---
`;
    fs.writeFileSync(`_projects/${slug}.md`, yaml);
});

console.log('Subpages generated successfully.');
