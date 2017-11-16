var bag = document.getElementsByClassName('header-bag');
var price = document.getElementsByClassName('price');
var totalPrice = document.getElementsByClassName('total-price');
var tmp = 0;

totalPriceFunc();
function totalPriceFunc()
{
	var counter = 0;
	for (var k = price.length-1; k >= 0; k--) 
	{
		tmp += parseFloat(((price[k].outerText).slice(1, price[k].outerText.length)));
		counter++;
	}
	if (tmp == 0) counter = 0;
	if (tmp > 999)
	{
		var tmp2 = 0;
		tmp2 = tmp-1000;
		tmp = parseInt(tmp/1000);
		tmp = tmp + " " + tmp2.toFixed(2);
	}
	bag[0].innerHTML = "Bag £" + tmp + " " + "(" + counter + ")";
	totalPrice[0].innerHTML = "£" + tmp;
}



var remove = document.getElementsByClassName('remove');
for (var i = 0; i <= remove.length-1; i++) 
{
	remove[i].addEventListener('click', function() 
		{	this.parentNode.parentNode.remove(); 
			if ((remove.length) == 0 ) isEmpty();
			tmp =0;
			totalPriceFunc();
		});


}

var removeButton = document.getElementsByClassName('buyButton');
removeButton[0].addEventListener('click', removeBuy);

function removeBuy()
{
	if ((remove.length) == 0 )
	{
		isEmpty();
	}
	else 
	{
		for (var i = remove.length-1; i >= 0 ; i--) 
		{
			remove[i].parentNode.parentNode.remove()
		}
		var bagMessage = document.getElementsByClassName('bag-message');
		bagMessage[0].classList.remove('bag-message-hide');
		bagMessage[0].innerText = 'Thank you for your purchase';
	}
	tmp =0;
	totalPriceFunc();
	
}

var clearBag = document.getElementsByClassName('clear-bag');
clearBag[0].addEventListener('click', removeClearBag);

function removeClearBag()
{
	for (var i = remove.length-1; i >= 0 ; i--) 
	{
		remove[i].parentNode.parentNode.remove()
	}
	isEmpty();
	tmp = 0;
	totalPriceFunc();
}

function isEmpty() 
{
		var bagMessage = document.getElementsByClassName('bag-message');
		bagMessage[0].classList.remove('bag-message-hide');
		bagMessage[0].innerText = 'Your shopping bag is empty. Use Catalog to add new items';
}