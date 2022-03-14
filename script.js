const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => 
	item.addEventListener('mouseover', function () {
		item.style.cssText = "background-color: green";
}));