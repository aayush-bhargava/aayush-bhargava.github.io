fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('project-list');
        data.projects.forEach(project => {
            const div = document.createElement('div');
            div.className = 'project';
            div.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
            container.appendChild(div);
        });
    });
