import { mediaBreakpointUp, breakpointInfix } from '@bootstrap-styled/css-mixins/lib/breakpoints';
import { generateUtility } from '@bootstrap-styled/css-mixins/lib/utilities';

/**
 * @param {object} gridBreakpoints - grid breakpoints
 * @param {Map} utilities - map of utilities
 * @returns {string} - css screen utilities
 */
export function screenUtilities(
  gridBreakpoints,
  utilities,
) {
  return Object.keys(gridBreakpoints).map((bp) => {
    const infix = breakpointInfix(bp, gridBreakpoints);
    const utilityList = [];
    // eslint-disable-next-line no-unused-vars, no-restricted-syntax
    for (const [key, utility] of utilities) {
      if (utility && (utility.responsive || infix === '')) {
        utilityList.push(generateUtility(utility, infix));
      }
    }
    return mediaBreakpointUp(bp, gridBreakpoints, utilityList.join('\n'));
  }).join('\n');
}

export function printUtilities(
  gridBreakpoints,
  utilities,
) {
  const utilityList = [];
  // eslint-disable-next-line no-unused-vars, no-restricted-syntax
  for (const [key, utility] of utilities) {
    if (utility && utility.print === true) {
      utilityList.push(generateUtility(utility, '-print'));
    }
  }
  return `@media print {
    ${utilityList.join('\n')}
  }`;
}
