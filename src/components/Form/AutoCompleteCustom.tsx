'use client';

import React, { memo } from 'react';
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { FastField } from 'formik';
import { FastFieldAttributes } from 'formik';
import { FieldInputProps } from 'formik';
import { FieldMetaProps } from 'formik';
import { FormikProps } from 'formik';
import { FormikValues } from 'formik';
import { getIn } from 'formik';

interface Props<T> {
    value?: string | undefined;
    name: string;
    options: T[];
    displayLabel?: string;
    displaySelected?: string;
    label?: string | JSX.Element;
    searchValue?: string;
    handleChangeSearchValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlurSearchValue?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    disabled?: boolean;
    limit?: number;
    isLoading?: boolean;
    multiple?: boolean;
    placeholder?: string;
    handleChange?: (value: T | T[] | null, event: React.SyntheticEvent<Element, Event>) => void;
}

interface MultiSelectProps<T> extends Props<T> {
    field: FieldInputProps<T | T[]>;
    meta: FieldMetaProps<T | T[]>;
    setFieldValue: (name: string, value: T | T[] | null) => void;
}

function AutoCompleteComponent<T>(props: MultiSelectProps<T>) {
    const {
        value,
        name,
        disabled,
        options,
        label,
        field,
        meta,
        isLoading,
        multiple,
        displayLabel = 'name',
        displaySelected = 'id',
        limit = 10,
        placeholder,
        handleChange,
        setFieldValue,
        searchValue = '',
        handleChangeSearchValue,
        handleBlurSearchValue,
    } = props;

    const getDefaultOptionLabel = (option: T) => getIn(option, displayLabel) ?? '';

    const defaultHandleChange = (
        event: React.SyntheticEvent<Element, Event>,
        value: T | T[] | null,
    ) => {
        if (!value) {
            value = null;
        }

        if (handleChange) {
            handleChange(value, event);
        } else {
            setFieldValue(name, value);
        }
    };

    return (
        <Autocomplete
            {...field}
            value={field?.value ?? (multiple ? [] : null)}
            multiple={multiple}
            id={name}
            loading={isLoading}
            limitTags={limit}
            disabled={disabled}
            options={options ?? []}
            isOptionEqualToValue={(option, value) =>
                getIn(option, displaySelected) === getIn(value, displaySelected)
            }
            fullWidth
            disableCloseOnSelect={multiple ? true : false}
            getOptionLabel={getDefaultOptionLabel}
            onChange={defaultHandleChange}
            noOptionsText="Không có dữ liệu"
            size="small"
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    InputLabelProps={{
                        htmlFor: name,
                        // shrink: true,
                    }}
                    value={searchValue}
                    onChange={handleChangeSearchValue}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {isLoading ? <CircularProgress color="inherit" size={15} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                    onBlur={handleBlurSearchValue}
                    placeholder={placeholder}
                    error={Boolean(meta.touched && meta.error)}
                    helperText={meta.touched && meta.error ? meta.error : ''}
                />
            )}
        />
    );
}

const shouldComponentUpdate = (
    nextProps: FastFieldAttributes<Props<any> & { formik: FormikValues }>,
    currentProps: FastFieldAttributes<Props<any> & { formik: FormikValues }>,
) =>
    nextProps?.options !== currentProps?.options ||
    nextProps?.value !== currentProps?.value ||
    nextProps?.handleChange !== currentProps?.handleChange ||
    nextProps?.disabled !== currentProps?.disabled ||
    Object.keys(nextProps).length !== Object.keys(currentProps).length ||
    getIn(nextProps.formik.values, currentProps.name) !==
        getIn(currentProps.formik.values, currentProps.name) ||
    getIn(nextProps.formik.errors, currentProps.name) !==
        getIn(currentProps.formik.errors, currentProps.name) ||
    getIn(nextProps.formik.touched, currentProps.name) !==
        getIn(currentProps.formik.touched, currentProps.name);

function AutocompleteCustom<T = any>(props: Props<T>) {
    return (
        <FastField {...props} name={props.name} shouldUpdate={shouldComponentUpdate}>
            {({
                field,
                meta,
                form,
            }: {
                field: FieldInputProps<T | T[]>;
                meta: FieldMetaProps<T | T[]>;
                form: FormikProps<T | T[]>;
            }) => (
                <AutoCompleteComponent<T>
                    {...props}
                    field={field}
                    meta={meta}
                    setFieldValue={form.setFieldValue}
                />
            )}
        </FastField>
    );
}

const MemoizedMultiSelectCustom = memo(AutocompleteCustom) as <T = any>(
    props: Props<T>,
) => React.JSX.Element;

export { MemoizedMultiSelectCustom as AutocompleteCustom };
