function menu(){
	
	let mobileMenu = document.querySelectorAll('.burger')[0];
	let textMenu = mobileMenu.querySelector('span');
	let desktopMenu = document.querySelector('.header-menu');
	let burgerList = document.querySelector('.burger-menu');
	let width = (window.innerWidth ? window.innerWidth : (document.documentElement.clientWidth ? 
							document.documentElement.clientWidth : document.body.offsetWidth));
							
	window.addEventListener('DOMContentLoaded', toggleMenu);
	window.addEventListener('resize', toggleMenu);
	mobileMenu.addEventListener('click', toggleOpening);

	function toggleOpening(){
		
		if (burgerList.style.display == 'block'){
			burgerList.style.display = 'none';
		} else {
			burgerList.style.display = 'block';
		}
	}
	
	function toggleMenu(){
	
		
		
		burgerList.style.display = 'none';//при ресайзе скрою
		if(width <= 1080 && mobileMenu.style.display == 'block' && desktopMenu.style.display == 'block'){
			
			mobileMenu.style.display = 'block';
			desktopMenu.style.display = 'none';
			
			textMenu.style.display = 'none';
			
				} else if (width > 1080 && desktopMenu.style.display == 'none' && mobileMenu.style.display == 'block'
				 ){
					
					desktopMenu.style.display = 'block';
					
					textMenu.style.display = 'none';
				}
	}
	
}
export default  menu;