export type TheaderObj = {
  title: string;
  dataIndex?: string;
  key: string;
};

export type TObj = {
  headers: TheaderObj[];
  data: any[];
};

export type filterProps = {
  search: string;
  filter: string;
};

export type TControls = {
  data?: any[];
  disabled?: boolean;
};
