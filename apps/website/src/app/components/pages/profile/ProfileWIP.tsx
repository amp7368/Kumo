import { Box, Typography } from '@mui/material';
import { useState } from 'react';

import { Riddle } from '../../../model/riddle/Riddle.model';
import { riddleQuery } from '../../../model/riddle/Riddle.query';
import { LazyElement, LazyOnEmitStrategy } from '../../base/LazyElement';

interface ProfileWIPState {}
function mapRiddleToElement(riddles: Riddle[]): JSX.Element {
    const mapped = riddles.map((riddle, i) => {
        return (
            <h1 key={i}>
                {riddle.title} , {riddle.createdBy.username}
            </h1>
        );
    });
    console.log(mapped);
    return <>{mapped}</>;
}
export function ProifleWIP() {
    return (
        <>
            <Box>
                <Typography fontSize="2rem" fontWeight="3">
                    Your WIP Quests
                </Typography>
                <LazyElement
                    onEmitStrategy={LazyOnEmitStrategy.REPLACE}
                    stream={riddleQuery.selectAll()}
                    mappingFn={mapRiddleToElement}
                />
            </Box>
        </>
    );
}
