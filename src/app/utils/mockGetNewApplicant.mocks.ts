import { GET_RANDOM_USER_ENDPOINT } from '../constants/appConstants';
import { Applicant, ApplicantResponse } from '../models/Applicant';

export const mockApplicant: Applicant = {
    name: {
        title: 'Mr.',
        first: 'Marques',
        last: 'Mayoras',
    },
    picture: {
        medium: '',
    },
    cell: '8458252154',
    email: 'mkm7874@gmail.com',
    dob: {
        age: '29',
    },
    status: 'New',
    notes: [],
}

export const mockApplicantResponse: ApplicantResponse = {
    results: [mockApplicant],
}

export const mockEmptyResponse: ApplicantResponse = {
    results: [],
}

export const mockGetNewApplicant = async (url: URL | RequestInfo): Promise<Response> => {
    const mockReponse = new Response();

    if (url.toString() === GET_RANDOM_USER_ENDPOINT) {
        mockReponse.json = async () => mockApplicantResponse;
        return mockReponse;
    }

    throw new Error(`Unhandled request: ${url}`);        
}

export const mockGetEmptyResponse = async (url: URL | RequestInfo): Promise<Response> => {
    const mockReponse = new Response();

    if (url.toString() === GET_RANDOM_USER_ENDPOINT) {
        mockReponse.json = async () => mockEmptyResponse;
        return mockReponse;
    }

    throw new Error(`Unhandled request: ${url}`);        
}
