"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckerService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let CheckerService = class CheckerService {
    constructor(connexion) {
        this.connexion = connexion;
    }
    async problemIsSolved() {
        const data = await this.connexion.get('https://www.codewars.com/api/v1/users/mejdi/code-challenges/completed').pipe(operators_1.map(response => response.data.data[0].completedAt)).toPromise();
        if (data)
            return this.checkIfLastDateIsToday(data);
        else
            return false;
    }
    checkIfLastDateIsToday(data) {
        const inputDate = new Date(data);
        const todaysDate = new Date();
        return (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0));
    }
};
CheckerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], CheckerService);
exports.CheckerService = CheckerService;
//# sourceMappingURL=checker.service.js.map