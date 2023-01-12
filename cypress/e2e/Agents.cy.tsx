/// <reference types="cypress" />

export {};

describe('<Agents />', () => {
  context('Agents Page', () => {
    it('should be able to redirect to the selected agent', () => {
      const agentId = '22697a3d-45bf-8dd7-4fec-84a9e28c69d7'

      cy.visit('/agents');

      cy.get(`[data-testid=agents__role-name--${agentId}]`).click()

      cy.url().should('contain', agentId)

      cy.get('h1').should('contain', 'Chamber')
    });
  });
});
