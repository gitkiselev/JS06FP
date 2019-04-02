function expansion(){
	
	let moreBtn = document.querySelector('.button-styles');
		let showHiddenBlocks = document.querySelectorAll('.styles-2');
		function showHiddenBlocksFunc(){
			for(let i = 0; i < showHiddenBlocks.length; i++){
				let showHiddenBlock = showHiddenBlocks[i];
				showHiddenBlock.classList.toggle('hidden-lg');
				showHiddenBlock.classList.toggle('hidden-md');
				showHiddenBlock.classList.toggle('hidden-sm');
				showHiddenBlock.classList.toggle('hidden-xs');
				showHiddenBlock.classList.toggle('col-sm-3');
				showHiddenBlock.classList.toggle('col-sm-offset-0');
				showHiddenBlock.classList.toggle('col-xs-10');
				showHiddenBlock.classList.toggle('col-xs-offset-1');
			}
			moreBtn.style.display = 'none';
		}
		moreBtn.addEventListener('click', showHiddenBlocksFunc);
}
export default  expansion;