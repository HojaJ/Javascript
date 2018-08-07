window.onload = function () {
	
	var inp1 = document.querySelector('input[name=first]');
	var inp2 = document.querySelector('input[name=second]');
	var buttons = document.querySelectorAll('button');
	var span = document.querySelector('.display');
	
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function () {
			var op = this.textContent;
			calc(op);	
		}
	}
	function calc (op) {
		var res = 0;
		var a  = parseInt(inp1.value);
		var b  = parseInt(inp2.value);
		switch (op) {
			case "+":
				res = a + b;
				break;
			case "-":
				res = a - b;
				break;
			case "*":
				res = a * b;
				break;
			case "/":
				res = a / b;
				break;
			default:
				res = 0;
				break;
		}
		span.innerHTML = res;
	}
}