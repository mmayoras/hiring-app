import { GET_RANDOM_USER_ENDPOINT } from '../constants/appConstants';
import { Applicant } from '../models/Applicant';

export const getNewApplicant = async (): Promise<Applicant | null> => {
    const { results } = await fetch(GET_RANDOM_USER_ENDPOINT)
        .then((response: Response) => response.json());

    const newApplicant: Applicant | null = results.length > 0 ? results[0] : null;

    if (newApplicant !== null) {
        newApplicant.status = 'New';
        newApplicant.notes = [];
    }

    return newApplicant;
}
