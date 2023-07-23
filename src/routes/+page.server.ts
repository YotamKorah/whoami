import { PROFESSION, LOCATION } from "$env/static/private";

export const load = () => {
    const bDay = new Date(2001, 8, 21);
    const yearsOld = Math.floor((new Date().getTime() - bDay.getTime()) / (1000 * 60 * 60 * 24 * 365));
    return { yearsOld, profession: PROFESSION, location: LOCATION };
};