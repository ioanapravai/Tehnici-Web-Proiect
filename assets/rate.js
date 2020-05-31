
var total = 0;

document.addEventListener('DOMContentLoaded', function(){
    let progressBar = document.getElementsByClassName('progress-bar')[0];
    progressBar.width = 0;

    let stars = document.querySelectorAll('.star');
    stars.forEach(function(star){
        star.addEventListener('click', setRating); 
    });
    
    let answers = document.querySelectorAll(".answer");
    answers.forEach(function(answer){
        answer.addEventListener('click', makeProgress)
    })

    let submitBtn = document.querySelectorAll(".submit-btn")[0];
    submitBtn.addEventListener('click', addReview);

    let rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
    let target = stars[rating - 1];
    target.dispatchEvent(new MouseEvent('click'));
});
function setRating(ev){
    let span = ev.currentTarget;
    let div = span.parentElement;
    let stars = div.children;
    let match = false;
    let num = 0;
    for (let i = 0; i < stars.length; i++){
        if(match){
            stars[i].classList.remove('rated');
        }else{
            stars[i].classList.add('rated');
        }
        if(stars[i] === span){
            match = true;
            num = i + 1;
        }
    }
    //total += num;
    document.querySelector('.stars').setAttribute('data-rating', num);

    //document.write(num);
}

function makeProgress(ev){
    let progressBar = document.getElementsByClassName('progress-bar')[0];
    progressBar.width += 20;
    progressBar.style.width = progressBar.width + '%';
    ev.currentTarget.removeEventListener('click', makeProgress);
}

function addReview(ev){
    var review = {
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
        fifth: 0
    };
    let answers = document.querySelectorAll('.answer');
    for (let i = 0; i < answers.length; i++){
        let stars = answers[i].children;
        let count = 0;
        for (let j = 0; j < stars.length; j++){
            if (stars[j].classList.contains('rated')){
                count++;
            }
        }
        switch (i) {
            case 0:
                review.first = count;
                break;
            case 1:
                review.second = count;
                break;
            case 2:
                review.third = count;
                break;
            case 3:
                review.fourth = count;
                break;
            case 4:
                review.fifth = count;
                break;
        }
    }

    $.ajax({
        url: "http://127.0.0.1:8081/api/reviews",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(review),
        error: (jqXHR, textStatus, error) => console.log(`${textStatus} -> ${error}`)
    });
}