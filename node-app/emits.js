/**
 * Events
 * steps:
 * ES 5 pattern
 * 1.declare class(constructor function)
 * 2.Add data + methods inside class(function)
 * 3.Do inheritance your Class with EventEmitter
 * Event Emitter has two api
 * 1.binding api - on
 *    this.on('nameoftheevent',cb) - cb-event listener function
 * 2.emition api - emit
 *    doStuff(){
 *        this.emit('nameoftheevent')
 *    }
 */
const EventEmitter = require('events');
const util = require('util');

//class = instance variable + methods
const Car = function () {
    //Car Properties
    this.model = 'Test model';
    this.company = 'Honda';
    this.status = 'For Sale';
    this.carno = 1;
    //Car apis
    this.sale = function () {
        //emit sold event
        this.status = 'Car has been sold';
        this.emit('sold');
    };
    this.goTestDrive = function () {
        this.emit('security');
    };
    this.goToService = function () {
        this.emit('service');
    }
    //event binding
    this.on('sold', () => {
        console.log('I am going to inform Store!')
    });
    this.on('security', () => {
        console.log('I am going to inform Security!')
    });
    this.on('service', () => {
        console.log('I am going to inform Service statation!')

    });


};
//3.Inheritance With EventEmitter.
//inherits EventEmitter with car
util.inherits(Car, EventEmitter);

//create Object
let car = new Car();
car.sale();
car.goTestDrive();
car.goToService();


class Car1 extends EventEmitter {
    constructor() {
        super();
        this.on('sold', ()=> console.log('sold'))
    }
    sold() {
        this.emit('sold');
    }
}

var carinit = new Car1();
carinit.sold();

class Door extends EventEmitter {
    constructor() {
        super();
        this.on('door open', ()=> console.log('door open'));
        this.on('door closed', ()=> console.log('lights off'));
    }
    doorOpen() {
        this.emit('door open');
    }
    doorClosed() {
        this.emit('door closed');
    }
};

class Light {
    constructor(door) {
        door.on('door open', ()=> console.log('lights on'))
    }
}

var c = new Door();
var d = new Light(c);
c.doorOpen();
