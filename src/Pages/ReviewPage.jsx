import React, { useState, useEffect } from "react";

// Default reviews
const defaultReviews = [
    {
        id: 1,
        productName: "Matte Lipstick",
        name: "Ayesha",
        rating: 5,
        comment: "Love this lipstick! Color is so pretty 💄",
    },
    {
        id: 2,
        productName: "Perfume Spray",
        name: "Sana",
        rating: 5,
        comment: "Fragrance is amazing 🌸",
    },
    { 
        id: 3,
         productId: 2,
         productName: "Liquid Foundation",
         name: "Hina",
         rating: 4,
         comment: "Gives smooth finish, perfect for daily use.", },

];

export default function ReviewPage() {
    const [reviews, setReviews] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        productName: "",
        rating: "",
        comment: "",
    });

    // Load reviews from localStorage or default
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("reviews") || "null");
        if (saved && saved.length > 0) {
            setReviews(saved);
        } else {
            setReviews(defaultReviews);
        }
    }, []);

    // Save reviews automatically to localStorage
    useEffect(() => {
        localStorage.setItem("reviews", JSON.stringify(reviews));
    }, [reviews]);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Add new review
    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            id: Date.now(),
            name: formData.name,
            productName: formData.productName,
            rating: Number(formData.rating),
            comment: formData.comment,
        };

        setReviews([newReview, ...reviews]); // Add to top

        // Reset form
        setFormData({
            name: "",
            productName: "",
            rating: "",
            comment: "",
        });
    };

    return (
        <div className="p-6 bg-gray-100 dark:bg-[#0f172a] min-h-screen">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                User Reviews
            </h1>

            {/* REVIEW FORM */}
            <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-[#1e293b] p-6 rounded-xl shadow mb-6"
            >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-2 border rounded"
                        required
                    />

                    <input
                        name="productName"
                        placeholder="Product Name"
                        value={formData.productName}
                        onChange={handleChange}
                        className="p-2 border rounded"
                        required
                    />

                    <input
                        type="number"
                        name="rating"
                        placeholder="Rating (1-5)"
                        value={formData.rating}
                        onChange={handleChange}
                        className="p-2 border rounded"
                        min="1"
                        max="5"
                        required
                    />

                    <input
                        name="comment"
                        placeholder="Write review..."
                        value={formData.comment}
                        onChange={handleChange}
                        className="p-2 border rounded"
                        required
                    />
                </div>

                <button className="mt-4 bg-[#359078] text-white px-4 py-2 rounded hover:bg-[#2b6b5a] transition">
                    Add Review
                </button>
            </form>

            {/* REVIEWS LIST WITH SCROLL */}
            <div className="space-y-4 max-h-[500] ">
                {reviews.map((r) => (
                    <div
                        key={r.id}
                        className="bg-white dark:bg-[#1e293b] p-4 rounded-2xl shadow hover:shadow-lg transition"
                    >
                        <h3 className="font-bold text-gray-900 dark:text-white">
                            {r.productName}
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-300">
                            by {r.name}
                        </p>

                        <div className="text-yellow-400 mt-1">
                            {"★".repeat(r.rating)}
                            {"☆".repeat(5 - r.rating)}
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                            {r.comment}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}