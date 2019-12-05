
let modalDiv = document.querySelector('.modalDiv');
let form = document.querySelector('.form');
let btn = document.getElementById('inputBtn');
let btngetmoney = document.querySelectorAll('.getmoney');
let carouselItem = document.getElementsByClassName('carousel-item');
let carouselControlPrev = document.getElementsByClassName('carousel-control-prev')[0];
let carouselControlNext = document.getElementsByClassName('carousel-control-next')[0];

let carouselIndicators = document.getElementsByClassName('carousel-indicators')[0];
let dots1 = carouselIndicators.getElementsByTagName('li')[0];
let dots2 = carouselIndicators.getElementsByTagName('li')[1];
let dots3 = carouselIndicators.getElementsByTagName('li')[2];

let carouselIndicators1 = document.getElementsByClassName('carousel-indicators')[1];
let dots4 = carouselIndicators1.getElementsByTagName('li')[0];
let dots5 = carouselIndicators1.getElementsByTagName('li')[1];
let dots6 = carouselIndicators1.getElementsByTagName('li')[2];
let prevbtn = document.getElementsByClassName('prevbtn')[0];
let nextbnt = document.getElementsByClassName('nextbnt')[0];

let index = 0;
let dotsIndex = 3;
let index2 = 0;


nextbnt.addEventListener('click', function () {
    if (index2 == 2 || dotsIndex == 5){

    }else {
        dotsIndex++;
        index2++;
        carouselIndicators1.getElementsByTagName('li')[index2 - 1].className = '';
        carouselIndicators1.getElementsByTagName('li')[index2].className = 'active';
        carouselItem[dotsIndex - 1].className = 'carousel-item';
        carouselItem[dotsIndex].className = 'carousel-item active';
    }

});

prevbtn.addEventListener('click', function () {
    if (index2 == 0 || dotsIndex == 3){

    }else {
        dotsIndex--;
        index2--;
        carouselIndicators1.getElementsByTagName('li')[index2 + 1].className = '';
        carouselIndicators1.getElementsByTagName('li')[index2].className = 'active';
        carouselItem[dotsIndex + 1].className = 'carousel-item';
        carouselItem[dotsIndex].className = 'carousel-item active';
    }

});


for (let i = 0; i < btngetmoney.length; i++){
    btngetmoney[i].addEventListener('click', function () {
        modalDiv.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
}




dots4.addEventListener('click', function () {
    dotsIndex = 3;
    index2 = 0;
    carouselItem[dotsIndex].className = 'carousel-item active';
    carouselItem[4].className = 'carousel-item';
    carouselItem[5].className = 'carousel-item';
    dots4.className = 'active';
    dots5.className = '';
    dots6.className = '';
});

dots5.addEventListener('click', function () {
    dotsIndex = 4;
    index2 = 1;
    carouselItem[dotsIndex].className = 'carousel-item active';
    carouselItem[3].className = 'carousel-item';
    carouselItem[5].className = 'carousel-item';
    dots4.className = '';
    dots5.className = 'active';
    dots6.className = '';
});


dots6.addEventListener('click', function () {
    dotsIndex = 5;
    index2 = 2;
    carouselItem[dotsIndex].className = 'carousel-item active';
    carouselItem[3].className = 'carousel-item';
    carouselItem[4].className = 'carousel-item';
    dots4.className = '';
    dots5.className = '';
    dots6.className = 'active';
});


dots1.addEventListener('click', function () {
    index = 0;
    carouselItem[index].className = 'carousel-item active';
    carouselItem[1].className = 'carousel-item';
    carouselItem[2].className = 'carousel-item';
    dots1.className = 'active';
    dots2.className = '';
    dots3.className = '';
});

dots2.addEventListener('click', function () {
    index = 1;
    carouselItem[index].className = 'carousel-item active';
    carouselItem[0].className = 'carousel-item';
    carouselItem[2].className = 'carousel-item';
    dots1.className = '';
    dots2.className = 'active';
    dots3.className = '';
});

dots3.addEventListener('click', function () {
    index = 2;
    carouselItem[index].className = 'carousel-item active';
    carouselItem[0].className = 'carousel-item';
    carouselItem[1].className = 'carousel-item';
    dots1.className = '';
    dots2.className = '';
    dots3.className = 'active';
});

carouselControlNext.addEventListener('click', function () {
    if (index == 2){

    }else {
        index++;
        carouselIndicators.getElementsByTagName('li')[index - 1].className = '';
        carouselIndicators.getElementsByTagName('li')[index].className = 'active';
        carouselItem[index - 1].className = 'carousel-item';
        carouselItem[index].className = 'carousel-item active';
    }

});

carouselControlPrev.addEventListener('click', function () {
    if (index == 0)  {

    }else {
        index--;
        carouselIndicators.getElementsByTagName('li')[index + 1].className = '';
        carouselIndicators.getElementsByTagName('li')[index].className = 'active';
        carouselItem[index + 1].className = 'carousel-item';
        carouselItem[index].className = 'carousel-item active';
    }
});


btn.addEventListener('click', function (e) {
    document.body.style.overflow = '';
    e.preventDefault();
    modalDiv.style.display = 'none';
    let xhr = new XMLHttpRequest();
    let method = "POST";
    let url = "main.php";
    let name = form.getElementsByTagName('input')[0].value;
    let lastName = form.getElementsByTagName('input')[1].value;
    let email = form.getElementsByTagName('input')[2].value;
    let number = form.getElementsByTagName('input')[3].value;
    let params = "name=" + name + "&lastName=" +
                        lastName + "&email=" + email +
                                    "&number=" + number;
    xhr.open(method,url,true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let obj = xhr.response;
            // Здесь мы можем обращаться к свойству объекта и получать	его значение
        }
    };
    xhr.send(params);
});



