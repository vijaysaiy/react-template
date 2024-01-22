export const getQueryParams = (queryParams) => {
  /**
   * Generates a query string from the provided query parameters object.
   *
   * @param {Object} queryParams - An object representing key-value pairs of query parameters.
   * @returns {string} - A formatted query string that can be appended to a URL.
   *
   * @example
   * const queryParams = {
   *   key1: 'value1',
   *   key2: 'value2',
   * };
   * @usage
   * const queryString = getQueryParams(queryParams);
   * Result: "?key1=value1&key2=value2&..."
   */
  const queryString =
    "?" +
    Object.keys(queryParams)
      .map((key) => `${key}=${queryParams[key]}`)
      .join("&");

  return queryString;
};
