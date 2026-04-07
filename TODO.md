# MushWood To-Do



- add cart to add products to

# E2E
- Add back in the other two browsers once have suite developed
- turn editor suggetions back on (settings > serach 'suggest' > editor/quick suggestions)
    - settings > serach "parameter hints" > Editor/parameter hints Enabled > turn on




## Tests

- [ ] Add test: status badges render on correct products (Sold Out badge, Made to Order badge)
- [ ] Add test: clicking Inquire on a madeToOrder product navigates to `/inquire/:productId`
- [ ] Add test: `/inquire/:productId` page loads correctly (heading, form fields visible)
- [ ] Add test: `/inquire/:productId` redirects to `/store` if product is inStock or soldOut
- [ ] Add test: `/inquire-success` page loads correctly
- [ ] Add test: navigating to `/checkout/:id` for a soldOut or madeToOrder product redirects to `/store`
- [ ] Add model: `inquirePage.js` in `/models` to support new inquire page tests
