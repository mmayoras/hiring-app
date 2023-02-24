import { GET_RANDOM_USER_ENDPOINT } from "../constants/appConstants";

export const getNewApplicant = async () => {
    const { results } = await fetch(GET_RANDOM_USER_ENDPOINT)
        .then((response) => response.json());

    const newApplicant = !!results && results.length > 0 ? results[0] : null;

    return newApplicant;
}