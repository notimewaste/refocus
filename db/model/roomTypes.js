/**
 * Copyright (c) 2016, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * db/model/roomTypes.js
 */
const common = require('../helpers/common');
const constants = require('../constants');

const assoc = {};

module.exports = function user(seq, dataTypes) {
  const RoomTypes = seq.define('RoomTypes', {
    name: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: 'Create a named room type'
    },
    active: {
      type: dataTypes.BOOLEAN,
      defaultValue: false,
      comment: 'Determines if room type is still active'
    }
  }, {
    classMethods: {
      getRoomTypeAssociations() {
        return assoc;
      },
      postImport(models) {
        assoc.settings = RoomTypes.hasMany(models.RoomSetting, {
          as: 'settings',
          foreignKey: 'roomTypeId',
        });
        assoc.rules = RoomTypes.hasMany(models.RoomRule, {
          as: 'rules',
          foreignKey: 'roomTypeId',
        });
        assoc.connectedBot = RoomTypes.belongsToMany(models.Bot, {
          as: 'bots',
          through: 'RoomBots',
          foreignKey: 'roomTypeId',
        });
      },
    }
  });
  return RoomTypes;
};
