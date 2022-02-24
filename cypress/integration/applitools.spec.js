describe("Simple Layout Test", () => {
  it(`runs VRT through Applitools`, function () {
    // Call Open on eyes to initialize a test session
    cy.eyesOpen({
      appName: "Layout Test",
      testName: "Simple Test",
    });

    // Example Test
    cy.visit("http://localhost:3000");
    cy.eyesCheckWindow({
      target: "region",
      selector: {
        type: "css",
        selector: ".main",
      },
      fully: true,
    });

    // Call Close on eyes to let the server know it should display the results
    cy.eyesClose();
  });
});
