export default class InventoryPage {
  static inventoryItem() {
    cy.get(".inventory_item").each(($item) => {
      // Check if each inventory item contains elements with specified classes
      cy.wrap($item).within(() => {
        cy.get(".inventory_item_name").should("exist");
        cy.get(".inventory_item_desc").should("exist");
        cy.get(".inventory_item_price").should("exist");
      });
    });
  }
}
