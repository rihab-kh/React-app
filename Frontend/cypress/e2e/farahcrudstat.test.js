describe("CRUD stat", () => {
	it("Does not do much!", () => {
		expect(true).to.equal(true)
	})

	it("login+stat", function () {
		cy.once("uncaught:exception", () => false)
		const email = "siwar@gmail.com"
		const password = "siwar12345"
		cy.visit("/auth-page")
        cy.get("#login_email").type(email)
		cy.get("#login_password").type(password)
		cy.get('.ant-btn').click()
		cy.url().should("include", "/auth-page")
        cy.get('[style="opacity: 1; order: 2;"] > .ant-menu-title-content > a').click() 
        // .clear()
         .type("new stat")
         cy.get('[name="typeStat"]').type("StatTest")
         cy.get('[name="unitemesure"]').type("heures")
         cy.get('[name="minmax"]').type("maximiser")
         cy.get('[name="titre"]').type("Stat")
         cy.get('.form > [name="description"]').type("Stat pour test")
         cy.get('[name="lien"]').type("www.stattest.com")
         cy.get('[name="visible"]').type("true")
         cy.get('.form > button').click()
        //  .clear()
        .type("update stat")
        cy.get('.statistique')
        //  cy.get('.statistique > :nth-child(2)')
         cy.get('.actions > :nth-child(2)').click()
         cy.get('div > [name="typeStat"]').type("e2e")
         cy.get('div > button').click()
        cy.reload()

        // .type("delete stat")
        cy.get('.statistique > :nth-child(1)')
        cy.get(':nth-child(1) > .actions > :nth-child(1)').click()

        

	})
})