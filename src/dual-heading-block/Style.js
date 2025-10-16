function Style({ attributes }) {
    const { shapeColor, subHeadingColor, headingColor, headingPadding, headingMargin } = attributes;

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

    // Helpers to format padding values with unit, handling both numbers and values with unit suffix
    const formatSide = (val, unit) => {
        if (val === undefined || val === null || val === '') return `0${unit || 'px'}`;
        const v = String(val).trim();
        // If already includes a unit, return as-is
        if (/\d\s*(px|%|em|rem|vh|vw)$/.test(v)) return v;
        return `${v}${unit || 'px'}`;
    };

    const padDesktop = headingPadding?.desktop || {};
    const padTablet = headingPadding?.tablet || {};
    const padMobile = headingPadding?.mobile || {};

    const unitDesktop = padDesktop.unit || 'px';
    const unitTablet = padTablet.unit || unitDesktop || 'px';
    const unitMobile = padMobile.unit || unitTablet || 'px';

    const paddingDesktop = [
        formatSide(padDesktop.top, unitDesktop),
        formatSide(padDesktop.right, unitDesktop),
        formatSide(padDesktop.bottom, unitDesktop),
        formatSide(padDesktop.left, unitDesktop),
    ].join(' ');

    const paddingTablet = [
        formatSide(padTablet.top, unitTablet),
        formatSide(padTablet.right, unitTablet),
        formatSide(padTablet.bottom, unitTablet),
        formatSide(padTablet.left, unitTablet),
    ].join(' ');

    const paddingMobile = [
        formatSide(padMobile.top, unitMobile),
        formatSide(padMobile.right, unitMobile),
        formatSide(padMobile.bottom, unitMobile),
        formatSide(padMobile.left, unitMobile),
    ].join(' ');

    // Heading margin per device
    const marDesktop = headingMargin?.desktop || {};
    const marTablet = headingMargin?.tablet || {};
    const marMobile = headingMargin?.mobile || {};

    const unitMarDesktop = marDesktop.unit || 'px';
    const unitMarTablet = marTablet.unit || unitMarDesktop || 'px';
    const unitMarMobile = marMobile.unit || unitMarTablet || 'px';

    const marginDesktop = [
        formatSide(marDesktop.top, unitMarDesktop),
        formatSide(marDesktop.right, unitMarDesktop),
        formatSide(marDesktop.bottom, unitMarDesktop),
        formatSide(marDesktop.left, unitMarDesktop),
    ].join(' ');

    const marginTablet = [
        formatSide(marTablet.top, unitMarTablet),
        formatSide(marTablet.right, unitMarTablet),
        formatSide(marTablet.bottom, unitMarTablet),
        formatSide(marTablet.left, unitMarTablet),
    ].join(' ');

    const marginMobile = [
        formatSide(marMobile.top, unitMarMobile),
        formatSide(marMobile.right, unitMarMobile),
        formatSide(marMobile.bottom, unitMarMobile),
        formatSide(marMobile.left, unitMarMobile),
    ].join(' ');

    return (
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
                    line-height: ${attributes.subHeadingLineHeight || 1.4};
                }

                /* Main Heading Styles */
                .dual-heading .main-heading {
                    color: ${headingColor};
                    ${headingStyle.fontFamily ? `font-family: ${headingStyle.fontFamily};` : ''}
                    ${headingStyle.fontWeight ? `font-weight: ${headingStyle.fontWeight};` : ''}
                    ${headingStyle.textTransform ? `text-transform: ${headingStyle.textTransform};` : ''}
                    font-size: ${attributes.headingFontSizeDesktop || 40}px;
                    line-height: ${attributes.headingLineHeightDesktop || 1.2};
                    padding: ${paddingDesktop};
                    margin: ${marginDesktop};
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
                        padding: ${paddingTablet};
                        margin: ${marginTablet};
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
                        padding: ${paddingMobile};
                        margin: ${marginMobile};
                    }
                }
            `}
        </style>
    );
}
export default Style;