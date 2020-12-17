/**
 * Comparator - defines interface for comparator family
 * @class
 * @abstract
 }
 */
export default class Comparator{
  constructor(){
    if(this.constructor === Comparator)
      throw new TypeError('Abstract Comparator class cannot be instantiated.');
  }
  /**
   * compare - Compares the referenceString to the compareString.
   * @abstract
   * @param   referenceString - string that will be compared
   * @param   compareString   - string referenceString is compared too
   * @returns                 - 0, if the strings are the same
   *                            1, if the referenceString is larger
   *                           -1, if the referenceString is smaller
   */
  compare(referenceString, compareString){
    throw new TypeError('You have to implement the method compare!')
  }
}
