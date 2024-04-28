/*Navbar opening and closing*/
document.addEventListener('DOMContentLoaded', function() {
    var iconClose = document.querySelector('.icon-close');
    var aside = document.querySelector('aside');
    var itemName = document.querySelectorAll('.navbar-items b');
    var searchInput = document.querySelector('.search ');
    var spanText = document.querySelector('.head span');
    var endText = document.querySelector('.text');
    var endIcon = document.querySelector('.profile i');
    var icon = iconClose.querySelector('i');

    iconClose.addEventListener('click', function() {
        if (aside.style.width !== '300px') {
            aside.style.width = '300px';
            for (var i = 0; i < itemName.length; i++) {
                itemName[i].style.display = 'inline';
            }
            searchInput.style.display = 'block';
            spanText.style.display = 'inline';
            endText.style.display = 'inline';
            endIcon.style.display = 'inline';
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-left');
            
        } else {
            aside.style.width = '60px';
            for (var i = 0; i < itemName.length; i++) {
                itemName[i].style.display = 'none';
            }
            searchInput.style.display = 'none';
            spanText.style.display = 'none';
            endText.style.display = 'none';
            endIcon.style.display = 'none';
            icon.classList.remove('fa-chevron-left');
            icon.classList.add('fa-chevron-right');
            
        }
    });
});

/*Active navbar element*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar-items a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        };
    });
};
/*scroll animation while going to section selected(or clicked) in navbar*/ 
function smoothScroll(target) {
    var targetElement = document.getElementById(target);
  
    if (targetElement) {
      var targetPosition = targetElement.offsetTop;
      var startPosition = window.scrollY;
      var distance = targetPosition - startPosition;
      var startTime = null;
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var scrollAmount = easeInOutQuad(timeElapsed, startPosition, distance, 1000);
        window.scrollTo(0, scrollAmount);
        if (timeElapsed <1000) requestAnimationFrame(animation);
      }
  
      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animation);
    }
  }