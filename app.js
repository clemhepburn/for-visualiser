const circle = document.getElementsByClassName('circle');

//change color of circle on mouseenter, then back on mouseout
for (let i = 0; i < circle.length; i++) {
  circle[i].addEventListener('mouseenter', function() {
    circle[i].classList.add('current-item');
  });
  circle[i].addEventListener('mouseout', function() {
    circle[i].classList.remove('current-item');
  });
}

const soundButton = document.getElementsByClassName('sound');

soundButton[0].addEventListener('click', function() {
  soundButton[0].classList.toggle('sound-on');
  soundButton[0].innerHTML = soundButton[0].classList.contains('sound-on') ? 'Sound On' : 'Sound Off';
});






