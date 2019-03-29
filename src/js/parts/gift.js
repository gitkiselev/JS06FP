function gift(){
	console.log('gift');
	let giftModal = document.querySelector('.popup-gift'),
	closeGift = giftModal.querySelector('.popup-close'),
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

		
		let hidePopupModalGift = () => {
				giftModal.style.display = 'none';
				document.body.style.overflow = '';	
		}

		closeGift.addEventListener('click', () => {
			hidePopupModalGift();
});
			
		giftModal.addEventListener('click', hidePopupModalGift);
		
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