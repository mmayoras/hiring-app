export type Applicant = {
    name: {
        title: string;
        first: string;
        last: string;
    };
    picture: {
        medium: string;
    };
    cell: string;
    email: string;
    dob: {
        age: string;
    },
    status: string;
    notes: Array<string>;
};

export const emptyApplicant: Applicant = {
    name: {
        title: '',
        first: '',
        last: '',
    },
    picture: {
        medium: '',
    },
    cell: '',
    email: '',
    dob: {
        age: '',
    },
    status: 'New',
    notes: [],
};
