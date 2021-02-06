describe("TestApp", async () => {
    before("Basic testing configuration", () => {
        cy.visit("/")
    });

    it("Nav bar visibility", () => {
        cy.get('#logo > img').should("be.visible");
        cy.get('.title_app').should("be.visible");
        cy.get('[data-test=search-button]').should("be.visible");
        cy.get('[data-test=search-input]').should("be.visible")
    });
    it("Footer visibility", () => {
        cy.get('.footer').should("be.visible")
    });
    it("Body visibility", () => {
        cy.get('.cards').should("be.visible")
        cy.get('h3').should("be.visible")
        cy.get('h3').contains("Home")
    });
    it("No results visibility", () => {
        cy.get('[data-test=search-input]').type('some track that not exist');
        cy.get('[data-test=search-button]').click().then(() => {
            cy.get('h1').should("be.visible");
            cy.get('h1').contains("No Results founds");
        });
    });
    it("Button Home and searching input and button", () => {
        cy.get('#logo > img').click().then(() => {
            cy.get('[data-test=search-input]').type('u2');
        })
        cy.get('[data-test=search-button]').click().then(() => {
            cy.get('[data-test=data-cards]').should("be.visible");
        });
    });
    it("Items list test visibility", () => {
        cy.get('[data-test=data-div_cards] > :nth-child(1) > [data-test=data-link] > .div_card > [data-test=data-name]')
        .contains("Name Up")
        cy.get('[data-test=data-div_cards] > :nth-child(1) > [data-test=data-link] > .div_card > [data-test=data-name]')
        .click()
    });
    it("Checking Properties and values", () => {
        cy.get(':nth-child(1) > .span_property').contains('Original name:');
        cy.get(':nth-child(1) > .span_value').contains('Name Up');
        cy.get(':nth-child(2) > .span_property').contains('Disc Number:');
        cy.get(':nth-child(2) > .span_value').contains('1');
        cy.get(':nth-child(3) > .span_property').contains('Duration:');
        cy.get(':nth-child(3) > .span_value').contains('1.9 minutes');
        cy.get(':nth-child(4) > .span_property').contains('Artists:');
        cy.get('[data-test=data-ul_value_artists]').should('be.visible');
        cy.get('[data-test=data-ul_value_artists]').contains('DJ Street Time');
        cy.get(':nth-child(5) > .span_property').contains('Popularity');
        cy.get(':nth-child(5) > .span_value').contains('29');
        cy.get(':nth-child(6) > .span_property').contains('Preview');
        cy.get(':nth-child(6) > .span_value').should('be.visible');
        cy.get(':nth-child(7) > .span_property').contains('Album name:');
        cy.get(':nth-child(7) > .span_value').contains('The Street Diary');
        cy.get(':nth-child(8) > .span_property').contains('Album type:');
        cy.get(':nth-child(8) > .span_value').contains('album');
        cy.get(':nth-child(9) > .span_property').contains('Album release date:');
        cy.get(':nth-child(9) > .span_value').contains('2020-03-02');
    })
    it("Button back", () => {
        cy.get('a').click()
    })
    it("Pages ", () => {
        cy.get(':nth-child(2) > button').click().then(() => {
            cy.get(':nth-child(2) > button').click()
        })
    })
    it("Backing home", () => {
        cy.get('#logo > img').click();
    })
})