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
    define(['ApiClient', 'model/RemainingCreditModelChild', 'model/RemainingCreditModelReseller'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RemainingCreditModelChild'), require('./RemainingCreditModelReseller'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.RemainingCreditModel = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.RemainingCreditModelChild, root.SibApiV3Sdk.RemainingCreditModelReseller);
  }
}(this, function(ApiClient, RemainingCreditModelChild, RemainingCreditModelReseller) {
  'use strict';




  /**
   * The RemainingCreditModel model module.
   * @module model/RemainingCreditModel
   * @version 8.0.0
   */

  /**
   * Constructs a new <code>RemainingCreditModel</code>.
   * @alias module:model/RemainingCreditModel
   * @class
   * @param child {module:model/RemainingCreditModelChild} 
   * @param reseller {module:model/RemainingCreditModelReseller} 
   */
  var exports = function(child, reseller) {
    var _this = this;

    _this['child'] = child;
    _this['reseller'] = reseller;
  };

  /**
   * Constructs a <code>RemainingCreditModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemainingCreditModel} obj Optional instance to populate.
   * @return {module:model/RemainingCreditModel} The populated <code>RemainingCreditModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('child')) {
        obj['child'] = RemainingCreditModelChild.constructFromObject(data['child']);
      }
      if (data.hasOwnProperty('reseller')) {
        obj['reseller'] = RemainingCreditModelReseller.constructFromObject(data['reseller']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/RemainingCreditModelChild} child
   */
  exports.prototype['child'] = undefined;
  /**
   * @member {module:model/RemainingCreditModelReseller} reseller
   */
  exports.prototype['reseller'] = undefined;



  return exports;
}));


