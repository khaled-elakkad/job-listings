export function truncate(str) {
  if (str.length > 50) return str.substring(0, 50) + "...";
  return str;
}
