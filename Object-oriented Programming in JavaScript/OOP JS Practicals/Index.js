
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

for (let key in circle){
    //console.log(key);
    //console.log(key, circle[key]); //get the value of these properties
    
//get only the properties and not the methods.
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);

}

//To get all the keys and an objects.
const keys = Object.keys(circle);
console.log(keys);


//If an object has given property
if ('radius' in circle)
    console.log('Circle has a radius.')




//Adding Properties
//circle.location = {x:1};
/*
//another way
const propertyName = 'location'
circle['location'] = {x:1};

//delete Properties
delete circle['location'];*/


