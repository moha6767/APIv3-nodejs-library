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
    define(['ApiClient', 'model/GetAttributesEnumeration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetAttributesEnumeration'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetAttributesAttributes = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.GetAttributesEnumeration);
  }
}(this, function(ApiClient, GetAttributesEnumeration) {
  'use strict';




  /**
   * The GetAttributesAttributes model module.
   * @module model/GetAttributesAttributes
   * @version 8.0.0
   */

  /**
   * Constructs a new <code>GetAttributesAttributes</code>.
   * @alias module:model/GetAttributesAttributes
   * @class
   * @param name {String} Name of the attribute
   * @param category {module:model/GetAttributesAttributes.CategoryEnum} Category of the attribute
   */
  var exports = function(name, category) {
    var _this = this;

    _this['name'] = name;
    _this['category'] = category;



  };

  /**
   * Constructs a <code>GetAttributesAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAttributesAttributes} obj Optional instance to populate.
   * @return {module:model/GetAttributesAttributes} The populated <code>GetAttributesAttributes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('enumeration')) {
        obj['enumeration'] = ApiClient.convertToType(data['enumeration'], [GetAttributesEnumeration]);
      }
      if (data.hasOwnProperty('calculatedValue')) {
        obj['calculatedValue'] = ApiClient.convertToType(data['calculatedValue'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of the attribute
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Category of the attribute
   * @member {module:model/GetAttributesAttributes.CategoryEnum} category
   */
  exports.prototype['category'] = undefined;
  /**
   * Type of the attribute
   * @member {module:model/GetAttributesAttributes.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Parameter only available for \"category\" type attributes.
   * @member {Array.<module:model/GetAttributesEnumeration>} enumeration
   */
  exports.prototype['enumeration'] = undefined;
  /**
   * Calculated value formula
   * @member {String} calculatedValue
   */
  exports.prototype['calculatedValue'] = undefined;


  /**
   * Allowed values for the <code>category</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CategoryEnum = {
    /**
     * value: "normal"
     * @const
     */
    "normal": "normal",
    /**
     * value: "transactional"
     * @const
     */
    "transactional": "transactional",
    /**
     * value: "category"
     * @const
     */
    "category": "category",
    /**
     * value: "calculated"
     * @const
     */
    "calculated": "calculated",
    /**
     * value: "global"
     * @const
     */
    "global": "global"  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "text"
     * @const
     */
    "text": "text",
    /**
     * value: "date"
     * @const
     */
    "date": "date",
    /**
     * value: "float"
     * @const
     */
    "float": "float",
    /**
     * value: "id"
     * @const
     */
    "id": "id",
    /**
     * value: "boolean"
     * @const
     */
    "boolean": "boolean"  };


  return exports;
}));


