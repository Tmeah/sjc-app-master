// api/contentful.js

import { createClient } from 'contentful';

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT || "master",
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
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
