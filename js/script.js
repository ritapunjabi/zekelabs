$('.rotate').click(function() {
    AnimateRotate();
});

var isPaused = false;
setInterval(function() {
    if (!isPaused) {
        AnimateRotate(45)
    }

}, 4000)
var angle = 0;
var count = 9;

var species = ['Dog', 'Cat', 'Rabbit', 'Bird', 'Fish', 'Hamster', 'Duck', 'Tortoise'];

var image = [];
image[0] = 'img/img1.jpg';
image[1] = 'img/img2.jpg';
image[2] = 'img/img3.jpg';
image[3] = 'img/img4.jpg';
image[4] = 'img/img5.jpg';
image[5] = 'img/img6.jpg';
image[6] = 'img/img7.jpg';
image[7] = 'img/img8.jpg';

$('.circle1').click(function() {
    count = 2;
    isPaused = true;
    AnimateRotate(360 - angle);
    setTimeout(function() {
        isPaused = false;
    }, 4000);
});
$('.circle2').click(function() {
    count = 3;
    isPaused = true;
    AnimateRotate(360 - angle - 45);
    setTimeout(function() {
        isPaused = false;
    }, 4000);
});
$('.circle3').click(function() {
    count = 4;
    isPaused = true;
    AnimateRotate(360 - angle - 90);
    setTimeout(function() {
        isPaused = false;
    }, 4000);
});
$('.circle4').click(function() {
    count = 5;
    isPaused = true;
    AnimateRotate(360 - angle - 135);
    setTimeout(function() {
        isPaused = false;
    }, 4000);
});
$('.circle5').click(function() {
    count = 6;
    isPaused = true;
    AnimateRotate(360 - angle - 180);
    setTimeout(function() {
        isPaused = false;
    }, 4000);
});
$('.circle6').click(function() {
    count = 7;
    isPaused = true;
    AnimateRotate(360 - angle - 225);
    setTimeout(function() {
        isPaused = false;
    }, 4000);
});
$('.circle7').click(function() {
    count = 8;
    isPaused = true;
    AnimateRotate(360 - angle - 270);
    setTimeout(function() {
        isPaused = false;
    }, 4000);
});
$('.circle8').click(function() {
    count = 9;
    isPaused = true;
    AnimateRotate(360 - angle - 315);
    setTimeout(function() {
        isPaused = false;
    }, 4000);
});

function AnimateRotate(ang) {

    var $elem = $('.circular-slider');
    var $circle = $('.circle');
    var $middleCircle = $('.middle-circle');
    var $img = $('.middle-image');
    var $species = $('.species');
    var $name = $('.pet-name');

    var tempAngle = angle + ang;

    $({
        deg: angle
    }).animate({
        deg: angle += ang
    }, {
        duration: 500,
        step: function(now) {
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
            $circle.css({
                transform: 'rotate(-' + now + 'deg)'
            });
            $middleCircle.css({
                transform: 'rotate(-' + now + 'deg)'
            });

            if (now == tempAngle)
                if (count != 9) {
                    $img.attr('src', image[count - 1]);
                    $species.val(species[count - 1]);
                    $name.html((species[count - 1]).charAt(0).toUpperCase() + (species[count - 1]).substr(1));

                }
        }
    });


    if (angle > 315)
        angle = 0;
    count--;
    if (count < 1)
        count = 8;

}