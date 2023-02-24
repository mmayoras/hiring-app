export const formatPhoneNumber = (phoneString: string) : string => {
    let cleaned = ('' + phoneString).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
    return match ? '(' + match[1] + ') ' + match[2] + '-' + match[3] : phoneString;
}

export const formatFullName = (title: string, firstName: string, lastName: string): string => (
    `${title && title + '. '}${firstName && firstName + ' '}${lastName && lastName}`.trim()
);
