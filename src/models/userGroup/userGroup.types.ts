export type UserGroup = {
  readonly id: number;
  readonly name: string;
  readonly description?: string;
  readonly websiteUrl?: string;
  readonly logoUrl?: string;
};

export type WithUserGroup = {
  readonly userGroup?: UserGroup;
};

export const USER_GROUPS_RESOURCE_ID = "userGroup";
