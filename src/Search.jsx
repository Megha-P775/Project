
import React, { useState } from "react";
import { Data } from "../src/utilities/Data";
import "../src/CSS/SearchData.css";

const SearchData = () => {
    const [data, setData] = useState("");

    const searchedData = Data.filter((fruit) => {
        return (
            fruit.name.toLowerCase().includes(data.toLowerCase()) ||
            fruit.color.toLowerCase().includes(data.toLowerCase())
        );
    });

    return (
        <div className="fruits-page">
            <div className="fruits-container">
                <header className="fruits-header">
                    <span className="fruits-tag">FRESH & HEALTHY</span>
                    <h1>Fruit Basket 🍓</h1>
                    <p>Discover your favorite fruits in one place.</p>
                </header>

                <div className="search-wrapper">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search by fruit name or color..."
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                    {data && (
                        <button
                            className="clear-btn"
                            onClick={() => setData("")}
                            aria-label="Clear search"
                        >
                            ✕
                        </button>
                    )}
                </div>

                <div className="results-info">
                    <h2>Our Fruits</h2>
                    <span>{searchedData.length} items found</span>
                </div>

                <div className="fruits-grid">
                    {searchedData.length > 0 ? (
                        searchedData.map((fruit, index) => (
                            <div className="fruit-card" key={fruit.name}>
                                <div className="fruit-icon">
                                    {["🍎", "🍌", "🍊", "🍇", "🍓", "🍉"][index % 6]}
                                </div>
                                <div className="fruit-details">
                                    <h3>{fruit.name}</h3>
                                    <p>
                                        <span
                                            className="color-dot"
                                            style={{ backgroundColor: fruit.color }}
                                        />
                                        {fruit.color}
                                    </p>
                                </div>
                                <span className="fruit-arrow">↗</span>
                            </div>
                        ))
                    ) : (
                        <div className="empty-state">
                            <span>🍃</span>
                            <h3>No fruits found</h3>
                            <p>Try searching with another name or color.</p>
                            <button onClick={() => setData("")}>
                                Show all fruits
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchData;
