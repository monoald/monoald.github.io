const cvContainer = document.querySelector('#cv');

cvContainer.addEventListener('click', openFile);

function openFile(event) {
  let file;
  if (event.target.id === 'cv-english') {
    file = '../assets/files/Frontend_Developer_Carlos_Sanjines_Aldazosa_CV.pdf'
  } else if (event.target.id === 'cv-espanol') {
    file = '../assets/files/Desarrollador_Frontend_Carlos_Sanjines_Aldazosa_CV.pdf'
  }

  if (event.target.localName === 'a') {
    window.open(file, '_blank').focus();
  }
}