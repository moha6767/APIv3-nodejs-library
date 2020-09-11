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
    define(['ApiClient', 'model/GetExtendedContactDetailsStatisticsClicked', 'model/GetExtendedContactDetailsStatisticsMessagesSent', 'model/GetExtendedContactDetailsStatisticsOpened', 'model/GetExtendedContactDetailsStatisticsUnsubscriptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetExtendedContactDetailsStatisticsClicked'), require('./GetExtendedContactDetailsStatisticsMessagesSent'), require('./GetExtendedContactDetailsStatisticsOpened'), require('./GetExtendedContactDetailsStatisticsUnsubscriptions'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetExtendedContactDetailsStatistics = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.GetExtendedContactDetailsStatisticsClicked, root.SibApiV3Sdk.GetExtendedContactDetailsStatisticsMessagesSent, root.SibApiV3Sdk.GetExtendedContactDetailsStatisticsOpened, root.SibApiV3Sdk.GetExtendedContactDetailsStatisticsUnsubscriptions);
  }
}(this, function(ApiClient, GetExtendedContactDetailsStatisticsClicked, GetExtendedContactDetailsStatisticsMessagesSent, GetExtendedContactDetailsStatisticsOpened, GetExtendedContactDetailsStatisticsUnsubscriptions) {
  'use strict';




  /**
   * The GetExtendedContactDetailsStatistics model module.
   * @module model/GetExtendedContactDetailsStatistics
   * @version 8.0.0
   */

  /**
   * Constructs a new <code>GetExtendedContactDetailsStatistics</code>.
   * Campaign statistics of the contact
   * @alias module:model/GetExtendedContactDetailsStatistics
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>GetExtendedContactDetailsStatistics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetExtendedContactDetailsStatistics} obj Optional instance to populate.
   * @return {module:model/GetExtendedContactDetailsStatistics} The populated <code>GetExtendedContactDetailsStatistics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('messagesSent')) {
        obj['messagesSent'] = ApiClient.convertToType(data['messagesSent'], [GetExtendedContactDetailsStatisticsMessagesSent]);
      }
      if (data.hasOwnProperty('hardBounces')) {
        obj['hardBounces'] = ApiClient.convertToType(data['hardBounces'], [GetExtendedContactDetailsStatisticsMessagesSent]);
      }
      if (data.hasOwnProperty('softBounces')) {
        obj['softBounces'] = ApiClient.convertToType(data['softBounces'], [GetExtendedContactDetailsStatisticsMessagesSent]);
      }
      if (data.hasOwnProperty('complaints')) {
        obj['complaints'] = ApiClient.convertToType(data['complaints'], [GetExtendedContactDetailsStatisticsMessagesSent]);
      }
      if (data.hasOwnProperty('unsubscriptions')) {
        obj['unsubscriptions'] = GetExtendedContactDetailsStatisticsUnsubscriptions.constructFromObject(data['unsubscriptions']);
      }
      if (data.hasOwnProperty('opened')) {
        obj['opened'] = ApiClient.convertToType(data['opened'], [GetExtendedContactDetailsStatisticsOpened]);
      }
      if (data.hasOwnProperty('clicked')) {
        obj['clicked'] = ApiClient.convertToType(data['clicked'], [GetExtendedContactDetailsStatisticsClicked]);
      }
      if (data.hasOwnProperty('transacAttributes')) {
        obj['transacAttributes'] = ApiClient.convertToType(data['transacAttributes'], [Object]);
      }
    }
    return obj;
  }

  /**
   * Listing of the sent campaign for the contact
   * @member {Array.<module:model/GetExtendedContactDetailsStatisticsMessagesSent>} messagesSent
   */
  exports.prototype['messagesSent'] = undefined;
  /**
   * Listing of the hardbounes generated by the contact
   * @member {Array.<module:model/GetExtendedContactDetailsStatisticsMessagesSent>} hardBounces
   */
  exports.prototype['hardBounces'] = undefined;
  /**
   * Listing of the softbounes generated by the contact
   * @member {Array.<module:model/GetExtendedContactDetailsStatisticsMessagesSent>} softBounces
   */
  exports.prototype['softBounces'] = undefined;
  /**
   * Listing of the complaints generated by the contact
   * @member {Array.<module:model/GetExtendedContactDetailsStatisticsMessagesSent>} complaints
   */
  exports.prototype['complaints'] = undefined;
  /**
   * @member {module:model/GetExtendedContactDetailsStatisticsUnsubscriptions} unsubscriptions
   */
  exports.prototype['unsubscriptions'] = undefined;
  /**
   * Listing of the openings generated by the contact
   * @member {Array.<module:model/GetExtendedContactDetailsStatisticsOpened>} opened
   */
  exports.prototype['opened'] = undefined;
  /**
   * Listing of the clicks generated by the contact
   * @member {Array.<module:model/GetExtendedContactDetailsStatisticsClicked>} clicked
   */
  exports.prototype['clicked'] = undefined;
  /**
   * Listing of the transactional attributes for the contact
   * @member {Array.<Object>} transacAttributes
   */
  exports.prototype['transacAttributes'] = undefined;



  return exports;
}));


