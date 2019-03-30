function menu(){
	console.log('menu');
	let mobileMenu = document.querySelector('.burger');
	let textMenu = mobileMenu.querySelector('span');
	let desktopMenu = document.querySelector('.header-menu');
	let burgerList = document.querySelector('.burger-menu');
	let width = document.body.clientWidth;
	
	window.addEventListener('load', toggleMenu);
	window.addEventListener('resize', toggleMenu);
	mobileMenu.addEventListener('click', toggleOpening);

	function toggleOpening(){
		console.log('click');
		if (burgerList.style.display == 'block'){
			burgerList.style.display = 'none';
		} else {
			burgerList.style.display = 'block';
		}
	}
	function toggleMenu(){
		console.log('resizing...');
		if(width <= 1080){
			console.log('width equals: ' + width);
			mobileMenu.style.display = 'block';
			desktopMenu.style.display = 'none';
			
			textMenu.style.display = 'none';
			
				} else if (width > 1080){
					desktopMenu.style.display = 'block';
					burgerList.style.display = 'none';
					mobileMenu.style.display = 'none';
					
				}
	}
	
}
export default  menu;