var menu = document.getElementsByClassName('hide-bag');
var nav = document.getElementsByTagName('nav');
var search = document.getElementsByClassName('search');
console.log(menu);
menu[0].addEventListener('click', openNav);

function openNav() 
{
	if (!menu[0].hasAttribute('id'))
	{
		nav[0].classList.add('display-block');
		search[0].classList.add('display-block');
		menu[0].setAttribute('id', 'active-menu');
	}
	else 
	{
		nav[0].classList.remove('display-block');
		search[0].classList.remove('display-block');
		menu[0].removeAttribute('id');
	}
}

console.log(search);
search[0].childNodes[3].addEventListener('click', openSearch);
function openSearch()
{
	if (window.innerWidth<1025) {
	// search[0].classList.add('hide-search');
	search[0].childNodes[3].classList.remove('hide-search-button');
	search[0].childNodes[1].classList.remove('search-hide');
	search[0].childNodes[1].classList.add('show-search');
	search[0].childNodes[3].classList.add('search-hide');
	}
}