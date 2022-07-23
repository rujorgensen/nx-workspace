import { Controller, Get } from '@nestjs/common';

@Controller()
export class BackendFeaturesUserController {

    @Get('hello')
    public getData(

    ): string {
        return 'Hello world';
    }
}
