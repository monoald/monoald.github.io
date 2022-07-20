import display from '../../utils/display.js'

const like = document.getElementById('like');
const likeClass = like.className;
const dislike = document.getElementById('dislike');
const dislikeClass = dislike.className;

like.addEventListener('click', () => {
  if (document.querySelector('.dislike--active')) {
    display(dislike, dislikeClass);
    display(like, likeClass);
  } else {
    display(like, likeClass);
  }
});
dislike.addEventListener('click', () => {
  if (document.querySelector('.like--active')){
    display(like, likeClass);
    display(dislike, dislikeClass);
  } else {
    display(dislike, dislikeClass);
  }
});