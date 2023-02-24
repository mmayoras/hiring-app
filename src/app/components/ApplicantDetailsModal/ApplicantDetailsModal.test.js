import { render } from '@testing-library/react';

import { ApplicantDetailsModal } from './ApplicantDetailsModal';

describe('ApplicantDetailsModal', () => {
    it('renders', () => {
        render(
            <ApplicantDetailsModal
                applicantDetails={{
                    name: '',
                    picture: '',
                    status: 'New',
                    notes: [],
                    cell: '',
                    email: '',
                    dob: {
                        age: '',
                    },
                }}
                submit={jest.fn()}
                close={jest.fn()}
            />
        );
    });
});
