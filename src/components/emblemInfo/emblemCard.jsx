import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
export default function EmblemCard() {
  return (
    <Card>
      <CardMedia image="" title="emblem picture" />
      <CardContent>
        <Typography>emblem name</Typography>
        <Typography variant="body2" color="text.secondary">
          emblem description
        </Typography>
      </CardContent>
      <CardActions>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show skills">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}
