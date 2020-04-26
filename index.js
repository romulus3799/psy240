const CORRECTTEXT = "Correct!";
const INCORRECTTEXT = "Not quite! The correct answer is:";

let score = 0;
let points = 0;

$('.button').click((e) => {
    // Get states
    let target = $(e.target)
    let num = target.attr("number");

    // Style and disable buttons
    $(`button[number=${num}]`).not(".correct").toggleClass("is-danger");
    $(`button[number=${num}].correct`).toggleClass("is-primary");
    $(`button[number=${num}]`).attr("disabled", 1);

    // Set message box color
    $(`article[number=${num}].message`).toggleClass(target.hasClass('correct') ? 'is-primary' : 'is-danger');

    // Show message box
    $(`div[number=${num}]`).toggleClass("hidden");

});
