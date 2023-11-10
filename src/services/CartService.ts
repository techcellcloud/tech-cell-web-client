import instance from "./Instance";
import { CartModel, CreateCartModel } from "@models/Cart";
import { CART_ENDPOINT } from "@constants/Services";
import { Paging, PagingResponse } from "@models/Common";

export const addToCart = (payload: CreateCartModel) =>
    instance.post<CartModel>(`${CART_ENDPOINT}`, payload);

export const getCarts = (payload: Paging) => {
    const { page, pageSize } = payload;

    const url = `${CART_ENDPOINT}?page=${page + 1}&pageSize=${pageSize}`;

    return instance.get<PagingResponse<CartModel>>(url);
}