// Sobo — product variant data
// FILL IN: ingredients, details, and descriptions below are placeholders.
// Replace with real specs before launch. Replace `stripeLink` with real Stripe Payment Link URLs.

const SOBO_PRODUCTS = {
  classic: {
    id: "SOBO-CLS-001",
    eyebrow: "Original",
    name: "Sobo",
    visualClass: "classic",
    description:
      "The tonic Sobo started with — hibiscus and ginger, served hot or cold. [Add real product description]",
    ingredients: [
      ["Hibiscus", "[confirm form/sourcing]"],
      ["Ginger", "[confirm form/sourcing]"],
      ["[Add remaining ingredients]", ""],
    ],
    details: [
      ["Serving temperature", "Hot or cold"],
      ["[Add real spec]", "[Add value]"],
    ],
    sizes: [
      { label: "330 ml", price: "$3.00", per: "per bottle", stripeLink: "#" },
    ],
  },

  energy: {
    id: "SOBO-ENR-002",
    eyebrow: "Functional",
    name: "Sobo Energy",
    visualClass: "energy",
    description:
      "The Sobo base, built for a lift. [Add real product description]",
    ingredients: [
      ["Hibiscus", "[confirm form/sourcing]"],
      ["Ginger", "[confirm form/sourcing]"],
      ["[Add remaining ingredients]", ""],
    ],
    details: [
      ["Serving temperature", "[confirm]"],
      ["[Add real spec]", "[Add value]"],
    ],
    sizes: [
      { label: "330 ml", price: "$3.00", per: "per bottle", stripeLink: "#" },
    ],
  },

  syrup: {
    id: "SOBO-SYR-003",
    eyebrow: "Concentrate",
    name: "Sobo Syrup",
    visualClass: "syrup",
    description:
      "The tonic in concentrate form, for mixing by the ounce. [Add real product description]",
    ingredients: [
      ["Hibiscus", "[confirm form/sourcing]"],
      ["Ginger", "[confirm form/sourcing]"],
      ["[Add remaining ingredients]", ""],
    ],
    details: [
      ["Serving temperature", "Mix hot or cold"],
      ["[Add real spec]", "[Add value]"],
    ],
    sizes: [
      { label: "1 L", price: "$15.00", per: "per bottle", stripeLink: "#" },
    ],
  },
};
