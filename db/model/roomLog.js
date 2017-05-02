/**
 * Copyright (c) 2016, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * db/model/roomLog.js
 */
const common = require('../helpers/common');
const constants = require('../constants');

const assoc = {};

module.exports = function user(seq, dataTypes) {
  const RoomLog = seq.define('RoomLog', {
    log: {
      type: dataTypes.STRING,
      allowNull: false,
      comment: 'Reference Key for all room type settings'
    }
  }, {
    classMethods: {
      getRoomLogAssociations() {
        return assoc;
      },
      postImport(models) {
        assoc.room = RoomLog.belongsTo(models.Room, {
          foreignKey: 'roomId',
        });
        assoc.bot = RoomLog.belongsTo(models.Bot, {
          foreignKey: 'botId',
        });
        assoc.bot = RoomLog.belongsTo(models.User, {
          foreignKey: 'userId',
        });
      },
    }
  });  return RoomLog;
};
