describe('Checkout flow', () => {
  it('should add a product to the cart and complete the purchase', () => {
    // Visit the website
    cy.visit('/');

    // Find a product and add it to the cart
    cy.get('.btn-addToCart:first-child').contains('Add To Cart').click();

    // Go to the cart
    cy.get('a').contains('Cart').click();

    // Verify the cart contains the added product
    cy.get('.cart-item:not(.cart-total)', { timeout: 5000 }).should(
      'have.length',
      1
    );

    // Fill in shipping info
    cy.get('.form-group:has(label:contains("Name"))')
      .find('input')
      .type('Gandalf');
    cy.get('.form-group:has(label:contains("Shipping Address"))').type(
      'No.123 gardens of Lorien'
    );

    // Place the order
    cy.get('button:contains("Place Order")').click();

    // Verify the order confirmation message
    cy.contains('Your Order in Placed!');
  });
});
