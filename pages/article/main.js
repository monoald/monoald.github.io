import display from '../../utils/display.js'

const like = document.querySelector('#like');
const likeIcon = document.querySelector('#icon-like');
const dislike = document.querySelector('#dislike');
const dislikeIcon = document.querySelector('#icon-dislike')
like.addEventListener('click', () => {
  if (document.querySelector('.icon-dislike-fill')) {
    dislikeIcon.classList.toggle('icon-dislike');
    dislikeIcon.classList.toggle('icon-dislike-fill')
  }
    likeIcon.classList.toggle('icon-heart');
    likeIcon.classList.toggle('icon-heart-fill')
  
});
dislike.addEventListener('click', () => {
  if (document.querySelector('.icon-heart-fill')) {
    likeIcon.classList.toggle('icon-heart');
    likeIcon.classList.toggle('icon-heart-fill')
  }
    dislikeIcon.classList.toggle('icon-dislike');
    dislikeIcon.classList.toggle('icon-dislike-fill')
  
});