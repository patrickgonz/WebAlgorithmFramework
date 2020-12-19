/**
 * IntComparator - compares two numeric strings
 * @class
 */
import Comparator from './comparator.js';
export default class IntComparator extends Comparator{
  constructor(){
    super();
  }

  /**
   * compare - Compares the referenceString to the compareString by converting them
   * into integer numbers prior to comparing them.
   * @param   referenceString - string that will be compared
   * @param   compareString   - string referenceString is compared too
   * @returns                 - 0, if the strings are the same
   *                            1, if the referenceString is larger
   *                           -1, if the referenceString is smaller
   */
  compare(referenceString, compareString){
    let result = -1; //Default to return smaller than
    let referenceInt = Number.NaN;
    let compareInt = Number.NaN;

    // Convert referenceString to integer
    if (referenceString !== null){
      referenceInt = Number.parseInt(referenceString);
    }

    // Convert compareString to integer
    if (compareString !== null){
      compareInt = Number.parseInt(compareString);
    }

    // Compare strings
    if(referenceInt === compareInt)
      result = 0; // Return equal
    // Handle null strings
    else if(Number.isNaN(referenceInt) & Number.isNaN(compareInt))
      result = 0; // Treat as the same
    else if(referenceInt > compareInt | Number.isNaN(compareInt))
      result = 1; // Return greater than

    return result;
  }
}
