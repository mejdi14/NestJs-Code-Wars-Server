import { CheckerService } from '../checker/checker.service';
export declare class RedirectionController {
    private checkerService;
    constructor(checkerService: CheckerService);
    redirection(res: any): Promise<any>;
}
