Cypress.Commands.add('getCellAt', (x, y) => {
    return cy.get('@mineFieldComponent')
        .children('div').eq(x)
        .children('p').eq(y);
})

Cypress.Commands.add('clickCellSync', (x, y) => {
    cy.wait(0);
    return cy.getCellAt(x, y).click();
})

Cypress.Commands.add('rightClickCellSync', (x, y) => {
    cy.wait(0);
    return cy.getCellAt(x, y).trigger('contextmenu');
})

Cypress.Commands.add('increaseSizeBy', (times) => {
    for (let i = 0; i < times; i++) {
        cy.get('@sizeControlComponent').contains('+').click();
    }
})

Cypress.Commands.add('decreaseSizeBy', (times) => {
    for (let i = 0; i < times; i++) {
        cy.get('@sizeControlComponent').contains('-').click();
    }
})

Cypress.Commands.add('checkGridSizeIs', size => {
    cy.get('@sizeControlComponent').find('p')
        .should('contain', size);

    cy.get('@mineFieldComponent').children('div').as('columns')
        .should('have.length', size);

    cy.get('@columns').first().children('p')
        .should('have.length', size)
})

Cypress.Commands.add('getDifficultyButton', difficulty => {
    return cy.get('@difficultyControlComponent').find(`[data-cy=${difficulty}]`);
})

Cypress.Commands.add('presetGame', () => {
    cy.fixture('grid').then(grid => {
        cy.window().its('store').then(store => {
            store.dispatch({
                type: 'SET_GRID',
                grid
            })
        })
    })
})

Cypress.Commands.add('winPresetGame', () => {

    cy.presetGame();

    cy.clickCellSync(0, 0);

    cy.rightClickCellSync(0, 3);
    cy.rightClickCellSync(1, 3);

    cy.clickCellSync(2, 1);
    cy.clickCellSync(2, 2);
    cy.clickCellSync(2, 3);
    cy.clickCellSync(1, 1);
    cy.clickCellSync(3, 0);

    cy.rightClickCellSync(2, 0);

    cy.clickCellSync(3, 1);
    cy.clickCellSync(4, 0);

    cy.rightClickCellSync(3, 2);

    cy.clickCellSync(3, 3);
    cy.clickCellSync(4, 2);

    cy.rightClickCellSync(5, 2);

    cy.clickCellSync(6, 2);
    cy.clickCellSync(1, 4);
    cy.clickCellSync(2, 4);
    cy.clickCellSync(3, 4);
    cy.clickCellSync(0, 4);
    cy.clickCellSync(0, 5);
    cy.clickCellSync(1, 5);
    cy.clickCellSync(0, 6);

    cy.rightClickCellSync(1, 6);
    cy.rightClickCellSync(5, 7);
    cy.rightClickCellSync(5, 8);

    cy.clickCellSync(5, 9);

    cy.rightClickCellSync(6, 3);
    cy.rightClickCellSync(7, 1);

    cy.clickCellSync(8, 1);

    cy.rightClickCellSync(9, 1);

    cy.clickCellSync(7, 0);
    cy.clickCellSync(8, 0);

    cy.rightClickCellSync(9, 0);

})
