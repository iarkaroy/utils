import { expect } from 'chai';
import { is } from '../src/main';

describe('#is', () => {
   it('[] should confirm array', () => {
       expect(is.arr([])).to.equal(true);
   }); 
});