var links = document.querySelectorAll('.menu-v1__link');

for(var i = 0; i < links.length; i++) {
	if(links[i].getAttribute('href') == window.location.pathname) {
		var link = links[i];
		link.classList.add('menu-v1__link_active');
		link.removeAttribute('href');
	}
}