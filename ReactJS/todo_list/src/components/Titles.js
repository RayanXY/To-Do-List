import React from 'react';
import Box from '@material-ui/core/Box';

const Titles = (props) => {
    return(
        <Box className="Titles"
            textAlign="center" m={1} 
            fontSize={props.size} 
            fontWeight={"fontWeightBold"} 
            lineHeight={1.8}
        >
            {props.title}
        </Box>
    )
}

export default Titles;
