import { Module } from '@nestjs/common';
import { BackendFeaturesUserController } from './backend-features-user.controller';
import { BackendFeaturesUserBackendLibraryService } from './backend-features-user.service';

@Module({
    controllers: [
        BackendFeaturesUserController,
    ],
    providers: [
        BackendFeaturesUserBackendLibraryService,
    ],
    exports: [
        BackendFeaturesUserBackendLibraryService,
    ],
})
export class UserModule { }
