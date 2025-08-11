import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from './cartContext';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ProductDialog({ item }) {

    const { addToCart } = useCart();
    const [ quantite, setQuantite ] = useState(null);
    const [ open, setOpen ] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleQuantiteChange = (e) => {
        const val = e.target.value;
        if (val === "" || (/^\d+$/.test(val) && Number(val) > 0)) {
            setQuantite(val);
        }
    };

    const handleClose = () => {
        setOpen(false);
        setQuantite(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        item.quantite = quantite;
        handleClose();
        addToCart(item);};

    return (
        <React.Fragment>
            <Button
                onClick={handleClickOpen}
                variant="contained"
                color="primary"
                disableRipple
                startIcon={<AddShoppingCartIcon />}
                sx={{
                    textTransform: 'none',
                    borderRadius: 2,
                    fontWeight: 500,
                    '&:focus': { outline: 'none' },
                }}
            >
                Panier
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle
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
                        pt: '2%',
                    }}
                >
                    <Box sx={{
                        position: 'absolute',
                        top: 10,
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
                    <Typography 
                        gutterBottom
                        variant="h6"
                        sx={{ 
                            marginLeft: '30px',
                            fontWeight: 600,
                        }}
                    >
                        {item.nom}
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            mb: 1,
                            minHeight: '3.6em',
                        }}
                    >
                        {item.description}
                    </DialogContentText>
                    <form onSubmit={handleSubmit} id="subscription-form">
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            type="number"
                            min="1"
                            label="Quantité"
                            value={quantite}
                            onChange={handleQuantiteChange}
                            fullWidth
                            variant="standard"
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                <Button 
                    onClick={handleClose}
                    variant="outlined"
                    color="primary"
                    disableRipple
                    sx={{
                        textTransform: 'none',
                        borderRadius: 2,
                        fontWeight: 500,
                        '&:focus': { outline: 'none' },
                    }}
                >
                    Annuler
                </Button>
                <Button
                    disabled={!quantite || quantite === 0}
                    type="submit"
                    form="subscription-form"
                    variant="contained"
                    color="primary"
                    disableRipple
                    startIcon={<AddShoppingCartIcon />}
                    sx={{
                        textTransform: 'none',
                        borderRadius: 2,
                        fontWeight: 500,
                        '&:focus': { outline: 'none' },
                    }}
                >
                    Ajouter au panier
                </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}