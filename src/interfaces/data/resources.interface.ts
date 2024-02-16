export interface IResourcesData {
  id: number;
  name: string;
  year: string;
  color: string;
  pantone_value: string;
}

export interface IResourcesDetails {
  resources: any[];
  onClick: (userId: number) => void;
}
