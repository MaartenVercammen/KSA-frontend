import { userInfo } from 'os';
import { Roles, user } from '../../types';

const allowedPerTab = {
  0: [Roles.BRAGGEL, Roles.BONDS, Roles.ADMIN],
  1: [Roles.BONDS, Roles.ADMIN],
  2: [Roles.ADMIN],
  3: [Roles.ADMIN],
  4: [Roles.BRAGGEL, Roles.BONDS, Roles.ADMIN],
  5: [Roles.BRAGGEL, Roles.BONDS, Roles.ADMIN],
  6: [Roles.BRAGGEL, Roles.BONDS, Roles.ADMIN],
};

const authTab = (index: number) => {
  const user: user = JSON.parse(sessionStorage.getItem('user') || '{}');
  if (allowedPerTab[index].includes(user.role)) {
    return true;
  }
  sessionStorage.setItem('dashboardPage', '0');

  return false;
};

export default authTab;
