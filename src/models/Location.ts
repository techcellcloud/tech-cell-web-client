export class Province {
    province_id: number | undefined;
    province_name: string | undefined;
    provnce_type: string | undefined;
}

export class Districs {
    district_id: number | undefined;
    district_name: string | undefined;
}

export class Ward {
    ward_id: number | undefined;
    ward_name: string | undefined;
}

export class Location{
    province: string | undefined;
    district: string | undefined;
    ward: string | undefined;
}