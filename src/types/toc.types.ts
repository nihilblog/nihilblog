export interface IH5 {
  id: string;
  text: string;
  name: 'H5';
}

export interface IH4 {
  id: string;
  text: string;
  name: 'H4';
  items?: IH5[];
}

export interface IH3 {
  id: string;
  text: string;
  name: 'H3';
  items?: IH4[];
}

export interface IH2 {
  id: string;
  text: string;
  name: 'H2';
  items?: IH3[];
}
