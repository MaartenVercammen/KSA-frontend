import { userInfo } from 'os';
import { Roles, user } from '../../types';

const allowedPerTab = {
    0: [Roles.BRAGGEL, Roles.BONDS, Roles.ADMIN],
    1: [Roles.BONDS, Roles.ADMIN],
    2: [Roles.ADMIN],
    3: [Roles.ADMIN],
};

const authTab = (index: number) => {
    const user: user = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (allowedPerTab[index].includes(user.role)) {
        return true;
    }
    return false;
};

export default authTab;
