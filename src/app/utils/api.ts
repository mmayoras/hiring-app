import { GET_RANDOM_USER_ENDPOINT } from '../constants/appConstants';
import { Applicant } from '../models/Applicant';

export const getNewApplicant = async (): Promise<Applicant | null> => {
    const { results } = await fetch(GET_RANDOM_USER_ENDPOINT)
        .then((response) => response.json());

    const newApplicant: Applicant = !!results && results.length > 0 ? results[0] : null;

    return newApplicant;
}
