function accordion() {

	let headings = document.getElementsByClassName('accordion-heading'),
					blocks = document.getElementsByClassName('accordion-block');
					for(let i = 0; i < blocks.length; i++){
						let block = blocks[i];
						block.style.display = 'none';
					}
					for(let i = 0; i < headings.length; i++){
						let heading = headings[i];
						heading.classList.remove('activePanel');
						heading.addEventListener('click', () => {
							if (heading.classList.contains('activePanel')){
								return;
							} else {
								for(let i = 0; i < blocks.length; i++){
									let block = blocks[i];
									block.style.display = 'none';
								}
								for(let i = 0; i < headings.length; i++){
									let heading = headings[i];
									heading.classList.remove('activePanel');
								}
								heading.classList.add('activePanel');
								heading.nextElementSibling.style.display = 'block';
							}
						});
					}
	
}

export default accordion;