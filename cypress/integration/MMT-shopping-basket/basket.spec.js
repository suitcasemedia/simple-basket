describe(' Basket-001 As a user I want to view my current basket So that I can see what I\'ve added ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Given I am on the basket page.When I view the page. Then I can see all added items and their cost', () => {
    cy.get('table > :nth-child(1) > :nth-child(1)').should('contain', 'Mountain Dew');
    cy.get(':nth-child(1) > :nth-child(2) > input').should('have.value', '1');
    cy.get(':nth-child(1) > :nth-child(3) > .price').contains('1')

    cy.get('table > :nth-child(2) > :nth-child(1)').should('contain', 'Desperados');
    cy.get(':nth-child(2) > :nth-child(2) > input').should('have.value', '1');
    cy.get(':nth-child(2) > :nth-child(3) > .price').contains('1')


    cy.get('table > :nth-child(3) > :nth-child(1)').should('contain', 'Jack Daniels');
    cy.get(':nth-child(3) > :nth-child(2) > input').should('have.value', '1');
    cy.get(':nth-child(3) > :nth-child(3) > .price').contains('1')

    cy.get('.total__text').should('contain', '3')
  })


})


describe('Basket-002 I want to change the quantity of a basket item So that I can decide item totals before purchasing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Given I am on the basket page. When I view the page. Then I can see an item quantity next to each item', () => {
    cy.get(':nth-child(1) > :nth-child(2) > input').should('have.value', '1');
    cy.get(':nth-child(2) > :nth-child(2) > input').should('have.value', '1');
    cy.get(':nth-child(3) > :nth-child(2) > input').should('have.value', '1');

  })

  it('Given I am on the basket page. When I view the page. Then I can see each item\'s total cost (adjusted for quantity)', () => {
    cy.get(':nth-child(1) > :nth-child(3) > .price').contains('1')
    cy.get(':nth-child(2) > :nth-child(3) > .price').contains('1')
    cy.get(':nth-child(3) > :nth-child(3) > .price').contains('1')


  })

  it('Given I am on the basket page. When I change an item quantity. Then the item\'s total cost is adjusted, in real-time', () => {
    cy.get(':nth-child(1) > :nth-child(2) > input').type(9)
    cy.get(':nth-child(1) > :nth-child(3) > .price').contains('19')
    cy.get(':nth-child(2) > :nth-child(2) > input').type(15)
    cy.get(':nth-child(2) > :nth-child(3) > .price').contains('115')
    cy.get(':nth-child(3) > :nth-child(2) > input').type(12)
    cy.get(':nth-child(3) > :nth-child(3) > .price').contains('112')
    cy.get('.total__text').contains(246);
    

  })

});


describe('Basket-003. As a user I want to view my current basket total So that I can see what I\'m going to have to pay', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Given I am on the basket page, When I view the page, Then I can see a total cost, accounting for all items and quantities', () => {
    cy.get(':nth-child(1) > :nth-child(2) > input').type(9)
    cy.get(':nth-child(1) > :nth-child(3) > .price').contains('19')
    cy.get(':nth-child(2) > :nth-child(2) > input').type(15)
    cy.get(':nth-child(2) > :nth-child(3) > .price').contains('115')
    cy.get(':nth-child(3) > :nth-child(2) > input').type(12)
    cy.get(':nth-child(3) > :nth-child(3) > .price').contains('112')
    cy.get('.total__text').contains(246);
  })


})

describe('Basket-004. As a user, I want to remove all items from my basket, So that I can start over', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Given I am on the basket page,When I click the "clear" button,Then all items are reset to zero (but remain in the basket)', () => {
    cy.get(':nth-child(1) > :nth-child(2) > input').type(9)
    cy.get(':nth-child(1) > :nth-child(3) > .price').contains('19')
    cy.get(':nth-child(2) > :nth-child(2) > input').type(15)
    cy.get(':nth-child(2) > :nth-child(3) > .price').contains('115')
    cy.get(':nth-child(3) > :nth-child(2) > input').type(12)
    cy.get(':nth-child(3) > :nth-child(3) > .price').contains('112')
    cy.get('.total__text').contains(246);
    
    cy.get('.total__clear').click();

    cy.get(':nth-child(1) > :nth-child(3) > .price').contains(0)

    cy.get(':nth-child(2) > :nth-child(3) > .price').contains(0)
 
    cy.get(':nth-child(3) > :nth-child(3) > .price').contains(0)
  })


})