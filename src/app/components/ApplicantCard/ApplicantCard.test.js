import { render } from '@testing-library/react';

import { ApplicantCard } from './ApplicantCard';

describe('ApplicantCard', () => {
    it('renders', () => {
        render(
            <ApplicantCard
                applicantIndex={0}
                applicantData={{
                    name: '',
                    picture: '',
                    status: 'New',
                }}
                openApplicantModal={jest.fn()}
                resetStatus={jest.fn()}
            />
        );
    });
});
