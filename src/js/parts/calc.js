function calc() {

	let selectSize = document.getElementById('size'),
					calcForm = document.querySelector('#calcForm'),
					allInputs = calcForm.elements,
					
					calcBtn = document.getElementById('calcBtn'),
					selectMaterial = document.getElementById('material'),
					selectOptions = document.getElementById('options'),
					promocode = document.getElementsByClassName('promocode')[0],
					totalValue = document.getElementsByClassName('calc-price')[0],
					total = 0;

	selectSize.addEventListener('change', function() {
		
					total = Math.round((selectSize.value * selectMaterial.value * selectOptions.value) * 1500);
					
					if (selectSize.value === '' || selectMaterial.value === '') {
					
									totalValue.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
					} else {
									if (promocode.value == 'IWANTPOPART') {
													totalValue.innerHTML = total - (total * 0.3);
													
									} else {
													totalValue.innerHTML = total;
												
									}
					}
	});

	selectMaterial.addEventListener('change', function() {
		
					total = Math.round((selectSize.value * selectMaterial.value * selectOptions.value) * 1500);
					if (selectSize.value === '' || selectMaterial.value === '') {
									totalValue.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
					} else {
									if (promocode.value == 'IWANTPOPART') {
													totalValue.innerHTML = total - (total * 0.3);
									} else {
													totalValue.innerHTML = total;
									}
					}
	});

	selectOptions.addEventListener('change', function() {
					total = Math.round((selectSize.value * selectMaterial.value * selectOptions.value) * 1500);
					if (selectSize.value === '' || selectMaterial.value === '') {
									totalValue.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
					} else {
									if (promocode.value == 'IWANTPOPART') {
													totalValue.innerHTML = total - (total * 0.3);
									} else {
													totalValue.innerHTML = total;
									}
					}
	});

	promocode.addEventListener('change', function() {
					total = Math.round((selectSize.value * selectMaterial.value * selectOptions.value) * 1500);
					if (selectSize.value === '' || selectMaterial.value === '') {
									totalValue.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
					} else {
									if (promocode.value.trim() == 'IWANTPOPART') {
													totalValue.innerHTML = total - (total * 0.3);
									} else {
													totalValue.innerHTML = total;
									}
					}

	});
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с вами свяжемся";
	message.failure = "Недостаточно данных";

	let clearInputs = () => {
		for (let i = 0; i < allInputs.length; i++) {
			let input = allInputs[i];
			input.value = '';
		 selectOptions.value = "1";
			totalValue.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
		}
		
	}
	
	calcBtn.addEventListener('click', function(e){
		let divc = document.createElement('div');
		calcForm.appendChild(divc);
		divc.style.textAlign = 'center';
		e.preventDefault();
		if(selectSize.value !== '' && selectMaterial.value !== ''){
		
			divc.innerHTML = 'Спасибо! Скоро мы с вами свяжемся!';
			setTimeout(function(){
				divc.remove();
			}, 5000);
		
			clearInputs();
		} else {
		
			divc.innerHTML = 'Недостаточно данных!';
			setTimeout(function(){
				divc.remove();
			}, 5000);
			clearInputs();
			
		}
	});

}

export default calc;