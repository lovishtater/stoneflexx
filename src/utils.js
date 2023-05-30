export const emailValidator = email => {
  const re = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  if (!re.test(email)) return false;
  return true;
};
