var liClick = document.getElementsByClassName('li-click');
var mainItem = document.getElementsByClassName('main-item');
var subItem = document.getElementsByClassName('sub-item');

var count=1;
var close = document.getElementsByClassName('tablet-mobile-filter-button');
close[0].addEventListener('click', filterFunc)
function filterFunc() 
{
	if (!close[0].hasAttribute('id'))
	{
		close[0].setAttribute('id', 'active-filter');
		close[0].parentNode.parentNode.childNodes[3].setAttribute('id', 'display-block');

	}
	else
	{
		close[0].removeAttribute('id');
		close[0].parentNode.parentNode.childNodes[3].removeAttribute('id');
	}

}

for (var i = 0; i <= liClick.length-1; i++) 
{
	liClick[i].addEventListener('click', function(){
		changeMainItem(this);
	})
}


function changeMainItem (a)
{
	
	// else 
	{
		for (var i = 1; i <= 11; i+=2) 
		{
					var text = a.parentNode.parentNode.childNodes[0].outerText;
					var text1 = a.outerText + ", ";
					if ((a.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[i].getAttribute('class')) == text)
					{
						if (a.outerText != ('Not selected'))
						{
							a.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[i].innerHTML = text1;
							a.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[i].setAttribute('id', 'active-mobile-tablet');
							for (var j = 1; j <= a.parentNode.childNodes.length-1; j+=2) {
								a.parentNode.childNodes[j].childNodes[0].removeAttribute('id');
							}
							a.childNodes[0].setAttribute('id','active-mobile-tablet');
							a.parentNode.childNodes[1].childNodes[0].classList.remove('not-selected');
							
							
						}
						else 
						{
							a.parentNode.childNodes[1].childNodes[0].classList.add('not-selected');
							a.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[i].innerHTML = a.parentNode.parentNode.childNodes[0].outerText + ',';
							
							for (var j = 1; j <= a.parentNode.childNodes.length-1; j+=2) {
								a.parentNode.childNodes[j].childNodes[0].removeAttribute('id');
							}
							a.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[i].removeAttribute('id');
							
						}
					}


					/****/
					// if (window.innerWidth > 1024)
					{
						if (a.childNodes[0].outerText != ('Not selected'))
						{
							(a.parentNode.parentNode).childNodes[0].classList.add('active-item');
							var text = a.outerText;
							(a.parentNode.parentNode).childNodes[3].innerHTML = text;
							a.parentNode.parentNode.classList.add('li-one-active');
						}
						else 
						{
							(a.parentNode.parentNode).childNodes[0].classList.remove('active-item');
							(a.parentNode.parentNode).childNodes[3].innerHTML = '';
							a.parentNode.parentNode.classList.remove('li-one-active');
							a.childNodes[0].removeAttribute('id');
							a.parentNode.childNodes[1].childNodes[0].classList.add('not-selected');


							if ((a.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[i].getAttribute('class')) == text)
							{
							a.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[i].innerHTML = a.parentNode.parentNode.childNodes[0].outerText + ',';
							
							for (var j = 1; j <= a.parentNode.childNodes.length-1; j+=2) {
								a.parentNode.childNodes[j].childNodes[0].removeAttribute('id');
							}
							a.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[i].removeAttribute('id');
							}
						}
						// console.log(a.childNodes[0].outerText);
					}
				/***/
		}
	}

	
}


