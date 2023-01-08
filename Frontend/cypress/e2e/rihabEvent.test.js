describe("CRUD Event", () => {
	it("Does not do much!", () => {
		expect(true).to.equal(true)
	})

	it("event", function () {
		cy.once("uncaught:exception", () => false)
		const email = "siwar@gmail.com"
		const password = "siwar12345"
		cy.visit("/auth-page")
		cy.get("#login_email").type(email)
		cy.get("#login_password").type(password)
		cy.get(".ant-btn").click()
		//	cy.get(".ant-menu-item-active > .ant-menu-title-content > a").click()
		//cy.url().should("include", "/coach/event-page")

		cy.get(".ant-menu-overflow").click()
		cy.url().should("include", "/coach/event-page")
		//cy.get(".ant-menu-title-content > a").click()
		cy.get("#nom").clear().type("event1")
		cy.get("#Desription").type("ce événement")
		cy.get("#date_debut").type("2022-05-29")
		cy.get("#date_fin").type("2022-05-30")
		cy.get("#Lieu").clear().type("Tunis")
		cy.get(":nth-child(11) > input").type("true")
		cy.get(":nth-child(13) > input").selectFile(
			"C:/Users/DELL/Desktop/cities.png"
		)
		cy.get(".form > button").click()
		cy.wait(5000)
		cy.get(":nth-child(1) > .actions > :nth-child(1)").click()
		cy.get(".form > [name='nom']").clear().type("événement modifier")
		cy.get("[name='lieu']").clear().type("Manouba")
		cy.get(".form > [name='etat']").clear().type("true")
		cy.get(":nth-child(5) > :nth-child(1) > .form > button").click()
		cy.wait(4000)
		cy.reload()
		cy.get(":nth-child(1) > .actions > :nth-child(2)").click()
	})
})
