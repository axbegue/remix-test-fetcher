export type PaginationType = {
  label: string;
  hasPrev: boolean;
  prev: number;
  hasNext: boolean;
  next: number;
  current: number;
  itemCount: number;
};

export const emptyPaginationType: PaginationType = {
  label: 'No data',
  hasPrev: false,
  prev: 0,
  hasNext: false,
  next: 0,
  current: 0,
  itemCount: 0,
};
