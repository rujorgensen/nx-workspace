import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { BackendFeaturesUserController } from './backend-features-user.controller';

describe('BackendFeaturesUserBackendLibraryController', () => {
    let app: INestApplication;
    let httpServer: any;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule(
            {
                controllers: [
                    BackendFeaturesUserController,
                ],
                providers: [
                ],
            }
        ).compile();

        app = moduleRef.createNestApplication();

        await app.init();

        httpServer = app.getHttpServer();
    });

    afterAll(async () => {
        await app.close();
    });

    // ******************************************************************************
    // *** GET
    // ******************************************************************************

    it(`/GET testing returned response`, () => {
        return request(httpServer)
            .get('/hello')
            .expect(HttpStatus.OK)
            .expect(
                'Hello world',
            )
            ;
    });
});
