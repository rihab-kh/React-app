

  it("Test correct login", () => {
    const email = "siwar.lajjem@gmail.com";
    const password = "123456";
    cy.visit("/auth-page");
    cy.get("#login_email").type(email);
    cy.get("#login_password").type(password);
    cy.get(".ant-btn").click();
    cy.url().should("eq", "http://localhost:3000/coach");
  });

  it("Test false login", () => {
    const email = "siwar.lajjem5@gmail.com";
    const password = "1234567";
    cy.visit("/auth-page");
    cy.wait(1000);
    cy.get("#login_email").type(email);
    cy.get("#login_password").type(password);
    cy.get(".ant-btn").click();
    
    cy.url().should("eq", "http://localhost:3000/auth-page");
  });

