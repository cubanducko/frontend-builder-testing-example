import { datatype, date, image, random } from "faker";
import { Builder } from "utils/fixtures";

import { Network } from "../network.types";

export class NetworkBuilder extends Builder<Network> {
  protected instance: Network = {
    id: datatype.number(),
    name: random.word(),
    logoUrl: image.business(),
    opened: date.future().toISOString(),
  };
}
