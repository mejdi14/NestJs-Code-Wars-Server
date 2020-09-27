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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedirectionController = void 0;
const common_1 = require("@nestjs/common");
const checker_service_1 = require("../checker/checker.service");
let RedirectionController = class RedirectionController {
    constructor(checkerService) {
        this.checkerService = checkerService;
    }
    async redirection(res) {
        const result = await this.checkerService.problemIsSolved();
        if (result)
            return res.redirect('https://www.youtube.com/');
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RedirectionController.prototype, "redirection", null);
RedirectionController = __decorate([
    common_1.Controller('redirection'),
    __metadata("design:paramtypes", [checker_service_1.CheckerService])
], RedirectionController);
exports.RedirectionController = RedirectionController;
//# sourceMappingURL=redirection.controller.js.map