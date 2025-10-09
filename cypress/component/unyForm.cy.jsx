/// <reference types="cypress" />
import React from "react";
import { mount } from "cypress/react";
import UnyForm from "../../src/components/UnyForm";

describe("UnyForm Component", () => {
  it("renders form fields and submits successfully", () => {
    // Spy console.log for handleFinish
    mount(<UnyForm />);
    // Fill the username
    cy.get('input[placeholder="Enter username"]').type("testuser");
    // Fill the email
    cy.get('input[placeholder="Enter email"]').type("test@example.com");
    // Fill the password
    cy.get('input[placeholder="Enter password"]').type("test123");
    // Click submit
    cy.get(".btn-submit").click();
  });
  
});
