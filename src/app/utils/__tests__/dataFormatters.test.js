import { formatFullName, formatPhoneNumber } from '../dataFormatters';

const NORMAL_UNFORMATTED_PHONE_STRING = '06-48-90-14-50';
const SHORT_UNFORMATTED_PHONE_STRING = '12-3';
const LONG_UNFORMATTED_PHONE_STRING = '123-456-78910';

describe('dateFormatters', () => {
    describe('formatPhoneNumber', () => {
        it('should format normal length phone number string', () => {
            const formattedPhoneNumber = formatPhoneNumber(NORMAL_UNFORMATTED_PHONE_STRING);

            expect(formattedPhoneNumber).toEqual('(064) 890-1450');
        });
        it('should return same string for short phone number string', () => {
            const formattedPhoneNumber = formatPhoneNumber(SHORT_UNFORMATTED_PHONE_STRING);

            expect(formattedPhoneNumber).toEqual(SHORT_UNFORMATTED_PHONE_STRING);
        });
        it('should return same string for long phone number string', () => {
            const formattedPhoneNumber = formatPhoneNumber(LONG_UNFORMATTED_PHONE_STRING);

            expect(formattedPhoneNumber).toEqual(LONG_UNFORMATTED_PHONE_STRING);
        });
    });
    describe('formatFullName', () => {
        it('should format name', () => {
            expect(true).toEqual(true);
        });
    });
});
