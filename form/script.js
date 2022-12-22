const form = document.querySelector("form");
/*
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(form);

    //fetch("https://script.google.com/macros/s/AKfycbxm_Uj1mN-X92LSpyvHGjjh6V3aoL1C5FJU2w_E-j7HLovohZ5jFPN3NsrojY5Do7fYdQ/exec",
    fetch("https://script.google.com/macros/s/AKfycbyB_39W9fVyTYhNjFLpNMW3Z9IrE_73t7dvCrY9WfxBIgXtS2xlkptfD05yGjw9tEwO/exec",
        {
            method: "POST",
            body: data
        })
        .then(res => res.text())
        .then(data => console.log(data))
});
*/

let id = Date.now().toString().slice(9, 13);
console.log(id);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = new FormData(form);
    const courseInput = data.get("Course");
    const dateInput = data.get("Date").replace('T', ' ').toLocaleString('en-US');
    const detailsInput = data.get("Details");
    const fullNameInput = data.get("Fullname").replace(/\b\w/g, c => c.toUpperCase());
    const phoneInput = data.get("Phone");
    const emailInput = data.get("Email");

    console.table([
        courseInput,
        dateInput,
        detailsInput,
        fullNameInput,
        phoneInput,
        emailInput,
    ]);

    setTimeout(() => {
        const whatsAppMessage = `https://api.whatsapp.com/send/?phone=13054813727&text=*Welcome+to+Aiudaa!*%0A%0AName👤:%20${fullNameInput}%0ACourse🧮:%20${courseInput}%0ADue+Date🗓️:%20${dateInput}%0ADescriptions📝:%20${detailsInput}%0APhone📞:%20${phoneInput}%0AEmail✉️:%20${emailInput}%0A%0AOrder+Number%20${id}%23&type=phone_number&app_absent=0`;
        window.open(whatsAppMessage, '_blank');



    }, 1500)





    setTimeout(() => {

        form.reset();

        firstSlide.classList.remove("upPosition");
        secondSlide.classList.remove("upPosition");
        thirdSlide.classList.remove("upPosition");
        fourthSlide.classList.remove("upPosition");
        fivethSlide.classList.remove("upPosition");

        // firstSlide.classList.remove("initialPosition");
        firstSlide.classList.add("initialPosition");
        secondSlide.classList.remove("initialPosition");
        thirdSlide.classList.remove("initialPosition");
        fourthSlide.classList.remove("initialPosition");
        fivethSlide.classList.remove("initialPosition");

        //firstSlide.classList.add("downPosition");
        secondSlide.classList.add("downPosition");
        thirdSlide.classList.add("downPosition");
        fourthSlide.classList.add("downPosition");
        fivethSlide.classList.add("downPosition");

        location.reload();
    }, 8000)


    //fetch("https://script.google.com/macros/s/AKfycbxm_Uj1mN-X92LSpyvHGjjh6V3aoL1C5FJU2w_E-j7HLovohZ5jFPN3NsrojY5Do7fYdQ/exec",

    /*
    */

    fetch("https://script.google.com/macros/s/AKfycbyB_39W9fVyTYhNjFLpNMW3Z9IrE_73t7dvCrY9WfxBIgXtS2xlkptfD05yGjw9tEwO/exec",
        {
            method: "POST",
            body: data
        })
        .then(res => console.log(res.text()))
        .then(data => console.log(data))


});

/*------------------------*/

const newOrderBtn = document.querySelector("#newOrderBtn");
newOrderBtn.addEventListener("click", () => {
    firstSlide.classList.remove("upPosition");
    secondSlide.classList.remove("upPosition");
    thirdSlide.classList.remove("upPosition");
    fourthSlide.classList.remove("upPosition");
    fivethSlide.classList.remove("upPosition");

    // firstSlide.classList.remove("initialPosition");
    secondSlide.classList.remove("initialPosition");
    thirdSlide.classList.remove("initialPosition");
    fourthSlide.classList.remove("initialPosition");
    fivethSlide.classList.remove("initialPosition");






    firstSlide.classList.add("initialPosition")
    secondSlide.classList.add("downPosition");
    thirdSlide.classList.add("downPosition");
    fourthSlide.classList.add("downPosition");
    fivethSlide.classList.add("downPosition");
    /*
    */

});

const firstSlide = document.querySelector(".firstSlide");

const secondSlide = document.querySelector(".secondSlide");
const thirdSlide = document.querySelector(".thirdSlide");
const fourthSlide = document.querySelector(".fourthSlide");
const fivethSlide = document.querySelector(".fivethSlide");

const next1 = document.querySelector("#nextOne");
const next2 = document.querySelector("#nextTwo");
const next3 = document.querySelector("#nextThree");
const next4 = document.querySelector("#nextFour");


