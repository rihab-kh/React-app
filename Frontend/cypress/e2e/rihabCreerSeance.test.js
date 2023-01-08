describe("créer séance", () => {
	it("Does not do much!", () => {
		expect(true).to.equal(true)
	})

	it("créer séance", function () {
		cy.once("uncaught:exception", () => false)
		const email = "siwar@gmail.com"
		const password = "siwar12345"
		cy.visit("/auth-page")
		cy.get("#login_email").type(email)
		cy.get("#login_password").type(password)
		cy.get(".ant-btn").click()
		cy.url().should("include", "/auth-page")

		cy.get(
			"[style='opacity: 1; order: 0;'] > .ant-menu-title-content > a"
		).click()

		cy.get(
			":nth-child(1) > .ant-col-14 > .ant-form-item-control-input > .ant-form-item-control-input-content > .css-b62m3t-container > .css-1s2u09g-control"
		).click()
		cy.get("#react-select-3-option-0").click()

		cy.get(
			":nth-child(2) > .ant-col-14 > .ant-form-item-control-input > .ant-form-item-control-input-content > .css-b62m3t-container > .css-1s2u09g-control"
		).click()

		cy.get("#react-select-5-option-0").click()
		// cy.wait(8000)
		cy.get(
			":nth-child(3) > .ant-col-14 > .ant-form-item-control-input > .ant-form-item-control-input-content > .css-b62m3t-container > .css-1s2u09g-control"
		).click()
		cy.get("#react-select-7-option-0").click()

		cy.get(
			":nth-child(4) > .ant-col-14 > .ant-form-item-control-input > .ant-form-item-control-input-content > input"
		).type("2022-05-29")
		cy.get(
			":nth-child(5) > .ant-col-14 > .ant-form-item-control-input > .ant-form-item-control-input-content > input"
		).type("20:26")

		cy.get(
			":nth-child(6) > .ant-col-14 > .ant-form-item-control-input > .ant-form-item-control-input-content > .css-b62m3t-container > .css-1s2u09g-control"
		).click()
		cy.get("#react-select-9-option-0").click()

		cy.get(
			":nth-child(7) > .ant-col-14 > .ant-form-item-control-input > .ant-form-item-control-input-content > .css-b62m3t-container > .css-1s2u09g-control"
		).click()
		cy.get("#react-select-11-option-0").click()
		cy.wait(2000)
		cy.get(".ant-form > .ant-btn > span").click()
		cy.reload()
		cy.wait(6000)
		//research
		cy.get(".ant-input").clear().type("Lieu2")
		cy.wait(6000)

		// //afficher la liste des séances d'aujourd'hui
		cy.get(".Seance-list > :nth-child(4) > a").click()
		cy.url().should("include", "/coach/seance")
	})
})
