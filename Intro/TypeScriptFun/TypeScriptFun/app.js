"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Hello world');
let num;
if (1 > 2) {
    num = 1;
}
else if (1 < 2) {
    num = 0;
}
else {
    num = -1;
}
console.log(num);
var Temperature;
(function (Temperature) {
    Temperature[Temperature["ReallyCold"] = 0] = "ReallyCold";
    Temperature[Temperature["Freezing"] = 32] = "Freezing";
    Temperature[Temperature["JustAboveFreezing"] = 33] = "JustAboveFreezing";
    Temperature[Temperature["Boiling"] = 212] = "Boiling";
})(Temperature || (Temperature = {}));
let currentTemp;
rl.question('What temperature?', (answer) => {
    switch (currentTemp) {
        case Temperature.ReallyCold:
            break;
        case Temperature.Freezing:
            break;
        case Temperature.JustAboveFreezing:
            break;
        default:
            break;
    }
    rl.close();
});
// Ternary Expression
const isBig = true;
console.log("This is the " + (isBig ? "biggest" : "smallest") + " thing I have ever seen!");
//# sourceMappingURL=app.js.map