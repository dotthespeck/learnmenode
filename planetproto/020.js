// -> Create a machine object
//    with a property motors = 4

var machine = {
	motors: 4
};
__
var robot = {
	friendly: true
};
// -> Create a robot object
//    with a property friendly = true
__

var robby = {};
// -> Create a robby object
__
robby.__proto__ = robot;
robot.__proto__ = machine;
// -> Make machine the prototype of robot
__

// -> Make robot the prototype of robby
__

// -> What is `robby.motors`?
claim(robby.motors, 4);

// -> What is `robby.friendly`?
claim(robby.friendly, true);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine: machine,
	robot:   robot,
	robby:   robby
}
