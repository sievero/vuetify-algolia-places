/* eslint-disable no-param-reassign,no-underscore-dangle */

import { AlgoliaPlacesDirective } from './directive';

const defaultOptions = {
  algolia: {
    apiKey: null,
    appId: null,
  },
};

const install = (Vue, installOptions = {}) => {
  const options = Object.assign({}, defaultOptions, installOptions);

  Vue.directive('algolia-places', AlgoliaPlacesDirective(options));
};

export default install;
