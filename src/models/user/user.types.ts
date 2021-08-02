import { WithNetwork } from "../network";
import { WithUserGroup } from "../userGroup";
import { UserRole, UserAccessType } from "./userCommon.types";

type UserData = {
  readonly id: number;
  readonly firstName: string;
  readonly lastName?: string;
  readonly askForOnboarding: boolean;
  readonly email: string;
  readonly profilePictureUrl?: string;
  readonly role: UserRole;
  readonly accessTypes?: UserAccessType[];
};

export type User = UserData & WithNetwork & WithUserGroup;

export const USERS_RESOURCE_ID = "user";
