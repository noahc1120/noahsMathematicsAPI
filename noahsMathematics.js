// returns the area of a triangle using Heron's Formula
// a {number} - side a of the given triangle
// b {number} - side b of the given triangle
// c {number} - side c of the given triangle
// return {number / string} - the area of the triangle; returns an error message if parameters not met
function heronsFormula(a, b, c) {
    if ((a != undefined) && (b != undefined) && (c != undefined)) {
        if (numberChecker(a) && numberChecker(b) && numberChecker(c)) {
            var s = a + b + c;
            s = s / 2;
            return Math.sqrt(s * (s - a) * (s - b) * (s - c));
        } else {
            return "Number data type expected, recieved invalid type";
        }
    } else {
        return "Missing arguments";
    }
}

// returns the area of a right triangle
// b {number} - the base of the given triangle
// h {number} - the height of the given triangle
// return {number / string} - the area of the triangle; returns an error message if parameters not met
function rtAreaFormula(b, h)  {
    if ((b != undefined) && (h != undefined)) {
        if (numberChecker(b) && numberChecker(h)) {
            return 0.5 * b * h;
        } else {
            return "Number data type expected, recieved invalid type";
        }
    } else {
        return "Missing arguments";
    } 
} 

// returns the area of an oblique triangle
// a {number} - side a, that forms angle C of the given triangle
// b {number} - side b, that forms angle C of the given triangle
// C {number} - angle C, it is formed from side's a and b
// return {number/ string} - returns the area of the triangle; returns an error message if parameters not met
function obAreaFormula(a, b, C) {
    if ((a != undefined) && (b != undefined) && (C != undefined)) {
        if (numberChecker(a) && numberChecker(b) && numberChecker(C)) {
            return 0.5 * a * b * Math.sin(degreesToRadians(C));
        } else {
            return "Number data type expected, recieved invalid type";
        }
    } else {
        return "Missing arguments";
    }
}

// returns the Opposite Side of a right triangle using Sine
// hyp {number} - the hypotenuse of the triangle
// angle {number} - the angle of the opposite side
// return {number / string} - returns the side length of the opposite side; returns an error message if parameters not met
 function sinOppositeSideFormula(hyp, angle) {
    if ((hyp != undefined) && (angle != undefined)) {
        if (numberChecker(hyp) && numberChecker(angle)) {
            return hyp * Math.sin(degreesToRadians(angle));
        } else {
            return "Number data type expected, recieved invalid type";
        }
    } else {
        return "Missing arguments";
    }
}

// returns the Hypotenuse of a right triangle using Sine
// opp {number} - the opposite side of the angle measure
// angle {number} - the angle of the opposite side
// return {number / string} - returns the Hypotenuse's length; returns an error message if parameters not met
function sinHypotenuseSideFormula(opp, angle) {
    if ((opp != undefined) && (angle != undefined)) {
        if (numberChecker(opp) && numberChecker(angle)) {
            return opp / Math.sin(degreesToRadians(angle));
        } else {
            return "Number data type expected, recieved invalid type";
        }
    } else {
        return "Missing arguments";
    }
}

// returns the Adjacent Side of a right triangle using Cosine
// hyp {number} - the hypotenuse of the triangle
// angle {number} - the angle that forms the adjacent side
// return {number / string} - returns the side length of the adjacent side; returns an error message if parameters not met
function cosAdjacentSideFormula(hyp, angle) {
    if ((hyp != undefined) && (angle != undefined)) {
        if (numberChecker(hyp) && numberChecker(angle)) {
            return hyp * Math.cos(degreesToRadians(angle));
        } else {
            return "Number data type expected, recieved invalid type";
        }
    } else {
        return "Missing arguments";
    }
}

// returns the Hypotenuse of a right triangle using Cosine
// adj {number} - the adjacent side of the angle measure
// angle {number} - the angle that forms the adjacent side
// return {number / string} - returns the Hypotenuse's length; returns an error message if parameters not met
function cosHypotenuseSideFormula(adj, angle) {
    if ((adj != undefined) && (angle != undefined)) {
        if (numberChecker(adj) && numberChecker(angle)) {
            return adj / Math.cos(degreesToRadians(angle));
        } else {
            return "Number data type expected, recieved invalid type";
        }
    } else {
        return "Missing arguments";
    }
}

// returns the Opposite Side of a right triangle using Tangent
// adj {number} - the adjacent side of the angle measure
// angle {number} - the angle of the opposite side
// return {number / string} - returns the side length of the opposite side; returns an error message if parameters not met
function tanOppositeSideFormula(adj, angle) {
    if ((adj != undefined) && (angle != undefined)) {
        if (numberChecker(adj) && numberChecker(angle)) {
            return adj * Math.tan(degreesToRadians(angle));
        } else {
            return "Number data type expected, recieved invalid type";
        }
    } else {
        return "Missing arguments";
    }
}

// returns the Adjacent Side of a right triangle using Tangent
// opp {number} - the opposite side of the angle measure
// angle {number} - the angle of the opposite side
// return {number / string} - returns the side length of the adjacent side; returns an error message if parameters not met
function tanAdjacentSideFormula(opp, angle) {
    if ((opp != undefined) && (angle != undefined)) {
        if (numberChecker(opp) && numberChecker(angle)) {
            return opp / Math.tan(degreesToRadians(angle));
        } else {
            return "Number data type expected, recieved invalid type";
        }
    } else {
        return "Missing arguments";
    }
}

