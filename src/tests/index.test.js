const exported = require('..');

describe('text exports', () => {
  Object.keys(exported).forEach((e) => {
    it(`${e} should be exported`, () => {
      expect(e).toBeDefined();
    });
  });
});
