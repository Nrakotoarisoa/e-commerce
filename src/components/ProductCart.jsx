import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useCart } from './cartContext';

export default function ProductCard({ product }) {
    const [ value, setValue ] = React.useState(0);
    const { addToCart } = useCart();
    return (
        <Card sx={{ width: 260}}>
            <CardMedia
                component='img'
                alt={product.nom}
                image={product.image}
                sx={{ height: '140px' }}
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {product.nom}
                </Typography>
                <Box sx={{height: '60px', overflow: 'hidden'}}>
                    <Typography variant='body2' color='text.secondary'>
                        {product.description}
                    </Typography>
                </Box>
                <Typography variant='h6' color='text.primary'>
                    {product.prix}$
                </Typography>
                <Rating 
                    name="product-rating"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                />
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <ButtonGroup color='dark' variant='outlined' aria-label='outlined button group'>
                    <Button 
                        onClick={() => addToCart(product)}
                    >
                        <AddShoppingCartIcon />
                    </Button>
                    <Button><ShoppingBagIcon /></Button>
                </ButtonGroup>
            </CardActions>
        </Card>
    )
}