import { Thermometer } from "johnny-five";
import Opts from "../types/interfaces/options";

export default class Thermo {
  private thermo: Thermometer;
  public degreesC: number = 0;
  public degreesF: number = 0;
  public degreesK: number = 0;

  constructor(opts: Opts) {
    this.thermo = new Thermometer({ pin: opts.pin, controller: opts.thermo });
  }

  change(cb: () => void, timeout?: number): void {
    this.thermo.on("change", () => {
      if (timeout) {
        setTimeout(() => {
          cb();
        }, timeout);
      } else {
        cb();
      }
    });
  }
}
