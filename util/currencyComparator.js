/**
 * CurrencyComparator - compares two currency strings
 * @class
 */
import FloatComparator from './floatComparator.js';
export default class CurrencyComparator extends FloatComparator{
  constructor(){
    super();
  }

  /**
   * compare - Compares the referenceString to the compareString by converting them
   * into floating point numbers prior to comparing them.
   * @param   referenceString - string that will be compared
   * @param   compareString   - string referenceString is compared too
   * @returns                 - 0, if the strings are the same
   *                            1, if the referenceString is larger
   *                           -1, if the referenceString is smaller
   */
  compare(referenceString, compareString){
    //Remove everything except numbers, decimal point and minus sign
    //TODO - Need to add support for other currency formats besides USA
    let regex = new RegExp("[^0-9-.]", ["g"]);
    let replacedReferenceString = null;
    let replacedCompareString = null;

    //Only do replacement if strings are passed. Otherwise pass null to compare.
    if (typeof referenceString === "string")
      replacedReferenceString = referenceString.replace(regex, '');
    if (typeof compareString === "string")
      replacedCompareString = compareString.replace(regex, '');

    return super.compare(replacedReferenceString, replacedCompareString);
  }
}
