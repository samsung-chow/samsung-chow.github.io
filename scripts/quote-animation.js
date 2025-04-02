document.addEventListener("DOMContentLoaded", function() {
  const line1 = document.getElementById('quote-line1');
  const line2 = document.getElementById('quote-line2');
  const line3 = document.getElementById('quote-line3');

  let lineOneText = '"Twenty years from now you will be';
  let lineTwoText = "more disappointed by the things you didn't do";
  let lineThreeText = 'than by the ones you did do" - Mark Twain';

  let index1 = 0;
  let index2 = 0;
  let index3 = 0;

  function typeWriter() {
    if (index1 < lineOneText.length) {
      line1.innerHTML += lineOneText.charAt(index1);
      index1++;
      setTimeout(typeWriter, 50); // Adjust typing speed here (milliseconds)
    }
    if (index1 >= lineOneText.length && index2 < lineTwoText.length) {
      line2.innerHTML += lineTwoText.charAt(index2);
      index2++;
      setTimeout(typeWriter, 50); // Adjust typing speed here (milliseconds)
    }
    if (index1 >= lineOneText.length && index2 >= lineTwoText.length && index3 < lineThreeText.length) {
      line3.innerHTML += lineThreeText.charAt(index3);
      index3++;
      setTimeout(typeWriter, 50); // Adjust typing speed here (milliseconds)
    } 
  }

  function transition() {
    line1.style.opacity = 0;
    line2.style.opacity = 0;
    line3.style.opacity = 0;

    lineOneText = 'Samson Chow';
    lineTwoText = 'University of Toronto 2T6 + PEY';
    lineThreeText = 'Engineering Science, Machine Intelligence';

    index1 = 0;
    index2 = 0;
    index3 = 0;

  }

  function info() {
    line1.innerHTML = '';
    line2.innerHTML = '';
    line3.innerHTML = '';
    line1.style.opacity = 1;
    line2.style.opacity = 1;
    line3.style.opacity = 1;
    typeWriter();
  }

  typeWriter();
  setTimeout(transition, 7000);
  setTimeout(info, 8000);

});


