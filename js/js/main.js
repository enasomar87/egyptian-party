// $('.toggle').on('click', function (e) {
//     console.log('click', $('e.target').attr(' data-code'));
//     // $('e.target').show(1000)
// })



$('#leftMenu .sidenav a').on('click', function (e) {
    const sectionTogo = $(e.target).attr('href')
    const sectionOffset = $(sectionTogo).offset().top
    $("html, body").animate({ scrollTop: sectionOffset }, 1000)
})



$('#home-content .openNav').click(function () {
    $('#leftMenu').animate({ width: '15%' },)
})


$('#leftMenu .closebtn').click(function () {
    $('#leftMenu').animate({ width: '0%' },)
})



$('#sliderDown .toggle').click(function (e) {
    const innerText = $(e.target).attr('data-code')
    console.log(innerText);
    $('#sliderDown div').animate({ display: 'block' }, 1000)
})



// Set the date we're counting down to
var countDownDate = new Date("dec 25, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="count"
    document.getElementById("days").innerHTML = days + "d "
    document.getElementById("hours").innerHTML = hours + "h "
    document.getElementById("minutes").innerHTML = minutes + "m "
    document.getElementById("seconds").innerHTML = seconds + "s "
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counting").innerHTML = "EXPIRED";
    }
}, 1000);


// const textarea = document.getElementById('textarea');

// function validateTextarea() {
//     var regex = /^[A-z][a-z]{100}$/
//     if (isValid){

// }else {

// }
// }
// const isValid = textarea.checkValidity();

// if (isValid) {

// // The textarea is valid

// } else {

// // The textarea is invalid

// }


// document.getElementById("myTextarea").maxLength = "4"
// function validateTextarea() {
//     var regex = /^[A-z][a-z]{100}$/

//     var isValid = regex.test(textarea.value)
//     if (isValid){

// }else {
// document.getElementsByClassName("error").classlist.replace("d-none","d-block")

// }}

// validateTextarea()

// function myFunction() {
//     document.getElementById("myTextarea").maxLength = "4";
//     document.getElementById("demo").innerHTML = "Maximum number of characters allowed in the text area is now 4.";
//   }






//   const messageEle = document.getElementById('myTextarea');
// const counterEle = document.getElementById('chars');

// messageEle.addEventListener('input', function (e) {
//     const target = e.target;

//     // Get the `maxlength` attribute
//     const maxLength = target.getAttribute('maxlength');

//     // Count the current number of characters
//     const currentLength = target.value.length;

//     counterEle.innerHTML = `${currentLength}/${maxLength}`;

//     if (isValid){

//         }else {
//         document.getElementsById("error").classlist.replace("d-none","d-block")

// }
// });







// const myTextArea = document.getElementById('myTextarea');
// const remainingCharsText = document.getElementById('chars');
// const max_chars = 100;

// myTextArea.addEventListener('input' , () =>{

//     const remaining = max_chars - myTextArea.Value.length;
// console.log(remaining);
//     remainingCharsText.textContent =`${remaining} characters remaining`
// }
// )





const myTextArea = document.getElementById('myTextarea');
const remainingCharsText = document.getElementById('chars');
const max_chars = 100;

myTextArea.addEventListener('input' , function (e) {
    const target = e.target
    const currentLength = target.value.length;
    const remaining = max_chars -  currentLength;
console.log(remaining);
if (currentLength<max_chars) {
    remainingCharsText.textContent =`${remaining} characters remaining`
}else{
    // document.getElementById("error").classlist.replace("d-none","d-block")
    $('#error').fadeIn()

}
   
}


)






// $(document).ready(function () {
//     $('textarea').on('keyup', function () {
//         // Store the maxlength and value of the field.
//         if (!maxlength) {
//             var maxlength = $(this).attr('maxlength');
//         }
//         var val = $(this).val();
//         var vallength = val.length;
//         // alert
//         if (vallength >= maxlength) {
//             // alert('Please limit your response to ' + maxlength + ' characters');
//             // $(this).blur();
//            $('#error').fadeIn()
//         }
//         // Trim the field if it has content over the maxlength.
//         if (vallength > maxlength) {
//             $(this).val(val.slice(0, maxlength));
//         }
// })});
// // // remove maxlength on blur so that we can reset it later.
// // $('textarea').on('blur', function () {
// //     delete maxlength;
// // });




var acc = document.getElementsByClassName("toggle");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the inner */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active inner */
    var inner = this.nextElementSibling;
    if (inner.style.display === "block") {
      inner.style.display = "none";
    } else {
      inner.style.display = "block";
    }
  });
}


$('.toggle').click(function () {
    $('.inner').slideToggle(1000)
})
