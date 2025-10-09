describe('Dropdown', () => {
  beforeEach(() => cy.visit('http://localhost:5173'));

  it('opens dropdown and selects Option C', () => {
    // Open dropdown
    cy.get('[data-cy="dropdown-toggle"]').click();

    // Ensure menu is present
    cy.get('[data-cy="dropdown-menu"]', { timeout: 5000 }).should('be.visible');

    // Click Option C (use contains so it works whether item is string or inside nested nodes)
    cy.get('[data-cy="dropdown-menu"]')
      .contains('Option C')
      .click();

    // Assert selected value updated (give extra time if UI updates async)
    cy.get('[data-cy="selected-value"]', { timeout: 10000 }).should('contain', 'Option C');
  });
});
