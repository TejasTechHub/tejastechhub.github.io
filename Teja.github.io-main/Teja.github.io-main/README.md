# Teja's Tech Hub - Dynamic Portfolio Website

A modern, responsive portfolio website that automatically updates when you edit the `projects.json` file. No need to touch HTML code ever again!

## 🚀 Features

- **Dynamic Content**: Just edit `projects.json` to add/update projects
- **Responsive Design**: Looks great on all devices
- **Search & Filter**: Find projects by name, description, or tags
- **Project Modal**: Click any project for detailed view
- **Modern UI**: Clean, professional design with smooth animations
- **Easy Maintenance**: No HTML editing required

## 📁 Project Structure

```
├── index.html          # Main HTML structure (rarely needs editing)
├── styles.css          # All styling and responsive design
├── script.js           # Dynamic loading and interaction logic
├── projects.json       # YOUR PROJECT DATA (edit this file!)
└── README.md          # This file
```

## ✏️ How to Add/Edit Projects

### Step 1: Open `projects.json`

This is the only file you need to edit to update your portfolio!

### Step 2: Add or modify project objects

Each project follows this structure:

```json
{
  "title": "Your Project Name",
  "description": "A detailed description of your project. This will be shown on the card and in the modal.",
  "tags": ["web", "javascript", "react"],
  "date": "2025-01-15",
  "status": "Completed",
  "links": [
    { "label": "GitHub", "url": "https://github.com/yourusername/project" },
    { "label": "Demo", "url": "https://yourproject.com" },
    { "label": "Documentation", "url": "https://docs.yourproject.com" }
  ],
  "image": "https://via.placeholder.com/300x200/0078d7/ffffff?text=Your+Project"
}
```

### Step 3: Save and refresh

Save the `projects.json` file and refresh your browser. The website will automatically update!

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
/* Look for these variables at the top of styles.css */
header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
```

### Updating Site Information

Edit these sections in `index.html`:

1. **Site Title**: Change `<title>Teja's Tech Hub</title>`
2. **Header**: Update the `<h1>` and tagline
3. **About Section**: Modify the about content
4. **Contact Section**: Update your contact information

### Adding Images

For project images, you can use:

1. **Placeholder images**: `https://via.placeholder.com/300x200/COLOR/TEXT`
2. **Local images**: Create an `images/` folder and reference like `"images/project1.jpg"`
3. **External images**: Any publicly accessible image URL

## 🔧 Local Development

### Option 1: Simple File Opening
Just open `index.html` in your browser. However, some browsers may block loading JSON files locally due to CORS restrictions.

### Option 2: Local Server (Recommended)

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
npx serve .
# or
npx http-server
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 📊 Project Status Options

Use these status values in your `projects.json`:

- `"Completed"` - Green badge
- `"In Progress"` - Yellow badge  
- `"Planning"` - Blue badge

## 🏷️ Tag System

Tags are automatically collected from all projects and displayed as filter buttons. Use consistent tag names across projects for better organization:

**Good tag examples:**
- `"web"`, `"mobile"`, `"desktop"`
- `"javascript"`, `"python"`, `"react"`
- `"frontend"`, `"backend"`, `"fullstack"`
- `"personal"`, `"work"`, `"opensource"`

## 🚀 Deployment

### GitHub Pages

1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch" and choose `main`
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify

1. Drag and drop your project folder to [Netlify](https://netlify.com)
2. Your site will be live instantly with a custom URL

### Vercel

1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Deploy with zero configuration

## 🛠️ Advanced Features

### Refresh Projects Without Page Reload

Open browser console and run:
```javascript
refreshProjects()
```

### JSON Validation

If your projects don't load, check the browser console for JSON syntax errors. Common issues:

- Missing commas between objects
- Extra commas after the last object
- Unescaped quotes in strings
- Invalid date formats

### Adding More Fields

You can add custom fields to your projects:

```json
{
  "title": "My Project",
  "description": "...",
  "technologies": ["React", "Node.js"],
  "duration": "3 months",
  "teamSize": 4,
  "challenges": "Scaling to 1M users",
  "learnings": "Microservices architecture"
}
```

Then modify `script.js` to display these fields in the modal.

## 🎯 Tips for Best Results

1. **Consistent Image Sizes**: Use 300x200px images for best grid layout
2. **Descriptive Tags**: Use 2-5 relevant tags per project
3. **Clear Descriptions**: Write concise but informative descriptions
4. **Recent First**: Order projects by date (newest first)
5. **Working Links**: Always test your project links

## 🐛 Troubleshooting

**Projects not loading?**
- Check browser console for errors
- Validate your JSON syntax
- Ensure `projects.json` is in the same folder as `index.html`

**Images not showing?**
- Check image URLs are publicly accessible
- Use HTTPS URLs for images
- Consider using placeholder services for testing

**Styling issues?**
- Clear browser cache
- Check for CSS syntax errors
- Ensure all files are in the correct locations

## 📄 License

Feel free to use this template for your own portfolio! No attribution required, but appreciated.

---

**Happy coding!** 🎉

Now you can focus on building amazing projects instead of maintaining HTML files!
