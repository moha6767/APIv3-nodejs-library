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
    define(['ApiClient', 'model/SendSmtpEmailAttachment', 'model/SendSmtpEmailBcc', 'model/SendSmtpEmailCc', 'model/SendSmtpEmailReplyTo', 'model/SendSmtpEmailSender', 'model/SendSmtpEmailTo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SendSmtpEmailAttachment'), require('./SendSmtpEmailBcc'), require('./SendSmtpEmailCc'), require('./SendSmtpEmailReplyTo'), require('./SendSmtpEmailSender'), require('./SendSmtpEmailTo'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.SendSmtpEmail = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.SendSmtpEmailAttachment, root.SibApiV3Sdk.SendSmtpEmailBcc, root.SibApiV3Sdk.SendSmtpEmailCc, root.SibApiV3Sdk.SendSmtpEmailReplyTo, root.SibApiV3Sdk.SendSmtpEmailSender, root.SibApiV3Sdk.SendSmtpEmailTo);
  }
}(this, function(ApiClient, SendSmtpEmailAttachment, SendSmtpEmailBcc, SendSmtpEmailCc, SendSmtpEmailReplyTo, SendSmtpEmailSender, SendSmtpEmailTo) {
  'use strict';




  /**
   * The SendSmtpEmail model module.
   * @module model/SendSmtpEmail
   * @version 8.0.0
   */

  /**
   * Constructs a new <code>SendSmtpEmail</code>.
   * @alias module:model/SendSmtpEmail
   * @class
   * @param to {Array.<module:model/SendSmtpEmailTo>} List of email addresses and names (optional) of the recipients. For example, [{\"name\":\"Jimmy\", \"email\":\"jimmy98@example.com\"}, {\"name\":\"Joe\", \"email\":\"joe@example.com\"}]
   */
  var exports = function(to) {
    var _this = this;


    _this['to'] = to;











  };

  /**
   * Constructs a <code>SendSmtpEmail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendSmtpEmail} obj Optional instance to populate.
   * @return {module:model/SendSmtpEmail} The populated <code>SendSmtpEmail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sender')) {
        obj['sender'] = SendSmtpEmailSender.constructFromObject(data['sender']);
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], [SendSmtpEmailTo]);
      }
      if (data.hasOwnProperty('bcc')) {
        obj['bcc'] = ApiClient.convertToType(data['bcc'], [SendSmtpEmailBcc]);
      }
      if (data.hasOwnProperty('cc')) {
        obj['cc'] = ApiClient.convertToType(data['cc'], [SendSmtpEmailCc]);
      }
      if (data.hasOwnProperty('htmlContent')) {
        obj['htmlContent'] = ApiClient.convertToType(data['htmlContent'], 'String');
      }
      if (data.hasOwnProperty('textContent')) {
        obj['textContent'] = ApiClient.convertToType(data['textContent'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('replyTo')) {
        obj['replyTo'] = SendSmtpEmailReplyTo.constructFromObject(data['replyTo']);
      }
      if (data.hasOwnProperty('attachment')) {
        obj['attachment'] = ApiClient.convertToType(data['attachment'], [SendSmtpEmailAttachment]);
      }
      if (data.hasOwnProperty('headers')) {
        obj['headers'] = ApiClient.convertToType(data['headers'], Object);
      }
      if (data.hasOwnProperty('templateId')) {
        obj['templateId'] = ApiClient.convertToType(data['templateId'], 'Number');
      }
      if (data.hasOwnProperty('params')) {
        obj['params'] = ApiClient.convertToType(data['params'], Object);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SendSmtpEmailSender} sender
   */
  exports.prototype['sender'] = undefined;
  /**
   * List of email addresses and names (optional) of the recipients. For example, [{\"name\":\"Jimmy\", \"email\":\"jimmy98@example.com\"}, {\"name\":\"Joe\", \"email\":\"joe@example.com\"}]
   * @member {Array.<module:model/SendSmtpEmailTo>} to
   */
  exports.prototype['to'] = undefined;
  /**
   * List of email addresses and names (optional) of the recipients in bcc
   * @member {Array.<module:model/SendSmtpEmailBcc>} bcc
   */
  exports.prototype['bcc'] = undefined;
  /**
   * List of email addresses and names (optional) of the recipients in cc
   * @member {Array.<module:model/SendSmtpEmailCc>} cc
   */
  exports.prototype['cc'] = undefined;
  /**
   * HTML body of the message ( Mandatory if 'templateId' is not passed, ignored if 'templateId' is passed )
   * @member {String} htmlContent
   */
  exports.prototype['htmlContent'] = undefined;
  /**
   * Plain Text body of the message ( Ignored if 'templateId' is passed )
   * @member {String} textContent
   */
  exports.prototype['textContent'] = undefined;
  /**
   * Subject of the message. Mandatory if 'templateId' is not passed
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * @member {module:model/SendSmtpEmailReplyTo} replyTo
   */
  exports.prototype['replyTo'] = undefined;
  /**
   * Pass the absolute URL (no local file) or the base64 content of the attachment along with the attachment name (Mandatory if attachment content is passed). For example, `[{\"url\":\"https://attachment.domain.com/myAttachmentFromUrl.jpg\", \"name\":\"myAttachmentFromUrl.jpg\"}, {\"content\":\"base64 example content\", \"name\":\"myAttachmentFromBase64.jpg\"}]`. Allowed extensions for attachment file: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub, eps, odt, mp3, m4a, m4v, wma, ogg, flac, wav, aif, aifc, aiff, mp4, mov, avi, mkv, mpeg, mpg and wmv ( If 'templateId' is passed and is in New Template Language format then both attachment url and content are accepted. If template is in Old template Language format, then 'attachment' is ignored )
   * @member {Array.<module:model/SendSmtpEmailAttachment>} attachment
   */
  exports.prototype['attachment'] = undefined;
  /**
   * Pass the set of custom headers (not the standard headers) that shall be sent along the mail headers in the original email. 'sender.ip' header can be set (only for dedicated ip users) to mention the IP to be used for sending transactional emails. Headers are allowed in `This-Case-Only` (i.e. words separated by hyphen with first letter of each word in capital letter), they will be converted to such case styling if not in this format in the request payload. For example, `{\"sender.ip\":\"1.2.3.4\", \"X-Mailin-custom\":\"some_custom_header\"}`.
   * @member {Object} headers
   */
  exports.prototype['headers'] = undefined;
  /**
   * Id of the template
   * @member {Number} templateId
   */
  exports.prototype['templateId'] = undefined;
  /**
   * Pass the set of attributes to customize the template. For example, {\"FNAME\":\"Joe\", \"LNAME\":\"Doe\"}. It's considered only if template is in New Template Language format.
   * @member {Object} params
   */
  exports.prototype['params'] = undefined;
  /**
   * Tag your emails to find them more easily
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;



  return exports;
}));


