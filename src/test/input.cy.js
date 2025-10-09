describe("InputField Test", () => {
  it("types into input field", () => {
    cy.visit("http://localhost:5173");
    cy.get("input").type("jain").should("have.value", "jainsss");
  });
});
