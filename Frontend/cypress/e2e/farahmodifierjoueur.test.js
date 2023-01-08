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
        cy.get('.joueurs-list > :nth-child(1) > :nth-child(2)')
        cy.get('.joueurs-list > :nth-child(1) > :nth-child(2) > :nth-child(2)')
        cy.get(':nth-child(2) > .actions > :nth-child(1)').click()
        cy.get('div > [name="nom"]').type("e2e")
        cy.get(':nth-child(2) > div > button').click()
    })
})