import { expect } from 'chai';
import { is, range, max, min } from '../src/main';

describe('#is', () => {

    it('should confirm [] as array', () => {
        expect(is.arr([])).to.equal(true);
    });
    it('should not confirm [] as object', () => {
        expect(is.obj([])).to.equal(false);
    });
    it('should not confirm [] as string', () => {
        expect(is.str([])).to.equal(false);
    });
    it('should not confirm [] as function', () => {
        expect(is.fnc([])).to.equal(false);
    });
    it('should not confirm [] as undefined', () => {
        expect(is.und([])).to.equal(false);
    });
    it('should not confirm [] as number', () => {
        expect(is.num([])).to.equal(false);
    });
    it('should not confirm [] as null', () => {
        expect(is.nul([])).to.equal(false);
    });

    it('should confirm \'some text\' as string', () => {
        expect(is.str('some text')).to.equal(true);
    });
    
    it('should confirm \'123\' as string', () => {
        expect(is.str('123')).to.equal(true);
    });

    it('should not confirm \'123\' as number', () => {
        expect(is.num('123')).to.equal(false);
    });

    it('should confirm 123 as number', () => {
        expect(is.num(123)).to.equal(true);
    });

    it('should confirm undefined', () => {
        expect(is.und(undefined)).to.equal(true);
    });

    it('should confirm null', () => {
        expect(is.nul(null)).to.equal(true);
    });

});

describe('#range', () => {
    it('should return range 0 - 5', () => {
        expect(range(5)).to.deep.equal([0, 1, 2, 3, 4]);
    });
    it('should return range 0 - 9 with step 2', () => {
        expect(range(10, 0, 2)).to.deep.equal([0, 2, 4, 6, 8]);
    });
    it('should return range 10 - 100 with step 10', () => {
        expect(range(100, 10, 10)).to.deep.equal([10, 20, 30, 40, 50, 60, 70, 80, 90]);
    });
});

describe('#max', () => {
    it('should return max', () => {
        expect(max([0, -5, 100, 374, -498])).to.equal(374);
    });
});

describe('#min', () => {
    it('should return min', () => {
        expect(min([0, -5, 100, 374, -498])).to.equal(-498);
    });
});