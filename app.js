
/*let productCountEl = document.getElementById("product-count")*/
/*let addToCartButtons = document.querySelectorAll(".add-to-cart")

for (let i = 0; i < addToCartButtons.length; i++){
	addToCartButtons[i].addEventListener("click", function () {
		let prevProductCount = +productCountEl.textContent
		productCountEl.textContent = prevProductCount + 1
	})
}
*/
//---------------------------------------------------------
/*
let productsLikeButton = document.querySelectorAll(".like")

for (let i = 0; i < productsLikeButton.length; i++){

	productsLikeButton[i].addEventListener("click", function () {
  		productsLikeButton[i].classList.toggle('likeactive')
	})
}*/


//---------------------------------------------------------
/*$(".slider-block").slick({
	dots:true
})
*/
/*let productQuantity = document.querySelector('.quantity')
let minusButton = document.querySelector('.minusButton')	
let plusButton = document.querySelector('.plusButton')	

	plusButton.addEventListener("click", function(){
		let prodCount = +productQuantity.value
		productQuantity.value = prodCount + 1

	})
	minusButton.addEventListener("click", function(){
		let prodCount = +productQuantity.value
		productQuantity.value = prodCount - 1
		

	})
	$(.slider).slick ()
	*/


const productsCountEl = document.getElementById("products-count")
console.log(productsCountEl);


const addToCartButtons = document.querySelectorAll(".add-to-cart");
console.log(addToCartButtons);

for (let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", function(){
		productsCountEl.textContent = +productsCountEl.textContent + 1
	})
}

const productsLikeButton = document.querySelectorAll(".like")

for (let i = 0; i < productsLikeButton.length; i++) {
	productsLikeButton[i].addEventListener("click", function() {
		/*productsLikeButton[i].classList.toggle('likeactive')*/
		/*if(productsLikeButton[i].classList.contains('likeactive'))*/
		productsLikeButton[i].style.backgroundColor = "red"
	})
}
//
$(".slider-block").slick({
	dots:true,
})



let incrementBtn = document.querySelector('.increment-btn')
let decrementBtn = document.querySelector('.decrement-btn')
let quantityInput = document.querySelector('.product-quantity input');

console.log(incrementBtn)
console.log(decrementBtn)
console.log(quantityInput)

incrementBtn.addEventListener("click", function() {
	let currentValue = quantityInput.value;
	let nextValue = +currentValue + 1;
	quantityInput.value = nextValue
	if(nextValue <= 1) {
		decrementBtn.disabled = true;
	} else {
		decrementBtn.disabled = false;
	}
})

decrementBtn.addEventListener("click", function() {
	let currentValue = quantityInput.value;
	let nextValue = +currentValue - 1;
	quantityInput.value = nextValue
	if(nextValue <= 1) {
		decrementBtn.disabled = true;
	} else {
		decrementBtn.disabled = false;
	}
})