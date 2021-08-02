import { User as IUser } from "models/user";

export type UserDataProps = {
  data: IUser;
};

export function User({ data: user }: UserDataProps) {
  const { userGroup, network } = user;
  return (
    <article>
      <section>
        <h1>User data</h1>
        <ul>
          <li>First name: {user.firstName}</li>
          {user.lastName && <li>Last name: {user.lastName}</li>}
          <li>Role: {user.role}</li>
          <li>Email: {user.email}</li>
          <li>Should onboard?: {user.askForOnboarding ? "Yes" : "No"}</li>
          {user.profilePictureUrl && (
            <li>Profile picture url: {user.profilePictureUrl}</li>
          )}
        </ul>
      </section>
      {userGroup && (
        <section>
          <h1>User group data</h1>
          <ul>
            <li>User group name: {userGroup.name}</li>
            {userGroup.description && (
              <li>User group description: {userGroup.description}</li>
            )}
            {userGroup.logoUrl && <li>Logo url: {userGroup.logoUrl}</li>}
            {userGroup.websiteUrl && (
              <li>Website url: {userGroup.websiteUrl}</li>
            )}
          </ul>
        </section>
      )}
      {network && (
        <section>
          <h1>Network data</h1>
          <ul>
            <li>Network name: {network.name}</li>
            <li>Network started on: {network.opened}</li>
            {network.logoUrl && <li>Logo url: {network.logoUrl}</li>}
            {network.websiteUrl && <li>Website url: {network.websiteUrl}</li>}
          </ul>
        </section>
      )}
    </article>
  );
}
