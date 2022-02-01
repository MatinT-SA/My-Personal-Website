//MatinTaherzadeh
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
    ;

const appearOptionsMainTitles = {
    threshold: 0,
    rootMargin: "0px 0px -120px 0px"
}
    ;

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

//an option for smooth scroll js with script
const scroll = new SmoothScroll('.mainMenu a[href*="#"]', {
    speed: 350,
});

//GoToTopButton
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

//highlight nav menu on scroll with js but first we specify const variables at top
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

//AJAX formSubmit didn't work properly
// $("#Comment button").click(function (e) {
//
//     // if (validateForm()) {
//     //     let UserEmail = $(this).serialize();
//     // e.preventDefault();
//     $.ajax({
//         method: 'POST',
//         url: 'https://formsubmit.co/ajax/matin.taherzadeh.mmtsa@gmail.com',
//         dataType: 'json',
//         accepts: 'application/json',
//         data: {
//             subject: document.querySelector('[name="_subject"]').value,
//             email: document.getElementById('CommentEmail').value,
//             message: document.getElementById('CommentMessage').value
//         },
//         // success: (data) => console.log(data),
//         // error: (err) => console.log(err)
//         success: function (result) {
//             alert('ok');
//         },
//         error: function (result) {
//             alert('error');
//         }
//     });
//     // }
//     // alert('ایمیل وارد شده صحیح نمی باشد');
//     // return false;
// });

//Force Page Scroll Top
// history.scrollRestoration = "manual";
//
// $(window).on('beforeunload', function(){
//       $(window).scrollTop(0);
// });

$(document).ready(function () {
    $(window).scrollTop(0);
});

// End of MatinTaherzadeh

//header

//hamburger menu
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

//fixed navigation
$(document).ready(function () {

    // Calculate the height of <header>
    // Use outerHeight() instead of height() if have padding
    var aboveHeight = $('header').height();

    // when scroll
    $(window).scroll(function () {

        // if scrolled down more than the header’s height
        if ($(window).scrollTop() > aboveHeight) {

            // if yes, add “fixed” class to the <nav>
            // add padding top to the #content
            // (value is same as the height of the nav)
            $('nav').addClass('fixed').css('top', '0').next().css('padding-top', '70px');

        } else {

            // when scroll up or less than aboveHeight,
            // remove the “fixed” class, and the padding-top
            $('nav').removeClass('fixed').css('padding-top', '0');
        }
    });
});

//navigation link active class
$(document).ready(function () {
    $('#header-nav ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
    });
});

// End of header

//Skills

const fadersSkills = document.querySelectorAll('.fade-in-skills');
const slidersSkills = document.querySelectorAll('.slide-in-skills');
const appearOptionsSkills = {
    threshold: 0,
    rootMargin: "0px 0px -120px 0px"
}
    ;

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

fadersSkills.forEach(Fader => {
    appearOnScrollSkills.observe(Fader);
});

slidersSkills.forEach(Slider => {
    appearOnScrollSkills.observe(Slider);
});

// End of Skills

//Resume

const fadersResume = document.querySelectorAll('.fade-in-resume');
const slidersResume = document.querySelectorAll('.slide-in-resume');
const appearOptionsResume = {
    threshold: 0,
    rootMargin: "0px 0px 10px 0px"
}
    ;

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

//carousel
$('.carousel').carousel({
    interval: 2500
});

// End of Resume

//Entrepreneur

const fadersEntrepreneur = document.querySelectorAll('.fade-in-entrepreneur');
const slidersEntrepreneur = document.querySelectorAll('.slide-in-entrepreneur');
const appearOptionsEntrepreneur = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
}
    ;

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

// End of Entrepreneur

//Contact

const fadersContact = document.querySelectorAll('.fade-in-contact');
const slidersContact = document.querySelectorAll('.slide-in-contact');
const appearOptionsContact = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
}
    ;

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

fadersContact.forEach(fader => {
    appearOnScrollContact.observe(fader);
});

slidersContact.forEach(slider => {
    appearOnScrollContact.observe(slider);
});

// End of Contact

//Comment

const fadersComment = document.querySelectorAll('.fade-in-comment');
const slidersComment = document.querySelectorAll('.slide-in-comment');
const appearOptionsComment = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
}
    ;

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

// End of Comment