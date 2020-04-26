const CORRECTTEXT = "Correct!";
const INCORRECTTEXT = "Not quite! The correct answer is:";

let score = 0;
let points = 0;

$('.button').click((e) => {
    // Get states
    let target = $(e.target)
    let num = target.attr("number");

    // Set feedback text
    $(`p[number=${num}]`).text(target.hasClass('correct') ? CORRECTTEXT : INCORRECTTEXT);

    // Show text
    $(`div[number=${num}]`).toggleClass("hidden");

    // Style buttons
    $(`button[number=${num}]`).not(".correct").toggleClass("is-danger");
    $(`button[number=${num}].correct`).toggleClass("is-primary");
    $(`button[number=${num}]`).attr("disabled", 1);
});
