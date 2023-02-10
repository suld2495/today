import { User } from '@prisma/client';

export type UserRespone = {
  user: User;
  token: string;
};
