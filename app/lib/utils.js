// MMMM DD, YYYY
export const getDateTimeFormat = (date) => {
  const dateObj = new Date(date);
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(dateObj);
};

// Reading time in minutes
export const getReadingTime = (text) => {
  const wordsPerMinute = 200;
  const numberOfWords = text.split(/\s/g).length;
  return Math.ceil(numberOfWords / wordsPerMinute);
};
