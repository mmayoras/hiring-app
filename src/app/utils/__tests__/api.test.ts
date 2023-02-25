import * as api from '../api';
import { mockApplicant, mockGetNewApplicant, mockGetEmptyResponse } from '../mockGetNewApplicant.mocks';
import { Applicant } from '../../models/Applicant';

describe('api', () => {
    let windowFetchSpy: jest.SpyInstance;

    afterEach(() => {
        jest.clearAllMocks();
    });
    describe('getNewApplicant api request returns user data', () => {
        beforeEach(() => {
            windowFetchSpy = jest.spyOn(window, 'fetch').mockImplementation(mockGetNewApplicant);
        });

        it('retrieves new random user from api', async () => {            
            const newApplicant: Applicant | null = await api.getNewApplicant();

            expect(windowFetchSpy).toHaveBeenCalled();
            expect(JSON.stringify(newApplicant)).toEqual(JSON.stringify(mockApplicant));
        });
    });

    describe('getNewApplicant api request returns empty user data', () => {
        beforeEach(() => { 
            windowFetchSpy = jest.spyOn(window, 'fetch').mockImplementation(mockGetEmptyResponse);
        });

        it('receives no results from api call returns null', async () => {            
            const newApplicant: Applicant | null = await api.getNewApplicant();

            expect(windowFetchSpy).toHaveBeenCalled();
            expect(newApplicant).toEqual(null);
        });
    });
});
