function filter(){
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
				
					portfolioBlock[i].style.display = 'none';
					
					
					if(portfolioBlock[i].classList.contains(targetClass)){
						portfolioBlock[i].style.display = 'block';
						noWorks.style.display = 'none';
					}
					} 
			e.target.classList.add('active');
			if (e.target.classList.contains('grandmother') || e.target.classList.contains('granddad')){
				
		noWorks.style.display = 'block';
			} else {
				noWorks.style.display = 'none';
			}
		}
	});
}
export default  filter;