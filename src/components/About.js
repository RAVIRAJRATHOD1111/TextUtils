import React from 'react';

export default function About(props) {
    // Dynamic styling based on the mode (dark or light)
    const myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#03091a' : 'white',
        border: '1px solid',
        borderRadius: '5px' // Added for better visual appeal
    };

    return (
        <>
            <div className="container">
                {/* Heading */}
                <h1 className='my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    About Us
                </h1>

                {/* Accordion for displaying information */}
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    {/* Accordion Item 1: Analyzing Text */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button
                                className="accordion-button collapsed"
                                style={myStyle}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne"
                            >
                                <strong>Analyzing Text</strong>
                            </button>
                        </h2>
                        <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body" style={myStyle}>
                                <p>
                                    TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count,
                                    or even the ability to convert your text to uppercase or lowercase, TextUtils has you covered.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Accordion Item 2: Free to Use */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button
                                className="accordion-button collapsed"
                                style={myStyle}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo"
                            >
                                <strong>Free to Use</strong>
                            </button>
                        </h2>
                        <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body" style={myStyle}>
                                <p>
                                    TextUtils is a free online utility that allows you to analyze your text quickly and efficiently.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Accordion Item 3: Browser Compatible */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button
                                className="accordion-button collapsed"
                                style={myStyle}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                            >
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body" style={myStyle}>
                                <p>
                                    TextUtils works on all modern browsers, including Chrome, Firefox, Safari, and Edge.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}