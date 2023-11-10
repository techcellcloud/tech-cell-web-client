import instance from './Instance';
import { CATEGORIES_ENDPOINT } from '@constants/Services';
import { CategoryModel } from '@models/Category';
import { Paging, PagingResponse } from '@models/Common';

export const getCategories = (payload: Paging) => {
    const { page, pageSize, keyword } = payload;
    let url = `${CATEGORIES_ENDPOINT}?page=${page + 1}&pageSize=${pageSize}`;

    if (keyword) {
        url += `&keyword=${keyword}`;
    }

    return instance.get<PagingResponse<CategoryModel>>(url);
};

export const getCategoryByLabel = (label: string) =>
    instance.get(`${CATEGORIES_ENDPOINT}/label/${label}`);
