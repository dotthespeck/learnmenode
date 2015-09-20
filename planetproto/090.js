// -> Define two constructor functions: 'Robot' and 'Vehicle'

function Robot() {

};

function Vehicle() {
	this.wheels = 4;
	return {};
};
// -> When called with 'new', the Robot constructor function should return
//    the implicit 'this'
// -> When called with 'new', the Vehicle constructor function should return
//    an object of your own making, not the implicit 'this'.


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:    Robot,
	Vehicle:  Vehicle
}
