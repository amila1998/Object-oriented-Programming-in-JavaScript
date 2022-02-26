

//Constructor Function
function Circle(radius){ //parent function
    
    this.radius=radius;

    let defaultLocation = {x:0, y:0};

    /*
    //getter
    this.getDefultLocation = function(){
        return defaultLocation;
    };
    */

    this.draw= function(){    
        console.log('draw');
    };

   
    Object.defineProperty(this, 'defaultLocation',{
        //getter
        get: function(){
            return defaultLocation;
        },
         //Setter
        set: function(value){
            if(!value.x ||value.y)
                throw new Error('Invalid Location')
            defaultLocation = value;
        }
    });

}
//calling  Constructor Function
const circle = new Circle(10);
circle.defaultLocation = 1; //this is for generate for an error
circle.draw();




