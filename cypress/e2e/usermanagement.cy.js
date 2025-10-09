describe("User Management E2E Tests", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("should fill and submit the UnyForm", () => {
        cy.get('input[placeholder="Enter username"]').type("testuser");
        cy.get('input[placeholder="Enter email"]').type("test@example.com");
        cy.get('input[placeholder="Enter password"]').type("test123");
        cy.get(".btn-submit").click();
        // Add assertions as needed to verify successful submission
    });
});