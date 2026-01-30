# Payment Setup Guide

This site uses Stripe for payment processing. Follow these steps to set up payments:

## 1. Create a Stripe Account

1. Go to [https://stripe.com](https://stripe.com)
2. Sign up for a free account
3. Complete the account setup process

## 2. Get Your API Keys

1. Log into your Stripe Dashboard
2. Go to **Developers** → **API keys**
3. You'll see two keys:
   - **Publishable key** (starts with `pk_test_` for testing)
   - **Secret key** (starts with `sk_test_` for testing)

## 3. Set Your Secret Key

### Option A: Environment Variable (Recommended)

Create a `.env` file in the project root:

```bash
STRIPE_SECRET_KEY=sk_test_your_actual_secret_key_here
```

Then update `server.js` to load environment variables:

```javascript
require('dotenv').config();
```

And install dotenv:
```bash
npm install dotenv
```

### Option B: Direct in Code (Not Recommended for Production)

Update `server.js` line 3:
```javascript
const stripe = require('stripe')('sk_test_your_actual_secret_key_here');
```

## 4. Test Mode vs Live Mode

- **Test Mode**: Use keys starting with `sk_test_` and `pk_test_`
  - Use test card: `4242 4242 4242 4242`
  - Any future expiry date
  - Any 3-digit CVC
  - No real charges are made

- **Live Mode**: Use keys starting with `sk_live_` and `pk_live_`
  - Real payments will be processed
  - Switch to live mode only when ready for production

## 5. Testing

1. Start your server: `npm start`
2. Go to the store page
3. Click "Buy Now" on any product
4. Use test card: `4242 4242 4242 4242`
5. Complete the checkout

## 6. View Payments

- Test payments: Stripe Dashboard → **Payments** (test mode toggle on)
- Live payments: Stripe Dashboard → **Payments** (test mode toggle off)

## Security Notes

- ⚠️ **Never commit your secret keys to git**
- ⚠️ **Never share your secret keys publicly**
- ✅ Always use environment variables for secret keys
- ✅ The `.env` file is already in `.gitignore`

## Support

For Stripe help, visit: [https://stripe.com/docs](https://stripe.com/docs)
