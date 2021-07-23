import Opts from "../types/interfaces/options";
import { Board } from "johnny-five";

export default class Core {
  private board: Board;
  constructor(opts: Opts) {
    this.board = new Board({ port: opts.port });
  }
  start = (opts: Opts) => {
    this.board.on("ready", () => {
      console.log("Board is ready");
    });
  };
}
