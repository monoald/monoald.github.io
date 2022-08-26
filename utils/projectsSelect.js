import data  from '../data/projects/projects.json' assert { type: 'json' };

const buttonContainer = document.querySelector('#skills-container');
const projectContainer = document.querySelector('#projects-container');

buttonContainer.addEventListener('click', showSelectProjects);

function showSelectProjects(event) {
  const technology = event.target.textContent;
  const fragment = new DocumentFragment();

  if (event.target.localName === 'button') {
    let filtered = data.filter(project => project.technologies.includes(technology) )
    
    if (filtered.length > 0) {
      const projects = [...projectContainer.children];

      projects.map(child => {
        child.remove();
      })

      filtered.map(project => {
        const element = addProject(project);
        fragment.appendChild(element);
      })
    }
  }

  projectContainer.appendChild(fragment);
}

function addProject(project) {
  const container = document.createElement('div');
  container.classList.add('project');
  container.id = project.id;

  const picture = document.createElement('picture');
  picture.classList.add('project__banner');

  const sourceMobile = document.createElement('source');
  sourceMobile.media = "(max-width:688px)";
  sourceMobile.srcset = project.image;
  sourceMobile.width = 280;
  sourceMobile.height = 176;

  const sourceDesktop = document.createElement('source');
  sourceDesktop.media = "(min-width:688px)";
  sourceDesktop.srcset = project.image;
  sourceDesktop.width = 400;
  sourceDesktop.height = 252;

  const image = document.createElement('img');
  image.src = project.image;
  image.alt = `${project.name} built by Carlos S. Aldazosa`;

  picture.appendChild(sourceMobile);
  picture.appendChild(sourceDesktop);
  picture.appendChild(image);

  const data = document.createElement('div');
  data.classList.add('project__data');

  const title = document.createElement('h3');
  title.classList.add('project__title');
  title.textContent = project.name;

  const tech = document.createElement('p');
  tech.classList.add('project__tech')
  tech.innerHTML = `<b>Technologies:</b> ${project.technologies.join(', ') }`;

  const description = document.createElement('article');
  description.classList.add('project__description');
  description.textContent = project.description;

  const projectButtons = document.createElement('div');
  projectButtons.classList.add('project__buttons');

  const deployButton = document.createElement('a');
  deployButton.classList.add('primary-button');
  deployButton.target = '_blank';
  deployButton.href = project['link-deploy'];
  deployButton.textContent = 'Open Project';

  const repositoryButton = document.createElement('a');
  repositoryButton.classList.add('primary-button');
  repositoryButton.target = '_blank';
  repositoryButton.href = project['link-repository'];
  repositoryButton.textContent = 'Repository';

  projectButtons.appendChild(deployButton);
  projectButtons.appendChild(repositoryButton);

  data.appendChild(title);
  data.appendChild(tech);
  data.appendChild(description);
  data.appendChild(projectButtons);

  container.appendChild(picture);
  container.appendChild(data);

  return container;
}