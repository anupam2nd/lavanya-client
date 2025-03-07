import React from "react";
import Card from "./Card";

export default function CardList() {
    // Sample Data (You can fetch this from an API)
    const products = [
        {
            id: 1,
            image: "../src/images/image2.jpg", // Replace with actual image path
            title: "Nike Dunk High",
            description: "A high-top sneaker .",
            price: 120,
        },
        {
            id: 2,
            image: "../src/images/image3.jpg",
            title: "Adidas UltraBoost",
            description: "A super comfortable .",
            price: 150,
        },
        {
            id: 3,
            image: "../src/images/image4.jpg",
            title: "Puma RS-X",
            description: "A stylish sneaker .",
            price: 100,
        },
        {
            id: 4,
            image: "../src/images/image5.jpg",
            title: "Puma RS-X",
            description: "A stylish sneaker .",
            price: 100,
        }

    ];

    return (
        <div className="min-h-[50vh] flex flex-wrap justify-center gap-6 bg-gray-100 p-6">
            {products.map((product) => (
                <Card
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                />
            ))}
        </div>
    );
}