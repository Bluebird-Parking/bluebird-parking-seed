import { testFun } from './main';

describe('testFun', (): void => {
    it('should return 2 + 2', (): void => {
        expect(testFun()).toBe(4);
    });
});
