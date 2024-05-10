import axios from 'axios';

// eslint-disable-next-line no-unused-vars
export const getData = async (url: string, callback: (item: any) => void):Promise<void> => {
    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BE_URL}${url}`);

        callback(data);
    } catch (e) {
        console.error(`Unable to fetch data from url ${url}`, e);
    }
};
