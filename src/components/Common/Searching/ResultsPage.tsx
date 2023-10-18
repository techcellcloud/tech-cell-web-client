

import React, { FC, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@store/store';
import { Paging } from '@models/Common';

interface SearchProps {
    searchKey: string;
}

const ResultsPage: FC<SearchProps> = ({ searchKey }) => {
    const searchProduct = {
        ...new Paging(),
        searchKey: searchKey,
    }

    const dispatch = useAppDispatch();
    const { products, isLoading } = useAppSelector((state) => state.product);

    


  return (
    <div>ResultsPage</div>
  )
}

export default ResultsPage