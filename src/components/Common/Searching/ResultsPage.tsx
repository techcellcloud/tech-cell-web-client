'use client';

import React, { FC } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ProductSearchingStatus } from '@interfaces/product';
import { formatProductLabel, getMessage } from 'utils';
import ResultsSection from './ResultsSection';

interface SearchProps {
    searchData: ProductSearchingStatus;
    keyword: string;
}

const ResultsPage: FC<SearchProps> = async ({ searchData, keyword }) => {
    const headMessage = getMessage(searchData.messageStatusCode, keyword, searchData.data?.totalRecord);

    return (
        <Box marginTop="24px">
            <Container maxWidth="lg">
                    <Stack spacing={3} alignItems="center" minHeight='60vh'>
                        <Typography
                            variant="h3"
                            color="primary"
                            sx={{
                                fontSize: '18px',
                                fontWeight: 500,
                                '& span': {
                                    fontWeight: 700,
                                },
                            }}
                        >
                            <div dangerouslySetInnerHTML={{ __html: headMessage}} />
                        </Typography>
                        {searchData.data !== null && (
                            <ResultsSection currentData={formatProductLabel(searchData.data)} keyword={keyword} totalPage={searchData.data.totalPage} />
                        )}
                    </Stack>
            </Container>
        </Box>
    );
};

export default ResultsPage;
