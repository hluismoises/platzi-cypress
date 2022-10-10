describe('Aserciones', () => {
	Cypress.on('uncaught:exception', (err, runnable) => {
		// returning false here prevents Cypress from
		// failing the test
		return false
	})

	before(() => {
		//solo si se quiere correr antes de los dos bloques
		cy.visit('/automation-practice-form')
	})
	after(() => {
		cy.visit('/')
	})

	it('Aserciones', () => {
		cy.url().should('include', 'demoqa.com')

		cy.get('#firstName')
			.should('be.visible')
			.should('have.attr', 'placeholder', 'First Name')

		cy.get('#firstName')
			.should('be.visible')
			.and('have.attr', 'placeholder', 'First Name')
	})

	it.only('Aserciones 2', () => {
		//cy.visit('/automation-practice-form')
		cy.get('#firstName').then((element) => {
			expect(element).to.be.visible
			expect(element).to.have.attr('placeholder', 'First Name')
		})
	})
	it('Aserciones 3', () => {
		//cy.visit('/automation-practice-form')
		cy.get('#firstName').then((element) => {
			assert.equal(element.attr('placeholder'), 'First Name')
		})
	})
})
