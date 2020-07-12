var game = document.getElementById("game");
var small = document.getElementById("yoyo");
var big = document.getElementById("rhand");

const cWidth = game.clientWidth;
const cHeight = game.clientHeight;

// big.style.background = "purple";

// function move() {
//     var pos = 0;
//     var id = setInterval(bounce, 5);
//     function bounce() {
//         if (pos == 350) {
//             clearInterval(id);
//         } else {
//             pos++;
//             big.style.left = pos + "px";
//         }
//     }
    
// }

direction = true;

var interval = 10000;

setInterval(move, 10000);

function move() {
    var speed;
    speed = Math.random;
    var pos;
    // var dist = ((cWidth/2) - 0.05 * cWidth);
    var dist = cWidth;

    if (direction) {
        pos = 0;
        var forward = setInterval(fBounce, speed);
        function fBounce () {
            if (pos >= dist) {
                clearInterval(forward);
                
            } else {
                pos++;
                big.style.left = pos + "px";
            }
        }
        direction = false;
    } else if (!direction) {
        pos = dist;
        var backward = setInterval(bBounce, speed);
        function bBounce () {
            if (pos <= 0) {
                clearInterval(backward);
            } else {
                pos--;
                big.style.left = pos + "px";
            }
        }
        direction = true;
    }
}


// while (true) {
//     direction = true;
//     var pos = 0;
//     var dist = ((cWidth/2) - 5 * cWidth);
//     function bounce() {
//         if (big.style.left < dist) {
//             direction = true;
//             // clearInterval(id);
//         } else {
//             direction = false;
//         }

//         if (direction) {
//             var forward = setInterval(fBounce, 5);
//             function fBounce () {
//                 if (pos == dist) {
//                     clearInterval(forward);
//                 } else {
//                     pos++;
//                     big.style.left = pos + "px";
//                 }
//             }
//         } else if (!direction) {
//             var backward = setInterval(bBounce, 5);
//             function bBounce () {
//                 if (pos <= 0) {
//                     clearInterval(forward);
//                 } else {
//                     pos--;
//                     big.style.left = pos + "px";
//                 }
//             }
//         }
//     }
// }
