/**
 * TableRowRetriever.js - retrieves all the row (tr) elements in the
 * table body element.
 * @class
 */
import Retriever from './retriever.js';
export default class TableRowRetriever extends Retriever{
  constructor(){
    super();
  }

  /**
   * retrieve - Retrieve row (tr) elements from a table object element
   * and returns an array of the row objects retrieved.
   * @param   object - HTMLTableElement object
   * @returns        - HTMLCollection of the rows retrieved (cloned)
   */
  retrieve(tableObj){
    // Is this a table object?
    if(!(tableObj instanceof HTMLTableElement))
      throw new TypeError('Object is not of type HTMLTableElement');

    // Clone the table body
    let tableBodyClone = tableObj.querySelectorAll('tbody').cloneNode(true);

    // If there is a body, retrievet the rows.
    if (tableBodyClone != undefined){
      return tableBodyClone.getElementsByTagName('tr');
    }
    // Otherwise, return an ??
    else;
  }
}
