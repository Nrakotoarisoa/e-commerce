import React, { useState, useEffect } from "react";
import { useCart } from "./cartContext";
import { Box, Typography, Button, IconButton, Card, CardMedia } from "@mui/material";
import { CardContent, CardActions } from "@mui/material";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import TextField from '@mui/material/TextField';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import PaimentDialog from "./PaimentDialog";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function Cart() {
    const { cartList, removeFromCart } = useCart();
    const [ notif, setNotif ] = useState(false);
    const sousTotal = cartList.reduce((total, item) => total + (item.prix*item.quantite), 0);
    const [ prevLength, setPrevLength ] = useState(cartList.length);

    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

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

    useEffect(() => {

        if (cartList.length < prevLength) {
            setNotif(true);
        }

        setPrevLength(cartList.length);
        }, [cartList]);

    return (
        <>
            <Snackbar 
                open={notif} 
                autoHideDuration={3000} 
                onClose={() => setNotif(false)}
                action={action}
            >
                <Alert severity="error" onClose={() => setNotif(false)}>
                    Retiré du panier !
                </Alert>
            </Snackbar>
            <Box sx={{ display: 'flex', flexDirection: 'row', padding: 2, gap: 2, marginTop: 8 }}>
                <Box sx={{ padding: 2, width: '90vh', marginRight: 1, minHeight: '50vh' }}>
                    <Box sx={{ display: 'flex', gap: 1, borderBottom: '3px solid', borderColor: 'primary.main', height: 42, mb: 2 }}>
                        <ShoppingCartCheckoutIcon fontSize="large" color="primary" />
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{
                                fontWeight: 600,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                color: 'text.primary',
                                display: "flex",
                                alignItems: 'center'
                            }}
                        >
                            MON PANIER
                        </Typography>
                    </Box>
                    {cartList.length === 0 ? (
                        <Typography variant="h6" color="text.secondary">
                            Aucune article.
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
                                <Box sx={{ position: 'relative'}}>
                                    <CardMedia
                                        component="img"
                                        alt={item.nom}
                                        image={item.image}
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
                                        {item.id}
                                        </Box>
                                    </Box>
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
                <Box sx={{ 
                        position: 'fixed', 
                        width: '50vh', 
                        border: '1px solid #ddd', 
                        borderRadius: '8px', 
                        padding: 2, 
                        height: '50vh', 
                        marginLeft: '52%',
                    }}
                >
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                            borderBottom: '3px solid',
                            borderColor: 'primary.main',
                            paddingBottom: '12px',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'text.primary',
                            mb: 3,
                        }}
                    >
                        TOTAL
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                        <Typography variant="h6" color="text.primary">
                            Sous-Total
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {sousTotal}$
                        </Typography>
                    </Box>
                    <form action="">
                        <Typography variant="h6" color='text.primary' sx={{ marginTop: 2 }}>
                            Remise de 10% pour tout achat +50$ 
                        </Typography>
                        <Typography variant="h6" color="text.primary" sx={{ marginTop: 2 }}>
                            TVA
                        </Typography>
                        <TextField variant="standard" fullWidth label="Adresse de livraison" sx={{ marginTop: 2, mb: 2 }} />
                        <PaimentDialog />
                    </form>
                    <Box sx={{ display: 'flex', marginTop: 3 }}>
                        <Typography>
                            NOUS ACCEPTONS:
                        </Typography>
                        <Box sx={{display: 'flex', gap: 1, marginLeft: 1}}>
                            <Box component='img' src="src/assets/paypal.png" 
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    p: 1.5,
                                    border: "1px solid",
                                    borderColor: "divider",
                                    borderRadius: 2,
                                    bgcolor: "background.paper",
                                    boxShadow: 1,width: 20, height: 15, p: 1
                                }}
                            />
                            <Box component="img" src="src/assets/carte.png" 
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    p: 1.5,
                                    border: "1px solid",
                                    borderColor: "divider",
                                    borderRadius: 2,
                                    bgcolor: "background.paper",
                                    boxShadow: 1,width: 20, height: 15, p: 1
                                }}
                            />
                            <Box component="img" src="src/assets/visa.png" 
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    p: 1.5,
                                    border: "1px solid",
                                    borderColor: "divider",
                                    borderRadius: 2,
                                    bgcolor: "background.paper",
                                    boxShadow: 1,width: 20, height: 15, p: 1
                                }}
                            />
                            <Box component="img" src="src/assets/bitcoin.png"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    p: 1.5,
                                    border: "1px solid",
                                    borderColor: "divider",
                                    borderRadius: 2,
                                    bgcolor: "background.paper",
                                    boxShadow: 1,width: 20, height: 15, p: 1
                                }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 3 }}>
                        <Typography variant="body2" color="text.secondary">
                            * Livraison gratuite pour les commandes de plus de 50$.
                        </Typography>
                    </Box>
                </Box>
            </Box>    
        </>
    )
}