import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function SupportForm() {
    return (
        <Box
            minWidth="md"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    minWidth: 600,
                    maxWidth: 700,
                    margin: "auto",
                    padding: 4,
                    boxShadow: 2,
                    borderRadius: 3,
                    background: "white",
                    mt: 3
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <MailOutlineIcon sx={{ fontSize: 32, color: "primary.main", mr: 1 }} />
                    <Typography variant="h5" fontWeight={600}>
                        Contactez le support
                    </Typography>
                </Box>

                <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
                    Remplissez le formulaire ci-dessous, nous vous répondrons dans les plus brefs délais.
                </Typography>

                {/* Champs du formulaire */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField label="Nom" placeholder="Nom complet" fullWidth variant="outlined" />
                    <TextField label="Email" placeholder="email@exemple.com" fullWidth variant="outlined" />
                    <TextField label="Sujet" fullWidth variant="outlined" />
                    <TextField label="Message" multiline rows={4} fullWidth variant="outlined" />
                </Box>

                <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
                    <Button
                        variant="contained"
                        size="large"
                        type="submit"
                        sx={{
                            borderRadius: 2,
                            px: 4,
                            backgroundColor: "primary.main",
                            fontWeight: 600,
                            textTransform: "none",
                            "&:hover": {
                                backgroundColor: "primary.dark",
                            },
                            "&:focus": {
                                outline: 'none'
                            }
                        }}
                    >
                        Envoyer
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
