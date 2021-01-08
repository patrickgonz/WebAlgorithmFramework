/**
 * SortAlgorithm Test Suite
 */

import SortAlgorithm from '../sortAlgorithm.js';
import chai from 'chai';
import {JSDOM} from 'jsdom';
let expect = chai.expect;

describe('SortAlgorithm', function(){
  describe('compare()', function(){

    /*describe('from concrete class that has not unimplemented method', function(){
      it('should throw error', function(){
        class SortAlgorithmTest extends SortAlgorithm{
          constructor(){
            super();
          }
        }
        let test = new SortAlgorithmTest();

        let stringA = "astring";
        let stringB = "bstring";

        expect(function(){
          test.compare(stringA, stringB);
        }).to.throw(TypeError, 'You have to implement the method compare!')
      })
    })*/

  })

  describe('constructor()', function(){
    describe('try to instantiate', function(){
      it('should throw error', function(){
        expect(function(){
          let array = [];
          let sortAttribute = "1";
          let comparatorType = "int";
          let sortOrder = "ascending";

          let test = new SortAlgorithm(array, sortAttribute, comparatorType, sortOrder);
        }).to.throw(TypeError, 'Abstract SortAlgorithm class cannot be instantiated.')
      })
    })

    describe('try to instantiate with a bad array parameter', function(){
      it('should throw TypeError', function(){
          let array = [];
          let sortAttribute = "1";
          let comparatorType = "int";
          let sortOrder = "ascending";

          class SortAlgorithmTest extends SortAlgorithm{
            constructor(array, sortingAttribute, comparatorType, sortOrder){
              super(array, sortingAttribute, comparatorType, sortOrder);
            }
          }
          JSDOM.fromFile("sortAlgorithTest.hmtl").then(testDom => {
            let array = testDom.window.document.querySelector("p");
            expect(function(){
              let test = new SortAlgorithmTest(array, sortAttribute, comparatorType, sortOrder);
            }).to.throw(TypeError, 'array is not of type HTMLCollection.')
          })
      })
    })

    describe('try to instantiate with a bad comparatorType parameter', function(){
      it('should throw TypeError', function(){
          let sortAttribute = "1";
          let comparatorType = "notSupported";
          let sortOrder = "ascending";

          class SortAlgorithmTest extends SortAlgorithm{
            constructor(array, sortingAttribute, comparatorType, sortOrder){
              super(array, sortingAttribute, comparatorType, sortOrder);
            }
          }
          JSDOM.fromFile("sortAlgorithTest.hmtl").then(testDom => {
            let array = testDom.window.document.getElementsByTagName("tr");
            expect(function(){
              let test = new SortAlgorithmTest(array, sortAttribute, comparatorType, sortOrder);
            }).to.throw(RangeError, 'comparatorType must be "currency", "date", "float", "int", or "string".')
          })
      })
    })

    describe('try to instantiate with a bad sortOrder parameter', function(){
      it('should throw TypeError', function(){
          let sortAttribute = "1";
          let comparatorType = "int";
          let sortOrder = "notSupported";

          class SortAlgorithmTest extends SortAlgorithm{
            constructor(array, sortingAttribute, comparatorType, sortOrder){
              super(array, sortingAttribute, comparatorType, sortOrder);
            }
          }
          JSDOM.fromFile("sortAlgorithTest.hmtl").then(testDom => {
            let array = testDom.window.document.getElementsByTagName("tr");
            expect(function(){
              let test = new SortAlgorithmTest(array, sortAttribute, comparatorType, sortOrder);
            }).to.throw(RangeError, 'sortOrder must be "ascending" or "descending".')
          })
      })
    })
  })
})
