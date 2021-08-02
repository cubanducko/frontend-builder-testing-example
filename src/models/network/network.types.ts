export type Network = {
  readonly id: number;
  readonly name: string;
  readonly opened: string;
  readonly websiteUrl?: string;
  readonly logoUrl?: string;
};

export type WithNetwork = {
  readonly network?: Network;
};

export const NETWORKS_RESOURCE_ID = "networks";