// returns the angle measure of the Sine ratio
// opp {number} - the opposite side of the angle measure
// hyp {number} - the hypotenuse of the triangle
// return {number / string} - returns the angle measure; returns an error message if parameters not met
function inverseSineFormula(opp, hyp) {
    if ((opp != undefined) && (hyp != undefined)) {
        if (numberChecker(opp) && numberChecker(hyp)) {
            return Math.floor(radiansToDegrees(Math.asin(opp / hyp)));
        } else {
            return "Number data type expected, recieved invalid type";
        }
    } else {
        return "Missing arguments";
    }
}

// returns the angle measure of the Cosine ratio
// adj {number} - the adjacent side of the angle measure
// hyp {number} - the hypotenuse of the triangle
// return {number / string} - returns the angle measure; returns an error message if parameters not met
function inverseCosineFormula(adj, hyp) {
    if ((adj != undefined) && (hyp != undefined)) {
        if (numberChecker(adj) && numberChecker(hyp)) {
            return Math.floor(radiansToDegrees(Math.acos(adj / hyp)));
        } else {
            return "Number data type expected, recieved invalid type";
        }
    } else {
        return "Missing arguments";
    }
}

// returns the angle measure of the Tangent ratio
// opp {number} - the opposite side of the angle measure
// adj {number} - the adjacent side of the angle measure
// return {number / string} - returns the angle measure; returns an error message if parameters not met
function inverseTangentFormula(opp, adj) {
    if ((opp != undefined) && (adj != undefined)) {
        if (numberChecker(opp) && numberChecker(adj)) {
            return Math.floor(radiansToDegrees(Math.atan(opp / adj)));
        } else {
            return "Number data type expected, recieved invalid type";
        }
    } else {
        return "Missing arguments";
    }
}

// returns the side length of a missing side using two angle measures and one of their associated sides using the Law of Sines
// x {number} - the side length of angle X (Opposite to it)
// X {number} - the angle measure, opposite to x, it's side
// Y {number} - the angle measure opposite the side that is unknown
// return {number / string} - returns the side length of angle Y; returns an error message if parameters not met
function lawOfSinesSideFormula(x, X, Y) {
    if ((x != undefined) && (X != undefined) && (Y != undefined)) {
        if (numberChecker(x) && numberChecker(X) && numberChecker(Y)) {
            return (Math.sin(degreesToRadians(Y)) * x) / Math.sin(degreesToRadians(X));
        } else {
            return "Number data type expected, recieved invalid type";
        }
    } else {
        return "Missing arguments";
    }
}

// returns the angle measure of a missing angle using two side lengths and one of their associated angles using the Law of Sines
// x {number} - the side length of angle X (Opposite to it)
// X {number} - the angle measure, opposite to x, it's side
// y {number} - the side length, opposite to the missing angle measure
// return {number / string} - returns the angle measure of side y; returns an error message if parameters not met
function lawOfSinesAngleFormula(x, X, y) {
    if ((x != undefined) && (X != undefined) && (y != undefined)) {
        if (numberChecker(x) && numberChecker(X) && numberChecker(y)) {
            return radiansToDegrees(Math.asin((Math.sin(degreesToRadians(X)) * y) / x));
        } else {
            return "Number data type expected, recieved invalid type";
        }
    } else {
        return "Missing arguments";
    }
}

// returns the side length of a missing side, using two side lengths and an the associated angle measure to the missing side, using the Law of Cosines
// b {number} - a known side length
// c {number} - a known side length
// A {number} - the angle measure of the missing side (Opposite to it)
// return {number / string} - returns the unknown side length, opposite to angle A; returns an error message if parameters not met
function lawOfCosinesSideFormula(b, c, A) {
    if ((b != undefined) && (c != undefined) && (A != undefined)) {
        if (numberChecker(b) && numberChecker(c) && numberChecker(A)) {
            var temp = squared(b) + squared(c) - 2 * b * c * Math.cos(degreesToRadians(A));
            return Math.sqrt(temp);
        } else {
            return "Number data type expected, recieved invalid type";
        }
    } else {
        return "Missing arguments";
    }
}

// returns the angle measure of a missing angle, using all three side lengths, using the Law of Cosines
// a {number} - a known side length
// b {number} - a known side length
// c {number} - a known side length
// return {number / string} - returns the angle measure; returns an error message if parameters not met 
function lawOfCosinesAngleFormula(a, b, c) {
    if ((a != undefined) && (b != undefined) && (c != undefined)) {
        if (numberChecker(a) && numberChecker(b) && numberChecker(c)) {
            var numerator = squared(a) + squared(b) - squared(c);
            var denonimator = 2 * a * b;
            return Math.floor(radiansToDegrees(Math.acos(numerator / denonimator)));
        } else {
            return "Number data type expected, recieved invalid type";
        }
    } else {
        return "Missing arguments";
    }
}

// returns the square of a given number
// x {number} - the number you want to square
// return {number} - returns x multiplied by itself 
function squared(x) {
    return x * x;
}

// converts degrees to radians
// function from {https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math}, MDN docs
// degrees {number} - the degree to be converted
// return {number} - returns the degree in radians
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// converts radians to degrees
// function from {https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math}, MDN docs
// radians {number} - the radian to be converted
// return {number} - returns the radian in degrees
function radiansToDegrees(radians) {
    return radians / (Math.PI / 180);
}

// checks whether a given value is a number data type or not
// value {any} - the value to be checked if it's a number type
// return {number} - returns a boolean value dependent on whether the value passed the check
function numberChecker(value) {
    if (typeof value === "number") {
        return true;
    } else {
        return false;
    }
}
