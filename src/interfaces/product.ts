import { PriceModel } from "@models/Product";

export interface CategorySelecting {
    key: string;
    value: string;
    chosen: boolean;
}

export interface ProductLabel {
    id: string;
    name: string;
    category: string;
    price: PriceModel;
    image: string;
}