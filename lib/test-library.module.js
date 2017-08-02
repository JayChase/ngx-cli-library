"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var test_component_1 = require("./test/test.component");
var TestLibraryModule = (function () {
    function TestLibraryModule() {
    }
    return TestLibraryModule;
}());
TestLibraryModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule
                ],
                declarations: [
                    test_component_1.TestComponent
                ],
                exports: [
                    test_component_1.TestComponent
                ]
            },] },
];
/** @nocollapse */
TestLibraryModule.ctorParameters = function () { return []; };
exports.TestLibraryModule = TestLibraryModule;
//# sourceMappingURL=test-library.module.js.map