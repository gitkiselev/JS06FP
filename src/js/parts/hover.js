function hover(){
	console.log('hover');
	let sw = document.querySelector('.sizes-wrapper');
  sw.addEventListener('mouseover', showImages);
		sw.addEventListener('mouseout', hideImages);
		sw.addEventListener('tap', hideImagesM);
		
	function showImages(e){
		console.log('showImages function');
		if(e.target.tagName == 'IMG'){
			 e.target.style.position = 'relative';
				e.target.style.zIndex = '10';
				e.target.src = e.target.src.replace('.png', '-1.png');
		}
	}

	function hideImages(e){
		console.log('hideImages function');
		if(e.target.tagName == 'IMG'){
			e.target.style.position = '';
				e.target.style.zIndex = '';
				e.target.src = e.target.src.replace('-1.png', '.png');
		}
	}
	function hideImagesM(e){
		
		if(e.target.tagName != 'IMG'){
			console.log('tap not image');
			 e.target.style.position = '';
				e.target.style.zIndex = '';
				e.target.src = e.target.src.replace('-1.png', '.png');
				
		} 
	}
	
	let sizesImages = sw.querySelectorAll('img');

	for(let i = 0; i < sizesImages.length; i++){
		let img = sizesImages[i];
		img.addEventListener('click', function(e){
			console.log('click on image');
			if(img.src == 'img/sizes-4.png'){
				img.src = 'img/sizes-' + [i + 1] + '-1.png';
			} else if (img.src == 'img/sizes-4-1.png'){
				img.src = 'img/sizes-' + [i + 1] + '.png';
			}
			
		});
	}
	}
	
export default  hover;