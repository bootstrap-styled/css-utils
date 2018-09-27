import { clearfix } from '@bootstrap-styled/css-mixins/lib/clearfix';

export function getClearfixUtilities() {
  return `
   ${getClearfix()}
  `;
}

export function getClearfix() {
  return `
    .clearfix {
      ${clearfix()}
    }
  `;
}

export default {
  getClearfixUtilities,
  getClearfix,
};
