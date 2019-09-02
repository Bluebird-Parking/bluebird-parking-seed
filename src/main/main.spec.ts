import { testFun } from './main';

describe('testFun', () => {
    it('should return 2 + 2', () => {
        expect(testFun()).toBe(4);
    });
});
