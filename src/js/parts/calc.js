function calc() {

	let selectSize = document.getElementById('size'),
					calcForm = document.querySelector('#calcForm'),
					allInputs = calcForm.elements,
					//calcSubmitBtn = calcForm.querySelector('button'),
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

	

	// function submitMessage(text){
	// 	statusDiv.innerHTML = text;
	// 	setTimeout(function(){
	// 		statusDiv.remove();
	// 	}, 5000);
	// }

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
		//	submitMessage(message.success);
			clearInputs();
		} else {
		
			divc.innerHTML = 'Недостаточно данных!';
			setTimeout(function(){
				divc.remove();
			}, 5000);
			clearInputs();
			//submitMessage(message.failure);
		}
	});

	// let calculatorForm = document.getElementById('calcForm');
	// let allInputs = calculatorForm.elements;
	// calculatorForm.addEventListener("submit", function(e) {
	// 	e.preventDefault();
		
	// 	let statusMessage = document.createElement("div");
	// 	statusMessage.classList.add("status");
	// 	mainForm.appendChild(statusMessage);
	
	// 	let calcFormData = new FormData(calcForm);
	// 	let request = new XMLHttpRequest();
	// 	request.open("POST", "./server.php");
	// 	request.setRequestHeader(
	// 			"Content-Type",
	// 			"application/x-www-form-urlencoded"
	// 	);
	// 	request.send(calcFormData);
		
	// 	let div = document.createElement('div');
	// 	div.classList.add('status');
	// 	let statusDiv = document.getElementsByClassName('status')[0];
	// 	statusDiv.style.textAlign = 'center';
	// 	function submitMessage(text){
	// 		statusDiv.innerHTML = text;
	// 		setTimeout(function(){
	// 			statusDiv.remove();
	// 		}, 5000);
			
	// 	}
	// 	request.onreadystatechange = function() {
			
	// 			if (request.status === 200 && request.status < 300) {
	// 							submitMessage(message.success);
	// 					} else {
	// 						submitMessage(message.failure);
	// 					}
	// 	};
	// 	clearInputs();
	// });
}

export default calc;