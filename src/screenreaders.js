import { srOnly, srOnlyFocusable } from '@bootstrap-styled/css-mixins/lib/screen-reader';

export function getScreenReadersUtilities() {
  return `
    .sr-only {
      ${srOnly()}
    }
    
    .sr-only-focusable {
      ${srOnlyFocusable()}
    }
  `;
}

export default {
  getScreenReadersUtilities,
};
