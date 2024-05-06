export const isEmptyObject = (object) => {
  if (object === undefined) return true;

  return Object.keys(object).length === 0;
};

export const getRouteParams = (path) => {
  const parts = path.split('/');
  return parts.length === 3 ? { id: parts[2] } : {};
};
