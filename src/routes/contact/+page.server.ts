import { PHONE_NUMBER, PHONE_NUMBER_STR, EMAIL, LINKEDIN } from '$env/static/private';

export const load = () => {
	return {
		phoneNumber: PHONE_NUMBER,
		phoneNumberStr: PHONE_NUMBER_STR,
		email: EMAIL,
		linkedin: LINKEDIN
	};
};
