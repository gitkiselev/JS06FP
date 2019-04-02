function sliderBottom(){
	
	let slideIndex1 = 1;
  let slides1   = document.getElementsByClassName('feedback-slider-item');
  let prev1     = document.querySelector('.main-prev-btn');
  let next1     = document.querySelector('.main-next-btn');
  setInterval(function(){
		plusSlides1(1);
	}, 3000);

  showSlides1(slideIndex1);
  function showSlides1(n){
    if(n > slides1.length) {
      slideIndex1 = 1;
    }
    if(n < 1) {
      slideIndex1 = slides1.length;
    }
    for(let i = 0; i < slides1.length; i++){
      slides1[i].style.display = 'none';
    }
    
    slides1[slideIndex1 - 1].style.display = 'block';
    
  }
  function plusSlides1(n){
    showSlides1(slideIndex1 += n)
  }
  function currentSlide1(n){
    showSlides1(slideIndex1 = n)
  }
  prev1.addEventListener('click', function(){
    plusSlides1(-1);
  });
  next1.addEventListener('click', function(){
    plusSlides1(1);
  });
}
export default  sliderBottom;