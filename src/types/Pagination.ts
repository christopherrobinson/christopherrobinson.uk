export interface PaginationProps {
  baseUrl: string;
  currentPage: number;
  forceQueryString?: boolean;
  total: number;
  totalPages: number;
}
