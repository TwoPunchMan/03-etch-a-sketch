const gridContainer = document.querySelector('.grid-container');
const gridItems = document.querySelectorAll('.grid-item');
const buttonClearAll = document.querySelector('.grid-clear');

let rand = () => Math.floor(Math.random() * 256);
let randBlack = () => Math.random();

function setRandomRGB() {
	let r = rand();
	let g = rand();
	let b = rand();
	let rgb;

	if (randBlack() <= 0.1) {
		rgb = '(0,0,0)';	
	} else {
		rgb = `(${r},${g},${b})`;
	}

	return rgb;
}

buttonClearAll.addEventListener('click', resetBoard);

gridItems.forEach(item => 
	item.addEventListener('mouseover', function () {
		item.style.cssText = `background-color: rgb${setRandomRGB()}`;
}));

function resetBoard() {
	const grid_items = document.querySelectorAll('.grid-item');
	grid_items.forEach(item => item.style.removeProperty('background-color'));

	let gridSize = prompt("How large is the new grid? (Enter a number for one side of square) ");
	gridSize = parseInt(gridSize);

	if (!(gridSize == NaN) && gridSize <= 100) {
		removeGrid();
		createNewGrid(gridSize);
		
	}
}

function createNewGrid(size) {

	// creates new grid with square side of size = size
	// with new divs and css stuff 
	// attach to container parent
	let auto_string = '';
	let square_vol = size * size;

	for (let i = 1; i <= square_vol; i++) {
		const div = document.createElement('div');
		div.addEventListener('mouseover', function () {
			div.style.cssText = `background-color: rgb${setRandomRGB()}`;
		});
		div.classList.add('grid-item');
		div.textContent = i;
		gridContainer.appendChild(div);
		
		// set grid container css for column evening
		if (i % size == 0) {
			auto_string += 'auto ';
		}
		console.log(auto_string);
	}

	gridContainer.style.cssText = `grid-template-columns: ${auto_string}`;
}

function removeGrid() {
	while (gridContainer.firstChild) {
		gridContainer.removeChild(gridContainer.firstChild);
	}
}