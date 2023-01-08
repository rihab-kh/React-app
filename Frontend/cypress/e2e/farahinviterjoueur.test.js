describe("inviter joueur", () => {
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
        cy.get('[style="opacity: 1; order: 7;"] > .ant-menu-title-content > a').click({force: true})
        cy.url().should("include", "/coach/Afficherjoueur-page")
        cy.get('[type="button"] > a').click()
        cy.get('[name="nom"]').type("Ahmed")
        cy.get('[name="prenom"]').type("Mohamed")
        cy.get('[name="email"]').type("farahbenamara364@gmail.com")
        cy.get(':nth-child(83)').click()
    
    })
})