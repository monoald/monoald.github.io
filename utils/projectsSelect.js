import { data }  from '../data/projects/projects.js';
import addProject from './addProject.js';

const projectContainer = document.querySelector('#projects-container');

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

export default showSelectProjects;