import { useCart } from "./cartContext";
import { Box, Typography, Button, IconButton, Card, CardMedia } from "@mui/material";
import { CardContent, CardActions } from "@mui/material";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import TextField from '@mui/material/TextField';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';

export default function Cart() {
    const { cartList, removeFromCart } = useCart();

    const sousTotal = cartList.reduce((total, item) => total + (item.prix*item.quantite), 0);

    return (
        <Box fullWidth sx={{ display: 'flex', flexDirection: 'row', padding: 2, gap: 2 }}>
            <Box sx={{ padding: 2, width: '100vh', border: '1px solid #ddd', borderRadius: '8px', marginRight: 1 }}>
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        borderBottom: '3px solid',
                        borderColor: 'primary.main',
                        paddingBottom: '12px',
                        fontWeight: 'semibold',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'text.primary',
                        mb: 3,
                    }}
                >
                    MON PANIER
                </Typography>
                {cartList.length === 0 ? (
                    <Typography variant="h6" color="text.secondary">
                        Aucune article dans le panier.
                    </Typography>
                    ) : (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, p: 2 }}>
                    {cartList.map((item) => (
                        <Card
                        key={item.id}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            boxShadow: 3,
                            borderRadius: 2,
                            overflow: 'hidden',
                            height: 140,
                            bgcolor: 'background.paper',
                        }}
                        >
                        <CardMedia
                            component="img"
                            image={item.image}
                            alt={item.nom}
                            sx={{ width: 140, height: 140, objectFit: 'cover' }}
                        />
                        <CardContent
                            sx={{
                            flex: '1 1 auto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            pl: 2,
                            pr: 1,
                            height: '100%',
                            }}
                        >
                            <Box>
                            <Typography variant="h6" fontWeight="bold" noWrap>
                                {item.nom}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" noWrap>
                                {item.description}
                            </Typography>
                            </Box>

                            <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mt: 1,
                            }}
                            >
                            <Typography variant="subtitle1" color="primary" fontWeight="bold">
                                {item.prix.toFixed(2)}$
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary">
                                Quantité : {item.quantite}
                            </Typography>
                            <IconButton
                                color="error"
                                aria-label="retirer du panier"
                                onClick={() => removeFromCart(item.id)}
                                size="small"
                            >
                                <RemoveShoppingCartIcon />
                            </IconButton>
                            </Box>
                        </CardContent>
                        </Card>
                    ))}
                    </Box>
                )}
            </Box>
            <Box sx={{ position: 'fixed', width: '60vh', border: '1px solid #ddd', borderRadius: '8px', padding: 2, height: '50vh', marginLeft: '52%' }}>
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        borderBottom: '3px solid',
                        borderColor: 'primary.main',
                        paddingBottom: '12px',
                        fontWeight: 'semibold',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'text.primary',
                        mb: 3,
                    }}
                >
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