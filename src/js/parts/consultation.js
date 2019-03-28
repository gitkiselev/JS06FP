function consultation(){
	console.log('consultation');
	document.body.addEventListener('click', e => {
		if (e.target.tagName == 'BUTTON' && e.target.classList.contains('button-consultation')) {
			console.log(e.target);
			showPopupConsultation();
		}
	});

	let btnsPopupClose     = document.querySelectorAll('.popup-close');//X
	
	let popupConsultation = document.querySelector('.popup-consultation');//overlay
	//closing popup by clicking on overlay
	popupConsultation.addEventListener('click', hidePopupModalConsultation);
	function hidePopupModalConsultation(e){
		console.log('hide design or consultation');
		if(e.target.classList.contains('popup-consultation') || e.target.classList.contains('popup-close')){
			popupConsultation.style.display = 'none';
			document.body.style.overflow = '';
		}			
	}
	//closing by clicking on the button "X"
	for(let i = 0; i < btnsPopupClose.length; i++){
		let btnPopupClose = btnsPopupClose[i];
		btnPopupClose.addEventListener('click', hidePopupModalConsultation);
	}
	function showPopupConsultation(){
			popupConsultation.style.display = 'block';
			//popupConsultation.style.zIndex = '1000000000';
			document.body.style.overflow = 'hidden';	
	}
	// for(let i = 0; i < btnsConsultation.length; i++){
	// 	let btnConsultation = btnsConsultation[i];
	// 	btnConsultation.addEventListener('click', showPopupConsultation);
	// }








}
export default  consultation;