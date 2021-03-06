/// <reference types="Cypress" />

describe('Lading Page', () => {
  it('should be able to submit form with email', () => {
    const user = cy;
    user.visit('http://localhost:8000/');
    user
      .get('h1')
      .contains('Hit Me!');
    user
      .get('input[name="email"]')
      .type('bacon@prontomarketing.com');
    user
      .get('button[type="submit"]')
      .click();

    const admin = cy;
    admin.visit('http://localhost:8000/admin/');
    admin
      .get('input[name="username"]')
      .type('bacon')
      .get('input[name="password"]')
      .type('Pronto123')
      .get('input[type="submit"]')
      .click();
    admin
      .get('.model-hitter > th > a')
      .click();
    admin
      .get('.field-email > a')
      .should('contain', 'bacon@prontomarketing.com');
  });
});
