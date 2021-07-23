export enum PortType {
  COM3 = "COM3",
  COM5 = "COM5",
  // TODO add more PortTypes
}


export default interface Opts {
  port?: string | PortType;
  pin: string | number;
  thermo?: string;
}
