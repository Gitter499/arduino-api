/**
 * Logs message with timestamp
 * @param message Message
 * @param info? Set true for `console.info`
 */
export const log = (message: string, info?: Boolean | undefined) => {
  info
    ? console.info(`${message} \nTimestamp: ${new Date()}`)
    : console.log(`${message} \nTimestamp: ${new Date()}`);
};
/**
 * Logs error with timestamp and error notation
 * @param errorMessage The error message to display
 */
export const error = (errorMessage: string) => {
  console.error(`ERROR: ${errorMessage} \nTimestamp: ${new Date()}`);
};
