let cub = document.querySelector('.cub')
let desctop = document.querySelector('.desctop')
let h1 = document.querySelector('h1')

let x = 0
let y = 0

function traffic(ev) {
       switch (ev.key) {
        case 'ArrowUp':
            if (y > 0 && x == 100) {
                y -= 5
            }else if(y > 0 && x == 700){
                y -= 5
            }else if(y > 0 && x == 1045){
                y -= 5
            }else if(y > 60 && x == 0){
                y -= 5
            }else if(y > 60 && x == 450){
                y -=5
            }else if(y > 60 && x == 800){
                y -= 5
            }else if(y > 120 && x == 300){
                y -= 5
            }else if(y > 120 && x == 550){
                y -= 5
            }else if(y > 120 && x == 1045){
                y -= 5
            }else if(y > 180 && x == 105){
                y -= 5
            }else if(y > 180 && x == 600){
                y -= 5
            }else if(y > 240 && x == 445){
                y -= 5
            }else if(y > 240 && x == 940){
                y -= 5
            }else if(y > 300 && x == 370){
                y -= 5
            }else if(y > 300 && x == 0){ 
                y -= 5
            }else if(y > 300 && x == 570){
                y-= 5
            }
            cub.style.marginTop = y + 'px'
            break;
    
        case 'ArrowDown':
            if (y < 60 && x == 100) {
                y += 5
            }else if(y < 60 && x == 700){
                y += 5
            }else if(y < 60 && x == 1045){
                y += 5
            }else if(y >= 60 && y < 120 && x == 0){
                y += 5
            }else if(y >= 60 && y < 120 && x == 450){
                y += 5
            }else if(y >= 60 && y < 120 && x == 800){
                y += 5
            }else if(y >= 120 && y < 180 && x == 300){
                y += 5
            }else if(y >= 120 && y < 180 && x == 550){
                y += 5
            }else if(y >= 120 && y < 180 && x == 1045){
                y += 5
            }else if(y >= 180 && y < 240 && x == 105){
                y += 5
            }else if(y >= 180 && y < 240 && x == 600){
                y += 5
            }else if(y >= 240 && y < 300 && x == 445){
                y += 5
            }else if(y >= 240 && y < 300 && x == 940){
                y += 5
            }else if(y >= 300 && y < 360 && x == 370){
                y += 5
            }else if(y >= 300 && y < 360 && x == 0){
                y += 5
            }else if(y >= 300 && y < 360 && x == 570){
                y += 5
            }
            cub.style.marginTop = y + 'px'
            break;
    
        case 'ArrowLeft':
            if (x > 0 && x <= 350 && y == 0 || x > 410 && x <= 1045 && y == 0) {
                x -= 5
            }else if(x > 0 && x <= 150 && y == 60 || x > 210 && x <= 740 && y == 60 || x > 800 && x <= 1045 && y == 60){
                desctop.style.border = '1px dashed #000'
                cub.style.background = 'green'
                x -= 5
            }else if (x > 0 && x <= 450 && y == 120 || x > 510 && x <= 1045 && y == 120) {
                desctop.style.background = 'aqua'
                cub.style.background = 'red'
                x -= 5
            }else if (x > 0 && x <= 350 && y == 180 || x > 410 && x <= 610 && y == 180 || x > 670 && x <= 1045 && y == 180) {
                cub.style.background = 'black'
                x -= 5
            }else if (x > 0 && x <= 250 && y == 240 || x > 310 && x <= 700 && y == 240 || x > 760 && x <= 1045 && y == 240) {
                x -= 5
            }else if (x > 0 && x <= 445 && y == 300 || x > 505 && x <= 1045 && y == 300) {
                x -= 5
            }else if (x > 0 && x <= 1045 && y == 360) {
                x -= 5
            }
            cub.style.marginLeft = x + 'px'
            break;
    
        case 'ArrowRight':
            if (x < 350 && y == 0 || x >= 410 && x < 1045 && y == 0) {
                x += 5
            }else if(x < 150 && y == 60|| x >= 210 && x < 740 && y == 60 || x >= 800 && x < 1045 && y == 60){
                x += 5
            }else if (x < 450 && y == 120 || x >= 510 && x  < 1045 && y == 120) {
                x += 5
            }else if (x < 350 && y == 180 || x >= 410 && x < 610 && y == 180 || x >= 670 && x < 1045 && y == 180) {
                x += 5
            }else if (x < 250 && y == 240 || x >= 310 && x < 700 && y == 240 || x >= 760 && x < 1045 && y == 240) {
                x += 5
            }else if (x < 445 && y == 300 || x >= 505 && x < 1045 && y == 300) {
                x += 5
            }else if (x < 1045 && y == 360) {
                x += 5
            }else if (x == 1045 && y == 360) {
                h1.innerHTML = 'You Won'
            }
            cub.style.marginLeft = x + 'px'
            break;
    
        default:
            break;   
    }
}

window.addEventListener('keydown', traffic)