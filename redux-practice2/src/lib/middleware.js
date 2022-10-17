export const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log(
        "action: ",
        action,
        ", number: ",
        store.getState().counter.number
      );
      next(action);
    };
  };
};
                                                                                                       