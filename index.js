//menu icon
const menu = document.getElementById('menu');
const navItems = document.querySelector('.nav-item');

//remove show class when li is clicked
let navClick = navItems.addEventListener('click', () => {
	if (navClick = 'clicked') {
		navItems.classList.remove('show');
	}
})
//toggle menu icon
menu.addEventListener('click', () => {
	navItems.classList.toggle('show');
});



//slider section
const slide = document.querySelectorAll('.slide');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const bar = document.querySelectorAll('.bar');
const auto = true;
const intervalTime = 5000;
let slideInterval;

//next slide function
const nextSlide = () => {
	const current = document.querySelector('.current');
	current.classList.remove('current');

	const barScroll = document.querySelector('.bar-scroll');
	barScroll.classList.remove('bar-scroll');

	if (current.nextElementSibling) {
		current.nextElementSibling.classList.add('current');
		barScroll.nextElementSibling.classList.add('bar-scroll');
	} else {
		slide[0].classList.add('current');
		bar[0].classList.add('bar-scroll');
	};
	setTimeout(() => current.classList.remove('current'));
};


// previous slide function
const prevSlide = () => {
	const current = document.querySelector('.current');
	current.classList.remove('current');

	const barScroll = document.querySelector('.bar-scroll');
	barScroll.classList.remove('bar-scroll');

	if (current.previousElementSibling) {
		current.previousElementSibling.classList.add('current')
		barScroll.previousElementSibling.classList.add('bar-scroll');
	} else {
		slide[slide.length - 1].classList.add('current');
		bar[bar.length - 1].classList.add('bar-scroll');		
	};
	setTimeout(() => current.classList.remove('current'));
};

//righ arrow click function
arrowRight.addEventListener('click', e => {
	nextSlide();
	if (auto) {
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
	};
});

arrowLeft.addEventListener('click', e => {
	prevSlide();
	if (auto) {
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
	};
});

if (auto) {
	slideInterval = setInterval(nextSlide, intervalTime);
};

//services section

window.addEventListener('scroll', () => {
const services = document.getElementById('services');
const servicePosition = services.getBoundingClientRect();
const ourServices = document.querySelectorAll('.our-services');

if (servicePosition.top <= window.innerHeight 
	&& servicePosition.bottom >= 0) {
	ourServices[0].classList.add('service-left-anim');
	ourServices[1].classList.add('service-right-anim');
	ourServices[2].classList.add('service-left-anim');
	ourServices[3].classList.add('service-right-anim');
} else {
	ourServices[0].classList.remove('service-left-anim');
	ourServices[1].classList.remove('service-right-anim');
	ourServices[2].classList.remove('service-left-anim');
	ourServices[3].classList.remove('service-right-anim');
}

});

window.addEventListener('scroll', () => {
const price = document.getElementById('price');
const pricePosition = price.getBoundingClientRect();
const priceHeader = document.querySelector('.price-header')
const pricePlan = document.querySelectorAll('.plan-trans');

if (pricePosition.top <= window.innerHeight 
	&& pricePosition.bottom >= 0) {
	priceHeader.classList.add('price-animation');
	pricePlan[0].classList.add('left-tran-anim');
	pricePlan[1].classList.add('right-tran-anim');
} else {
	priceHeader.classList.remove('price-animation');
	pricePlan[0].classList.remove('left-tran-anim');
	pricePlan[1].classList.remove('right-tran-anim');
}

});

window.addEventListener('scroll', () => {
const about = document.getElementById('about');
const aboutPosition = about.getBoundingClientRect();
const aboutUs = document.querySelector('.about-us-tran');
const skill = document.querySelector('.skill-tran');

if (aboutPosition.top <= window.innerHeight 
	&& aboutPosition.bottom >= 0) {
	aboutUs.classList.add('left-tran-anim');
	skill.classList.add('right-tran-anim');
} else {
	aboutUs.classList.remove('left-tran-anim');
	skill.classList.remove('right-tran-anim');
}

});


