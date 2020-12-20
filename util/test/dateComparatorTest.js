/**
 * DateComparator Test Suite
 */

import DateComparator from '../DateComparator.js';
import chai from 'chai';
let expect = chai.expect;

describe('DateComparator', function(){
  describe('compare()', function(){
    let comparator = new DateComparator();

    describe("Is 5/6/1980 > 6/6/1938?", function(){
      it("should return 1", function(){
        let n = "5/6/1980";
        let m = "6/6/1938";

        expect(comparator.compare(n, m)).to.equal(1)
      })
    })

    describe("Is 6/6/1938 < 5/6/1980?", function(){
      it("should return -1", function(){
        let n = "6/6/1938";
        let m = "5/6/1980";

        expect(comparator.compare(n, m)).to.equal(-1)
      })
    })

    describe("Is 5/6/1980 == 5/6/1980?", function(){
      it("should return 0", function(){
        let n = "5/6/1980";
        let m = "5/6/1980";

        expect(comparator.compare(n, m)).to.equal(0)
      })
    })

    describe("referenceString = null", function(){
      it("should return -1", function(){
        let x = "12/31/1999";
        let nullString = null;

        expect(comparator.compare(nullString, x)).to.equal(-1)
      })
    })

    describe("compareString = null", function(){
      it("should return 1", function(){
        let x = "12/31/1999";
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
        let x = "12/31/1999";
        let emptyString = " ";

        expect(comparator.compare(emptyString, x)).to.equal(-1)
      })
    })

    describe("compareString = emptyString", function(){
      it("should return 1", function(){
        let x = "12/31/1999";
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
        let x = "12/31/1999";
        let abcString = "abc";

        expect(comparator.compare(abcString, x)).to.equal(-1)
      })
    })

    describe("compareString = 'abc'", function(){
      it("should return 1", function(){
        let x = "12/31/1999";
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

    describe("Is March 9, 2005 > Aug 9, 1995?", function(){
      it("should return 1", function(){
        let n = "5/6/1980";
        let m = "6/6/1938";

        expect(comparator.compare(n, m)).to.equal(1)
      })
    })

    describe("Is Aug 09, 1995 < March 09, 2005?", function(){
      it("should return -1", function(){
        let n = "6/6/1938";
        let m = "5/6/1980";

        expect(comparator.compare(n, m)).to.equal(-1)
      })
    })

    describe("Is Wed, 09 Aug 1995 == Aug 9, 1995?", function(){
      it("should return 0", function(){
        let n = "Wed, 09 Aug 1995";
        let m = "Aug 9, 1995";

        expect(comparator.compare(n, m)).to.equal(0)
      })
    })
  })
})
