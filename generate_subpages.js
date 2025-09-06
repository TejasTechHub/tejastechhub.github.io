const fs = require('fs');
const projects = JSON.parse(fs.readFileSync('projects.json', 'utf8'));

projects.forEach(project => {
    const slug = project.title.toLowerCase().replace(/[ ]+/g, '-').replace(/[^a-z0-9-]/g, '');
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${project.title} - Teja's Tech Hub</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <header id="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">Teja's Tech Hub</div>
                <nav>
                    <ul class="nav-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html#about">About</a></li>
                        <li><a href="index.html#projects">Projects</a></li>
                        <li><a href="index.html#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <main>
        <section class="hero">
            <div class="container">
                <div class="hero-content">
                    <h1>${project.title}</h1>
                    <p>${project.fullDescription || project.shortDescription}</p>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div class="container">
            <p>&copy; 2025 Teja's Tech Hub. Crafted with passion using vanilla technologies.</p>
        </div>
    </footer>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3553413215878124"
         crossorigin="anonymous"></script>
</body>
</html>`;
    fs.writeFileSync(`${slug}.html`, html);
});

console.log('Subpages generated successfully.');
