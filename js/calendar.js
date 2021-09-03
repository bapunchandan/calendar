var today = new Date();
today.setDate(1);
var preDays = today.getDay();
var endDate = new Date(
  today.getFullYear(),
  today.getMonth() + 1, 0
).getDate();
var nextMonths = new Date(
  today.getFullYear(),
  today.getMonth() + 1, 0
).getDay();
var a = 7 - nextMonths - 1;

var lastMonth = new Date(
  today.getFullYear(),
  today.getMonth(), 0
).getDate();
var presentDay = new Date().getDate();
document.getElementById("today-date").innerHTML = today.toLocaleString('default', { month: 'long' });
var todays = new Date();
document.getElementById("today-year").innerHTML = todays.getFullYear();
var days = "";
for (let j = preDays; j > 0; j--) {
  days += "<div class='next-date'>" + (lastMonth - j + 1) + "</div>"
}
for (let i = 1; i <= endDate; i++) {
  if (i == presentDay) {
    days += "<div class='today'>" + i + "</div>";
  } else {
    days += "<div>" + i + "</div>";
  }
}
for (let k = 1; k <= a; k++) {
  days += "<div class='next-date'>" + k + "</div>";
}
document.getElementsByClassName("days")[0].innerHTML = days;
