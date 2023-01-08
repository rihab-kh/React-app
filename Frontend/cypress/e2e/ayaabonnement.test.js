describe("abonnement", () => {
	it("Does not do much!", () => {
		expect(true).to.equal(true)
	})

	it("abonnement", function () {
		cy.once("uncaught:exception", () => false)
		const email = "siwar@gmail.com"
		const password = "siwar12345"
		cy.visit("/auth-page")
		cy.get("#login_email").type(email)
		cy.get("#login_password").type(password)
		cy.get(".ant-btn").click()
		cy.url().should("include", "/auth-page")

		//cy.get(".ant-menu-overflow").click();
		cy.get(
			"[style='opacity: 1; order: 9;'] > .ant-menu-title-content > a"
		).click({ force: true })
		cy.url().should("include", "/coach/payer")

		cy.get('[value="free"]').click()

		cy.get("button").click()
	})
})
