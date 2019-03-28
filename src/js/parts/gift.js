function gift(){
	console.log('gift');
	let btnsPopupClose     = document.querySelectorAll('.popup-close');
	let gift = document.querySelector('.fixed-gift');
		let giftModal = document.querySelector('.popup-gift');
		gift.addEventListener('click', showGiftModal);
		function showGiftModal(){
			giftModal.style.display = 'block';
			document.body.overflow = 'hidden';
			gift.style.display = 'none';
		}
		function hidePopupModalGift(e){
			console.log('hide design or consultation');
			if(e.target.classList.contains('popup-gift') || e.target.classList.contains('popup-close')){
				giftModal.style.display = 'none';
				document.body.style.overflow = '';
			}			
		}

		for(let i = 0; i < btnsPopupClose.length; i++){
			let btnPopupClose = btnsPopupClose[i];
			btnPopupClose.addEventListener('click', hidePopupModalGift);
		}
		
	
			
		giftModal.addEventListener('click', hidePopupModalGift);
}
export default  gift;