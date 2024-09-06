/*Hamburger menu*/
function menuOnClick(){
	document.getElementById("menu_checkbox").classList.toggle("change");
	
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
}

function menuToggle() {
	var target = document.querySelector('.menu-label');
	var scrollWrap = document.querySelector('.menu');
	var body = document.body;
	var nav = document.querySelector('.nav');
	  menuToggle.scrollTop = 0;
  
	  target.addEventListener('click',onClick);
  
	  function onClick(e) {      
		var scrollTop = window.scrollTop;
  
		if (target.classList.contains("is-open")) {
		  target.classList.remove('is-open');
		  nav.classList.remove('on');
		  scrollWrap.style.cssText = ''; 
		  body.style.cssText = '';
		} else {
		  menuToggle.scrollTop = window.scrollY;
		  body.style.overflow = 'hidden'
		  scrollWrap.style.position = 'fixed';
		  scrollWrap.style.width = '100%';
		  scrollWrap.style.top = -menuToggle.scrollTop + 'px';
		  target.classList.add('is-open');
		  nav.classList.add('on');
		}
	  }
  }
menuToggle();