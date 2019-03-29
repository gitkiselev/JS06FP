function filter(){
	console.log('filter');
	let portfolioMenu = document.querySelector('.portfolio-menu');
	let portfolioBlock = document.querySelectorAll('.portfolio-block');
	let noWorks = document.querySelector('.portfolio-no');
	

	
	
	portfolioMenu.addEventListener('click', function(e){
		let targetClass = e.target.getAttribute('class');
		if(e.target.classList.contains('active')){
			return;
		}else {
			
			for(let i = 0; i < portfolioMenu.children.length; i++){
				portfolioMenu.children[i].classList.remove('active');
				
			}
			for(let i = 0; i < portfolioBlock.length; i++){
				console.log(targetClass);
					portfolioBlock[i].style.display = 'none';//прячем все блоки
					
					if(portfolioBlock[i].classList.contains(targetClass)){
						portfolioBlock[i].style.display = 'block';

					}
					} 
			e.target.classList.add('active');
			if (e.target.classList.contains('grandmother') || e.target.classList.contains('granddad')){
				
		noWorks.style.display = 'block';
			}
		}
			
				
	});
}
export default  filter;