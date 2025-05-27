import { setLoading } from './globalSlice';

const loadingMiddleware = (store) => (next) => (action) => {
  const { type } = action;

  const isPending = type.endsWith('/pending');
  const isFulfilled = type.endsWith('/fulfilled');
  const isRejected = type.endsWith('/rejected');

  if (isPending) store.dispatch(setLoading(true));
  if (isFulfilled || isRejected) store.dispatch(setLoading(false));

  return next(action);
};

export default loadingMiddleware;
