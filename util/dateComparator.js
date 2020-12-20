/**
 * DateComparator - compares two date strings
 * @class
 */
import Comparator from './comparator.js';
export default class DateComparator extends Comparator{
  constructor(){
    super();
  }

  /**
   * compare - Compares the referenceString to the compareString by extracting
   * the milliseconds that have passed since midnight, January 1, 1970.
   * @param   referenceString - string that will be compared
   * @param   compareString   - string referenceString is compared too
   * @returns                 - 0, if the strings are the same
   *                            1, if the referenceString is larger
   *                           -1, if the referenceString is smaller
   */
  compare(referenceString, compareString){
    let result = -1; //Default to return smaller than
    let referenceDate = NaN;
    let compareDate = NaN;

    // Convert referenceString to milliseconds
    if (referenceString !== null){
      referenceDate = Date.parse(referenceString);
    }

    // Convert compareString to milliseconds
    if (compareString !== null){
      compareDate = Date.parse(compareString);
    }

    // Compare strings
    if (referenceDate === compareDate)
      result = 0; // Return equal
    // Handle null strings
    else if (Number.isNaN(referenceDate) & Number.isNaN(compareDate))
      result = 0; // Treat as the same
    else if (referenceDate > compareDate | Number.isNaN(compareDate))
      result = 1; // Return greater than

    return result;
  }
}
