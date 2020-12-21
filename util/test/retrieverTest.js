/**
 * Retriever Test Suite
 */

import Retriever from '../Retriever.js';
import chai from 'chai';
let expect = chai.expect;

describe('Retriever', function(){
  describe('retrieve()', function(){

    describe('from concrete class that has not unimplemented method', function(){
      it('should throw error', function(){
        class RetrieverTest extends Retriever{
          constructor(){
            super();
          }
        }
        let test = new RetrieverTest();

        let obj = {};

        expect(function(){
          test.retrieve(obj);
        }).to.throw(TypeError, 'You have to implement the method retrieve!')
      })
    })

  })

  describe('constructor()', function(){
    describe('try to instantiate', function(){
      it('should throw error', function(){
        expect(function(){
          let test = new Retriever();
        }).to.throw(TypeError, 'Abstract Retriever class cannot be instantiated.')
      })
    })
  })
})
