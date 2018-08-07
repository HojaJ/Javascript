window.onload = function () {
	var imgs = document.querySelectorAll('.photos img');
	var imgs1 = document.querySelectorAll('.photos1 img');	

	var prev = document.querySelector('.prev');
	var next = document.querySelector('.next');
	
	var slide = new Slider(imgs);
	var slide1 = new Slider(imgs1);

	next.onclick = function () {
		slide.next();
		slide1.next();
	}

	prev.onclick = function () {
		slide.prev();
		slide1.prev();

	}

	function Slider (images) {
		this.imgs = images;
		var i = 0;

		this.next = function () {
			this.imgs[i].classList.remove('showed');
			i++;
			if(i >= imgs.length){
				i = 0;
			}
			this.imgs[i].classList.add('showed');
		}

		this.prev = function () {
			this.imgs[i].classList.remove('showed');
			i--;
			if(i < 0){
				i = imgs.length - 1;
			}
			this.imgs[i].classList.add('showed');
		}
	}
}
