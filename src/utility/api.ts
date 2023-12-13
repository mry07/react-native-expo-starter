export const cancellation = (timeout: number = 0) => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), timeout);

  return controller.signal;
};
