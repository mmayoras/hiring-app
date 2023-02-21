import { GET_CANDIDATE_ENDPOINT } from "../constants/appConstants";

export const getNewCandidate = async () => {
    const candidate = await fetch(GET_CANDIDATE_ENDPOINT)
        .then((response) => response.json());

    return candidate;
}