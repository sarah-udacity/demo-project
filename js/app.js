// find elements we want to use
const content = document.querySelector('.content');
const body = document.querySelector('body');
const headline = document.querySelector('.headline');
const base = document.querySelector('.base');
const highlight = document.querySelector('.highlight');

// set intial state
let staticPage = true;

// create button
const button = document.createElement('button');
button.className = 'myButton';
button.textContent = 'Change Things Up!';
content.appendChild(button);

// add function to update page content
function updatePage() {
  // check page state
  if (staticPage) {
    // add exciting image and text
    body.style.backgroundImage =
      'url("./images/chuttersnap-eH_ftJYhaTY-unsplash.jpg")';
    headline.innerText = 'A dynamic website looks even better!';
    base.innerText = 'because changes add ';
    highlight.innerText = 'fun!';
    highlight.classList.add('exciting');
    button.textContent = 'Go Back';
  } else {
    // revert to boring image and text
    body.style.backgroundImage =
      'url("./images/borna-bevanda-beCHuGxfBhk-unsplash.jpg")';
    headline.innerText = 'A static webpage looks nice...';
    base.innerText = 'but it can be ';
    highlight.innerText = 'boring :(';
    highlight.classList.remove('exciting');
    button.textContent = 'Change Things Up!';
  }

  // toggle page state
  staticPage = !staticPage;
}

// add event listener to change content
button.addEventListener('click', updatePage);
