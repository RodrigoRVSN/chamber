/// <reference types="cypress" />

export {};

describe('<Home />', () => {
  context('Home Redirect and Language toggle', () => {
    it('should be able to visit home page and redirect to agents page', () => {
      cy.visit('/');

      cy.get('a[data-testid=home__button--see-agens]').click()

      cy.url().should('include', 'agents')

      cy.get('[data-testid=agents__role-name--22697a3d-45bf-8dd7-4fec-84a9e28c69d7]').should('contain', 'Sentinel')
    });

    
    it('should be able to change the site language', () => {
      cy.visit('/');

      cy.get('a[data-testid=home__button--see-agens]').should('contain', 'See agents')

      cy.get('[data-testid=language-selector__dropdown--languages]').trigger('mouseover')

      cy.get('[data-testid=languages-selector__dropdown-pt-BR]').click()

      cy.get('a[data-testid=home__button--see-agens]').should('contain', 'Ver agentes')
    });
  });
});
