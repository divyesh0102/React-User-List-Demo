import axios from 'axios';
import { User } from '../../interfaces';
import getAPIUrl from '../../utils/getAPiUrl';

const fetchUsers = async () => {
    const response = await axios({
        method: 'GET',
        url: `${getAPIUrl()}/users`
    });
    return response.data;
}

export default fetchUsers;
