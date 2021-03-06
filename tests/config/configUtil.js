/**
 * Copyright (c) 2016, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * tests/config/configUtil.js
 *
 * Tests config utilities
*/

const expect = require('chai').expect;
const configUtil = require('../../config/configUtil');

const NOT_ALLOWED = 'Your IP address is not allowed. Verify your ' +
  'network address and your Refocus IP settings';

describe('IP List', () => {
  it('parse default IP list', (done) => {
    const iplist = configUtil.parseIPlist('[[0.0.0.0,255.255.255.255]]');
    expect(iplist).to.have.length(1);
    expect(iplist).to.be.eql([['0.0.0.0', '255.255.255.255']]);
    done();
  });

  it('parse IP list with space around opening bracket', (done) => {
    const iplist = configUtil.parseIPlist('[ [1.2.3.4,1.2.3.8],[7.6.5.4,7.6.9.9]]');
    expect(iplist).to.have.length(2);
    expect(iplist).to.be.eql([
      ['1.2.3.4', '1.2.3.8'],
      ['7.6.5.4', '7.6.9.9'],
    ]);
    done();
  });

  it('parse IP list with space around closing bracket', (done) => {
    const iplist = configUtil
      .parseIPlist('[[1.2.3.4,1.2.3.8],[7.6.5.4,7.6.9.9 ] ]');
    expect(iplist).to.have.length(2);
    expect(iplist).to.be.eql([
      ['1.2.3.4', '1.2.3.8'],
      ['7.6.5.4', '7.6.9.9'],
    ]);
    done();
  });

  it('parse IP list with space around comma', (done) => {
    const iplist = configUtil
      .parseIPlist('[[1.2.3.4, 1.2.3.8], [7.6.5.4,7.6.9.9]]');
    expect(iplist).to.have.length(2);
    expect(iplist).to.be.eql([
      ['1.2.3.4', '1.2.3.8'],
      ['7.6.5.4', '7.6.9.9'],
    ]);
    done();
  });

  it('parse IP list with misc spaces', (done) => {
    const iplist = configUtil
      .parseIPlist('[ [ 1.2.3.4, 1.2.3.8], [7.6.5.4, 7.6.9.9 ] ]');
    expect(iplist).to.have.length(2);
    expect(iplist).to.be.eql([
      ['1.2.3.4', '1.2.3.8'],
      ['7.6.5.4', '7.6.9.9'],
    ]);
    done();
  });

  it('error parsing IP list with wrong format', (done) => {
    expect(configUtil.parseIPlist.bind(
      configUtil.parseIPlist, '[ [ 1.2.3.4, 1.2.3.8], [7.6.5.4] ]')
    )
    .to.throw(NOT_ALLOWED);
    done();
  });
});

describe('csvToArray', () => {
  it('undefined string', (done) => {
    expect(configUtil.csvToArray(undefined))
    .to.be.eql([]);
    done();
  });

  it('null string', (done) => {
    expect(configUtil.csvToArray(null))
    .to.be.eql([]);
    done();
  });

  it('zero-length string', (done) => {
    expect(configUtil.csvToArray(''))
    .to.be.eql([]);
    done();
  });

  it('single element', (done) => {
    expect(configUtil.csvToArray('abc'))
    .to.be.eql(['abc']);
    done();
  });

  it('multiple elements with extra left and right padding', (done) => {
    expect(configUtil.csvToArray('abc,def , ghi'))
    .to.be.eql(['abc', 'def', 'ghi']);
    done();
  });
}); // csvToArray

describe('csvToArray', () => {
  it('undefined string', (done) => {
    expect(configUtil.csvToArray(undefined))
    .to.be.eql([]);
    done();
  });

  it('null string', (done) => {
    expect(configUtil.csvToArray(null))
    .to.be.eql([]);
    done();
  });

  it('zero-length string', (done) => {
    expect(configUtil.csvToArray(''))
    .to.be.eql([]);
    done();
  });

  it('single element', (done) => {
    expect(configUtil.csvToArray('abc'))
    .to.be.eql(['abc']);
    done();
  });

  it('multiple elements with extra left and right padding', (done) => {
    expect(configUtil.csvToArray('abc,def , ghi'))
    .to.be.eql(['abc', 'def', 'ghi']);
    done();
  });
}); // csvToArray

describe('getReadReplicas', () => {
  it('only bad entry will return undefined', (done) => {
    const pe = { 'REPLICAS': 'test' };
    expect(configUtil.getReadReplicas(pe, 'REPLICAS'))
    .to.be.eql(undefined);
    done();
  });

  it('without Replicas env variable return undefined', (done) => {
    const pe = {};
    expect(configUtil.getReadReplicas(pe, 'REPLICAS'))
    .to.be.eql(undefined);
    done();
  });

  it('Replicas env variable with correct env variables', (done) => {
    const pe = { 'REPLICAS': 'test', 'test': 'testURL' };
    expect(configUtil.getReadReplicas(pe, 'REPLICAS'))
    .to.be.eql(['testURL']);
    done();
  });

  it('Replicas env variable with bad env variables', (done) => {
    const pe = { 'REPLICAS': 'test, test1', 'test': 'testURL' };
    expect(configUtil.getReadReplicas(pe, 'REPLICAS'))
    .to.be.eql(['testURL']);
    done();
  });
});
