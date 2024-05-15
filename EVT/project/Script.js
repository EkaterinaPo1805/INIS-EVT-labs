

const teamMember = document.querySelector('.team-member');
const teamMemberRow = teamMember.querySelector('.team-member-row');
const prevButton = teamMember.querySelector('.arrow.prev');
const nextButton = teamMember.querySelector('.arrow.next');
const articles = teamMember.querySelectorAll('.team-member-card');
const articleWidth = articles[0].offsetWidth; 

let position = 0;


function slideLeft() {
    position += articleWidth;
    position = Math.min(position, 0);
    teamMemberRow.style.transform = `translateX(${position}px)`;
}


function slideRight() {
    position -= articleWidth;
    const minPosition = -(articles.length - 1) * articleWidth;
    if (position < minPosition) {
        position = 0;
      }
    position = Math.max(position, minPosition);
    teamMemberRow.style.transform = `translateX(${position}px)`;
}


prevButton.addEventListener('click', slideLeft);
nextButton.addEventListener('click', slideRight);
  
const interval = 3000; 

    function autoSlide() {
      slideRight();
      setTimeout(autoSlide, interval);
    }
  
    setTimeout(autoSlide, interval);
  