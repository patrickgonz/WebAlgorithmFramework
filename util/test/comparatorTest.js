/**
 * Comparator Test Suite
 */

import Comparator from '../comparator.js';

class ComparatorTest extends Comparator{
  constructor(){
    super();
  }
}

try{
  let test1 = new ComparatorTest();

  let stringA = "astring";
  let stringB = "bstring";

  test1.compare(stringA, stringB); //Fails: unimplemented method.
}
catch(error){
  console.error(error);
}

try{
  let test2 = new Comparator(); //Fails: cannot instantiate abstract class.
}
catch(error){
  console.error(error);
}
