describe("CRUD comp", () => {
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
		cy.get(".ant-btn").click()
		cy.url().should("include", "/auth-page")
		cy.get('[style="opacity: 1; order: 1;"] > .ant-menu-title-content > a')
			.click()
			.type("new comp")
		cy.get('[name="nom"]').type("compétenceTest")
		cy.get('[name="desccomp"]').type("c'est un test e2e")
		cy.get('[name="visibility"]').type("true")
		cy.get('[name="Urlvideo"]').type("www.vid.com")
		cy.get(":nth-child(4) > .star > path").click()
		cy.get(".form > button")
			.click()
			//  .clear()
			.type("update stat")
		cy.wait(3000)
		// cy.reload()
		cy.get(".competence")
		//  cy.get('.competence > :nth-child(2)')
		cy.get(".actions > :nth-child(2)").click()
		cy.get('.competence > :nth-child(1) > [name="nom"]').type("e2e")
		cy.get(".competence > :nth-child(1) > button").click()
		cy.reload()
		cy.get(":nth-child(3) > :nth-child(4)")
		cy.get(":nth-child(3) > :nth-child(4) > :nth-child(1)")
		cy.get(":nth-child(4) > .actions > :nth-child(1)").click()
		// cy.get('.competence')
		// cy.get('.competence > :nth-child(1)')
		// cy.get('.actions > :nth-child(1)').click()
		// cy.get('.competences-list > :nth-child(3)')
		// cy.get('.competence > :nth-child(1)')
		// cy.get('.actions > :nth-child(1)').click()
		// cy.get('.competence')
		// cy.get('.competence > :nth-child(1)')
		// cy.get('.actions > :nth-child(1)').click()
		// cy.reload()
	})
})