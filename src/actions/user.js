import { getUsers } from '../services/blogService';

export const USERS_LOAD_START = 'USERS_LOAD_START';
export const USERS_LOAD_END = 'USERS_LOAD_END';
export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => {
  return {
    type: FETCH_USERS,
    loadStart: USERS_LOAD_START,
    loadEnd: USERS_LOAD_END,
    payload: getUsers()
  };
};
