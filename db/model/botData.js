/**
 * Copyright (c) 2016, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * db/model/botData.js
 */
const common = require('../helpers/common');
const constants = require('../constants');

const assoc = {};

module.exports = function user(seq, dataTypes) {
  const BotData = seq.define('BotData', {
    name: {
      type: dataTypes.STRING,
      allowNull: false,
      comment: 'Name of bot action'
    },
    type: {
      type: dataTypes.ENUM('BOOLEAN', 'INTERGER', 'DECIMAL', 'ARRAY', 'STRING'),
      defaultValue: 'BOOLEAN',
    }
  });
  return BotData;
};
