describe("Index", () => {
    it("Show page", () => {
        cy.visit("/")
        cy.get("body")
    })
    it("Show game title", () => {
        cy.visit("/")
        cy.get("body").contains("Two")
        cy.get("body").contains("Spaceships")
        cy.get("body").contains("Passing")
        cy.get("body").contains("In The")
        cy.get("body").contains("Night")
    })
    it("Show life", () => {
        cy.visit("/")
        cy.get("body").contains("100")
    })
})