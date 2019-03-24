import { loadFeature, defineFeature } from 'jest-cucumber';

import { Rocket } from '../../src/rocket';

const feature = loadFeature('./specs/features/example-scenarios.feature');

defineFeature(feature, test => {
    test('Launching a SpaceX rocket', ({ given, when, then }) => {
        let rocket;
    
        given('I am Elon Musk attempting to launch a rocket into space', () => {
            rocket = new Rocket();
        });

        when('I launch the rocket', () => {
            rocket.launch();
        });

        then('the rocket should end up in space', () => {
            expect(rocket.isInSpace).toBe(true);
        });        

        then('the booster(s) should land back on the launch pad', () => {
            expect(rocket.boostersLanded).toBe(true);
        });

        then('nobody should doubt me ever again', () => {
            expect('people').not.toBe('haters');
        });
    });
});