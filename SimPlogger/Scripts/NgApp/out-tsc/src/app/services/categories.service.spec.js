"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var categories_service_1 = require("./categories.service");
describe('CategoriesService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [categories_service_1.CategoriesService]
        });
    });
    it('should ...', testing_1.inject([categories_service_1.CategoriesService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=categories.service.spec.js.map