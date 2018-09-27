import { invisible } from '@bootstrap-styled/css-mixins/lib/visibility';


export function getVisibilityUtilities() {
  return `
    .visible {
      ${invisible('visible')}
    }
    
    .invisible {
      ${invisible('hidden')}
    }
   
  `;
}

export default {
  getVisibilityUtilities,
};
