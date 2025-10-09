describe("Card Component Test", () => {
  it("renders card with content", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Welcome");
    cy.contains("Hello Guest!");
  });
});
