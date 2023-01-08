
  it("Test signup", () => {
    cy.visit("/auth-page");
    cy.get('.btn').click();
    cy.url().should("eq", "http://localhost:3000/inscription-page");

    cy.get('#register_nom').clear().type("Lajjem")
    cy.get('#register_prenom').clear().type("Siwar")
    cy.get('#register_datenaiss').clear().type("25/03/1998")
    cy.get('#register_email').clear().type("siw98@gmail.com")
    cy.get('.ant-input-affix-wrapper').clear().type("123456")
    cy.get('button').click()
    
    cy.wait(3000);
    cy.get(':nth-child(2) > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > :nth-child(3) > .ant-checkbox > .ant-checkbox-input').click()
    cy.get(':nth-child(4) > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > :nth-child(3) > .ant-checkbox > .ant-checkbox-input').click();
    cy.get('button').click();

    cy.wait(3000);
    cy.url().should("eq", "http://localhost:3000/auth-page");

  });