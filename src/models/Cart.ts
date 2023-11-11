import { PagingResponse } from './Common';

export class CreateCartModel {
    productId: string | null = null;
    sku: string | null = null;
    quantity: number | null = null;
}

export class CartModel extends CreateCartModel {
    _id: string | null = null;
    updatedAt: string | Date | null = null;
    createdAt: string | Date | null = null;
}

// export class CartData extends PagingResponse {
//     data: Array<CartModel> = [];
// }

export class CartsSlice {
    carts: PagingResponse<CartModel> = new PagingResponse<CartModel>();
    // cart: AttributeModel | null = null;
    isLoading: boolean = false;
    //isLoadingDetail: boolean = false;
}
