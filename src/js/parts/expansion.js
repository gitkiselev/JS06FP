function expansion(){
	console.log('expansion');
	let moreBtn = document.querySelector('.button-styles');
		let showHiddenBlocks = document.querySelectorAll('.styles-2');
		function showHiddenBlocksFunc(){
			for(let i = 0; i < showHiddenBlocks.length; i++){
				let showHiddenBlock = showHiddenBlocks[i];
				showHiddenBlock.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');

			}
			moreBtn.style.display = 'none';
		}
		moreBtn.addEventListener('click', showHiddenBlocksFunc);
}
export default  expansion;