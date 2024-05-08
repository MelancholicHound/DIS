export interface Batch {
  id: number;
  employeeId: number;
  supplierId: number;
  dateDelivered: Date
  dateTested: Date;
  validUntil: Date;
}
