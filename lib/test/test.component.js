"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-test',
                    template: "\n    <h1>test component from the test library</h1>\n  ",
                    styles: ["\n    h1{\n        color: pink;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    TestComponent.ctorParameters = function () { return []; };
    return TestComponent;
}());
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map