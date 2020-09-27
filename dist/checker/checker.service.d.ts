import { HttpService } from '@nestjs/common';
export declare class CheckerService {
    private connexion;
    constructor(connexion: HttpService);
    problemIsSolved(): Promise<boolean>;
    private checkIfLastDateIsToday;
}
