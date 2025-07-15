// 💥 Flash intro: show name, then reveal main content
window.addEventListener('load', () => {
    // Force dark mode by default
    document.body.classList.add('dark');

    // Hide intro after delay
    setTimeout(() => {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 3000);
});

// 🧠 Load project cards dynamically from projects.json
fetch('projects.json')
    .then(res => {
        if (!res.ok) throw new Error("projects.json not found or invalid path");
        return res.json();
    })
    .then(data => {
        const container = document.getElementById('project-list');
        data.projects.forEach(p => {
            const div = document.createElement('div');
            div.className = 'project';
            div.setAttribute('data-aos', 'fade-up');
            div.innerHTML = `
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <a href="${p.live}" target="_blank">🔗 Live</a>
        <a href="${p.source}" target="_blank">💻 Source</a>
      `;
            container.appendChild(div);
        });
    })
    .catch(err => {
        console.error("Error loading projects:", err);
        const container = document.getElementById('project-list');
        container.innerHTML = "<p style='color: red;'>⚠️ Failed to load project data.</p>";
    });

// 🌗 Dark mode toggle button
document.getElementById('darkToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});