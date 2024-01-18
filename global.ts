declare global {
  interface My {
    loading?: (value: boolean) => void;
  }

  var my: My;
}

export {};
