import { resolve } from "dns";
import { getMineChance } from "../../src/redux/selectors";
import { count } from "rxjs/operators";
import { withLatestFrom } from "rxjs/operator/withLatestFrom";

describe('Minesweeper App', () => {

    before(() => {
        cy.visit('/');
        // cy.get('[data-cy=SizeControl]').as('sizeControlComponent');
        // cy.get('[data-cy=MineField]').as('mineFieldComponent');
        // cy.get('[data-cy=DifficultyControl]').as('difficultyControlComponent');
        // cy.get('[data-cy=GameStatus]').as('gameStatusComponent')
    })

    beforeEach(() => {
        cy.visit('/');
        cy.get('[data-cy=SizeControl]').as('sizeControlComponent');
        cy.get('[data-cy=MineField]').as('mineFieldComponent');
        cy.get('[data-cy=DifficultyControl]').as('difficultyControlComponent');
        cy.get('[data-cy=GameStatus]').as('gameStatusComponent')
    })

    it('defaults to a 10x10 grid', () => {
        cy.checkGridSizeIs(10);
    })

    it('when clicking plus twice, increases the grid size to 12x12', () => {
        cy.increaseSizeBy(2);
        cy.checkGridSizeIs(12);
    })
    it('when clicking minus 8 times, descreases the grid size to 2x2', () => {
        cy.decreaseSizeBy(8);
        cy.checkGridSizeIs(2);
    })

    it('resets the game on grid size chance', () => {
        cy.getCellAt(0, 0).as('firstCell');
        cy.get('@firstCell').click();
        cy.get('@firstCell').should('have.attr', 'open');
        cy.increaseSizeBy(1);
        cy.checkGridSizeIs(11);
        cy.get('@firstCell').should('not.have.attr', 'open');
    })

    it('should be able to change difficulty', () => {
        cy.getDifficultyButton('Normal')
            .should('have.css', 'border-color')
            .then(color => {
                expect(color).to.equal('rgb(0, 0, 0)');
            })

        cy.getDifficultyButton('Easy')
            .click()
            .should('have.css', 'border-color')
            .then(color => {
                expect(color).to.equal('rgb(0, 0, 0)')
            })

        cy.getDifficultyButton('Normal')
            .should('have.css', 'border-color')
            .then(color => {
                expect(color).to.not.equal('rgb(0, 0, 0)')
            })



    })

    it('is winnable', () => {

        cy.get('@gameStatusComponent')
            .should('have.attr', 'hidden')

        cy.get('@gameStatusComponent').children('h2').first()
            .should('not.contain', 'WON');

        cy.winPresetGame();

        cy.get('@gameStatusComponent')
            .should('not.have.attr', 'hidden')

        cy.get('@gameStatusComponent').children('h2').first()
            .should('contain', 'WON');


    })

    it('is loseable', () => {
        
        cy.presetGame();

        cy.get('@gameStatusComponent')
            .should('have.attr', 'hidden')

        cy.get('@gameStatusComponent').children('h2').first()
            .should('not.contain', 'LOST');

        cy.clickCellSync(0, 0);

        cy.rightClickCellSync(0, 3);
        cy.rightClickCellSync(1, 3);

        cy.clickCellSync(2, 1);
        cy.clickCellSync(2, 2);
        cy.clickCellSync(2, 3);
        cy.clickCellSync(1, 1);
        cy.clickCellSync(3, 0);

        cy.clickCellSync(2, 0);

        cy.get('@gameStatusComponent')
            .should('not.have.attr', 'hidden')

        cy.get('@gameStatusComponent').children('h2').first()
            .should('contain', 'LOST');

    })

    it('is not won when all cells are marked', () => {
        cy.decreaseSizeBy(8);
        cy.rightClickCellSync(0, 0);
        cy.rightClickCellSync(1, 0);
        cy.rightClickCellSync(0, 1);
        cy.rightClickCellSync(1, 1);

        cy.get('@gameStatusComponent')
            .should('have.attr', 'hidden')

        cy.get('@gameStatusComponent').children('h2').first()
            .should('not.contain', 'WON');

    })

    it('can be replayed once won', () => {
        cy.winPresetGame();

        cy.getCellAt(0, 0).as('firstCell')
            .should('have.attr', 'open');

        
        cy.get('@gameStatusComponent').contains('Replay').click();
        cy.get('@gameStatusComponent')
        .should('have.attr', 'hidden')
        
        cy.get('@gameStatusComponent').children('h2').first()
        .should('not.contain', 'WON');

        cy.get('@firstCell').should('not.have.attr', 'open');

    })

})