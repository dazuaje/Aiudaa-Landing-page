

//Loader

window.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.classList.add("loader--hidden");
        document.querySelector(".newOrderTable").classList.add("animate__slideInDown");
    }, 2000)

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});
/*
*/

//Carousel Rating config
const config = {
    type: 'carousel',
    perView: 1,
    autoplay: false,
    animationDuration: 2000,
    perView: 3,
    gap: 0,
    focusAt: 'center',
    bound: true,
    breakpoints: {
        800: {
            perView: 1,
        }
    }
}

new Glide('.glide', config).mount();


//Anchors
const newOrderTable = document.querySelector("#table");
newOrderTable.addEventListener("click", () => {

    window.open("../form/form.html", "_blank")
    //location.href = '../form/form.html';
});

/*
const sectionMission = document.querySelector(".section-mission");
sectionMission.addEventListener("click", () => {
    location.href = '../form/form.html';
    
});
*/

/*animate__slideOutRight*/


//Animation of scroll
const sectionBenefitsContainer = document.querySelector(".section-benefits");

const sectionRatingTitle = document.querySelector(".section-rating-title");
const sectionRatingContainer = document.querySelector(".section-rating");

const sectionStepsMascot14 = document.querySelector(".mascot14");
const sectionStepsTitle = document.querySelector(".steps-title");
const sectionStepsCardsSharpMark = document.querySelectorAll(".steps-cards .box-card .sharpMark");
console.log(sectionBenefitsContainer);

const sectionWilliamMeetWilliam = document.querySelector(".meetWilliam");
const sectionWilliamMascot19 = document.querySelector(".mascot19");

const iconBenefits = document.querySelectorAll(".icon-benefits");

const sectionMission = document.querySelector(".section-mission");

const sectionFooter = document.querySelector(".footer");

document.addEventListener("scroll", () => {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrolled = parseInt((scroll / height) * 100);
    console.log(scrolled);
    if (scrolled >= 5) {

        sectionStepsTitle.classList.add("animate__slideInRight");

        /*
        sectionStepsCardsSharpMark.forEach((element) => {
            element.classList.add("animate__bounceInLeft");
        });
        */
    }


    if (scrolled >= 9) {
        sectionStepsMascot14.classList.add("animate__slideInLeft");
    }
    if (scrolled >= 26) {
        sectionWilliamMeetWilliam.classList.add("animate__fadeInTopLeft");
        sectionWilliamMascot19.classList.add("animate__zoomIn");

    }
    if (scrolled >= 40) {
        sectionBenefitsContainer.classList.add("animate__fadeInUp");
        /*
        iconBenefits.forEach((element) => {
            
            element.classList.add("animate__tada");
        })
        */
    }
    if (scrolled >= 55) {
        sectionRatingContainer.classList.add("animate__fadeInUp");
        /* sectionRatingTitle.classList.add("animate__lightSpeedInRight");*/
    }
    if (scrolled >= 66) {
        sectionMission.classList.add('animate__fadeInUp');
    }
    if (scrolled >= 81) {
        sectionFooter.classList.add("animate__fadeInUp");
    }

});



const igLogo = document.querySelector(".igLogo");
const gmailLogo = document.querySelector(".gmailLogo");
const whatsappLogo = document.querySelector(".whatsappLogo");
gmailLogo.addEventListener("click", () => { window.open("mailto:help@aiudaa.com", "_blank") })
whatsappLogo.addEventListener("click", () => {
    const whatsapp = `https://api.whatsapp.com/send/?phone=541171535651&text=&type=phone_number&app_absent=0`;
    window.open(whatsapp, "_blank")
})
igLogo.addEventListener("click", () => { window.open("https://www.instagram.com/aiudaa.math/", "_blank") });