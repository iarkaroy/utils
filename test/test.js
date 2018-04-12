import { expect } from 'chai';
import { is } from '../src/main';

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