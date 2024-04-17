let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function() {
    if (active + 1 > lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function() {
    if (active - 1 < 0) {
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(() => { next.click() }, 5000);

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => { next.click() }, 3000);
    handlePop();

}

dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
        active = index;
        reloadSlider();

    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const popImages = document.querySelectorAll('.pop-image');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  popImages.forEach(function(popImage) {
    if (isInViewport(popImage)&& !popImage.classList.contains('pop-visible')) {
      popImage.classList.add('pop-visible');
    } else {
      popImage.classList.remove('pop-visible');
    }
  });
}
function handlePop() {
  popImages.forEach(function(popImage) {
    if (isInViewport(popImage) && !popImage.classList.contains('pop-visible')) {
      popImage.classList.add('pop-visible');
    }
  });
}
window.addEventListener('scroll', handleScroll);
window.addEventListener('slider', handlePop);



document.addEventListener("DOMContentLoaded", function() {
    const slideshow = document.querySelector('.scented .slideshow');
    const images = document.querySelectorAll('.scented .slideshow .image');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(image => {
            image.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    function nextImage() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            showImage(currentIndex);
        }
    }

    function prevImage() {
        if (currentIndex > 0) {
            currentIndex--;
            showImage(currentIndex);
        }
    }

    const arrowLeft = document.querySelector('.scented .arrow-left');
    const arrowRight = document.querySelector('.scented .arrow-right');

    arrowLeft.addEventListener('click', prevImage);
    arrowRight.addEventListener('click', nextImage);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    let firstImage = document.querySelector('.slideshow .image');

    function isInViewport(element) {
        let rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (isInViewport(firstImage)) {
            firstImage.classList.add('pop');
        }
    }

    window.addEventListener('scroll', handleScroll);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function increment() {
  var input = document.querySelector('.quantity-input');
  var currentValue = parseInt(input.value);
  input.value = currentValue + 1;
}

function decrement() {
  var input = document.querySelector('.quantity-input');
  var currentValue = parseInt(input.value);
  if (currentValue > 1) {
    input.value = currentValue - 1;
  }
}


 window.addEventListener('scroll', function() {
        var image = document.querySelector('.pic img');
        var imagePosition = image.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (imagePosition < screenHeight) {
            image.classList.add('show'); // Add class to trigger animation
        }
    });



 window.addEventListener('scroll', function() {
        var image = document.querySelector('.pic1 img');
        var imagePosition = image.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (imagePosition < screenHeight) {
            image.classList.add('show'); // Add class to trigger animation
        }
    });

 window.addEventListener('scroll', function() {
        var image = document.querySelector('.pic2 img');
        var imagePosition = image.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (imagePosition < screenHeight) {
            image.classList.add('show'); // Add class to trigger animation
        }
    });
 window.addEventListener('scroll', function() {
        var image = document.querySelector('.pic3 img');
        var imagePosition = image.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (imagePosition < screenHeight) {
            image.classList.add('show'); // Add class to trigger animation
        }
    });
 window.addEventListener('scroll', function() {
        var image = document.querySelector('.pic4 img');
        var imagePosition = image.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (imagePosition < screenHeight) {
            image.classList.add('show'); // Add class to trigger animation
        }
    });
 window.addEventListener('scroll', function() {
        var image = document.querySelector('.pic5 img');
        var imagePosition = image.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (imagePosition < screenHeight) {
            image.classList.add('show'); // Add class to trigger animation
        }
    });
  window.addEventListener('scroll', function() {
        var image = document.querySelector('.pic6 img');
        var imagePosition = image.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (imagePosition < screenHeight) {
            image.classList.add('show'); // Add class to trigger animation
        }
    });
  window.addEventListener('scroll', function() {
        var image = document.querySelector('.pic0 img');
        var imagePosition = image.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (imagePosition < screenHeight) {
            image.classList.add('show'); // Add class to trigger animation
        }
    });

  window.addEventListener('scroll', function() {
        var image = document.querySelector('.slideshow  img');
        var imagePosition = image.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (imagePosition < screenHeight) {
            image.classList.add('show'); // Add class to trigger animation
        }
    });

  window.addEventListener('scroll', function() {
        var image = document.querySelector('.pic7 img');
        var imagePosition = image.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (imagePosition < screenHeight) {
            image.classList.add('show'); // Add class to trigger animation
        }
    });



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function prevSlide() {
        $('.carousel').carousel('prev');
    }

    function nextSlide() {
        $('.carousel').carousel('next');
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slides');

    function showSlides() {
        slides.forEach(slide => {
            slide.style.transform = `translateX(-${slideIndex * 108}%)`;
        });
    }

    function nextSlide() {
        if (slideIndex < slides.length - 1) {
            slideIndex++;
            showSlides();
        }
    }

    function prevSlide() {
        if (slideIndex > 0) {
            slideIndex--;
            showSlides();
        }
    }
    /////////////////////////////////////////////////////////////
    document.addEventListener("DOMContentLoaded", function() {
    var searchIcon = document.querySelector(".searchicon");
    var searchBox = document.querySelector("#searchBox");

    // Toggle search box visibility when the search icon is clicked
    searchIcon.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        if (searchBox.style.display === "none" || searchBox.style.display === "") {
            searchBox.style.display = "block";
        } else {
            searchBox.style.display = "none";
        }
    });
});




//////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const dpdns = document.querySelectorAll('.dpdn');

    dpdns.forEach(dropdown => {
        const select = dropdown.querySelector('.dpdn-select'); // Corrected variable name
        const menu = dropdown.querySelector('.dpdn-menu'); // Corrected variable name


         const menuItems = dropdown.querySelectorAll('.dpdnn-menu li');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                // Update the button label with the selected item
                select.textContent = item.textContent;
                menu.style.display = 'none'; // Close the menu
            });
        });

        select.addEventListener('click', () => {
            // Toggle display of menu items
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
            } else {
                menu.style.display = 'block';
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!dropdown.contains(event.target)) {
                menu.style.display = 'none';
            }
        });
    });
});


///////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const dpdnns = document.querySelectorAll('.dpdnn');

    dpdnns.forEach(dropdown => {
        const selectButton = dropdown.querySelector('.dpdnn-select');
        const buttonText = selectButton.querySelector('.button-content');
        const menu = dropdown.querySelector('.dpdnn-menu');

        // Event listener for each menu item
        const menuItems = dropdown.querySelectorAll('.dpdnn-menu li');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                // Update the button label with the selected item
                buttonText.textContent = item.textContent;
                menu.style.display = 'none'; // Close the menu
            });
        });

        // Toggle display of menu items
        selectButton.addEventListener('click', () => {
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
            } else {
                menu.style.display = 'block';
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!dropdown.contains(event.target)) {
                menu.style.display = 'none';
            }
        });
    });
});
