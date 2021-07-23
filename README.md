# Arduino API

## My custom API for controlling Arduino boards **WIP**

### Local Development

**Requirements**

- Node (>12)
- NPM (comes with node)
- Arduino board (Personnally testing with SparkFun Inventors Kit Redboard or Arduino Uno)
- Arduino IDE (Upload `StandardFirmataPlus` from examples to board via USB)
- I am testing on Windows, so the port connection is different on Linux/MAC, but should be easy to setup with johnny-five docs

1. Clone the repo
2. Install dependencies by running `npm install`
3. Connect Arduino board and upload `StandardFirmataPlus` from examples (files/examples/firmata)
4. If running through Discord, make an .env file and put in your discord token `DISCORD_TOKEN = (your-token)`. See Discord docs for further instructions
5. Have fun!

**Code Structure**

I decided to write this in TypeScript. It will get better as the project progresses.

For now I am using NPM, will switch to Yarn if things go smoothly.

The API is written using Express and a few other Node goodies, it uses a controller model with utilities. I don't know if I need a database, so no models as of now.

The core and discord bot are written using a class based model. Using Discord.js for the Discord bot, and johnny-five for the core.

Still a WIP, a lot is to come.
