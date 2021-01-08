/**
 * SortAlgorithm - defines the interface for the sort algorithm family
 * @class
 * @abstract
 */
import CurrencyComparator from '../util/CurrencyComparator.js'; //Also imports floatComparator
import DateComparator from '../util/DateComparator.js';
import IntComparator from '../util/intComparator.js';
import StringComparator from '../util/StringComparator.js';
export default class SortAlgorithm {
  /**
   * @param {HTMLCollection} array            HTMLCollection of items to sort
   * @param {string}         sortingAttribute Sorting Attribute used to sort items
   * @param {string}         comparatorType   A string specifing the comparator to use.
   *                                          Valid values are: currency, date, float, int,
   *                                          and string.
   * @param {string}         sortOrder        Order for the sorting. Value values are"
   *                                          ascending or descending.
   */
  constructor(array, sortingAttribute, comparatorType, sortOrder) {
    if(this.constructor === SortAlgorithm)
      throw new TypeError('Abstract SortAlgorithm class cannot be instantiated.');
console.log(array);
    if(array instanceof HTMLCollection)
      this._array = array;
    else
      throw new TypeError('array is not of type HTMLCollection.');

    this._sortingAttribute = sortingAttribute;

    if(sortOrder == "ascending" | sortOrder == "descending")
      this._sortOrder = sortOrder;
    else
      throw new RangeError('sortOrder must be "ascending" or "descending".');

    switch(comparatorType){
      case "currency":
        this._comparator = new CurrencyComparator();
        break;
      case "date":
        this._comparator = new DateComparator();
        break;
      case "float":
        this._comparator = new FloatComparator();
        break;
      case "int":
        this._comparator = new IntComparator();
        break;
      case "string":
        this._comparator = new StringComparator();
      default:
        throw new RangeError('comparatorType must be "currency", "date", "float", "int", or "string".');
    }
  }

}
