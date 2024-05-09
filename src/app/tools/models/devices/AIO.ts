interface UPSReq {
  batchId: number;
  sectionId: number;
  peripheralIds: number[];
  upsBrandId: number;
  model: string;
  kilovolts: number;
}

interface CPUReq {
  cpuBrandId: number;
  cpuBrandSeriesId: number;
  cpuModifier: string;
}

interface DeviceSoftwareReq {
  operatingSystemId: number;
  productivityToolId: number;
  securityId: number;
}

export interface AIO {
  batchId: number;
  sectionId: number;
  storageId: number;
  ramId: number;
  videoCardId: number;
  peripheralIds: number[];
  connectionIds: number[];
  allInOneBrandId: number;
  model: string;
  upsRequest: UPSReq;
  cpuRequest: CPUReq;
  deviceSoftwareRequest: DeviceSoftwareReq;
}
