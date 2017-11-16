var bag = document.getElementsByClassName('header-bag');
var price = document.getElementsByClassName('item-price');
var addToBag = document.getElementsByClassName('all-arrivals');
var size = document.getElementsByClassName('size');
var color = document.getElementsByClassName('color');
var mass = [];
var tmp = 0;
addToBag[0].addEventListener('click', checkBeforeAdd);

for (var i = 0; i <= color.length-1; i++) {
	color[i].addEventListener('click', function() 
	{
		setColor(this);
	})}
var counter = 0;

for (var i = 0; i <= size.length-1; i++) {
	size[i].addEventListener('click', function() 
	{
		sizeFunc(this);
	})
}

function sizeFunc(s)
{
	if (!s.hasAttribute('id'));
	{
	size[0].removeAttribute('id');
	size[1].removeAttribute('id');
	size[2].removeAttribute('id');
	s.setAttribute('id', 'active')
	}
}

function setColor(s)
{
	if (!s.hasAttribute('id'))
	{
	color[0].removeAttribute('id');
	color[1].removeAttribute('id');
	s.setAttribute('id', 'active');
	}
}

function checkBeforeAdd() 
{
	for (var i = 0; i <=color.length-1; i++) 
	{
		if (color[i].hasAttribute('id'))
		{
			for (var i = 0; i <=size.length-1; i++) 
			{
				if (size[i].hasAttribute('id'))
				{
					addToBagFunc();
				}
			}
		}
	} 
}

function addToBagFunc() 
{
	counter++;
	/* Добавляет сумму указанную на странице*/
	// bag[0].innerHTML = "Bag £" + (price[0].outerText.slice(1, price[0].outerText.length)*counter).toFixed(2) + " " + "(" + counter + ")";
	
	/*Добавляет рендомную сумму в диапозоне 250-400*/
	mass[counter-1] = Math.floor((Math.random() * 150)+250);
	for (var i = 0; i <=mass.length-1; i++) {
		tmp += mass[i];
	}

	bag[0].innerHTML = "Bag £" + tmp + " " + "(" + counter + ")";
	tmp=0;
}