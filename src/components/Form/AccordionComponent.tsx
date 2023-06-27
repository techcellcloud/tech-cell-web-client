import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
    content: string;
    options?: any[];
    icon?: React.ReactNode;
}

export const AccordionComponent = (props: Props) => {
    return (
        <>
            {props.icon && props.icon}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{props.content}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {props.options && props.options.map((item, i) => <p key={i}>{item.label}</p>)}
                </AccordionDetails>
            </Accordion>
        </>
    );
};
