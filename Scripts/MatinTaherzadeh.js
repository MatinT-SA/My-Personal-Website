/***** Selecting DOM elements ********/
const welcoming = document.querySelector('#welcome-overlay');

/***** clearing URL after refreshing the page ********/
history.pushState('', '', window.location.pathname);

/***** Loading page ********/
$(window).on("load", function () {
    $(".centerLoading").fadeOut("slow");
})

/***** Welcoming ********/
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('welcome-overlay').classList.add('showWelcome');
    }, 2500);
});

document.getElementById('got-it-button').addEventListener('click', () => {
    const overlay = document.getElementById('welcome-overlay');
    overlay.classList.remove('showWelcome');
    overlay.classList.add('hideWelcome');
});

/***** Matin Taherzadeh ********/
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const MainTitlesfaders = document.querySelectorAll('.fade-in-main-titles');
const MainTitlessliders = document.querySelectorAll('.slide-in-main-titles');
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('#header-nav ul li');
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -300px 0px"
}

const appearOptionsMainTitles = {
    threshold: 0,
    rootMargin: "0px 0px -120px 0px"
}

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

const appearOnScrollMainTitles = new IntersectionObserver(function (entries, appearOnScrollMainTitles) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScrollMainTitles.unobserve(entry.target);
        }
    });
}, appearOptionsMainTitles);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

MainTitlesfaders.forEach(faders => {
    appearOnScrollMainTitles.observe(faders);
});

MainTitlessliders.forEach(sliders => {
    appearOnScrollMainTitles.observe(sliders);
});

/***** Smooth scroll ********/
const scroll = new SmoothScroll('.mainMenu a[href*="#"]', {
    speed: 350,
});

/***** GoToTopButton ********/
var GoToTopButton = document.getElementById("GoToTopButton");

window.onscroll = function () {
    scrollFunctionButton()
};

function scrollFunctionButton() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        GoToTopButton.style.display = "block";
    } else {
        GoToTopButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/***** Highlight nav menu items on scroll ********/
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop) - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active');
        }
    })
});

/***** End of Matin Taharzadeh ********/

/***** Hamburger menu ********/
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const navLinks = document.querySelectorAll('.nav-item');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        mainMenu.style.top = "-1000%";
    });
}

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = "-1000%";
}

/***** Fixed nav ********/
$(document).ready(function () {
    const aboveHeight = $('header').height();

    $(window).scroll(function () {
        if ($(window).scrollTop() > aboveHeight) {
            $('nav').addClass('fixed').css('top', '0').next().css('padding-top', '70px');
        } else {
            $('nav').removeClass('fixed').css('padding-top', '0');
        }
    });
});

/***** navigation link active class ********/
$(document).ready(function () {
    $('#header-nav ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
    });
});

/***** End of header ********/

/***** Skills ********/

const fadersSkills = document.querySelectorAll('.fade-in-skills');
const slidersSkills = document.querySelectorAll('.slide-in-skills');
const fadersSkillsLE = document.querySelectorAll('.fade-in-skills-le');
const slidersSkillsLE = document.querySelectorAll('.slide-in-skills-le');
const appearOptionsSkills = {
    threshold: 0,
    rootMargin: "0px 0px -120px 0px"
};

const appearOptionsSkillsLE = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScrollSkills = new IntersectionObserver(function (entries, appearOnScrollSkills) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScrollSkills.unobserve(entry.target);
        }
    });
}, appearOptionsSkills);

const appearOnScrollSkillsLE = new IntersectionObserver(function (entries, appearOnScrollSkillsLE) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScrollSkillsLE.unobserve(entry.target);
        }
    });
}, appearOptionsSkillsLE);

fadersSkills.forEach(Fader => {
    appearOnScrollSkills.observe(Fader);
});

slidersSkills.forEach(Slider => {
    appearOnScrollSkills.observe(Slider);
});

fadersSkillsLE.forEach(Fader => {
    appearOnScrollSkillsLE.observe(Fader);
});

slidersSkillsLE.forEach(Slider => {
    appearOnScrollSkillsLE.observe(Slider);
});

/***** End of Skills ********/

/***** Resume ********/

const fadersResume = document.querySelectorAll('.fade-in-resume');
const slidersResume = document.querySelectorAll('.slide-in-resume');
const appearOptionsResume = {
    threshold: 0,
    rootMargin: "0px 0px 10px 0px"
};

const appearOnScrollResume = new IntersectionObserver(function (entries, appearOnScrollResume) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScrollResume.unobserve(entry.target);
        }
    });
}, appearOptionsResume);

fadersResume.forEach(fader => {
    appearOnScrollResume.observe(fader);
});

slidersResume.forEach(slider => {
    appearOnScrollResume.observe(slider);
});

$(document).ready(function () {
    $('body').on('click', '#Resume .btn', function () {
        $("#Resume-items .btn").not(this).removeClass('active');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.btn-Resume-buttons').click(function (e) {
        $('.collapse').collapse('hide');
    });
});

/***** carousel ********/
$('.carousel').carousel({
    interval: 2500
});


// threejs modal
const threejsModal = document.getElementById("threejsModal");
const closeButtonThreejs = document.getElementsByClassName("threejs-close")[0];

// Check if the modal has been opened before
const modalOpenedBefore = localStorage.getItem("modalOpened");

function showModal() {
    threejsModal.style.display = "block";
}

function hideModal() {
    threejsModal.style.display = "none";
}

