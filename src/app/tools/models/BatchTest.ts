export interface BatchTest {
  id : number;
  dataDelivered : Date;
  validUntil : Date;
  dateTested : Date;
  supplierId : number;
  serviceCenter : string;
  employeeId : number;
  allInOneIds : [];
  computerIds : [];
  laptopIds : [];
  tabletIds : [];
  printerIds : [];
  scannerIds : [];
  serverIds : [];
  links : [];
}