//secondSlide.style.opacity = 0.5

//secondSlide.classList.add("fieldsetResize")

/*
thirdSlide.classList.toggle('desactivado');
fourthSlide.classList.toggle('desactivado');
fivethSlide.classList.toggle('desactivado');
let slide1 = document.querySelector(".slide1");
let slide2 = document.querySelector(".slide2");
let slide3 = document.querySelector(".slide3");
let slide4 = document.querySelector(".slide4");
let slide5 = document.querySelector(".slide5");


slide3.classList.toggle('desactivado');
slide4.classList.toggle('desactivado');
slide5.classList.toggle('desactivado');
*/

next1.addEventListener("click", (e) => {
    firstSlide.classList.remove("initialPosition");
    firstSlide.classList.add("upPosition");
    //firstSlide.classList.add("downPosition")
    secondSlide.classList.remove("downPosition");

    secondSlide.classList.add("initialPosition");



    //  slide3.classList.toggle('activo');



});


setInterval(() => {

    if (firstSlide.className.includes("upPosition")) {
        next1.style.visibility = 'hidden';
    }
    if (secondSlide.className.includes("upPosition")) {
        next2.style.visibility = "hidden";
        back1.style.visibility = 'hidden';
    }
    if (thirdSlide.className.includes('upPosition')) {
        next3.style.visibility = 'hidden';
        back2.style.visibility = 'hidden';
    }
    if (fourthSlide.className.includes("upPosition")) {
        next4.style.visibility = 'hidden';
        back3.style.visibility = 'hidden';
    }

}, 20);

setInterval(() => {

    if (firstSlide.className.includes("downPosition")) {
        next1.style.visibility = 'hidden';
    }
    if (secondSlide.className.includes("downPosition")) {
        next2.style.visibility = "hidden";
        back1.style.visibility = 'hidden';
    }
    if (thirdSlide.className.includes('downPosition')) {
        next3.style.visibility = 'hidden';
        back2.style.visibility = 'hidden';
    }
    if (fourthSlide.className.includes("downPosition")) {
        next4.style.visibility = 'hidden';
        back3.style.visibility = 'hidden';
    }

}, 20)


setInterval(() => {

    if (firstSlide.className.includes("initialPosition")) {
        next1.style.visibility = 'visible';
    }
    if (secondSlide.className.includes("initialPosition")) {
        next2.style.visibility = "visible";
        back1.style.visibility = 'visible';
    }
    if (thirdSlide.className.includes('initialPosition')) {
        next3.style.visibility = 'visible';
        back2.style.visibility = 'visible';
    }
    if (fourthSlide.className.includes("initialPosition")) {
        next4.style.visibility = 'visible';
        back3.style.visibility = 'visible';
    }


}, 10)


next2.addEventListener("click", (e) => {
    secondSlide.classList.add("upPosition");
    secondSlide.classList.remove("initialPosition")
    thirdSlide.classList.remove("downPosition");
    thirdSlide.classList.add("initialPosition");

    //  slide4.classList.toggle("activo")

    //firstSlide.classList.toggle("desactivado");
    //thirdSlide.classList.toggle("descativado")


});
next3.addEventListener("click", () => {
    thirdSlide.classList.remove("initialPosition");
    thirdSlide.classList.add("upPosition");
    fourthSlide.classList.remove("downPosition");
    fourthSlide.classList.add("initialPosition");

    //secondSlide.classList.add("desactivado");
    //fivethSlide.classList.replace("desactivado", 'activo')

    //ourthSlide.classList.replace("desactivado", 'activo');
    //firstSlide.classList.toggle("activo")

    //secondSlide.classList.toggle("desactivado")
});
next4.addEventListener("click", () => {
    fourthSlide.classList.remove("initialPosition");
    fourthSlide.classList.add("upPosition");
    fivethSlide.classList.remove("downPosition");
    fivethSlide.classList.add("initialPosition");

    // thirdSlide.classList.replace("activo", "desactivado");


});


/*
*/
const back1 = document.querySelector(".backBtn1");
const back2 = document.querySelector(".backBtn2");
const back3 = document.querySelector(".backBtn3");

back1.addEventListener("click", () => {
    secondSlide.classList.remove("initialPosition");
    secondSlide.classList.add("downPosition");
    firstSlide.classList.remove("upPosition");
    firstSlide.classList.add("initialPosition");


    /*
    thirdSlide.classList.replace("activo", "desactivado");
    firstSlide.classList.replace("desactivado", "activo");
    secondSlide.classList.replace("desactivado", "activo")
    */



});

