export type ProjectType = {
  title: string;
  category?: string;
  image: string;
  url: string;
  stackNames: string[];
  description: string;
};

export type StackType = {
  name: string;
  image: string;
};

export type Functionality = {
  url: string;
  image: string;
  title: string;
  description: string;
};

export type CardProps = {
  item: Functionality;
  index: number;
};
