import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpStatus, INestApplication } from '@nestjs/common';

describe('AppController', () => {
    let app: INestApplication;
    let httpServer;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule(
            {
                controllers: [
                    AppController,
                ],
                providers: [
                    AppService,
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

    describe('getData', () => {
        it('should return "Welcome to api!"', () => {
            const appController = app.get<AppController>(AppController);
            expect(appController.getData()).toEqual({ message: 'Welcome to api!' });
        });
    });

    // ******************************************************************************
    // *** GET
    // ******************************************************************************

    it(`/GET testing returned response`, () => {
        return request(httpServer)
            .get('/hello')
            .expect(HttpStatus.OK)
            .expect(
                { message: 'Welcome to api!' },
            )
            ;
    });
});
