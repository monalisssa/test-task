export const getShorterTitle = (str: string): string => {
  return str.length > 15 ? str.substring(0, 15) + '...' : str;
};

export const getShorterDescription = (str: string): string => {
  return str.length > 150 ? str.substring(0, 150) + '...' : str;
};
