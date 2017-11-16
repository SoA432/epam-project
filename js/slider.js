var slider = document.getElementsByClassName('slide');
var buttons = document.getElementsByClassName('button');
var prevSlide = document.getElementsByClassName('prev-slide');
var nextSlide = document.getElementsByClassName('next-slide');
var count = 0;


buttons[0].addEventListener('click', showFirst);
buttons[1].addEventListener('click', showSecond);
buttons[2].addEventListener('click', showThird);
prevSlide[0].addEventListener('click', showPrevSlide);
nextSlide[0].addEventListener('click', showNextSlide);

var timer = setInterval(showNextSlide, 10000);

function showFirst()
{
	if (!buttons[0].hasAttribute('id'))
	{
	buttons[0].setAttribute('id', 'active');
	slider[0].classList.add('show');
	buttons[1].removeAttribute('id');
	slider[1].classList.remove('show');
	buttons[2].removeAttribute('id');
	slider[2].classList.remove('show');
	}
	changeBg();
	clearInterval(timer);
	timer = setInterval(showNextSlide, 10000);
}

function showSecond()
{
	if (!buttons[1].hasAttribute('id'))
	{
	buttons[1].setAttribute('id', 'active');
	slider[1].classList.add('show');
	buttons[0].removeAttribute('id');
	slider[0].classList.remove('show');
	buttons[2].removeAttribute('id');
	slider[2].classList.remove('show');
	}
	changeBg();
	clearInterval(timer);
	timer = setInterval(showNextSlide, 10000);
}

function showThird()
{
	if (!buttons[2].hasAttribute('id'))
	{
	buttons[2].setAttribute('id', 'active');
	slider[2].classList.add('show');
	buttons[1].removeAttribute('id');
	slider[1].classList.remove('show');
	buttons[0].removeAttribute('id');
	slider[0].classList.remove('show');
	}
	changeBg();
	clearInterval(timer);
	timer = setInterval(showNextSlide, 10000);
}

function showPrevSlide()
{
	for (var i = 0; i <= slider.length-1; i++) 
	{
		
		if (buttons[i].hasAttribute('id'))
		{
			if (i == 0)
			{
				buttons[0].removeAttribute('id');
				slider[0].classList.remove('show');
				buttons[slider.length-1].setAttribute('id', 'active');
				slider[slider.length-1].classList.add('show');	
			}
			else
			{
				buttons[i].removeAttribute('id');
				slider[i].classList.remove('show');
				buttons[i-1].setAttribute('id', 'active');
				slider[i-1].classList.add('show');	
			}
		break;
		}
	}
	changeBg();
	clearInterval(timer);
	timer = setInterval(showNextSlide, 10000);
}

function showNextSlide()
{
	for (var i = 0; i <= slider.length-1; i++) 
	{
		
		if (buttons[i].hasAttribute('id'))
		{
			if (i == slider.length-1)
			{
				buttons[slider.length-1].removeAttribute('id');
				slider[slider.length-1].classList.remove('show');
				buttons[0].setAttribute('id', 'active');
				slider[0].classList.add('show');	
			}
			else
			{
				buttons[i].removeAttribute('id');
				slider[i].classList.remove('show');
				buttons[i+1].setAttribute('id', 'active');
				slider[i+1].classList.add('show');	
			}
		break;
		}
	}
	changeBg();
	clearInterval(timer);
	timer = setInterval(showNextSlide, 10000);
}

function changeBg() 
{
	var cc = document.getElementsByClassName('button');
	if (cc[2].hasAttribute('id'))
	{
		var xx = document.getElementsByClassName('slider-buttons-wrap');
		xx[0].classList.add('bg-for-third-slide');
	}
	else 
	{
		var xx = document.getElementsByClassName('slider-buttons-wrap');
		xx[0].classList.remove('bg-for-third-slide');
	}
}

