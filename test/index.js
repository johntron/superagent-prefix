'use strict';

var assert = require('assert');
var plugin = require('../');

describe('prefix', () => {
  let middleman;
  let prefix = 'prefix';

  beforeEach(() => {
    middleman = plugin(prefix);
  });

  describe('non-absolute path', () => {
    it('handles relative urls', () => {
      let nonAbsoluteRequest = {url: 'relative'};
      let transformedRequest = middleman(nonAbsoluteRequest);

      assert(transformedRequest.url === nonAbsoluteRequest.url);
    });
  });

  describe('absolute path', () => {
    it('handles absolute urls', () => {
      let nonAbsoluteRequest = {url: '/absolute'};
      let transformedRequest = middleman(nonAbsoluteRequest);

      assert((prefix + transformedRequest.url) === (prefix + nonAbsoluteRequest.url));
    });
  });
});