back2.addEventListener("click", () => {
    secondSlide.classList.replace("upPosition", "initialPosition");
    thirdSlide.classList.replace("initialPosition", "downPosition");
    //fourthSlide.classList.replace("activo", "desactivado");
});
back3.addEventListener("click", () => {
    fourthSlide.classList.replace("initialPosition", "downPosition");
    thirdSlide.classList.replace("upPosition", "initialPosition");

    //fivethSlide.classList.replace("activo", "desactivado")
});




$(document).ready(function () {
    var currentGfgStep, nextGfgStep, previousGfgStep;
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;
    console.log(steps);

    setProgressBar(current);

    $(".nexts-step").click(function () {

        currentGfgStep = $(this).parent();
        nextGfgStep = $(this).parent().next();

        $("#progressbar li").eq($("fieldset")
            .index(currentGfgStep)).addClass("active");

        nextGfgStep.show();
        /*
        currentGfgStep.animate({ opacity: 0 }, {
            step: function (now) {
                opacity = 1 - now;
                
                currentGfgStep.css({
                    'display': 'none',
                    'position': 'relative'
                });
                nextGfgStep.css({ 'opacity': opacity });
            },
            duration: 500
        });
        */
        setProgressBar(++current);
    });

    $(".previous-step").click(function () {

        currentGfgStep = $(this).parent();
        previousGfgStep = $(this).parent().prev();

        $("#progressbar li").eq($("fieldset")
            .index(currentGfgStep)).removeClass("active");

        previousGfgStep.show();
        /*
        currentGfgStep.animate({ opacity: 0 }, {
            step: function (now) {
                        opacity = 1 - now;
        
                        currentGfgStep.css({
                            'display': 'none',
                            'position': 'relative'
                        });
                        previousGfgStep.css({ 'opacity': opacity });
                    },
                    duration: 500
                });
                */
        setProgressBar(--current);
    });

    function setProgressBar(currentStep) {
        var percent = parseFloat(100 / steps) * current;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width", percent + "%")
    }
    /*
    $(".submit").click(function () {
        return false;
    })
     */
});









/*Course validation */


const courseValueInput = document.querySelector("#course");

next1.style.pointerEvents = 'none';
function checkSelect() {

    if (courseValueInput.value !== "Select") {
        next1.style.pointerEvents = 'auto';
    }
    else {
        next1.style.pointerEvents = 'none';
    }
};

/*Date validation */
let dateValueInput = document.querySelector("#dataTime");

next2.style.pointerEvents = 'none';
function checkDate() {
    if (dateValueInput.value === getLocalDate(date)) {
        //next2.style.pointerEvents = 'none';
        next2.style.backgroundColor = 'red';

    }
    else {
        next2.style.pointerEvents = 'auto'
    }
}

/* Personal details  */
const nameValueInput = document.querySelector("#fullname");
const numberValueInput = document.querySelector("#number");
const emailValueInput = document.querySelector("#email");
next4.style.pointerEvents = 'none';
function checkName() {

    if (nameValueInput.value === "") {
        next4.style.pointerEvents = 'none';
        next4.style.backgroundColor = 'red';

    }
    else {
        next4.style.pointerEvents = 'auto'
    }
}
function checkNumber() {

    if (numberValueInput.value === "") {
        nex4.style.pointerEvents = 'none';
        next4.style.backgroundColor = 'red';

    }
    else {
        next4.style.pointerEvents = 'auto'
    }
}
function checkEmail() {

    if (emailValueInput.value === "") {
        next4.style.pointerEvents = 'none';
        next4.style.backgroundColor = 'red';

    }
    else {
        next4.style.pointerEvents = 'auto'
    }
}




//next1.style.pointerEvents = 'auto';

//course.addEventListener("change", checkSelect());









const offset = new Date().getTimezoneOffset() * 1000 * 60
const getLocalDate = value => {
    const offsetDate = new Date(value).valueOf() - offset
    const date = new Date(offsetDate).toISOString();

    dateValueInput.min = date.substring(0, 16);
    // dataTimeInput.value = date.substring(0, 16)
}


const date = new Date();
console.log(dateValueInput);

console.log(date);

getLocalDate(date);
/*

*/


















/*
const fieldsets = document.querySelectorAll("fieldset");
const btn = document.querySelectorAll(".nextBtn");
console.log(fieldsets);

fieldsets.forEach((slide) => {
    console.log(slide.className.includes("downPosition"));

    if (slide.className.includes('downPosition')) {
        //  alert("Working");
        btn.forEach((element) => {
            element.style.visibility = 'hidden'
            next2.style.visibility = "hidden";
            next3.style.visibility = "hidden";
            next4.style.visibility = "hidden";
        })
        //    next1.style.visibility = "hidden";
        
        
    }
})
*/























