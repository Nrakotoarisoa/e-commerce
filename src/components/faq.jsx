import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  return (
    <Container 
        maxWidth="md" 
        sx={{ 
            mt: 10, 
            mb: 5,
        }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        ❓ Foire Aux Questions (FAQ)
      </Typography>

      <Accordion>
        <AccordionSummary 
            sx={{
                '&:focus': { outline: 'none' }
            }} 
            expandIcon={<ExpandMoreIcon />}
        >
          <Typography sx={{ fontWeight: 600 }} >Comment passer une commande ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ajoutez vos articles au panier, puis cliquez sur « Valider la
            commande ». Suivez les étapes de paiement et vous recevrez un email
            de confirmation.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary 
            sx={{
                '&:focus': { outline: 'none' }
            }} 
            expandIcon={<ExpandMoreIcon />}
        >
          <Typography sx={{ fontWeight: 600 }}>Quels moyens de paiement acceptez-vous ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nous acceptons les paiements par carte bancaire (Visa, Mastercard),
            PayPal et Bitcoin.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary 
            sx={{
                '&:focus': { outline: 'none' }
            }} 
            expandIcon={<ExpandMoreIcon />}
        >
          <Typography sx={{ fontWeight: 600 }}>Quels sont les délais de livraison ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Les délais varient entre 2 à 7 jours ouvrés selon votre localisation.
            Vous recevrez un numéro de suivi dès l’expédition.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary 
            sx={{
                '&:focus': { outline: 'none' }
            }} 
            expandIcon={<ExpandMoreIcon />}
        >
          <Typography sx={{ fontWeight: 600 }}>Puis-je retourner un produit ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Oui, vous pouvez retourner un article dans les 14 jours suivant la
            réception, à condition qu’il soit en parfait état.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary 
            sx={{
                '&:focus': { outline: 'none' }
            }} 
            expandIcon={<ExpandMoreIcon />}
        >
          <Typography sx={{ fontWeight: 600 }}>Comment contacter le support ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Vous pouvez nous contacter via la page « Support » ou par email à
            support@e-commerce.com. Notre équipe répond sous 24h.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
