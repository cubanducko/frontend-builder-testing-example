import { UserGroupBuilder } from "../../userGroup/__fixtures__";
import { datatype, image, internet, name } from "faker";
import { Builder, randomEnum } from "utils/fixtures";

import { User } from "../user.types";
import { UserAccessType, UserRole } from "../userCommon.types";
import { NetworkBuilder } from "../../network/__fixtures__";

export class UserBuilder extends Builder<User> {
  protected instance: User;

  constructor() {
    super();
    const userGroup = new UserGroupBuilder().getInstance();
    this.instance = {
      id: datatype.number(),
      firstName: name.firstName(),
      lastName: name.lastName(),
      askForOnboarding: false,
      email: internet.email(),
      profilePictureUrl: image.imageUrl(),
      role: randomEnum(UserRole),
      accessTypes: [],
      userGroup,
    };
  }

  withCorporateAccess() {
    return this.with({
      accessTypes: [UserAccessType.corporate],
    });
  }

  asFounder() {
    return this.with({
      role: UserRole.founder,
    });
  }

  asInvestor() {
    return this.with({
      role: UserRole.investor,
    });
  }

  withNetwork(network = new NetworkBuilder().getInstance()) {
    return this.with({
      network,
    });
  }
}
