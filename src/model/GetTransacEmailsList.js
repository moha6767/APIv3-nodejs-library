/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetTransacEmailsListTransactionalEmails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetTransacEmailsListTransactionalEmails'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetTransacEmailsList = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.GetTransacEmailsListTransactionalEmails);
  }
}(this, function(ApiClient, GetTransacEmailsListTransactionalEmails) {
  'use strict';




  /**
   * The GetTransacEmailsList model module.
   * @module model/GetTransacEmailsList
   * @version 7.2.3
   */

  /**
   * Constructs a new <code>GetTransacEmailsList</code>.
   * @alias module:model/GetTransacEmailsList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>GetTransacEmailsList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetTransacEmailsList} obj Optional instance to populate.
   * @return {module:model/GetTransacEmailsList} The populated <code>GetTransacEmailsList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('transactionalEmails')) {
        obj['transactionalEmails'] = ApiClient.convertToType(data['transactionalEmails'], [GetTransacEmailsListTransactionalEmails]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/GetTransacEmailsListTransactionalEmails>} transactionalEmails
   */
  exports.prototype['transactionalEmails'] = undefined;



  return exports;
}));


