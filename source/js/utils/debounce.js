function debounce(callback, timeoutDelay = 2000) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    // eslint-disable-next-line no-invalid-this
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {debounce};
