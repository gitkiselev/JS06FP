function consultation(){
	console.log('consultation');
	let giftModal = document.querySelector('.popup-gift'),
	popupDesignOverlay = document.querySelector('.popup-design'),//overlay
	btnsPopupClose     = document.querySelectorAll('.popup-close'),
	popupConsultation = document.querySelector('.popup-consultation');//overlay
	document.body.addEventListener('click', e => {
		if (e.target.tagName == 'BUTTON' && e.target.classList.contains('button-consultation')) {
			console.log(e.target);
			showPopupConsultation();
		}
	});
	
	
	popupConsultation.addEventListener('click', hidePopupModalConsultation);
	function hidePopupModalConsultation(e){
		console.log('hide design or consultation');
		if(e.target.classList.contains('popup-consultation') || e.target.classList.contains('popup-close')){
			popupConsultation.style.display = 'none';
			document.body.style.overflow = '';
		}			
	}
	
	for(let i = 0; i < btnsPopupClose.length; i++){
		let btnPopupClose = btnsPopupClose[i];
		btnPopupClose.addEventListener('click', hidePopupModalConsultation);
		clearTimeout(timerId);	
	}
	function showPopupConsultation(){
			popupConsultation.style.display = 'block';
			
			document.body.style.overflow = 'hidden';
			
	}
	let timerId = setTimeout(() => {
		openModal();
}, 5000);
	
function openModal() {
	let computedStyleCons = window.getComputedStyle(popupConsultation).display,
					computedStyleGift = window.getComputedStyle(giftModal).display,
					computedStyleDesign = window.getComputedStyle(popupDesignOverlay).display;
	if (computedStyleCons == 'none' && computedStyleGift == 'none' && computedStyleDesign == 'none') {
		popupConsultation.style.display = 'block';
					document.body.style.overflow = 'hidden';
	}
}







}
export default  consultation;