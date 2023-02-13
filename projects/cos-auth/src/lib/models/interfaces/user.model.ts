import { UserRoleEnum } from '../enums/user-role.enum';
import { UserTypeEnum } from '../enums/user-type.enum';

export interface User {
  authenticated: boolean;
  internalUserId: number;
  internalUserUUID: string;
  privileges: UserRoleEnum[];
  token: string;
  type: UserTypeEnum;
  userId: string;
}
