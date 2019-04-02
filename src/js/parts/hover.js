function hover(){
	
	let sw = document.querySelector('.sizes-wrapper');
  sw.addEventListener('mouseover', showImages);
		sw.addEventListener('mouseout', hideImages);
		sw.addEventListener('tap', hideImagesM);
		
	function showImages(e){
		
		if(e.target.tagName == 'IMG'){
			 e.target.style.position = 'relative';
				e.target.style.zIndex = '10';
				e.target.src = e.target.src.replace('.png', '-1.png');
		}
	}

	function hideImages(e){
		
		if(e.target.tagName == 'IMG'){
			e.target.style.position = '';
				e.target.style.zIndex = '';
				e.target.src = e.target.src.replace('-1.png', '.png');
		}
	}
	function hideImagesM(e){
		
		if(e.target.tagName != 'IMG'){
			
			 e.target.style.position = '';
				e.target.style.zIndex = '';
				e.target.src = e.target.src.replace('-1.png', '.png');
				
		} 
	}
	
	


	}
	
export default  hover;