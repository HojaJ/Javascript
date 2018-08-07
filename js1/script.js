window.onload = function (e) {

	var items = document.querySelectorAll('.items .item');
	var display = document.querySelector('.display');

	for (var i = 0; i < items.length; i++) {
		items[i].onclick = function () {
			this.classList.toggle('item-active');
			callPrice();
		}
	}
	function callPrice () {
		var price = 0;
		
		for (var i = 0; i < items.length; i++) {
			if(items[i].classList.contains('item-active')){
				price += parseInt(items[i].getAttribute('data-value'));
			}
		}
		display.innerHTML = price;
	}


}
