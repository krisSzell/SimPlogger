"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var SimPloggerFrontEndPage = (function () {
    function SimPloggerFrontEndPage() {
    }
    SimPloggerFrontEndPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    SimPloggerFrontEndPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return SimPloggerFrontEndPage;
}());
exports.SimPloggerFrontEndPage = SimPloggerFrontEndPage;
//# sourceMappingURL=app.po.js.map