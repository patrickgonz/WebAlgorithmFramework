/**
 * IntComparator Test Suite
 */

import IntComparator from '../intComparator.js';

let comparator = new IntComparator();
let n = 10;
let m = 5;
/*************************************************************/
console.log("Is 10 > 5 (numbers)?");
let result = comparator.compare(n,m);
console.log(result == 1);
/*************************************************************/
m = 20;
console.log("Is 10 < 20 (numbers)?");
result = comparator.compare(n,m);
console.log(result == -1);
/*************************************************************/
m = 10;
console.log("Is 10 == 10 (numbers)?");
result = comparator.compare(n,m);
console.log(result == 0);
/*************************************************************/
console.log("TEST ERROR CONDITIONS");
console.log("Test with referenceString = null");
let nullString = null;
result = comparator.compare(nullString,m);
console.log("Is result -1? ", result == -1);
/*************************************************************/
console.log("Test with compareString = null");
result = comparator.compare(n, nullString);
console.log("Is result 1? ", result == 1);
/*************************************************************/
console.log("Test with referenceString = emptyString");
let emptyString = " ";
result = comparator.compare(emptyString,m);
console.log("Is result -1? ", result == -1);
/*************************************************************/
console.log("Test with compareString = emptyString");
result = comparator.compare(n, emptyString);
console.log("Is result 1? ", result == 1);
/*************************************************************/
console.log("Test with referenceString = 'abc'");
let abcString = "abc";
result = comparator.compare(abcString,m);
console.log("Is result -1? ", result == -1);
/*************************************************************/
console.log("Test with compareString = 'abc'");
result = comparator.compare(n, abcString);
console.log("Is result 1? ", result == 1);
/*************************************************************/
console.log("Test with referenceString = '&nbsp;'");
let nbspString = "&nbsp;";
result = comparator.compare(nbspString,m);
console.log("Is result -1? ", result == -1);
/*************************************************************/
console.log("Test with compareString = '&nbsp;'");
result = comparator.compare(n, nbspString);
console.log("Is result 1? ", result == 1);
