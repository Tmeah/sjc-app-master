// api/contentful.js

import { createClient } from 'contentful';

const client = createClient({
    space: "yl6ypwr5g4ob",
    environment: "master",
    accessToken: "RSTYXHOz79kc6Tw29CE4up1gjVqjVYySh7_rK04Onac",
});
export const fetchProductsByCategory = async (categoryName) => {
    try {
        const response = await client.getEntries({
            content_type: 'product',
            'fields.productType': categoryName  // Corrected the field name here
        });
        return response.items;
    } catch (error) {
        console.error("Error fetching products by category:", error);
        return [];
    }
};
