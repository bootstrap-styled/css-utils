export function getUtilities(theme, utilities = new Map()) {
  if (!theme) {
    throw new Error('getUtilities expect theme and should be called at the end of your makeTheme.');
  }
  const v = theme;

  // we convert object stores in our conf in object into map for sake of generating utilities
  const spacersMap = new Map();
  Object.keys(v.$spacers).forEach((key) => spacersMap.set(key, v.$spacers[key]));
  const negativeSpacersMap = new Map();
  Object.keys(v['$negative-spacers']).forEach((key) => negativeSpacersMap.set(key, v['$negative-spacers'][key]));
  const themeColorsMap = new Map();
  Object.keys(v['$theme-colors']).forEach((key) => themeColorsMap.set(key, v['$theme-colors'][key]));

  return new Map([
    ...new Map([
      ['align', {
        property: 'vertical-align',
        class: 'align',
        values: [
          'baseline',
          'top',
          'middle',
          'bottom',
          'text-bottom',
          'text-top',
        ],
      }],
      ['float', {
        responsive: true,
        property: 'float',
        values: [
          'left',
          'right',
          'none',
        ],
      }],
      ['overflow', {
        property: 'overflow',
        values: ['auto', 'hidden'],
      }],
      ['display', {
        responsive: true,
        print: true,
        property: 'display',
        class: 'd',
        values: [
          'none',
          'inline',
          'inline-block',
          'block',
          'table',
          'table-row',
          'table-cell',
          'flex',
          'inline-flex',
        ],
      }],
      ['shadow', {
        property: 'box-shadow',
        class: 'shadow',
        values: new Map([
          ['sm', v['$box-shadow-sm']],
          [null, v['$box-shadow']],
          ['lg', v['$box-shadow-lg']],
          ['none', 'none'],
        ]),
      }],
      ['position', {
        property: 'position',
        values: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
      }],
      ['border', {
        property: 'border',
        values: new Map([
          [null, `${v['$border-width']} solid ${v['$border-color']}`],
          [0, 0],
        ]),
      }],
      ['border-top', {
        property: 'border-top',
        values: new Map([
          [null, `${v['$border-width']} solid ${v['$border-color']}`],
          [0, 0],
        ]),
      }],
      ['border-right', {
        property: 'border-right',
        values: new Map([
          [null, `${v['$border-width']} solid ${v['$border-color']}`],
          [0, 0],
        ]),
      }],
      ['border-bottom', {
        property: 'border-bottom',
        values: new Map([
          [null, `${v['$border-width']} solid ${v['$border-color']}`],
          [0, 0],
        ]),
      }],
      ['border-left', {
        property: 'border-left',
        values: new Map([
          [null, `${v['$border-width']} solid ${v['$border-color']}`],
          [0, 0],
        ]),
      }],
      ['border-color', {
        property: 'border-color',
        class: 'border',
        values: new Map([
          ...themeColorsMap,
          ...new Map([['white', v.$white]])]),
      }],
      // Sizing utilities
      ['width', {
        property: 'width',
        class: 'w',
        values: new Map([
          ['25', '25%'],
          ['50', '50%'],
          ['75', '75%'],
          ['100', '100%'],
          ['auto', 'auto'],
        ]),
      }],
      ['max-width', {
        property: 'max-width',
        class: 'mw',
        values: new Map([['100', '100%']]),
      }],
      ['viewport-width', {
        property: 'width',
        class: 'vw',
        values: new Map([['100', '100vw']]),
      }],
      ['min-viewport-width', {
        property: 'min-width',
        class: 'min-vw',
        values: new Map([['100', '100vw']]),
      }],
      ['height', {
        property: 'height',
        class: 'h',
        values: new Map([
          ['25', '25%'],
          ['50', '50%'],
          ['75', '75%'],
          ['100', '100%'],
          ['auto', 'auto'],
        ]),
      }],
      ['max-height', {
        property: 'max-height',
        class: 'mh',
        values: new Map([['100', '100%']]),
      }],
      ['viewport-height', {
        property: 'height',
        class: 'vh',
        values: new Map([['100', '100vh']]),
      }],
      ['min-viewport-height', {
        property: 'min-height',
        class: 'min-vh',
        values: new Map([['100', '100vh']]),
      }],
      // Flex utilities
      ['flex', {
        responsive: true,
        property: 'flex',
        values: new Map([['fill', '1 1 auto']]),
      }],
      ['flex-direction', {
        responsive: true,
        property: 'flex-direction',
        class: 'flex',
        values: [
          'row',
          'column',
          'row-reverse',
          'column-reverse',
        ],
      }],
      ['flex-grow', {
        responsive: true,
        property: 'flex-grow',
        class: 'flex',
        values: new Map([
          ['grow-0', '0'],
          ['grow-1', '1'],
        ]),
      }],
      ['flex-shrink', {
        responsive: true,
        property: 'flex-shrink',
        class: 'flex',
        values: new Map([
          ['shrink-0', '0'],
          ['shrink-1', '1'],
        ]),
      }],
      ['flex-wrap', {
        responsive: true,
        property: 'flex-wrap',
        class: 'flex',
        values: [
          'wrap',
          'nowrap',
          'wrap-reverse',
        ],
      }],
      ['justify-content', {
        responsive: true,
        property: 'justify-content',
        values: new Map([
          ['start', 'flex-start'],
          ['end', 'flex-end'],
          ['center', 'center'],
          ['between', 'space-between'],
          ['around', 'space-around'],
        ]),
      }],
      ['align-items', {
        responsive: true,
        property: 'align-items',
        values: new Map([
          ['start', 'flex-start'],
          ['end', 'flex-end'],
          ['center', 'center'],
          ['baseline', 'baseline'],
          ['stretch', 'stretch'],
        ]),
      }],
      ['align-content', {
        responsive: true,
        property: 'align-content',
        values: new Map([
          ['start', 'flex-start'],
          ['end', 'flex-end'],
          ['center', 'center'],
          ['between', 'space-between'],
          ['around', 'space-around'],
          ['stretch', 'stretch'],
        ]),
      }],
      ['align-self', {
        responsive: true,
        property: 'align-self',
        values: new Map([
          ['auto', 'auto'],
          ['start', 'flex-start'],
          ['end', 'flex-end'],
          ['center', 'center'],
          ['baseline', 'baseline'],
          ['stretch', 'stretch'],
        ]),
      }],
      ['order', {
        responsive: true,
        property: 'order',
        values: new Map([
          ['first', '-1'],
          ['0', '0'],
          ['1', '1'],
          ['2', '2'],
          ['3', '3'],
          ['4', '4'],
          ['5', '5'],
          ['last', '6'],
        ]),
      }],
      // Margin utilities
      ['margin', {
        responsive: true,
        property: 'margin',
        class: 'm',
        values: new Map([
          ...spacersMap,
          ...new Map([['auto', 'auto']]),
        ]),
      }],
      ['margin-x', {
        responsive: true,
        property: ['margin-right', 'margin-left'],
        class: 'mx',
        values: new Map([
          ...spacersMap,
          ...new Map([['auto', 'auto']]),
        ]),
      }],
      ['margin-y', {
        responsive: true,
        property: ['margin-top', 'margin-bottom'],
        class: 'my',
        values: new Map([
          ...spacersMap,
          ...new Map([['auto', 'auto']]),
        ]),
      }],
      ['margin-top', {
        responsive: true,
        property: 'margin-top',
        class: 'mt',
        values: new Map([
          ...spacersMap,
          ...new Map([['auto', 'auto']]),
        ]),
      }],
      ['margin-right', {
        responsive: true,
        property: 'margin-right',
        class: 'mr',
        values: new Map([
          ...spacersMap,
          ...new Map([['auto', 'auto']]),
        ]),
      }],
      ['margin-bottom', {
        responsive: true,
        property: 'margin-bottom',
        class: 'mb',
        values: new Map([
          ...spacersMap,
          ...new Map([['auto', 'auto']]),
        ]),
      }],
      ['margin-left', {
        responsive: true,
        property: 'margin-left',
        class: 'ml',
        values: new Map([
          ...spacersMap,
          ...new Map([['auto', 'auto']]),
        ]),
      }],
      // Negative margin utilities
      ['negative-margin', {
        responsive: true,
        property: 'margin',
        class: 'm',
        values: negativeSpacersMap,
      }],
      ['negative-margin-x', {
        responsive: true,
        property: ['margin-right', 'margin-left'],
        class: 'mx',
        values: negativeSpacersMap,
      }],
      ['negative-margin-y', {
        responsive: true,
        property: ['margin-top', 'margin-bottom'],
        class: 'my',
        values: negativeSpacersMap,
      }],
      ['negative-margin-top', {
        responsive: true,
        property: ['margin-top'],
        class: 'mt',
        values: negativeSpacersMap,
      }],
      ['negative-margin-right', {
        responsive: true,
        property: 'margin-right',
        class: 'mr',
        values: negativeSpacersMap,
      }],
      ['negative-margin-bottom', {
        responsive: true,
        property: 'margin-bottom',
        class: 'mb',
        values: negativeSpacersMap,
      }],
      ['negative-margin-left', {
        responsive: true,
        property: 'margin-left',
        class: 'ml',
        values: negativeSpacersMap,
      }],
      // Padding utilities
      ['padding', {
        responsive: true,
        property: 'padding',
        class: 'p',
        values: spacersMap,
      }],
      ['padding-x', {
        responsive: true,
        property: ['padding-right', 'padding-left'],
        class: 'px',
        values: spacersMap,
      }],
      ['padding-y', {
        responsive: true,
        property: ['padding-top', 'padding-bottom'],
        class: 'py',
        values: spacersMap,
      }],
      ['padding-top', {
        responsive: true,
        property: 'padding-top',
        class: 'pt',
        values: spacersMap,
      }],
      ['padding-right', {
        responsive: true,
        property: 'padding-right',
        class: 'pr',
        values: spacersMap,
      }],
      ['padding-bottom', {
        responsive: true,
        property: 'padding-bottom',
        class: 'pb',
        values: spacersMap,
      }],
      ['padding-left', {
        responsive: true,
        property: 'padding-left',
        class: 'pl',
        values: spacersMap,
      }],
      // Text
      ['font-weight', {
        property: 'font-weight',
        values: new Map([
          ['light', v['$font-weight-light']],
          ['lighter', v['$font-weight-lighter']],
          ['normal', v['$font-weight-normal']],
          ['bold', v['$font-weight-bold']],
          ['bolder', v['$font-weight-bolder']],
        ]),
      }],
      ['text-transform', {
        property: 'text-transform',
        class: 'text',
        values: ['lowercase', 'uppercase', 'capitalize'],
      }],
      ['text-align', {
        responsive: true,
        property: 'text-align',
        class: 'text',
        values: ['left', 'right', 'center', 'justify'],
      }],
      ['color', {
        property: 'color',
        class: 'text',
        values: new Map([
          ...themeColorsMap,
          ...new Map([
            ['white', v.$white],
            ['body', v['$body-color']],
            ['muted', v['$text-muted']],
            ['black-50', `rgba(${v.$black}, .5)`],
            ['white-50', `rgba(${v.$white}, .5)`],
            ['reset', 'inherit'],
          ]),
        ]),
      }],
      ['line-height', {
        property: 'line-height',
        class: 'lh',
        values: new Map([
          ['1', '1'],
          ['sm', v['$line-height-sm']],
          ['base', v['$line-height-base']],
          ['lg', v['$line-height-lg']],
        ]),
      }],
      ['background-color', {
        property: 'background-color',
        class: 'bg',
        values: new Map([
          ...themeColorsMap,
          ...new Map([
            ['body', v['$body-bg']],
            ['white', v.$white],
            ['transparent', 'transparent'],
          ]),
        ]),
      }],
      ['white-space', {
        property: 'white-space',
        class: 'text',
        values: new Map([
          ['wrap', 'normal'],
          ['nowrap', 'nowrap'],
        ]),
      }],
      ['text-decoration', {
        property: 'text-decoration',
        values: ['none', 'underline', 'line-through'],
      }],
      ['font-style', {
        property: 'font-style',
        class: 'font',
        values: ['italic'],
      }],
      ['overflow-wrap', {
        property: ['overflow-wrap', 'word-break'], // word-break for IE & < Edge 18
        class: 'text',
        values: new Map([['break', 'break-word']]),
      }],
      ['font-family', {
        property: 'font-family',
        class: 'font',
        values: new Map([
          ['monospace', v['$font-family-monospace']],
        ]),
      }],
      ['rounded', {
        property: 'border-radius',
        class: 'rounded',
        values: new Map([
          [null, v['$border-radius']],
          ['sm', v['$border-radius-sm']],
          ['lg', v['$border-radius-lg']],
          ['circle', '50%'],
          ['pill', v['$rounded-pill']],
          ['0', '0'],
        ]),
      }],
      ['rounded-top', {
        property: ['border-top-left-radius', 'border-top-right-radius'],
        class: 'rounded-top',
        values: new Map([[null, v['$border-radius']]]),
      }],
      ['rounded-right', {
        property: ['border-top-right-radius', 'border-bottom-right-radius'],
        class: 'rounded-right',
        values: new Map([[null, v['$border-radius']]]),
      }],
      ['rounded-bottom', {
        property: ['border-bottom-right-radius', 'border-bottom-left-radius'],
        class: 'rounded-bottom',
        values: new Map([[null, v['$border-radius']]]),
      }],
      ['rounded-left', {
        property: ['border-bottom-left-radius', 'border-top-left-radius'],
        class: 'rounded-left',
        values: new Map([[null, v['$border-radius']]]),
      }],
      ['visibility', {
        property: 'visibility',
        class: null,
        values: new Map([
          ['visible', 'visible'],
          ['invisible', 'hidden'],
        ]),
      }],
    ]),
    ...utilities,
  ]);
}
