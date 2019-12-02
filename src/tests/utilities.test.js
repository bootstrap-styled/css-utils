import { theme } from 'bootstrap-styled';
import { getUtilities } from '../utilities';

describe('bootstrap utilities', () => {
  it('should throw error if no theme passed', () => {
    expect(() => getUtilities()).toThrow(
      new Error('getUtilities expect theme and should be called at the end of your makeTheme.')
    );
  });
  it('should return all utilities', () => {
    const utilities = getUtilities(theme);
    expect([...utilities].length).toBeGreaterThanOrEqual(68);
  });
  it('should merge with all utilities', () => {
    const utilities = getUtilities(theme, new Map([
      ['test', { property: 'test', class: 't', values: [0] }],
    ]));
    expect([...utilities].length).toBeGreaterThanOrEqual(69);
  });
  it('should have required keys', () => {
    const utilities = getUtilities(theme, new Map([
      ['test', { property: 'test', class: 't', values: [0] }],
    ]));
    // eslint-disable-next-line
    for (const [key, value] of utilities) {
      expect(value.property).toBeDefined();
      expect(value.values).toBeDefined();
    }
  });
});
