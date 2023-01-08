Cypress.Commands.add("login", (email, password) => {
    cy.session([email, password], () => {
      cy.visit("auth-page");
      cy.get("#login_email").type(email);
      cy.get("#login_password").type(password);
      cy.get(".ant-btn").click();
      cy.url().should("eq", "http://localhost:3000/coach");
    });
  });

it("successfully display LieuxEntr list and add a LieuEntr", () => {
    const email = "siwar.lajjem@gmail.com";
    const password = "123456";
    cy.login(email, password);
    cy.wait(3000);
    cy.visit("http://localhost:3000/coach");
    cy.get('.ant-menu-overflow').should("be.visible");
    cy.wait(3000);
    cy.get('[style="opacity: 1; order: 5;"] > .ant-menu-title-content > a')
      .should("be.visible")
      .click();
    cy.wait(3000);
    cy.url().should("eq", "http://localhost:3000/coach/lieuEntr-page");
    cy.wait(3000);
    cy.get("#nom").clear().type("Lieu2")
    cy.get("#ville").clear().type("Tunis")
    cy.get("#pays").clear().type("Tunis")
    cy.get("#adresse").clear().type("Tunis")
    cy.get(".ant-btn").click()

    cy.get("#nom").should("have.text", "")
    cy.get("#ville").should("have.text", "")
    cy.get("#pays").should("have.text", "")
    cy.get("#adresse").should("have.text", "")
    cy.wait(3000);

    //cy.get("lieuEntr:last-child .nom").should("have.value", "Lieu2")

})

it("Test update LieuEntr ", () => {
    const email = "siwar.lajjem@gmail.com";
    const password = "123456";
    const LieuEntrUpdated = "Updated";
    cy.login(email, password);
    cy.visit("http://localhost:3000/coach");
    cy.get(".ant-menu-overflow").should("be.visible");
    cy.get('[style="opacity: 1; order: 5;"] > .ant-menu-title-content > a')
      .should("be.visible")
      .click();

    cy.wait(3000);
    cy.url().should("eq", "http://localhost:3000/coach/lieuEntr-page");
    cy.wait(3000);
    cy.get(":nth-child(1) > :nth-child(5) > .actions > :nth-child(2)").should("be.visible").click();
    cy.wait(3000);
    cy.get('[name="nom"]').type(LieuEntrUpdated);
    cy.get('[name="ville"]').type(LieuEntrUpdated);
    cy.get('[name="pays"]').type(LieuEntrUpdated);
    cy.get('[name="adresse"]').type(LieuEntrUpdated);
    cy.wait(3000);
    cy.get(".form > button").should("be.visible").click();
    cy.wait(3000);
   
  });

  it("Test delete LieuEntr", () => {
    const email = "siwar.lajjem@gmail.com";
    const password = "123456";
    const LieuEntrUpdated = "Updated";
    cy.login(email, password);
    cy.visit("http://localhost:3000/coach");
    cy.get(".ant-menu-overflow").should("be.visible");
    cy.get('[style="opacity: 1; order: 5;"] > .ant-menu-title-content > a')
      .should("be.visible")
      .click();

    cy.wait(3000);
    cy.url().should("eq", "http://localhost:3000/coach/lieuEntr-page");
    cy.wait(3000);
    cy.get(".lieuxEntr-list > :nth-child(2) > :nth-child(1)").should("exist");
    const eventToDelete = cy.get(".lieuxEntr-list > :nth-child(2) > :nth-child(1)");
    cy.get(":nth-child(1) > :nth-child(5) > .actions > :nth-child(1)").should("be.visible").click();
    cy.get("[data-layer='Content']").should("not.exist");
    eventToDelete.should("not.exist");
  });