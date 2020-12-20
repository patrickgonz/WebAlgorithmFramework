/**
 * StringComparator Test Suite
 */

import StringComparator from '../StringComparator.js';
import chai from 'chai';
let expect = chai.expect;

describe('StringComparator', function(){
  describe('compare()', function(){
    let comparator = new StringComparator();

    describe("Is Mars > Jupiter?", function(){
      it("should return 1", function(){
        let n = "Mars";
        let m = "Jupiter";

        expect(comparator.compare(n, m)).to.equal(1)
      })
    })

    describe("Is Jupiter < Mars?", function(){
      it("should return -1", function(){
        let n = "Jupiter";
        let m = "Mars";

        expect(comparator.compare(n, m)).to.equal(-1)
      })
    })

    describe("Is Venus == Venus?", function(){
      it("should return 0", function(){
        let n = "Venus";
        let m = "Venus";

        expect(comparator.compare(n, m)).to.equal(0)
      })
    })

    describe("Is Mars > mars (case matters)?", function(){
      it("should return 1", function(){
        let n = "Mars";
        let m = "mars";

        expect(comparator.compare(n, m)).to.equal(1)
      })
    })

    describe("Is mars < Mars (case matters)?", function(){
      it("should return -1", function(){
        let n = "mars";
        let m = "Mars";

        expect(comparator.compare(n, m)).to.equal(-1)
      })
    })

    describe("Is mama > mamá (accent matters)?", function(){
      it("should return -1", function(){
        let n = "mama";
        let m = "mamá";

        expect(comparator.compare(n, m)).to.equal(-1)
      })
    })

    describe("Is mamá < mama (accent matters)?", function(){
      it("should return 1", function(){
        let n = "mamá";
        let m = "mama";

        expect(comparator.compare(n, m)).to.equal(1)
      })
    })

    describe("Is mama == mamá (accent matters)?", function(){
      it("should return -1", function(){
        let n = "mama";
        let m = "mamá";

        expect(comparator.compare(n, m)).to.equal(-1)
      })
    })

    describe("referenceString = null", function(){
      it("should return -1", function(){
        let x = "Saturn";
        let nullString = null;

        expect(comparator.compare(nullString, x)).to.equal(-1)
      })
    })

    describe("compareString = null", function(){
      it("should return 1", function(){
        let x = "Saturn";
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
        let x = "Saturn";
        let emptyString = " ";

        expect(comparator.compare(emptyString, x)).to.equal(-1)
      })
    })

    describe("compareString = emptyString", function(){
      it("should return 1", function(){
        let x = "Saturn";
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

    describe("90 (a number) < 'abc'", function(){
      it("should return -1", function(){
        let abcString = "abc";
        let x = 90;

        expect(comparator.compare(x, abcString)).to.equal(-1)
      })
    })

    describe("'abc' > 90 (a number)", function(){
      it("should return 1", function(){
        let abcString = "abc";
        let x = 90;

        expect(comparator.compare(abcString, x)).to.equal(1)
      })
    })

    describe("both strings = 90 (numbers)", function(){
      it("should return 0", function(){
        let x = 90;

        expect(comparator.compare(x, x)).to.equal(0)
      })
    })
  })
})
