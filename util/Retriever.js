/**
 * Retriever - defines interface for Retriever family. Use to retrieve
 * objects (elements) from a container object (element) or file (i.e. JSON).
 * @class
 * @abstract
 }
 */
export default class Retriever{
  constructor(){
    if(this.constructor === Retriever)
      throw new TypeError('Abstract Retriever class cannot be instantiated.');
  }
  /**
   * retrieve - Retrieve objects (elements) from a container object (element)
   * and returns an array of the objects retrieved.
   * @abstract
   * @param   object - container object
   * @returns        - array of objects retrieved
   */
  retrieve(object){
    throw new TypeError('You have to implement the method retrieve!')
  }
}
