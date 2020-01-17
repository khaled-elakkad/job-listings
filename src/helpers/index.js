export function truncate(str) {
  if (str.length > 50) return str.substring(0, 50) + "...";
  return str;
}

export function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

export const getLastPage = linkHeader => {
  const lastLink = linkHeader.split(",").pop();
  const lastPageStart = lastLink.indexOf("_page=") + "_page=".length;
  const lastPageEnd = lastLink.indexOf(">");
  const lastPageStr = lastLink.substring(lastPageStart, lastPageEnd);
  return Number(lastPageStr);
};
