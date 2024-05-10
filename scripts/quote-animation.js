document.addEventListener("DOMContentLoaded", function() {
  const line1 = document.getElementById('quote-line1');
  const line2 = document.getElementById('quote-line2');
  const line3 = document.getElementById('quote-line3');

  const lineOneText = "Twenty years from now you will be";
  const lineTwoText = "more disappointed by the things you didn't do";
  const lineThreeText = "than by the ones you did do - Mark Twain";

  let index1 = 0;
  let index2 = 0;
  let index3 = 0;

  function typeWriter() {
    if (index1 < lineOneText.length) {
      line1.innerHTML += lineOneText.charAt(index1);
      index1++;
      setTimeout(typeWriter, 40); // Adjust typing speed here (milliseconds)
    }
    if (index1 >= lineOneText.length && index2 < lineTwoText.length) {
      line2.innerHTML += lineTwoText.charAt(index2);
      index2++;
      setTimeout(typeWriter, 50); // Adjust typing speed here (milliseconds)
    }
    if (index1 >= lineOneText.length && index2 >= lineTwoText.length && index3 < lineThreeText.length) {
      line3.innerHTML += lineThreeText.charAt(index3);
      index3++;
      setTimeout(typeWriter, 60); // Adjust typing speed here (milliseconds)
    }
  }

  typeWriter();
});


