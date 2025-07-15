// Hide intro and show main after 3 sec
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 3000);
});


// Dark Mode Toggle
document.getElementById('darkToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});


// Load project cards dynamically
fetch('projects.json')
    .then(res => res.json())
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
    });
