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

//Constructor Function
function Circle(radius){
    console.log('this', this) 
    this.radius=radius,
    this.draw= function(){
        console.log('draw');
    }

}
//calling  Constructor Function
const circle2 =  Circle(1);