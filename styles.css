// Teja's Tech Hub - Dynamic Project Loading
// This script automatically loads projects from projects.json and updates the website

let allProjects = [];
let filteredProjects = [];
let activeTags = [];

// DOM Elements
const projectsGrid = document.getElementById('projects-grid');
const searchInput = document.getElementById('search');
const tagFilters = document.getElementById('tag-filters');
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    setupEventListeners();
});

// Load projects from JSON file
async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        allProjects = await response.json();
        filteredProjects = [...allProjects];
        
        renderTagFilters();
        renderProjects();
        
        console.log(`Loaded ${allProjects.length} projects successfully!`);
    } catch (error) {
        console.error('Error loading projects:', error);
        projectsGrid.innerHTML = `
            <div class="loading" style="color: #dc3545;">
                ❌ Error loading projects. Please check that projects.json exists and is valid JSON.
                <br><br>
                <small>Error: ${error.message}</small>
            </div>
        `;
    }
}

// Render tag filter buttons
function renderTagFilters() {
    const allTags = [...new Set(allProjects.flatMap(project => project.tags))];
    
    tagFilters.innerHTML = '';
    
    allTags.forEach(tag => {
        const button = document.createElement('button');
        button.className = 'tag-btn';
        button.textContent = tag;
        button.addEventListener('click', () => toggleTag(tag, button));
        tagFilters.appendChild(button);
    });
}

// Toggle tag filter
function toggleTag(tag, button) {
    if (activeTags.includes(tag)) {
        activeTags = activeTags.filter(t => t !== tag);
        button.classList.remove('active');
    } else {
        activeTags.push(tag);
        button.classList.add('active');
    }
    
    filterProjects();
}

// Filter projects based on search and tags
function filterProjects() {
    const searchTerm = searchInput.value.toLowerCase();
    
    filteredProjects = allProjects.filter(project => {
        // Search filter
        const matchesSearch = searchTerm === '' || 
            project.title.toLowerCase().includes(searchTerm) ||
            (project.shortDescription && project.shortDescription.toLowerCase().includes(searchTerm)) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        // Tag filter
        const matchesTags = activeTags.length === 0 || 
            activeTags.every(tag => project.tags.includes(tag));
        
        return matchesSearch && matchesTags;
    });
    
    renderProjects();
}

// Render projects to the grid
function renderProjects() {
    if (filteredProjects.length === 0) {
        projectsGrid.innerHTML = `
            <div class="loading">
                ${allProjects.length === 0 ? 'No projects found.' : 'No projects match your filters.'}
            </div>
        `;
        return;
    }
    
    projectsGrid.innerHTML = '';
    
    filteredProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Create a project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.addEventListener('click', () => openProjectModal(project));
    
    const statusClass = getStatusClass(project.status);
    
    card.innerHTML = `
        <img src="${project.thumbnail}" alt="${project.title}" class="project-image" loading="lazy">
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.shortDescription}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-meta">
                <span class="project-date">${formatDate(project.date)}</span>
                <span class="project-status ${statusClass}">${project.status}</span>
            </div>
            <div class="project-links">
                ${project.links.map(link => 
                    `<a href="${link.url}" class="project-link" target="_blank" rel="noopener" onclick="event.stopPropagation()">
                        ${link.label}
                    </a>`
                ).join('')}
            </div>
        </div>
    `;
    
    return card;
}

// Get CSS class for project status
function getStatusClass(status) {
    switch (status.toLowerCase()) {
        case 'completed':
            return 'status-completed';
        case 'in progress':
            return 'status-progress';
        case 'planning':
            return 'status-planning';
        default:
            return 'status-planning';
    }
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

// Open project modal with details
function openProjectModal(project) {
    const statusClass = getStatusClass(project.status);
    
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <img src="${project.thumbnail}" alt="${project.title}" style="width: 100%; max-width: 500px; height: 250px; object-fit: cover; border-radius: 10px; margin: 1rem 0;">
        
        <div class="project-tags" style="margin-bottom: 1rem;">
            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        
        <div class="project-meta" style="margin-bottom: 1.5rem;">
            <span class="project-date">${formatDate(project.date)}</span>
            <span class="project-status ${statusClass}">${project.status}</span>
        </div>
        
        <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem; color: #666;">
            ${project.fullDescription || project.shortDescription}
        </p>
        
        <div class="project-links">
            ${project.links.map(link => 
                `<a href="${link.url}" class="project-link" target="_blank" rel="noopener">
                    ${link.label}
                </a>`
            ).join('')}
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close project modal
function closeProjectModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Setup event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', filterProjects);
    
    // Modal close events
    closeModal.addEventListener('click', closeProjectModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    // Keyboard events
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeProjectModal();
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Hero button smooth scroll
    document.querySelector('.hero .btn').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#projects').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// Utility function to refresh projects (useful for development)
window.refreshProjects = function() {
    console.log('Refreshing projects...');
    loadProjects();
};

// Log instructions for easy project management
console.log(`
🚀 Teja's Tech Hub - Dynamic Project Loading

To add or edit projects:
1. Edit the projects.json file
2. Refresh the page to see changes
3. Or run refreshProjects() in the console

Project JSON structure:
{
  "title": "Project Name",
  "description": "Project description",
  "tags": ["tag1", "tag2"],
  "date": "2025-01-15",
  "status": "Completed", // Completed, In Progress, or Planning
  "links": [
    { "label": "GitHub", "url": "https://github.com/..." },
    { "label": "Demo", "url": "https://demo.com" }
  ],
  "image": "https://via.placeholder.com/300x200/color/text"
}

Happy coding! 🎉
`);
