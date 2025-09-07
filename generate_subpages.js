const fs = require('fs-extra');
const path = require('path');

const jsonFile = path.join(process.cwd(), 'projects.json');
const outputFolder = path.join(process.cwd(), 'projects');

function generateProjectPage(project) {
    const slug = project.slug || project.title.toLowerCase().replace(/\s+/g, '-');
    const folder = path.join(outputFolder, slug);
    fs.ensureDirSync(folder);
    const html = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>${project.title}</title></head>
<body>
<h1>${project.title}</h1>
<p>${project.shortDescription || project.fullDescription}</p>
${project.thumbnail ? `<img src="${project.thumbnail}" alt="${project.title}">` : ''}
</body>
</html>`;
    fs.writeFileSync(path.join(folder, 'index.html'), html, 'utf8');
    console.log(`Generated page for: ${project.title}`);
}

const data = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
data.forEach(generateProjectPage);

