import { CheckerService } from './checker.service';
export declare class CheckerController {
    private checkerService;
    constructor(checkerService: CheckerService);
    findAll(): Promise<boolean>;
}
