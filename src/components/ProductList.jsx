import { useState } from "react";
import ProductCart from './ProductCart';
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FilterListAltIcon from '@mui/icons-material/FilterListAlt';
import SortIcon from '@mui/icons-material/Sort';

const drawerWidth = 240;

function ProductList() {
    const [ product, setProduct ] = useState([
            {
                id: 1,
                nom: 'Chaussures de sport',
                description: 'Nike Air Zoom pour course et confort.',
                prix: 99.99,
                image: 'https://picsum.photos/id/1011/300/200',
            },
            {
                id: 2,
                nom: 'Sac à dos étanche',
                description: 'Parfait pour les randonnées et trajets urbains.',
                prix: 59.99,
                image: 'https://picsum.photos/id/1012/300/200',
            },
            {
                id: 3,
                nom: 'Montre connectée',
                description: 'Suivi d’activité et notifications en temps réel.',
                prix: 200,
                image: 'https://picsum.photos/id/1013/300/200',
            },
            {
                id: 4,
                nom: 'Casque Bluetooth',
                description: 'Audio Hi-Fi avec réduction de bruit.',
                prix: 89.00,
                image: 'https://picsum.photos/id/1015/300/200',
            },
            {
                id: 5,
                nom: 'T-shirt oversize',
                description: 'Coton bio - disponible en plusieurs tailles.',
                prix: 24.99,
                image: 'https://picsum.photos/id/1016/300/200',
            },
            {
                id: 6,
                nom: 'Lunettes de soleil',
                description: 'Protection UV400 - Verres polarisés.',
                prix: 39.99,
                image: 'https://picsum.photos/id/1021/300/200',
            },
    ]);

    return (
        <>
            <Box sx={{flexGrow: 1, width: `calc(100% - ${drawerWidth}px)`, height: '64px'}}>
                <Button color='dark' variant="outlined" startIcon={<SortIcon/>} sx={{ marginRight: 1 }}>
                    Trier par
                </Button>
                <Button color='dark' variant="outlined" startIcon={<FilterListAltIcon />}>
                    Filtre
                </Button>
            </Box>
            <Grid container spacing={1} >
                {product.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ProductCart product={item}/>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default ProductList;