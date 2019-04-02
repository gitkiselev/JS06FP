function gift(){
	
	let giftModal = document.querySelector('.popup-gift'),
	closeGift = giftModal.querySelector('.popup-close'),
	popupGift = document.querySelector('.popup-gift'),
	gift = document.querySelector('.fixed-gift'),
		isClicked = false,
		allBtns = document.querySelectorAll('button');
		for (let i = 0; i < allBtns.length; i++) {
			let btn = allBtns[i];
			btn.addEventListener('click', () => {
				isClicked = true;
			});
		}
		let showGiftModal = () => {
			giftModal.style.display = 'block';
			gift.style.display = 'none';
			document.body.style.overflow = 'hidden';
			isClicked = true;
		}
		gift.addEventListener('click', showGiftModal);

		
		
		function hidePopupGift(e){
			if(e.target.classList.contains('popup-gift') || e.target.classList.contains('popup-close')){
				giftModal.style.display = 'none';
				document.body.style.overflow = '';
			}			
		}
		closeGift.addEventListener('click', (e) => {
			hidePopupGift(e);
});
			
popupGift.addEventListener('click', hidePopupGift);
		
		let scroll = () => {
			if ((isClicked === false) && (window.pageYOffset + window.innerHeight >= document.body.scrollHeight - 100)) {
				console.log('scrolled bottom');
				showGiftModal();
				isClicked = true;
			}
			
		}
		window.addEventListener('scroll', scroll);
}
export default  gift;