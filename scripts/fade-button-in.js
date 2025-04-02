document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById('about-me-buttons')
  const line3 = document.getElementById('quote-line3');
  const lineThreeQuote = 'than by the ones you did do - Mark Twain';

  function checkForDone() {
    if (line3.innerHTML.length < lineThreeQuote.length) {
      button.style.opacity = 0;
      setTimeout(checkForDone, 100)
    }
    else {
      button.style.opacity = 1;
    }
  }

  checkForDone();
});