/**
 * Copyright (c) 2016, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * api/v1/controllers/roomtypes.js
 */
'use strict';

const helper = require('../helpers/nouns/roomtypes');
const doDelete = require('../helpers/verbs/doDelete');
const doFind = require('../helpers/verbs/doFind');
const doGet = require('../helpers/verbs/doGet');
const doPatch = require('../helpers/verbs/doPatch');
const doPost = require('../helpers/verbs/doPost');
const doPut = require('../helpers/verbs/doPut');

module.exports = {

  /**
   * DELETE /roomtypes/{key}
   *
   * Deletes the profile and sends it back in the response.
   *
   * @param {IncomingMessage} req - The request object
   * @param {ServerResponse} res - The response object
   * @param {Function} next - The next middleware function in the stack
   */
  deleteRoomTypes(req, res, next) {
    doDelete(req, res, next, helper);
  },

  /**
   * GET /roomtypes
   *
   * Finds zero or more roomtypes and sends them back in the response.
   *
   * @param {IncomingMessage} req - The request object
   * @param {ServerResponse} res - The response object
   * @param {Function} next - The next middleware function in the stack
   */
  findRoomTypes(req, res, next) {
    doFind(req, res, next, helper);
  },

  /**
   * GET /roomtypes/{key}
   *
   * Retrieves the profile and sends it back in the response.
   *
   * @param {IncomingMessage} req - The request object
   * @param {ServerResponse} res - The response object
   * @param {Function} next - The next middleware function in the stack
   */
  getRoomTypes(req, res, next) {
    doGet(req, res, next, helper);
  },

  /**
   * PATCH /roomtypes/{key}
   *
   * Updates the profile and sends it back in the response. PATCH will only
   * update the attributes of the profile provided in the body of the request.
   * Other attributes will not be updated.
   *
   * @param {IncomingMessage} req - The request object
   * @param {ServerResponse} res - The response object
   * @param {Function} next - The next middleware function in the stack
   */
  patchRoomTypes(req, res, next) {
    doPatch(req, res, next, helper);
  },

  /**
   * POST /roomtypes
   *
   * Creates a new profile and sends it back in the response.
   *
   * @param {IncomingMessage} req - The request object
   * @param {ServerResponse} res - The response object
   * @param {Function} next - The next middleware function in the stack
   */
  postRoomTypes(req, res, next) {
    doPost(req, res, next, helper);
  },

  /**
   * PUT /roomtypes/{key}
   *
   * Updates a profile and sends it back in the response. If any attributes
   * are missing from the body of the request, those attributes are cleared.
   *
   * @param {IncomingMessage} req - The request object
   * @param {ServerResponse} res - The response object
   * @param {Function} next - The next middleware function in the stack
   */
  putRoomTypes(req, res, next) {
    doPut(req, res, next, helper);
  },

}; // exports
