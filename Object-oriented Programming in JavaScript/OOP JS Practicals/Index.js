//Factorty Function
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    
    };
}


//call createCircle funtion
const circle = createCircle(1);
circle.draw();