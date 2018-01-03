$(function() {
  $(".typing").typed({
    strings: ["Welcome to my website!", "I am currently a student at UTSA.", "I study the field of Computer Science.", "Want to know more? Scroll down!"],
    typeSpeed: 30,
    backDelay: 1000,
    loop: true
  });
});

window.addEventListener('DOMContentLoaded', function() {
  QueryLoader2(document.querySelector("body"), {
    barColor: "#efefef",
    backgroundColor: "#ff9966",
    percentage: true,
    barHeight: 1,
    minimumTime: 500,
    fadeOutTime: 1500
  });
});
