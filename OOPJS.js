// ===Object Literal Method
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw');
//     }
// };

// circle.draw();

//=====Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);
// circle.draw();

//===Constructor function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// const another = new Circle(1);

// const Circle1 = new Function(`Radius`, `
//     this.radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// `);

// Circle.call({}, 1) ==== const another = new Circle(1); Explicitly
// Circle.apply({}, [1,2,3]); like method above but for arrays

//=========================Values V Refrences===========================

// let x = { value: 10 };
// let y = x;

// x.value = 20;

// let obj = {value: 10};

// function increase(obj) {
//     obj.value++;
// }

// increase(obj);
// console.log(obj);

// function Circle(radius) {
//     this.radius = radius; 
//     this.draw = function() {
//         console.log('draw')
//     }
// }
// const circle = new Circle(10);

// circle.location = { x: 1 };

// function Circle(radius) {
//     this.radius = radius; 
//     this.draw = function() {
//         console.log('draw')
//     }
// }
// const circle = new Circle(10);

// for (let key in circle) {
//     if (typeof circle[key] !== 'function')
//         console.log(key, circle[key]);
// }
// const keys = Object.keys(circle);
// console.log(keys);

// if ('radius' in circle)
//     console.log('Circle Has a radius!')

// function Circle (radius) {
    
//     this.radius = radius;

//     let defaultLocation = { x: 0, y: 0};

//     this.getDefaultLocation = function() {
//         return defaultLocation;
//     }
//     this.draw = function() {
        
//         computeOptimumLocation(0.1);
        
//         console.log('draw')
//     };
//     Object.defineProperty(this, 'defaultLocation', {
//         get: function() {
//             return defaultLocation;
//         },
//         set: function(value) {
//             if (!value.x || !value.y)
//             throw new Error('Invalid Location')
//             defaultLocation = value;
//         }
//     })
// }

// const circle = new Circle(10);
// circle.defaultLocation = 1;

const sw = new Stopwatch()
 function Stopwatch() {
     let startWatch, endWatch, runWatch, duration = 0;
    this.start = function() {
        if (runWatch)
            throw new Error('Running');
        runWatch = true;
        startWatch = new Date();    
    };
    this.stop = function() {
        if (!runWatch)
            throw new Error('NOW RUNNING');
        runWatch = false;
        endWatch = new Date(); 
        const seconds = (endWatch.getTime() - startWatch.getTime()) / 1000;
        duration += seconds;   
    };
    this.reset = function() {
       startWatch = null;
       endWatch = null;
       runWatch = false;
       durationuration = 0; 
    };
    Object.defineProperty(this, 'duration', {
        get: function() {return duration; }
    })
 }