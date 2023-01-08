describe("CRUD programme", () => {
	it("Does not do much!", () => {
		expect(true).to.equal(true)
	})

	it("login+programme", function () {
		cy.once("uncaught:exception", () => false)
		const email = "ayacoach@gmail.com"
		const password = "ayacoach"
		cy.visit("/auth-page")
		cy.get("#login_email").type(email)
		cy.get("#login_password").type(password)
		cy.get(".ant-btn").click()
		cy.url().should("include", "/auth-page")
		cy.get('[style="opacity: 1; order: 6;"] > .ant-menu-title-content > a')
			.click()
			// .clear()
			.type("new ProgrammeSeance")
		cy.get('[name="title"]').type("titleTest")
		cy.get('[name="descriptionTechnique"]').type("desTest")
		//cy.get('[name="image"]').type("");
		cy.get('[name="lienVideo"]').type("www.youtube.com")

		cy.get(".form > button")
			.click()
			//  .clear()
			.type("update ProgrammeSeance")
		cy.get(".actions")
		//  cy.get('.statistique > :nth-child(2)')
		cy.get(".actions > :nth-child(2)").click({ multiple: true })
		cy.get('[name="title"]').type("e2e")
		cy.get("button").click({ multiple: true })
		cy.reload()

		// .type("delete stat")
		cy.get(".actions > :nth-child(1)")
		cy.get(":nth-child(1) > .actions > :nth-child(1)").click()
	})
})
