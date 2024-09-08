import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import { Circle } from '@mui/icons-material';

const ConsolidatedRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#0072bc',
  },
  '& .MuiRating-iconHover': {
    color: '#0072bc',
  },
});
const WantedRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#0072bc',
  },
  '& .MuiRating-iconHover': {
    color: '#0072bc',
  },
});
export function CustomizedRating() {
  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      <Typography component="legend">Consolidated LvL</Typography>
      <ConsolidatedRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<Circle fontSize="inherit" />}
        emptyIcon={<Circle fontSize="inherit" />}
        max={11}
      />
      <Typography component="legend">Wanted LvL</Typography>
      <WantedRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<Circle fontSize="inherit" />}
        emptyIcon={<Circle fontSize="inherit" />}
        max={11}
      />
    </Box>
  );
}
