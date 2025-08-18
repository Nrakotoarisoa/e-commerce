import * as React from 'react';
import { useState } from 'react';
import { useCart } from './cartContext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CircularProgress from '@mui/material/CircularProgress';
import Checkbox from '@mui/material/Checkbox';
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from '@mui/material';

export default function PaimentDialog() {

    const [ open, setOpen ] = useState(false);
    const [ prevButton, setPrevButton ] = useState(false);
    const [ selected, setSelected ] = useState("Paypal");
    const { cartList } = useCart();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    const handleSubmit = () => {
        switch(selected) {
            case "Mastercard":
            case "Visa":
                setInfo(details[1]);
                setPrevButton(true);
                break;
            case "Paypal": 
                setInfo(details[2]);
                setPrevButton(true);
                break;
            case "Bitcoin":
                setInfo(details[3]);
                setPrevButton(true);
                break;
            default:
                setInfo('');
                setPrevButton(false);
                break;
        }
    }

    
    const total = cartList.reduce((total,item) => total + (item.prix*item.quantite), 0);

    const details = [
        <FormControl fullWidth maxWidth="xs">
            <FormLabel id="demo-simple-select-label" color='text.secondary' sx={{ mb: 1 }}>Mode de paiment</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={selected}
                onChange={handleChange}
            >
                <Box
                    onClick={() => setSelected("Paypal")} 
                    sx={{ 
                        display: 'flex', 
                        gap: 1,
                        padding: 1,
                        borderRadius: 2,
                        "&:hover": {
                                bgcolor: "grey.100"
                            }
                    }}
                >
                    <Box sx={{ display: 'flex', gap: 1, width: '100%'}}>
                        <Box component='img' src="/paypal.png" 
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                p: 1.5,
                                border: "1px solid",
                                borderColor: "divider",
                                borderRadius: 2,
                                bgcolor: "background.paper",
                                boxShadow: 1,width: 20, height: 15
                            }}
                        />
                        <Typography sx={{ p: 1, pl: 0 }}>Paypal</Typography>
                    </Box>
                    <FormControlLabel value='Paypal' control={<Radio />} sx={{ mr: 0 }}/>
                </Box>
                <Box
                    onClick={() => setSelected("Mastercard")} 
                    sx={{ 
                        display: 'flex', 
                        gap: 1,
                        padding: 1,
                        borderRadius: 2,
                        "&:hover": {
                                bgcolor: "grey.100"
                            }
                    }}
                    >
                    <Box sx={{ display: 'flex', gap: 1, width: '100%'}}>
                        <Box component="img" src="/carte.png" 
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                p: 1.5,
                                border: "1px solid",
                                borderColor: "divider",
                                borderRadius: 2,
                                bgcolor: "background.paper",
                                boxShadow: 1,width: 20, height: 15
                            }}
                        />
                        <Typography sx={{ p: 1, pl: 0 }}>Mastercard</Typography>
                    </Box>
                    <FormControlLabel value='Mastercard' control={<Radio />} sx={{ mr: 0 }} />
                </Box>
                <Box
                    onClick={() => setSelected("Visa")}
                    sx={{ 
                        display: 'flex', 
                        gap: 1,
                        padding: 1,
                        borderRadius: 2,
                        "&:hover": {
                                bgcolor: "grey.100"
                            }
                    }}
                    >
                    <Box sx={{ display: 'flex', gap: 1, width: '100%'}}>
                        <Box component="img" src="/visa.png" 
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                p: 1.5,
                                border: "1px solid",
                                borderColor: "divider",
                                borderRadius: 2,
                                bgcolor: "background.paper",
                                boxShadow: 1,width: 20, height: 15
                            }}
                        />
                        <Typography sx={{ p: 1, pl: 0 }}>Visa</Typography>
                    </Box>
                    <FormControlLabel value='Visa' control={<Radio />} sx={{ mr: 0 }}/>
                </Box>
                <Box
                    onClick={() => setSelected("Bitcoin")} 
                    sx={{ 
                        mb: 2,
                        display: 'flex', 
                        gap: 1,
                        padding: 1,
                        borderRadius: 2,
                        "&:hover": {
                                bgcolor: "grey.100"
                            }
                    }}
                >
                    <Box sx={{ display: 'flex', gap: 1, width: '100%'}}>
                        <Box component="img" src="/bitcoin.png"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                p: 1.5,
                                border: "1px solid",
                                borderColor: "divider",
                                borderRadius: 2,
                                bgcolor: "background.paper",
                                boxShadow: 1,width: 20, height: 15
                            }}
                        />
                        <Typography sx={{ p: 1, pl: 0 }}>Bitcoin</Typography>
                    </Box>
                    <FormControlLabel value='Bitcoin' control={<Radio />} sx={{ mr: 0 }}/>
                </Box>
            </RadioGroup>
            <FormControlLabel control={<Checkbox />} label="Enregistrer cette moyen de paiement" />
        </FormControl>,
        <Box
            component="form"
            sx={{ m: 1, width: '100%' }}
        >
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Typography sx={{ width: '95%' }}>Informations de la carte</Typography>
                <Box component="img" src="/carte.png" 
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 1.5,
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 2,
                        bgcolor: "background.paper",
                        boxShadow: 1,width: 20, height: 15,
                    }}
                />
                <Box component="img" src="/visa.png" 
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 1.5,
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 2,
                        bgcolor: "background.paper",
                        boxShadow: 1,width: 20, height: 15
                    }}
                />
            </Box>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <TextField variant='outlined' label="Nom figurant sur la carte" sx={{ mb: 1 }} />
                <TextField variant='outlined' label="Numéro sur la carte" sx={{ mb: 1 }}/>
            </Box>
            <TextField variant='outlined' label="MM/AA" sx={{ width: '49.5%', mr: 1}} />
            <TextField variant='outlined' label="CVV" sx={{ width: '49.5%'}}/>
        </Box>,
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box component='img' src="/paypal.png" 
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    p: 1.5,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 2,
                    bgcolor: "background.paper",
                    boxShadow: 1,width: 20, height: 15, mb: 1
                }}
            />
            <CircularProgress color="grey.500" size="20px" />
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Vous serez redirigé vers le site web de Paypal
            </Typography>
            <Typography variant='body2' sx={{ mb: 2, color: "text.secondary" }}>
                Revenez sur PayPal pour continuer à l’ajouter comme moyen de paiement.
            </Typography>
        </Box>,
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 ,width: '100%', height: 15 }}>
                <Box component="img" src="/bitcoin.png"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 1.5,
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 2,
                        bgcolor: "background.paper",
                        boxShadow: 1,width: 20, height: 15, mr: 1
                    }}
                />
                <Typography>Bitcoin</Typography>
            </Box>
            <TextField variant='outlined' label='Votre adresse Bitcoin' fullWidth/>
        </Box>
    ]

    const [ info, setInfo ] = useState(details[0]);

    const handlePrevStep = () => {
        setInfo(details[0]);
        setPrevButton(false);
    };

     const handleClose = () => {
        setOpen(false);
        setInfo(details[0]);
        setPrevButton(false);
    };
    
    return (
        <React.Fragment>
            <Button
                onClick={handleClickOpen}
                variant="contained"
                color="success"
                disabled={cartList.length === 0}
                disableRipple
                sx={{
                    textTransform: 'none',
                    borderRadius: 2,
                    fontWeight: 500,
                    '&:focus': { outline: 'none' },
                    width: '100%',
                }}
            >
                <PaymentsRoundedIcon sx={{ marginRight: 1}}/>
                Valider les commandes
            </Button>
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 1,
                        minHeight: '1em',
                        fontWeight: 600,
                        pt: '2%',
                    }}
                >
                    { prevButton ? (<IconButton
                            edge="start"
                            color="primary"
                            onClick={handlePrevStep}
                            disableRipple
                            sx={{ '& : focus': { outline: 'none' } }}
                        >
                            <ArrowBackIcon />
                        </IconButton>) : null }
                    <Typography 
                        gutterBottom
                        variant="h6"
                        sx={{ 
                            marginLeft: '30px',
                            fontWeight: 600,
                        }}
                    >
                        Détails de paiment
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ minHeight: "150px" }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                            >
                               { prevButton ? info : details[0] }
                            </motion.div>
                        </AnimatePresence>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleSubmit}
                        type='submit'
                        variant="contained"
                        color="primary"
                        sx={{
                            textTransform: 'none',
                            borderRadius: 2,
                            fontWeight: 500,
                            '&:focus': { outline: 'none' },
                        }}
                    >
                        { prevButton ? "Procéder au paiement" : "Suivant"}
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}