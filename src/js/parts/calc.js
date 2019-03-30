function calc() {

	let selectSize = document.getElementById('size'),
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
}

export default calc;