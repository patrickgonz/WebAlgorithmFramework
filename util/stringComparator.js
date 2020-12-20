/**
 * StringComparator - compares two strings
 * @class
 */
import Comparator from './comparator.js';
export default class StringComparator extends Comparator{
  constructor(){
    super();
  }

  /**
   * compare - Compares the referenceString to the compareString.
   * Uppercase will come first and accents will matter.
   * @param   referenceString - string that will be compared
   * @param   compareString   - string referenceString is compared too
   * @returns                 - 0, if the strings are the same
   *                            1, if the referenceString is larger
   *                           -1, if the referenceString is smaller
   */
  compare(referenceString, compareString){
    let result;

    // Compare strings
    if (referenceString == null & compareString == null)
      result = 0; // Return same
    else if (referenceString == null)
      result = -1; // Return less than
    else if (compareString == null)
      result = 1; // Return greater than
    else{
      // If not strings, convert to strings
      let convertReferenceString = referenceString;
      let convertCompareString = compareString;

      if (typeof referenceString !== "string")
        convertReferenceString = referenceString.toString();

      if (typeof compareString !== "string")
        convertCompareString = compareString.toString();

      //TODO - Add locale support
      result = convertReferenceString.localeCompare(convertCompareString, 'en');

      // The return value from localeCompare is browser dependent so make sure the return value
      // is converted to what its expected.
      if(result < -1)
        result = -1;
      else if(result > 1)
        result = 1;
    }

    return result;
  }
}
