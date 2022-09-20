import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const accuURL = process.env.REACT_APP_API_URL
const apikey = process.env.REACT_APP_API_KEY

export const getIP = createAsyncThunk(
    'weather/getIP',
    async (thunkAPI) => {
        const response = await fetch(
            'https://geolocation-db.com/json/',
        );
        let data = await response.json();
        return !!data?.IPv4 ? data?.IPv4 : '127.0.0.1';
    }
);

export const getLocByIP = createAsyncThunk(
    'weather/getLocByIP',
    async ({ ip }, thunkAPI) => {

        const response = await fetch(
            `${accuURL}/locations/v1/cities/ipaddress?${new URLSearchParams({
                apikey: apikey,
                q: ip
            })}`
        );

        let data = await response.json();
        return !!data ? data : { Key: '757286' };
    }
);

export const getForecast = createAsyncThunk(
    'weather/getForecast',
    async ({ location_key }, thunkAPI) => {
        const response = await fetch(
            `${accuURL}/forecasts/v1/daily/5day/${location_key}?${new URLSearchParams({
                apikey: apikey,
            })}`
        );

        let data = await response.json();
        return !!data?.DailyForecasts ? data?.DailyForecasts : [];
    }
);



export const storeSlice = createSlice({
    name: 'store',
    initialState: {
        ip: null,
        location: null,
        forecast: [],
    },
    reducers: {
        updateLocation: (state, { payload }) => {
            state.location = payload;
            return state;
        },
    },
    extraReducers: {
        [getIP.fulfilled]: (state, { payload }) => {
            state.ip = payload;
            return state;
        },
        [getLocByIP.fulfilled]: (state, { payload }) => {
            state.location = payload;
            return state;
        },
        [getForecast.fulfilled]: (state, { payload }) => {
            state.forecast = payload;
            return state;
        },
    },
});

export const { updateLocation } = storeSlice.actions;

export const storeSelector = (state) => state.store;
