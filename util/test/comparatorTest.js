/**
 * Comparator Test Suite
 */

import Comparator from '../comparator.js';
import chai from 'chai';
let expect = chai.expect;

describe('Comparator', function(){
  describe('compare()', function(){

    describe('from concrete class that has not unimplemented method', function(){
      it('should throw error', function(){
        class ComparatorTest extends Comparator{
          constructor(){
            super();
          }
        }
        let test = new ComparatorTest();

        let stringA = "astring";
        let stringB = "bstring";

        expect(function(){
          test.compare(stringA, stringB);
        }).to.throw(TypeError, 'You have to implement the method compare!')
      })
    })

  })

  describe('constructor()', function(){
    describe('try to instantiate', function(){
      it('should throw error', function(){
        expect(function(){
          let test = new Comparator();
        }).to.throw(TypeError, 'Abstract Comparator class cannot be instantiated.')
      })
    })
  })
})
