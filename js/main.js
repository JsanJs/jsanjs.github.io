$(function() {
  $(".typing").typed({
    strings: ["Welcome and thank you for visiting my website!", "I am currently a senior student at UTSA.", "I study the field of Computer Science.", "My main concentration lies in Software Engineering.", "I also have concentration in Cloud Computing and Data Science.", "I'm also familiar with Cyber Security.", "Want to know more? Scroll down!"],
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
