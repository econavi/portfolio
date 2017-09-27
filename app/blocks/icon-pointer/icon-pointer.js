let iconPointer = document.querySelectorAll('.components-list .icon-pointer');

for(let i = 0; i < iconPointer.length; i++) {
	iconPointer[i].addEventListener('click', rotatePointer);
};

function rotatePointer() {
	this.classList.toggle("icon-pointer__down");
	this.classList.toggle("icon-pointer__up");
}