import { formatFullName, formatPhoneNumber } from '../dataFormatters';

const NORMAL_UNFORMATTED_PHONE = '06-48-90-14-50';
const SHORT_UNFORMATTED_PHONE = '12-3';
const LONG_UNFORMATTED_PHONE = '123-456-78910';

const TITLE = 'Mr';
const FIRST_NAME = 'Marques';
const LAST_NAME = 'Mayoras';

describe('dateFormatters', () => {
    describe('formatPhoneNumber', () => {
        it('should format normal length phone number string', () => {
            const formattedPhoneNumber = formatPhoneNumber(NORMAL_UNFORMATTED_PHONE);

            expect(formattedPhoneNumber).toEqual('(064) 890-1450');
        });
        it('should return same string for short phone number string', () => {
            const formattedPhoneNumber = formatPhoneNumber(SHORT_UNFORMATTED_PHONE);

            expect(formattedPhoneNumber).toEqual(SHORT_UNFORMATTED_PHONE);
        });
        it('should return same string for long phone number string', () => {
            const formattedPhoneNumber = formatPhoneNumber(LONG_UNFORMATTED_PHONE);

            expect(formattedPhoneNumber).toEqual(LONG_UNFORMATTED_PHONE);
        });
    });
    describe('formatFullName', () => {
        it('should format full name', () => {
            const formattedName = formatFullName(TITLE, FIRST_NAME, LAST_NAME);

            expect(formattedName).toEqual('Mr. Marques Mayoras');
        });

        it('should format full name without title', () => {
            const formattedName = formatFullName('', FIRST_NAME, LAST_NAME);

            expect(formattedName).toEqual('Marques Mayoras');
        });

        it('should format full name without first name', () => {
            const formattedName = formatFullName(TITLE, '', LAST_NAME);

            expect(formattedName).toEqual('Mr. Mayoras');
        });

        it('should format full name without last name', () => {
            const formattedName = formatFullName(TITLE, FIRST_NAME, '');

            expect(formattedName).toEqual('Mr. Marques');
        });

        it('should return empty string', () => {
            const formattedName = formatFullName('', '', '');

            expect(formattedName).toEqual('');
        });
    });
});
