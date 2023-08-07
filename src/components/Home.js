import React, { useState } from "react"
import "./Home.css"

const Home = () => {

    const [hoverStates, setHoverStates] = useState({});

    const handleMouseOver = (id) => {
        setHoverStates((prevHoverStates) => ({
            ...prevHoverStates,
            [id]: true
        }));
    };

    const handleMouseLeave = (id) => {
        setHoverStates((prevHoverStates) => ({
            ...prevHoverStates,
            [id]: false
        }));
    };

    return (
        <div className="main">
            <div className="bundle">
                <h2 class="bundle-header">
                    <hr></hr>Bundle & Save<hr></hr>
                </h2>
            </div>
            <div className="main2" id="1" onMouseEnter={() => handleMouseOver(1)} onMouseLeave={() => handleMouseLeave(1)}>
                <div className="hoverMain">
                    <div class="checkbox">
                        <input type="checkbox" id="customCheckbox3" />
                        <label for="customCheckbox3"></label>
                    </div>
                    <div className="marginRight">
                        <p className="paragraph1">1 Pair</p>
                        <p className="paragraph2">DKK 195.00</p>
                    </div>
                    <div>
                        <p>50% OFF</p>
                    </div>
                </div>
                {hoverStates[1] &&
                    <div>
                        <div className="sizecolour">
                            <p className="size">Size</p>
                            <p className="size">Colour</p>
                        </div>
                        <div className="hoverMain2">
                            <p className="size">#1</p>
                            <select className="select">
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                            </select>
                            <select className="select2">
                                <option>Colour</option>
                                <option>Blue</option>
                                <option>Green</option>
                            </select>
                        </div>
                        <div className="hoverMain2">
                            <p className="size">#2</p>
                            <select className="select">
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                            </select>
                            <select className="select2">
                                <option>Colour</option>
                                <option>Blue</option>
                                <option>Green</option>
                            </select>
                        </div>
                    </div>
                }
            </div>
            <div className="main2" id="2" onMouseEnter={() => handleMouseOver(2)} onMouseLeave={() => handleMouseLeave(2)}>
                <div className="hoverMain">
                    <div class="checkbox">
                        <input type="checkbox" id="customCheckbox1" />
                        <label for="customCheckbox1"></label>
                    </div>
                    <div className="marginRight2">
                        <p className="paragraph1">2 Pair</p>
                        <p className="paragraph2">DKK 345.00</p>
                    </div>
                    <div className="padding">
                        <p className="mostPopular">Most Popular</p>
                        <p className="percent">40% OFF</p>
                    </div>
                </div>
                {hoverStates[2] &&
                    <div>
                        <div className="sizecolour">
                            <p className="size">Size</p>
                            <p className="size">Colour</p>
                        </div>
                        <div className="hoverMain2">
                            <p className="size">#1</p>
                            <select className="select">
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                            </select>
                            <select className="select2">
                                <option>Colour</option>
                                <option>Blue</option>
                                <option>Green</option>
                            </select>
                        </div>
                        <div className="hoverMain2">
                            <p className="size">#2</p>
                            <select className="select">
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                            </select>
                            <select className="select2">
                                <option>Colour</option>
                                <option>Blue</option>
                                <option>Green</option>
                            </select>
                        </div>
                    </div>
                }
            </div>
            <div className="main2" id="3" onMouseEnter={() => handleMouseOver(3)} onMouseLeave={() => handleMouseLeave(3)}>
                <div className="hoverMain">
                    <div class="checkbox">
                        <input type="checkbox" id="customCheckbox2" />
                        <label for="customCheckbox2"></label>
                    </div>
                    <div className="marginRight">
                        <p className="paragraph1">3 Pair</p>
                        <p className="paragraph2">DKK 528.00</p>
                    </div>
                    <div>
                        <p>60% OFF</p>
                    </div>
                </div>
                {hoverStates[3] &&
                    <div>
                        <div className="sizecolour">
                            <p className="size">Size</p>
                            <p className="size">Colour</p>
                        </div>
                        <div className="hoverMain2">
                            <p className="size">#1</p>
                            <select className="select">
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                            </select>
                            <select className="select2">
                                <option>Colour</option>
                                <option>Blue</option>
                                <option>Green</option>
                            </select>
                        </div>
                        <div className="hoverMain2">
                            <p className="size">#2</p>
                            <select className="select">
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                            </select>
                            <select className="select2">
                                <option>Colour</option>
                                <option>Blue</option>
                                <option>Green</option>
                            </select>
                        </div>
                    </div>
                }
            </div>
            <div className="totalText">
                <p className="shipping">Free 2 Day Shipping</p>
                <p className="shippingTotal">Total : DKK 360.00</p>
            </div>
            <div>
                <button className="button">+ Add to Cart</button>
            </div>
        </div>
    )
}

export default Home