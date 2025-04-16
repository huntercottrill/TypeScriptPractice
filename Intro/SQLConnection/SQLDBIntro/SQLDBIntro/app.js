"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const sql = require('mssql');
() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sql.connect('Server=localhost,1433;Database=DESKTOP-0PQ0C4H;User Id=Admin;Encrypt=true');
        const result = yield sql.query `select * from employee`;
        console.dir(result);
    }
    catch (err) {
    }
});
//# sourceMappingURL=app.js.map