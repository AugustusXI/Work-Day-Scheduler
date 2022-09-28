var currentTime = moment().format("dddd, MMM Do, YYYY, h:mm:ss");
$("#currentDay").text(currentTime);

let nineAm = $("#9am");
let tenAm = $("#10am");
let elevenAm = $("#11am");
let twelvePm = $("#12pm");
let onePm = $("#1pm");
let twoPm = $("#2pm");
let threePm = $("#3pm");
let fourPm = $("#4pm");
let fivePm = $("#5pm");

let timeBlocksArray = [
  nineAm,
  tenAm,
  elevenAm,
  twelvePm,
  onePm,
  twoPm,
  threePm,
  fourPm,
  fivePm,
];
// -----------------------------------------------------
function timeBlocksColor() {
  let currentTime = moment().format("kk");

  for (let i = 0; i < timeBlocksArray.length; i++) {
    timeBlocksArray[i].removeClass("past present future");

    if (currentTime > timeBlocksArray[i].attr("time")) {
      timeBlocksArray[i].addClass("past");
    } else if (currentTime === timeBlocksArray[i].attr("time")) {
      timeBlocksArray[i].addClass("present");
    } else {
      timeBlocksArray[i].addClass("future");
    }
  }
}
timeBlocksColor();
// --------------------------------------------------------
$(".btn").on("click", function () {
  let text = $(this).siblings(".form-control").val();
  let time = $(this).siblings("textarea").attr("id");
  localStorage.setItem(time, text);
});
// ------------------------------------------------------------
nineAm.val(localStorage.getItem("9am"));
tenAm.val(localStorage.getItem("10am"));
elevenAm.val(localStorage.getItem("11am"));
twelvePm.val(localStorage.getItem("12pm"));
onePm.val(localStorage.getItem("1pm"));
twoPm.val(localStorage.getItem("2pm"));
threePm.val(localStorage.getItem("3pm"));
fourPm.val(localStorage.getItem("4pm"));
fivePm.val(localStorage.getItem("5pm"));
