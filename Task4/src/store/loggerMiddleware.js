// loggerMiddleware.js
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("ACTION:", action.type);
  next(action);
  console.log("STATE:", store.getState());
};

export default loggerMiddleware;
