import { selectUser } from "../user/userSelectors";
export const selectTransactions = (state) => state.transactions.items;
export const selectIsLoading = (state) => state.transactions.isLoading;
export const selectError = (state) => state.transactions.error;
export const selectBalance = (state) => selectUser(state).balance;
