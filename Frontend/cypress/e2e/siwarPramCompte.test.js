Cypress.Commands.add("login", (email, password) => {
    cy.session([email, password], () => {
      cy.visit("auth-page");
      cy.get("#login_email").type(email);
      cy.get("#login_password").type(password);
      cy.get(".ant-btn").click();
      cy.url().should("eq", "http://localhost:3000/coach");
    });
  });


it("Test parametrage Compte Coach ", () => {
    const email = "siwar.lajjem@gmail.com";
    const password = "123456";
    const LieuEntrUpdated = "Updated";
    cy.login(email, password);
    cy.visit("http://localhost:3000/coach");
    cy.get(".ant-menu-overflow").should("be.visible");
    
    cy.get('[style="opacity: 1; order: 8;"] > .ant-menu-title-content > a').click({force: true});
      
    cy.wait(3000);
    cy.url().should("eq", "http://localhost:3000/coach/parametrageCompte-page");
    cy.wait(3000);
    cy.get('#parametrageCompte_nom').type(LieuEntrUpdated);
    cy.get('#parametrageCompte_prenom').type(LieuEntrUpdated);
    cy.get('#parametrageCompte_DateNaiss').type("1998-03-25");
    cy.wait(3000);
    cy.get('.ant-btn').should("be.visible").click();
    cy.wait(3000);
   
  });

 