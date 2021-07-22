const { Board, LCD, Led, Thermometer } = require("johnny-five");

const express = require("express");

const http = require("http");

const socket = require("socketio");


const app = express();

app.use(express.json());

const board = new Board({ port: "COM3" });

const voltage = 0;
let degreesC = 0;
let degreesF = 0;

board.on("ready", () => {
  console.log("Board is ready");

  const lcd = new LCD({
    pins: [13, 12, 11, 10, 9, 8],
  });

  const thermo = new Thermometer({ pin: "A0", controller: "TMP36" });

  lcd.clear();
  thermo.on("change", () => {
    setTimeout(() => {
      lcd.home().print("Degrees C: ").print(thermo.C.toPrecision());

      lcd.cursor(1, 0).print("Degrees F: ").print(thermo.F.toPrecision());

      degreesC = thermo.C.toPrecision();
      degreesF = thermo.F.toPrecision();
    }, 1000);
  });
});

app.get("/", (req, res) => {
  res.json({ celsisus: degreesC, farenheit: degreesF });
});

app.listen(4000, () => {
  console.log("API ready!");
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
