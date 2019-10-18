export const sortByDate = (state) => {
  const { logs } = state.timeline;

  return [...logs].sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else if (a.date > b.date) {
      return -1;
    } else {
      return 0;
    }
  });
};
