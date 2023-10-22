const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY'); // Înlocuiți cu cheia secretă Stripe reală

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint pentru a gestiona plățile cu Stripe
app.post('/charge', async (req, res) => {
  try {
    const { amount, currency, description, source, shipping } = req.body;
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      description,
      source,
      receipt_email: shipping.email,
    });

    // Trimiteți ID-ul plății înapoi către client
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Eroare la procesarea plății' });
  }
});

// Endpoint pentru a crea o comandă cu ColeteOnline
app.post('/createOrder', async (req, res) => {
  try {
    // Realizați cererea către ColeteOnline pentru a crea comanda
    const response = await axios.post('https://api.coleteonline.ro/create-order', req.body);

    // Verificați răspunsul de la ColeteOnline și returnați către client
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Eroare la crearea comenzii cu ColeteOnline' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serverul rulează pe portul ${port}`);
});











// Cod client-side pentru a efectua o plată cu Stripe
const Stripe = Stripe('YOUR_STRIPE_PUBLIC_KEY'); // Înlocuiți cu cheia publică Stripe reală
const elements = stripe.elements();
const form = document.getElementById('payment-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { token, error } = await stripe.createToken(elements.getElement('card'));

  if (error) {
    console.error(error);
  } else {
    // Trimiteți tokenul către serverul Node.js
    const response = await axios.post('/charge', {
      amount: 1000, // Suma în centi, de exemplu, 10 USD = 1000 centi
      currency: 'usd',
      description: 'Comandă de produse',
      source: token.id,
      shipping: {
        email: 'client@example.com', // Adresa de email a clientului
      },
    });

    // Procesați răspunsul de la server (de exemplu, afișați un mesaj de confirmare)
  }
});

// Cod client-side pentru a crea o comandă cu ColeteOnline
const orderData = {
  // Detalii despre comandă, inclusiv adresa de livrare
};

axios.post('/createOrder', orderData)
  .then(response => {
    // Procesați răspunsul de la server (de exemplu, afișați un număr de comandă)
  })
  .catch(error => {
    console.error(error);
  });
