// returns the area of a triangle using Heron's Formula
// a {number} - side a of the given triangle
// b {number} - side b of the given triangle
// c {number} - side c of the given triangle
// return {number} - the area of the triangle
function heronsFormula(a, b, c) {
    if ((a != undefined) && (b != undefined) && (c != undefined)) {
      var s = a + b + c;
      s = s / 2;
      return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    } else {
      return "Invalid Input";
    }
}

// returns the area of a right triangle
// b {number} - the base of the given triangle
// h {number} - the height of the given triangle
// return {number} - the area of the triangle
function rtAreaFormula(b, h)  {
    if ((b != undefined) && (h != undefined)) {
        return 0.5 * b * h;
    } else {
        return "Invalid Input";
    }
} 

// returns the area of an oblique triangle
// a {number} - side a, that forms angle C of the given triangle
// b {number} - side b, that forms angle C of the given triangle
// C {number} - angle C, it is formed from side's a and b
// return {number} - returns the area of the triangle
function obAreaFormula(a, b, C) {
    if ((a != undefined) && (b != undefined) && (C != undefined)) {
        return 0.5 * a * b * Math.sin(C);
    } else {
        return "Invalid Input";
    }
}

// returns the Opposite Side of a right triangle using Sine
// hyp {number} - the hypotenuse of the triangle
// angle {number} - the angle of the opposite side
// return {number} - returns the side length of the opposite side
 function sinOppositeSideFormula(hyp, angle) {
    if ((hyp != undefined) && (angle != undefined)) {
        return hyp * Math.sin(angle);
    } else {
        return "Invalid Input";
    }
}

// returns the Hypotenuse of a right triangle using Sine
// opp {number} - the opposite side of the angle measure
// angle {number} - the angle of the opposite side
// return {number} - returns the Hypotenuse's length
function sinHypotenuseSideFormula(opp, angle) {
    if ((opp != undefined) && (angle != undefined)) {
        return opp / Math.sin(angle);
    } else {
        return "Invalid Input";
    }
}

// returns the Adjacent Side of a right triangle using Cosine
// hyp {number} - the hypotenuse of the triangle
// angle {number} - the angle that forms the adjacent side
// return {number} - returns the side length of the adjacent side
function cosAdjacentSideFormula(hyp, angle) {
    if ((hyp != undefined) && (angle != undefined)) {
        return hyp * Math.cos(angle);
    } else {
        return "Invalid Input";
    }
}

// returns the Hypotenuse of a right triangle using Cosine
// adj {number} - the adjacent side of the angle measure
// angle {number} - the angle that forms the adjacent side
// return {number} - returns the Hypotenuse's length
function cosHypotenuseSideFormula(adj, angle) {
    if ((adj != undefined) && (angle != undefined)) {
        return adj / Math.cos(angle);
    } else {
        return "Invalid Input";
    }
}

// returns the Opposite Side of a right triangle using Tangent
// adj {number} - the adjacent side of the angle measure
// angle {number} - the angle of the opposite side
// return {number} - returns the side length of the opposite side
function tanOppositeSideFormula(adj, angle) {
    if ((adj != undefined) && (angle != undefined)) {
        return adj * Math.tan(angle);
    } else {
        return "Invalid Input";
    }
}

// returns the Adjacent Side of a right triangle using Tangent
// opp {number} - the opposite side of the angle measure
// angle {number} - the angle of the opposite side
// return {number} - returns the side length of the adjacent side
function tanAdjacentSideFormula(opp, angle) {
    if ((opp != undefined) && (angle != undefined)) {
        return opp / Math.tan(angle);
    } else {
        return "Invalid Input";
    }
}

// returns the angle measure of the Sine ratio
// opp {number} - the opposite side of the angle measure
// hyp {number} - the hypotenuse of the triangle
// return {string} - returns the angle measure with the degrees symbol
function inverseSineFormula(opp, hyp) {
    if ((opp != undefined) && (hyp != undefined)) {
        return Math.floor(Math.asin(opp / hyp)) + "°";
    } else {
        return "Invalid Input";
    }
}

// returns the angle measure of the Cosine ratio
// adj {number} - the adjacent side of the angle measure
// hyp {number} - the hypotenuse of the triangle
// return {string} - returns the angle measure with the degrees symbol
function inverseCosineFormula(adj, hyp) {
    if ((adj != undefined) && (hyp != undefined)) {
        return Math.floor(Math.acos(adj / hyp)) + "°";
    } else {
        return "Invalid Input";
    }
}

// returns the angle measure of the Tangent ratio
// opp {number} - the opposite side of the angle measure
// adj {number} - the adjacent side of the angle measure
// return {string} - returns the angle measure with the degrees symbol
function inverseTangentFormula(opp, adj) {
    if ((opp != undefined) && (adj != undefined)) {
        return Math.floor(Math.atan(opp / adj)) + "°";
    } else {
        return "Invalid Input";
    }
}

// returns the side length of a missing side using two angle measures and one of their associated sides using the Law of Sines
// x {number} - the side length of angle X (Opposite to it)
// X {number} - the angle measure, opposite to x, it's side
// Y {number} - the angle measure opposite the side that is unknown
// return {number} - returns the side length of angle Y
function lawOfSinesSideFormula(x, X, Y) {
    if ((x != undefined) && (X != undefined) && (Y != undefined)) {
        return (Math.sin(Y) * x) / Math.sin(X);
    } else {
        return "Invalid Input";
    }
}

// returns the angle measure of a missing angle using two side lengths and one of their associated angles using the Law of Sines
// x {number} - the side length of angle X (Opposite to it)
// X {number} - the angle measure, opposite to x, it's side
// y {number} - the side length, opposite to the missing angle measure
// return {string} - returns the angle measure of side y, with the degrees symbol
function lawOfSinesAngleFormula(x, X, y) {
    if ((x != undefined) && (X != undefined) && (y != undefined)) {
        return Math.floor((Math.sin(X) * y) / x) + "°";
    } else {
        return "Invalid Input";
    }
}

// returns the side length of a missing side, using two side lengths and an the associated angle measure to the missing side, using the Law of Cosines
// b {number} - a known side length
// c {number} - a known side length
// A {number} - the angle measure of the missing side (Opposite to it)
// return {number} - returns the unknown side length, opposite to angle A
function lawOfCosinesSideFormula(b, c, A) {
    if ((b != undefined) && (c != undefined) && (A != undefined)) {
        return Math.sqrt((b ** 2) + (c ** 2) - 2(b)(c) * Math.cos(A));
    } else {
        return "Invalid Input";
    }
}

// returns the square of a given number
// x {number} - the number you want to square
// return {number} - returns x multiplied by itself 
function squared(x) {
    return x * x;
}
