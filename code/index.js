const clicks = [];

class Coords {
    constructor (x,y){
        this.x=x;
        this.y=y;
    }
    toString(){
        return this.x + ":" + this.y; 
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const clickArea =document.createElement('div');
    clickArea.id = 'clickArea';
    document.querySelector('body').appendChild(clickArea);
    clickArea.addEventListener('click',(e) => {
        clicks.push(new Coords(e.clientX, e.clientY));
        console.log(clicks.length + ' clicks');
        if (clicks.length === 10) {
            output = document.querySelector('#coords');
            if(!output){
                output = document.createElement('div');
                output.id = 'coords';
                clickArea.appendChild(output);
            }
            output.innerHTML = printClicks();
            clicks.splice(0,10);
        }
    })
})

const printClicks = () => {
    return clicks.join('<br/>');
}
