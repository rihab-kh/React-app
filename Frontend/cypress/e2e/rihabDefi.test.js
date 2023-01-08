describe("CRUD defi", () => {
	it("Does not do much!", () => {
		expect(true).to.equal(true)
	})

	it("defi", function () {
		cy.once("uncaught:exception", () => false)
		const email = "siwar@gmail.com"
		const password = "siwar12345"
		cy.visit("/auth-page")
		cy.get("#login_email").type(email)
		cy.get("#login_password").type(password)
		cy.get(".ant-btn").click()
		cy.url().should("include", "/auth-page")

		//cy.get(".ant-menu-overflow").click()
		cy.get(
			"[style='opacity: 1; order: 3;'] > .ant-menu-title-content > a"
		).click()
		cy.url().should("include", "/coach/defi-page")
		//cy.get(".ant-menu-title-content > a").click()
		cy.get("#objectif").clear().type("defi1")
		cy.get("#lienVideo").clear().type("http://youtube/defi")
		cy.get(".ant-btn > span").click()
		cy.wait(3000)
		cy.get(":nth-child(1) > :nth-child(3) > .actions > :nth-child(2)").click()
		cy.get("[name='objectif']").clear().type("modifier le defi")
		cy.get("[name='lienvideo']").clear().type("http://youtube/modifdefi")
		cy.get(".form > button").click()
		cy.wait(3000)
		cy.get(":nth-child(2) > :nth-child(3) > .actions > :nth-child(1)").click()
	})
})
