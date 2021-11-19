if ('NodeList' in window && !NodeList.prototype.forEach) {
	console.info('polyfill for IE11');
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}



// работа бургер-кнопки

const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper')
const menuIcon = document.querySelector('.menu-icon')
const sidebar = document.querySelector('.sidebar')


sidebarToggleBtn.onclick = function(){
	menuIcon.classList.toggle('menu-icon-active')
	sidebar.classList.toggle('sidebar--mobile-active')
}

// показать еще 3 карточки

const btnMore = document.querySelector('.btn-more')
const hiddenCards = document.querySelectorAll('.card-link--hidden')


btnMore.addEventListener('click', function(){
	hiddenCards.forEach(function(item){
		item.classList.toggle('card-link--hidden')
	})
	btnMore.remove()
})


// показать/скрыть контент внутри виджетов

const widgetTitles = document.querySelectorAll('.widget__title')
const widgetBodys = document.querySelectorAll('.widget__body')

widgetTitles.forEach(function (title) {
	title.addEventListener('click', function (e){
		e.target.classList.toggle('widget__title--active')
		e.target.nextElementSibling.classList.toggle('widget__body--hidden')
	})
})


// кнопка любая 

const checkBoxAny = document.querySelector('#location-05')
const topLocationsCheckBoxes = document.querySelectorAll('[data-location-param]')

// клик по кнопке ЛЮБАЯ и отключение остальные чекбоксов
checkBoxAny.addEventListener('change',function(){
	if(checkBoxAny.checked){
		topLocationsCheckBoxes.forEach(function(item){
			item.checked = false
		})

	}
})

// клик по остальным чекбоксам и отключение кнопки ЛЮБАЯ
topLocationsCheckBoxes.forEach(function(item){
	item.addEventListener('click', function(){
		if(checkBoxAny.checked){
			checkBoxAny.checked = false
		}
	})
})


//показать еще 3 пункта при клике показать еще 
const showOptionsBtn = document.querySelector('.widget__show-hidden')
const dopOptions = document.querySelectorAll('.checkbox--hidden')

showOptionsBtn.addEventListener('click', function (e) {
	e.preventDefault()
	dopOptions.forEach(function (option) {
		option.classList.remove('checkbox--hidden')
	})
	showOptionsBtn.remove()
})