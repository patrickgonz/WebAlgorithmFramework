/**
 * IntComparator Test Suite
 */

import IntComparator from '../intComparator.js';
import chai from 'chai';
let expect = chai.expect;

describe('IntComparator', function(){
  describe('compare()', function(){
    let comparator = new IntComparator();

    describe("Is 10 > 5 (numbers)?", function(){
      it("should return 1", function(){
        let n = 10;
        let m = 5;

        expect(comparator.compare(n, m)).to.equal(1)
      })
    })

    describe("Is 10 < 20 (numbers)?", function(){
      it("should return -1", function(){
        let n = 10;
        let m = 20;

        expect(comparator.compare(n, m)).to.equal(-1)
      })
    })

    describe("Is 10 == 10 (numbers)?", function(){
      it("should return 0", function(){
        let n = 10;
        let m = 10;

        expect(comparator.compare(n, m)).to.equal(0)
      })
    })

    describe("referenceString = null", function(){
      it("should return -1", function(){
        let x = 90;
        let nullString = null;

        expect(comparator.compare(nullString, x)).to.equal(-1)
      })
    })

    describe("compareString = null", function(){
      it("should return 1", function(){
        let x = 90;
        let nullString = null;

        expect(comparator.compare(x, nullString)).to.equal(1)
      })
    })

    describe("both strings = null", function(){
      it("should return 0", function(){
        let nullString = null;

        expect(comparator.compare(nullString, nullString)).to.equal(0)
      })
    })

    describe("referenceString = emptyString", function(){
      it("should return -1", function(){
        let x = 90;
        let emptyString = " ";

        expect(comparator.compare(emptyString, x)).to.equal(-1)
      })
    })

    describe("compareString = emptyString", function(){
      it("should return 1", function(){
        let x = 90;
        let emptyString = " ";

        expect(comparator.compare(x, emptyString)).to.equal(1)
      })
    })

    describe("both strings = emptyString", function(){
      it("should return 0", function(){
        let emptyString = " ";

        expect(comparator.compare(emptyString, emptyString)).to.equal(0)
      })
    })

    describe("referenceString = 'abc'", function(){
      it("should return -1", function(){
        let x = 90;
        let abcString = "abc";

        expect(comparator.compare(abcString, x)).to.equal(-1)
      })
    })

    describe("compareString = 'abc'", function(){
      it("should return 1", function(){
        let x = 90;
        let abcString = "abc";

        expect(comparator.compare(x, abcString)).to.equal(1)
      })
    })

    describe("both strings = 'abc'", function(){
      it("should return 0", function(){
        let abcString = "abc";

        expect(comparator.compare(abcString, abcString)).to.equal(0)
      })
    })

    describe("referenceString = '&nbsp;'", function(){
      it("should return -1", function(){
        let x = 90;
        let nbspString = "&nbsp;";

        expect(comparator.compare(nbspString, x)).to.equal(-1)
      })
    })

    describe("compareString = '&nbsp;'", function(){
      it("should return 1", function(){
        let x = 90;
        let nbspString = "&nbsp;";

        expect(comparator.compare(x, nbspString)).to.equal(1)
      })
    })

    describe("both strings = '&nbsp;'", function(){
      it("should return 0", function(){
        let nbspString = "&nbsp;";

        expect(comparator.compare(nbspString, nbspString)).to.equal(0)
      })
    })
  })
})
