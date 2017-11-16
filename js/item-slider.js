
var slider = document.getElementsByClassName('item-slide-main');
var buttons = document.getElementsByClassName('item-slide-button');
var sliderbuttons = document.getElementsByClassName('item-slide-buttons')

for (var i = 0; i <= buttons.length-1; i++) {
	buttons[i].addEventListener('click', function() 
	{
		show(this);
	})
}

function show(s)
{
	if (!s.hasAttribute('id'));
	{
	buttons[0].removeAttribute('id');
	buttons[1].removeAttribute('id');
	buttons[2].removeAttribute('id');
	s.setAttribute('id', 'button-active');


		if (s.parentNode.childNodes[1].hasAttribute('id'))
		{
			slider[0].setAttribute('src', 'img/desktop/bag/suit-1.jpg');
		}

		if (s.parentNode.childNodes[3].hasAttribute('id'))
		{
			slider[0].setAttribute('src', 'img/desktop/bag/suit-2.jpg');
		}

		if (s.parentNode.childNodes[5].hasAttribute('id'))
		{
			slider[0].setAttribute('src', 'img/desktop/bag/suit-3.jpg');
		}

	}
}

