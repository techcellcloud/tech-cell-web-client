import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@mui/material';
export const SelectAddressComponent = ({ label, options, value, setValue, type }: any) => {
    
    if(type === 'province') {
        return(
            <>
            <FormControl sx={{ width: 220 }}>
                <InputLabel
                    sx={{ backgroundColor: '#f4f6f8', padding: '0px 5px' }}
                    id="demo-simple-select-label"
                >
                    {label}
                </InputLabel>
                <Select
                    sx={{
                        height: 30,
                        padding: 5,
                    }}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                >
                    {options?.map((option: any) => {
                        return (
                            <MenuItem
                                key={
                                    option?.province_id
                                }
                                value={
                                    option?.province_id
                                }
                            >
                                {
                                    option?.province_name
                                }
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
            </>
        );
    }

    if(type === 'district') {
        return(
            <>
            <FormControl sx={{ width: 220 }}>
                <InputLabel
                    sx={{ backgroundColor: '#f4f6f8', padding: '0px 5px' }}
                    id="demo-simple-select-label"
                >
                    {label}
                </InputLabel>
                <Select
                    sx={{
                        height: 30,
                        padding: 5,
                    }}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                >
                    {options?.map((option: any) => {
                        return (
                            <MenuItem
                                key={
                                    option?.district_id
                                }
                                value={
                                    option?.district_id
                                }
                            >
                                {
                                    option?.district_name
                                }
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
            </>
        );
    }

    if(type === 'ward') {
        return(
            <>
            <FormControl sx={{ width: 220 }}>
                <InputLabel
                    sx={{ backgroundColor: '#f4f6f8', padding: '0px 5px' }}
                    id="demo-simple-select-label"
                >
                    {label}
                </InputLabel>
                <Select
                    sx={{
                        height: 30,
                        padding: 5,
                    }}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                >
                    {options?.map((option: any) => {
                        return (
                            <MenuItem
                                key={
                                    option?.ward_id
                                }
                                value={
                                    option?.ward_id
                                }
                            >
                                {
                                    option?.ward_name
                                }
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
            </>
        );
    }
    
};
