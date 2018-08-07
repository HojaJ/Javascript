window.onload = function (){
	var links = document.querySelectorAll('a[target=_blank]');
	var img = document.querySelectorAll('img');
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = confirmFunc;
	}
	for (var i = 0; i < img.length; i++) {
		img[i].onclick = funcdis;
		img[i].oncontextmenu = funcdis;
	}

	function funcdis () {
		return false;
	}
	function confirmFunc () {
		if(!confirm('Мы не отвечаем!')){
			return false;
		}
	}
	


}
