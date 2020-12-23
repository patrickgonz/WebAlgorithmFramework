/**
 * TableRowRetrieve Test Suite
 */

import TableRowRetriever from '../tableRowRetriever.js';
import chai from 'chai';
import {JSDOM} from 'jsdom';
let expect = chai.expect;

describe('TableRowRetriever', function(){
  describe('retrieve()', function(){
    let retriever = new TableRowRetriever();

    describe("Pass a null object", function(){
      it("should throw TypeError", function(){
        JSDOM.fromFile("tableRowRetrieverTest.hmtl").then(testDom => {
          //let obj = testDom.window.document.getElementById("main");
          let obj = null;

          expect(retriever.retrieve(obj)).to.throw(TypeError, 'Object is not of type HTMLTableElement')
        })
      })
    })

    describe("Pass a non table object", function(){
      it("should throw TypeError", function(){
        JSDOM.fromFile("tableRowRetrieverTest.hmtl").then(testDom => {
          let obj = testDom.window.document.getElementById("main");

          expect(retriever.retrieve(obj)).to.throw(TypeError, 'Object is not of type HTMLTableElement')
        })
      })
    })

    describe("Pass a table object", function(){
      it("should returns array of 249 objects", function(){
        JSDOM.fromFile("tableRowRetrieverTest.hmtl").then(testDom => {
          let obj = testDom.window.document.getElementById("testTableFull");

          expect(retriever.retrieve(obj)).to.have.lengthOf(249)
        })
      })
    })

    describe("Pass an empty table object", function(){
      it("should returns array of 0 objects", function(){
        JSDOM.fromFile("tableRowRetrieverTest.hmtl").then(testDom => {
          let obj = testDom.window.document.getElementById("testTableEmpty");

          expect(retriever.retrieve(obj)).to.have.lengthOf(0)
        })
      })
    })
  })
})
