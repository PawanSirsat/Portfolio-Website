fetch('projects.json')
  .then((response) => response.json())
  .then((data) => {
    const projectList = document.getElementById('projectList')
    data.forEach((project) => {
      const projectItem = document.createElement('li')
      projectItem.className = 'project'
      projectItem.innerHTML = `
        <div class="project-info">
          <img src="${project.image}" alt="${project.name}">
          <h3>${project.name}</h3>
          <div id="tech">
            ${project.tech
              .map(
                (tech) =>
                  `<img src="https://img.icons8.com/fluency/48/${tech}.png" alt="${tech}" />`
              )
              .join('')}
          </div>
          <p>${project.description}</p>
        </div>
        <div class="project-actions">
          ${
            project.liveDemo
              ? `<a href="${project.liveDemo}" id="live" target="_blank">Live Demo</a>`
              : `<button disabled>Live Demo</button>`
          }
          <a href="${
            project.githubLink
          }" target="_blank"><img width="30" height="30" src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png" alt="GitHub"> Visit Project</a>
        </div>
      `
      projectList.appendChild(projectItem)
    })
  })
  .catch((error) => {
    console.error('Error fetching data:', error)
  })
