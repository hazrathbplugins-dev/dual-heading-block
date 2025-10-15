function Style({attributes}) {
    const { shapeColor, subHeadingColor, headingColor } = attributes;
    
    // Base typography styles without device-specific properties
	const subHeadingStyle = {
		fontFamily: attributes.subHeadingFontFamily,
		fontWeight: attributes.subHeadingFontWeight,
		textTransform: attributes.subHeadingTextTransform,
	};

	const headingStyle = {
		fontFamily: attributes.headingFontFamily,
		fontWeight: attributes.headingFontWeight,
		textTransform: attributes.headingTextTransform,
	};
    return(
        <style>
            {`
                .style-one .main-heading:before {
                    background-color: ${shapeColor};
                }
                .style-one .main-heading:after {
                    background-color: ${shapeColor};
                }
                
                /* Sub Heading Styles */
                .dual-heading .sub-heading {
                    color: ${subHeadingColor};
                    ${subHeadingStyle.fontFamily ? `font-family: ${subHeadingStyle.fontFamily};` : ''}
                    ${subHeadingStyle.fontWeight ? `font-weight: ${subHeadingStyle.fontWeight};` : ''}
                    ${subHeadingStyle.textTransform ? `text-transform: ${subHeadingStyle.textTransform};` : ''}
                    font-size: ${attributes.subHeadingFontSizeDesktop || 18}px;
                    line-height: ${attributes.subHeadingLineHeightDesktop || 1.4};
                }
                
                /* Main Heading Styles */
                .dual-heading .main-heading {
                    color: ${headingColor};
                    ${headingStyle.fontFamily ? `font-family: ${headingStyle.fontFamily};` : ''}
                    ${headingStyle.fontWeight ? `font-weight: ${headingStyle.fontWeight};` : ''}
                    ${headingStyle.textTransform ? `text-transform: ${headingStyle.textTransform};` : ''}
                    font-size: ${attributes.headingFontSizeDesktop || 40}px;
                    line-height: ${attributes.headingLineHeightDesktop || 1.2};
                }
                
                /* Tablet Styles */
                @media (max-width: 1024px) {
                    .dual-heading .sub-heading {
                        font-size: ${attributes.subHeadingFontSizeTablet || 16}px;
                        line-height: ${attributes.subHeadingLineHeightTablet || 1.3};
                    }
                    .dual-heading .main-heading {
                        font-size: ${attributes.headingFontSizeTablet || 32}px;
                        line-height: ${attributes.headingLineHeightTablet || 1.3};
                    }
                }

                /* Mobile Styles */
                @media (max-width: 767px) {
                    .dual-heading .sub-heading {
                        font-size: ${attributes.subHeadingFontSizeMobile || 14}px;
                        line-height: ${attributes.subHeadingLineHeightMobile || 1.2};
                    }
                    .dual-heading .main-heading {
                        font-size: ${attributes.headingFontSizeMobile || 24}px;
                        line-height: ${attributes.headingLineHeightMobile || 1.4};
                    }
                }
            `}
        </style>
    );
}
export default Style;