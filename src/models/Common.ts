
export class Paging {
    page: number;
    pageSize: number;
    keyword?: string;

    constructor() {
        this.page = 0;
        this.pageSize = 3;
    }
}

export class PagingResponse {
    page: number | string = '';
    pageSize: number | string = '';
    totalPage: number | string = '';
    totalRecord: number | string = '';
}
