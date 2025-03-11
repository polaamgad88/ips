document.addEventListener("DOMContentLoaded",function(){let banner=document.querySelector(".banner");let observer=new IntersectionObserver(function(entries){entries.forEach(entry=>{if(entry.isIntersecting){banner.classList.add("show")}})},{threshold:0.3});observer.observe(banner)});document.addEventListener("DOMContentLoaded",function(){const services=document.querySelectorAll(".service-item");function revealOnScroll(){services.forEach(service=>{const rect=service.getBoundingClientRect();if(rect.top<window.innerHeight-100){service.classList.add("show")}})}
window.addEventListener("scroll",revealOnScroll);revealOnScroll()});document.addEventListener("DOMContentLoaded",function(){const divisions=document.querySelectorAll(".division-card");function revealOnScroll(){divisions.forEach(division=>{const rect=division.getBoundingClientRect();if(rect.top<window.innerHeight-100){division.classList.add("show")}})}
window.addEventListener("scroll",revealOnScroll);revealOnScroll()});function toggleMenu(){document.getElementById("navMenu").classList.toggle("active")}
function closeMenu(){document.getElementById("navMenu").classList.remove("active")}
document.addEventListener("DOMContentLoaded",function(){const strategyText=document.querySelector(".strategy-text");function revealStrategyText(){if(!strategyText)return;const rect=strategyText.getBoundingClientRect();if(rect.top<window.innerHeight-50){strategyText.classList.add("show");window.removeEventListener("scroll",revealStrategyText)}}
window.addEventListener("scroll",revealStrategyText);revealStrategyText()})


