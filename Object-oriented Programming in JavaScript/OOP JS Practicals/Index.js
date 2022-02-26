
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
const circle = createCircle(1); //object 1

//Constructor Function
function Circle(radius){
    console.log('this', this) 
    this.radius=radius,
    this.draw= function(){
        console.log('draw');
    }

}
//calling  Constructor Function
const circle2 = new Circle(10); //object 2

//Adding Properties
//circle.location = {x:1};

//another way
const propertyName = 'location'
circle['location'] = {x:1};

//delete Properties
delete circle['location'];
