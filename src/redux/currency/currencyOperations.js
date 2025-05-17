import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const dataParser = (data) => {
  const result = [];
  const ONE_HOUR = 60 * 60 * 1000;
  const codes = [
    { name: 'USD', code: 840 },
    { name: 'EUR', code: 978 },
  ];
  data.forEach((item) => {
    const currencyData = codes.find(
      (i) => i.code === item.currencyCodeA && item.currencyCodeB === 980,
    );

    if (currencyData) {
      result.push({
        name: currencyData.name,
        purchase: item.rateBuy ? item.rateBuy.toFixed(2) : '-',
        sale: item.rateSell ? item.rateSell.toFixed(2) : '-',
      });
    }
  });
  return { data: result, time: Date.now() + ONE_HOUR };
};

export const fetchCurrency = createAsyncThunk(
  'currency',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://api.monobank.ua/bank/currency');
      return dataParser(response.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
