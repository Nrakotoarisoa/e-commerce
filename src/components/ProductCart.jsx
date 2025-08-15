import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import ProductDialog from './ProductDialog';
import Box from '@mui/material/Box';
import { useEffect } from 'react';

export default function ProductCard({ product }) {
  const [value, setValue] = React.useState(0);

  useEffect(() => {
        localStorage.setItem("Rating", value);
        }, [value]);

  return (
    <Card
      sx={{
        width: 260,
        height: 380,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        boxShadow: 3,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        },
      }}
    >
      <Box sx={{ position: 'relative'}}>
        <CardMedia
          component="img"
          alt={product.nom}
          image={product.image}
          sx={{
            height: 140,
            objectFit: 'cover',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
          }}
        />
        <Box
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              bgcolor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              borderRadius: '50%',
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1rem',
              userSelect: 'none',
            }}
          >
            {product.id}
          </Box>
      </Box>

      <CardContent sx={{ flexGrow: 1, pb: 0}}>
        {/* Nom */}
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ 
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            mb: 1,
            minHeight: '1em',
            fontWeight: 600,
           }}
        >
          {product.nom}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            mb: 1,
            minHeight: '3.6em',
          }}
        >
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
          {product.prix}$
        </Typography>
        <Rating
          name="product-rating"
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          size="small"
        />
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
        <ProductDialog item={product} />
      </CardActions>
    </Card>
  );
}
