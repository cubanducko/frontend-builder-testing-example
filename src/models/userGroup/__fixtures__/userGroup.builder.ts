import { datatype, random } from "faker";
import { Builder } from "utils/fixtures";

import { UserGroup } from "../userGroup.types";

export class UserGroupBuilder extends Builder<UserGroup> {
  protected instance: UserGroup = {
    id: datatype.number(),
    name: random.word(),
    logoUrl: random.image(),
  };
}
