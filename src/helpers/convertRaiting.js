export const convertRatingToPercentage = rating => {
  if (typeof rating !== 'number' || rating < 0 || rating > 10) {
    return 'Invalid rating';
  }

  const percentage = ((rating / 10) * 100).toFixed(0);

  return percentage + '%';
};
