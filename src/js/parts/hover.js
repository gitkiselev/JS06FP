function hover(){
	console.log('hover');
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
	
	let sizesImages = sw.querySelectorAll('img');

	// for(let i = 0; i < sizesImages.length; i++){
	// 	let img = sizesImages[i];
	// 	img.addEventListener('click', function(){
	// 		console.log('event on image');
	// 		if(img.src == 'img/sizes-4.png'){
	// 			img.src = 'img/sizes-' + [i + 1] + '-1.png';
	// 		} else if (img.src == 'img/sizes-4-1.png'){
	// 			img.src = 'img/sizes-' + [i + 1] + '.png';
	// 		}
			
	// 	});
	// }
// 	function chngimg4() {
// 		var img = document.getElementById('sz4');
// 		if (img.src.indexOf('img/sizes-4.png')!=-1) {
// 						img.src  = 'img/sizes-4-1.png';
// 		}
// 			else {
// 					img.src = 'img/sizes-4.png';
// 	}

// }
// let sz4 = document.getElementById('sz4');
// sz4.addEventListener('touchstart', chngimg4);
	}
	
export default  hover;