// IntersectionObserver options
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Trigger when at least half of the target is visible
};

// IntersectionObserver callback function
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(showModal, 2000);
            // Disconnect the observer once the modal is shown
            observer.disconnect();
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, options);

const resumeSection = document.getElementById("Resume");
observer.observe(resumeSection);

closeButtonThreejs.onclick = function () {
    hideModal();
    localStorage.setItem("modalClosed", true);
    document.getElementById("fixed-trigger-modal").style.display = "block";
}

// Fixed trigger modal logic
if (!modalOpenedBefore && localStorage.getItem("modalClosed")) {
    document.getElementById("fixed-trigger-modal").style.display = "block";
}

// Fixed trigger click handler
document.getElementById("fixed-trigger-modal").onclick = function () {
    showModal();
    this.style.display = "none";
}

// Close modal when clicking outside
function closeModalOutsideClick(event) {
    if (event.target === threejsModal) {
        hideModal();
        localStorage.setItem("modalClosed", true);
        document.getElementById("fixed-trigger-modal").style.display = "block";
    }
}

// Close modal on Escape key press
function closeModalOnEscape(event) {
    if (event.key === "Escape") {
        hideModal();
        localStorage.setItem("modalClosed", true);
        document.getElementById("fixed-trigger-modal").style.display = "block";
    }
}

window.addEventListener("click", closeModalOutsideClick);
window.addEventListener("keydown", closeModalOnEscape);


/***** End of resume ********/

/***** Entrepreneur ********/
const fadersEntrepreneur = document.querySelectorAll('.fade-in-entrepreneur');
const slidersEntrepreneur = document.querySelectorAll('.slide-in-entrepreneur');

const appearOptionsEntrepreneur = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
}

const appearOnScrollEntrepreneur = new IntersectionObserver(function (entries, appearOnScrollEntrepreneur) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScrollEntrepreneur.unobserve(entry.target);
        }
    });
}, appearOptionsEntrepreneur);

fadersEntrepreneur.forEach(fader => {
    appearOnScrollEntrepreneur.observe(fader);
});

slidersEntrepreneur.forEach(slider => {
    appearOnScrollEntrepreneur.observe(slider);
});

/***** End of Entrepreneur ********/

/***** Contact ********/

const fadersContact = document.querySelectorAll('.fade-in-contact');
const slidersContact = document.querySelectorAll('.slide-in-contact');
const appearOptionsContact = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
};

const appearOptionsContactLE = {
    threshold: 0,
    rootMargin: "0px 0px -80px 0px"
};

const appearOnScrollContact = new IntersectionObserver(function (entries, appearOnScrollContact) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScrollContact.unobserve(entry.target);
        }
    });
}, appearOptionsContact);

const appearOnScrollContactLE = new IntersectionObserver(function (entries, appearOnScrollContactLE) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScrollContactLE.unobserve(entry.target);
        }
    });
}, appearOptionsContactLE);

fadersContact.forEach(fader => {
    appearOnScrollContact.observe(fader);
});

slidersContact.forEach(slider => {
    appearOnScrollContact.observe(slider);
});

fadersContact.forEach(fader => {
    appearOnScrollContactLE.observe(fader);
});

slidersContact.forEach(slider => {
    appearOnScrollContactLE.observe(slider);
});

/***** End of Contact ********/

/***** Comment ********/

const fadersComment = document.querySelectorAll('.fade-in-comment');
const slidersComment = document.querySelectorAll('.slide-in-comment');
const appearOptionsComment = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
}

const appearOnScrollComment = new IntersectionObserver(function (entries, appearOnScrollComment) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScrollComment.unobserve(entry.target);
        }
    });
}, appearOptionsComment);

fadersComment.forEach(fader => {
    appearOnScrollComment.observe(fader);
});

slidersComment.forEach(slider => {
    appearOnScrollComment.observe(slider);
});

/***** End of Comment ********/

/***** GitHub more resume ********/

document.addEventListener('DOMContentLoaded', function () {
    var resumeSection = document.getElementById('Comment');
    var moreResumeElement = document.querySelector('.more-resume');
    var fixedTriggerModal = document.getElementById('fixed-trigger-modal');

    function toggleVisibility() {
        var resumeSectionRect = resumeSection.getBoundingClientRect();

        var showAt = resumeSectionRect.top;
        var hideAt = resumeSectionRect.bottom;

        if (window.scrollY >= showAt && window.scrollY <= hideAt) {
            moreResumeElement.style.display = 'flex';
            fixedTriggerModal.style.display = 'block';
        } else {
            moreResumeElement.style.display = 'none';
            fixedTriggerModal.style.display = 'none';
        }
    }

    window.addEventListener('scroll', toggleVisibility);

    toggleVisibility();
});


/***** Replacing container with container-fluid ********/

function updateClassesAndMargins(sectionId, marginRightLeft, addFluid = true) {
    if (window.matchMedia("(min-width: 1900px)").matches) {
        document.querySelectorAll(`${sectionId} .container`).forEach(element => {
            element.classList.remove('container');
            if (addFluid) {
                element.classList.add('container-fluid');
            }
            element.style.margin = `auto ${marginRightLeft}`;
        });
    }
}

function updateAllSections() {
    updateClassesAndMargins('#AboutMe', '0', true);
    updateClassesAndMargins('#Resume', '10rem', false);
    updateClassesAndMargins('#Contact', '20rem', false);
}

updateAllSections();

window.addEventListener('resize', updateAllSections);