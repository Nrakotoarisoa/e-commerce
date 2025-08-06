import { useCart } from "./cartContext";
import { Box, Typography, Button, IconButton, Card, CardMedia } from "@mui/material";
import { CardContent, CardActions } from "@mui/material";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import TextField from '@mui/material/TextField';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';

export default function Cart() {
    const { cartList, removeFromCart } = useCart();

    const sousTotal = cartList.reduce((total, item) => total + item.prix, 0);

    return (
        <Box fullWidth sx={{ display: 'flex', flexDirection: 'row', padding: 2, gap: 2 }}>
            <Box sx={{ padding: 2, width: '100vh', border: '1px solid #ddd', borderRadius: '8px', marginRight: 1 }}>
                <Typography variant="h4" gutterBottom sx={{ borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                    MON PANIER
                </Typography>
                {cartList.length === 0 ? (
                    <Typography variant="h6" color="text.secondary">
                        Aucune article dans le panier.
                    </Typography>
                    ) : (
                        <Box sx={{ display: 'flex',flexDirection: 'column', gap: 2 }}>
                            {cartList.map((item) => (
                                <Card key={item.id} sx={{display: 'flex'}}>
                                    <CardMedia
                                        component='img'
                                        alt={item.nom}
                                        image={item.image}
                                        sx={{ height: '260px', width: '260px' }}
                                    >
                                    </CardMedia>
                                    <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', width: '100%'}}>
                                        <Typography gutterBottom variant='h5' component='div'>
                                            {item.prix}$
                                        </Typography>
                                        <Typography variant='body2' color='text.primary'>
                                            {item.nom}
                                        </Typography>
                                        <Typography variant='h6' color='text.secondary'>
                                            {item.description}
                                        </Typography>
                                        <Box sx={{display: 'flex', justifyContent: 'end', alignItems: 'end', width: '100%', height: '100%' }}>
                                            <IconButton 
                                                color="error" 
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                <RemoveShoppingCartIcon />
                                            </IconButton>
                                        </Box>
                                    </CardContent>
                                </Card>))
                            }
                        </Box>
                    )}
            </Box>
            <Box sx={{ position: 'fixed', width: '60vh', border: '1px solid #ddd', borderRadius: '8px', padding: 2, height: '50vh', marginLeft: '52%' }}>
                <Typography variant="h4" sx={{ borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                    TOTAL
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                    <Typography variant="h5" color="text.primary">
                        Sous-Total
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {sousTotal}$
                    </Typography>
                </Box>
                <form action="">
                    <Typography variant="h5" color='text.primary' sx={{ marginTop: 2 }}>
                        Livraison*
                    </Typography>
                    <TextField variant="standard" fullWidth label="Adresse de livraison" sx={{ marginTop: 2 }} />
                    <Button sx={{width: '100%', marginTop: 2, height: '50px'}} variant="contained" disabled>
                        <PaymentsRoundedIcon sx={{ marginRight: 1}}/>
                         PAIEMENT
                    </Button>
                </form>
                <Box sx={{ marginTop: 2 }}>
                    <Typography>
                        NOUS ACCEPTONS:
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                        * Livraison gratuite pour les commandes de plus de 50$.
                    </Typography>
                </Box>
            </Box>
        </Box>    
    )
}