window.onload = function () {
	var prev = document.querySelector('.prev');
	var next = document.querySelector('.next');
	var imgs = document.querySelectorAll('.photos img');
	var i = 0;

	prev.onclick = function() {
		imgs[i].classList.remove('showed');
		i--;
		if(i < 0){
			i = imgs.length - 1;
		}
		imgs[i].classList.add('showed');
	}

	next.onclick = function() {
		imgs[i].classList.remove('showed');
		i++;
		if(i >= imgs.length){
			i = 0;
		}
		imgs[i].classList.add('showed');
	}
}