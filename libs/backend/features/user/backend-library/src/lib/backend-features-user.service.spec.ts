import { Test } from '@nestjs/testing';
import { BackendFeaturesUserBackendLibraryService } from './backend-features-user.service';

describe('BackendFeaturesUserBackendLibraryService', () => {
    let service: BackendFeaturesUserBackendLibraryService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [BackendFeaturesUserBackendLibraryService],
        }).compile();

        service = module.get(BackendFeaturesUserBackendLibraryService);
    });

    it('should be defined', () => {
        expect(service).toBeTruthy();
    });
});
