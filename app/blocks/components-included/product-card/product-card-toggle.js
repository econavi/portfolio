var href = window.location.pathname

if(href == '/libs/components/') {
	var productCardToggle = document.querySelector('.product-card-toggle');
	var productCard = document.querySelector('.product-card');
	var toogleItems = document.querySelectorAll('.view-switch__item');

	productCardToggle.addEventListener('click', function(e){
		setClass(productCard, 'product-card_vertical')
		for(var i = 0; i < toogleItems.length; i++) {
			setClass(toogleItems[i], 'view-switch__item_active');
		}
	});

	function setClass(node, name) {
		node.classList.toggle(name);
	}

}