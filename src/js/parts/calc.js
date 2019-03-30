function calc() {

	let selectSize = document.getElementById('size'),
					calcForm = document.querySelector('.calc'),
					calcSubmitBtn = calcForm.querySelector('button'),
					selectMaterial = document.getElementById('material'),
					selectOptions = document.getElementById('options'),
					promocode = document.getElementsByClassName('promocode')[0],
					totalValue = document.getElementsByClassName('calc-price')[0],
					total = 0;

	selectSize.addEventListener('change', function() {
		console.log(total);
		console.log(selectSize.value);
					total = Math.round((selectSize.value * selectMaterial.value * selectOptions.value) * 1500);
					console.log(total);
					console.log(selectSize.value);
					if (selectSize.value === '' || selectMaterial.value === '') {
						console.log(totalValue);
						console.log('total равен ' + total);
						console.log(totalValue.innerHTML);
						console.log(totalValue.textContent);
									totalValue.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
					} else {
									if (promocode.value == 'IWANTPOPART') {
													totalValue.innerHTML = total - (total * 0.3);
													console.log(totalValue);
						console.log(totalValue.innerHTML);
						console.log(totalValue.textContent);
						console.log('total равен ' +total);
									} else {
													totalValue.innerHTML = total;
													console.log(totalValue);
													console.log('total '+ total);
						console.log(totalValue.innerHTML);
						console.log(totalValue.textContent);
						console.log('total равен ' +total);
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
	calcSubmitBtn.disabled = true;
	calcSubmitBtn.addEventListener('click', function(){
		if(selectSize.value !== '' || selectMaterial.value !== ''){
			calcSubmitBtn.disabled == false;
			alert('Спасибо за заказ!');
		} else {
			calcSubmitBtn.disabled = true;
		}
	});
}

export default calc;