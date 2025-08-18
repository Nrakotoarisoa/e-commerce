import React from "react";
import Snackbar from '@mui/material/Snackbar';
import { useEffect, useState } from "react";
import ProductCart from './ProductCart';
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SortIcon from '@mui/icons-material/Sort';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useCart } from "./cartContext";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';

const drawerWidth = 240;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ProductList() {
    const [ notif, setNotif ] = useState(false);
    const [ value, setValue ] = useState([0, 500]);
    const [ sortValue, setSortValue ] = useState(false);
    const { cartList } = useCart();
    const [ prevLength, setPrevLength ] = useState(cartList.length);
    const firstRender = React.useRef(true);

    const [ product, setProduct ] = useState([
        {
            id: 1,
            nom: "Montre en cuir",
            description: "Montre élégante avec bracelet en cuir véritable, résistante à l’eau.",
            prix: 149.99,
            image: "https://unsplash.com/photos/O1_vdzQZwMY/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fG1vbnRyZSUyMGVuJTIwY3VpcnxmcnwwfHx8fDE3NTU1NDAwOTd8MA&force=true&w=640", 
            quantite: 0
        },
        {
            id: 2,
            nom: "Sac à dos randonnée",
            description: "Sac à dos imperméable de 30L, idéal pour la randonnée et le voyage.",
            prix: 79.99,
            image: "https://unsplash.com/photos/9aZ3T1q83CM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8c2FjJTIwJUMzJUEwJTIwZG9zJTIwcmFuZG9ubiVDMyVBOWV8ZnJ8MHx8fHwxNzU1NTQwMzkxfDI&force=true&w=640",
            quantite: 0
        },
        {
            id: 3,
            nom: "Chaussures de sport",
            description: "Chaussures légères et respirantes, parfaites pour le running.",
            prix: 89.99,
            image: "https://unsplash.com/photos/wggDZ5mCF8w/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8Y2hhdXNzdXJlJTIwZGUlMjBzcG9ydHxmcnwwfHx8fDE3NTU1NDA0Njd8Mg&force=true&w=640",
            quantite: 0
        },
        {
            id: 4,
            nom: "Casque Bluetooth",
            description: "Casque audio sans fil avec réduction active de bruit.",
            prix: 129.99,
            image: "https://unsplash.com/photos/fJrj9fK3uPE/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8Y2FzcXVlJTIwYmx1ZXRvb3RofGZyfDB8fHx8MTc1NTU0MDUxNHwy&force=true&w=640",
            quantite: 0
        },
        {
            id: 5,
            nom: "T-shirt coton bio",
            description: "T-shirt 100% coton biologique, doux et confortable.",
            prix: 25.99,
            image: "https://unsplash.com/photos/kYOQsDMF8XA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8dCUyMHNoaXJ0JTIwY290b24lMjBiaW98ZnJ8MHx8fHwxNzU1NTQwNTYxfDI&force=true&w=640", 
            quantite: 0
        },
        {
            id: 6,
            nom: "Lunettes de soleil",
            description: "Protection UV400 avec verres polarisés et monture légère.",
            prix: 39.99,
            image: "https://unsplash.com/photos/3xtCeUhqZWE/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bHVuZXR0ZSUyMGRlJTIwc29sZWlsfGZyfDB8fHx8MTc1NTU0MDYxNHwy&force=true&w=640", 
            quantite: 0
        },
        {
            id: 7,
            nom: "Bouteille isotherme",
            description: "Bouteille en acier inoxydable, garde au chaud 12h et au froid 24h.",
            prix: 29.99,
            image: "https://unsplash.com/photos/W6k29RtBmPA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fGJvdXRlaWxsZSUyMGlzb3RoZXJtZXxmcnwwfHx8fDE3NTU1NDA2ODl8Mg&force=true&w=640", 
            quantite: 0
        },
        {
            id: 8,
            nom: "Clavier mécanique RGB",
            description: "Clavier mécanique rétroéclairé, idéal pour le gaming.",
            prix: 99.99,
            image: "https://unsplash.com/photos/spg13bhgt4w/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjZ8fGNsYXZpZXIlMjBtZWNoYW5pcXVlJTIwUkdCfGZyfDB8fHx8MTc1NTU0MDgyNHwy&force=true&w=640",
            quantite: 0
        },
        {
            id: 9,
            nom: "Lampe de bureau LED",
            description: "Lampe LED réglable avec fonction de variation d’intensité.",
            prix: 45.0,
            image: "https://unsplash.com/photos/DR_A_zDkPHQ/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NDB8fExhbXBlJTIwZGUlMjBidXJlYXUlMjBMRUR8ZnJ8MHx8fHwxNzU1NTQwOTgzfDI&force=true&w=640",
            quantite: 0
        },
        {
            id: 10,
            nom: "Tablette Android 10\"",
            description: "Tablette tactile 10 pouces avec écran HD et grande autonomie.",
            prix: 229.99,
            image: "https://unsplash.com/photos/8pIQwtVytxM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8dGFibGV0dGUlMjBhbmRyb2lkJTIwTEVEJTIwMTAlMjclMjd8ZnJ8MHx8fHwxNzU1NTQxMDc1fDI&force=true&w=640",
            quantite: 0
        }
    ]);


    const [ filteredProducts, setFilteredProducts ] = useState([...product]);

    useEffect(() => filterPerPrice(value), [value]);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        if (cartList.length > prevLength) {
            setNotif(true);
        }

        setPrevLength(cartList.length);
        }, [cartList]);

    const sort = (sortValue) => {
        const copie = [...filteredProducts];
        if (sortValue) {
            setFilteredProducts(copie.sort((a, b) => a.nom.localeCompare(b.nom, "fr", { sensitivity: 'base' })));
        } else {
            setFilteredProducts(copie.sort((a, b) => b.nom.localeCompare(a.nom, "fr", { sensitivity: 'base' })));
        }
        setSortValue(!sortValue);
    }

    const filterPerPrice = (newValue) => {
        setFilteredProducts(filteredProducts.filter(item => item.prix >= newValue[0] && item.prix <= newValue[1]));
    }

    const handleChangeFilter = (event, newValue) => {
        setFilteredProducts(product);
        setValue(newValue);
    }

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => setNotif(false)}
                disableRipple
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <>
            <Snackbar 
                open={notif} 
                autoHideDuration={3000} 
                onClose={() => setNotif(false)}
                action={action}
            >
                <Alert severity="success" onClose={() => setNotif(false)}>
                    Ajouté au panier !
                </Alert>
            </Snackbar>
            <Box sx={{display: "flex", justifyContent: "flex-start", alignItems: "baseline", flexFlow: "row wrap", padding: 2, paddingTop: 0}}>
                <Box sx={{
                        display: "flex", flexDirection: 'column', justifyContent: 'space-around',flexGrow: 1, width: `calc(100% - ${drawerWidth}px)`, 
                        height: 100, position: "fixed", zIndex: 1, left: 290, backgroundColor: '#fff', 
                        paddingTop: 3}}>
                    <Button 
                        color='dark'
                        variant="outlined"
                        disableRipple
                        startIcon={<SortIcon/>}
                        sx={{ 
                            marginRight: 1, 
                            marginBottom: 1, 
                            "&:focus": { outline: 'none' },
                            maxWidth: 310,
                        }}
                        onClick={() => sort(sortValue)}
                    >
                        Trier par ordre alphabétique
                    </Button>
                    <Box sx={{ width: 500, marginBottom: 1 }}>
                        <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
                            <Typography id="range-slider" gutterBottom
                                sx={{ 
                                    display: '-webkit-box',
                                    WebkitLineClamp: 1,                                
                                    maxHeight: '2em',    
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                Filtrer par prix($)
                            </Typography>
                            <Slider
                                value={value}
                                onChange={handleChangeFilter}
                                valueLabelDisplay="on"
                                step={10}
                                min={0}
                                max={1000}
                                sx={{ width: 300 }}
                            />
                        </Stack>
                        
                    </Box>
                </Box>
                <Grid container spacing={5} sx={{ padding: 2, marginTop: 15 }}>
                    {filteredProducts.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <ProductCart product={item}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}

export default ProductList;