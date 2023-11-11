import { createSlice, Dispatch } from '@reduxjs/toolkit'; 
import { CartModel, CartsSlice, CreateCartModel } from '@models/Cart';
import { Paging, PagingResponse } from '@models/Common';
import { addToCart, getCarts } from '@services/index';

const initialState: CartsSlice = {
    carts: new PagingResponse<CartModel>(),
    isLoading: false,
}

export const cartsSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        isFetching: (state) => {
            state.isLoading = true;
        },
        getAllSuccess: (state, { payload }) => {
            state.carts = payload;
            state.isLoading = false;
        },
        getAllFailure: (state) => {
            state.carts = new PagingResponse<CartModel>();
            state.isLoading = false;
        },
        fetchedDone: (state) => {
            state.isLoading = false;
        },
    }
});

// Thunk
export const getCartItems = (payload: Paging) => async (dispatch: Dispatch) => {
    dispatch(isFetching());
    try {
        const response = await getCarts(payload);
        if (response.data) {
            dispatch(getAllSuccess(response.data));
        }
    } catch (error) {
        console.log(error);
        dispatch(getAllFailure());
    }
}

export const addItemToCart = (payload: CreateCartModel) => async (dispatch: Dispatch) => {
    dispatch(isFetching());
    try {
        const response = await addToCart(payload);
        if (response.data) {
            dispatch(fetchedDone());
            return { success: true }
        }
    } catch (error) {
        dispatch(fetchedDone());
        return { success: false, error };
    }
}

const { actions, reducer } = cartsSlice;

export const {
    isFetching,
    getAllSuccess,
    getAllFailure,
    fetchedDone,
} = actions;

export default reducer;