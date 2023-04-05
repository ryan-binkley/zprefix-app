/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    { user_id: 1, item_name: "Red Shirt", description: "Cotton material", quantity: 15 },
    { user_id: 2, item_name: "Blue Pants", description: "Denim material", quantity: 33 },
    { user_id: 3, item_name: "Black Shoes", description: "Leather material", quantity: 23 },
    { user_id: 4, item_name: "Green Hat", description: "Wool material", quantity: 15 },
    { user_id: 5, item_name: "White Socks", description: "Cotton material", quantity: 44 },
    { user_id: 1, item_name: "Yellow Jacket", description: "Polyester material", quantity: 32 },
    { user_id: 2, item_name: "Pink Skirt", description: "Silk material", quantity: 17 },
    { user_id: 3, item_name: "Brown Belt", description: "Leather material", quantity: 24 },
    { user_id: 4, item_name: "Orange Scarf", description: "Cashmere material", quantity: 32 },
    { user_id: 5, item_name: "Purple Sweater", description: "Wool material", quantity: 19 },
    { user_id: 1, item_name: "Blue Shirt", description: "Cotton material", quantity: 47 },
    { user_id: 2, item_name: "Green Pants", description: "Denim material", quantity: 28 },
    { user_id: 3, item_name: "Black Boots", description: "Leather material", quantity: 16 },
    { user_id: 4, item_name: "Red Hat", description: "Wool material", quantity: 38 },
    { user_id: 5, item_name: "White Gloves", description: "Cotton material", quantity: 72 },
    { user_id: 1, item_name: "Yellow Dress", description: "Polyester material", quantity: 41 },
    { user_id: 2, item_name: "Pink Blouse", description: "Silk material", quantity: 33 },
    { user_id: 3, item_name: "Brown Shoes", description: "Leather material", quantity: 20 },
    { user_id: 4, item_name: "Orange Hat", description: "Cashmere material", quantity: 10 },
    { user_id: 5, item_name: "Purple Scarf", description: "Wool material", quantity: 25 }
  ]);
};
