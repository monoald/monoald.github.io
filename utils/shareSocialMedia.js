const fb = document.getElementById('fb');
const tweet = document.getElementById('twitter');
const linkedIn = document.getElementById('linkedIn');

fb.addEventListener('click', () => share('facebook'));
tweet.addEventListener('click', () => share('twitter'));

linkedIn.addEventListener('click', () => share('linkedIn'));

function share(socialMedia) {
  let url;
  if (socialMedia === 'facebook') {
    url = 'https://www.facebook.com/sharer/sharer.php?u=';
  } else if (socialMedia === 'twitter') {
    url = 'https://twitter.com/intent/tweet?text=';
  } else if (socialMedia === 'linkedIn') {
    url = 'https://www.linkedin.com/shareArticle?mini=true&url=';
  }
  window.open(`${url}${window.location.href}`, '_blank');
}