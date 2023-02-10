import { UserRespone } from 'types/user';
import { fetchWrapper } from '.';

export const refreshUser = async (): Promise<UserRespone> => fetchWrapper.get('/api/auth/user');

export default {};
