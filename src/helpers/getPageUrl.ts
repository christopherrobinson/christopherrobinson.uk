export const getPageUrl = (page: number, baseUrl: string, params: URLSearchParams, forceQueryString: boolean) => {
  const hasSearchParams = forceQueryString || Array.from(params.keys()).length > 0;

  if (!hasSearchParams) {
    return page === 1 ? baseUrl : `${baseUrl}${page}/`;
  }

  if (page === 1) {
    params.delete('page');
  } else {
    params.set('page', String(page));
  }

  return `${baseUrl}?${params.toString()}`;
}
