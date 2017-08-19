"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Wotan {
    static bootstrapApplication(ApplicationClass) {
        console.log("Wotan creates App: " + ApplicationClass.name);
        var app = new ApplicationClass();
        console.log(app);
        return app;
    }
}
exports.Wotan = Wotan;
