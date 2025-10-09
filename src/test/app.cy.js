describe("App Test", () => {
  it("renders the header and button", () => {
    cy.visit("http://localhost:5173"); // Vite dev server URL
    cy.contains("My React Vite App");
    cy.get("button").contains("Click Me").click();
    
  });
});
