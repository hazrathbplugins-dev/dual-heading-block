import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ColorPalette } from '@wordpress/components';

function StyleControls({ attributes, setAttributes }) {
    const { shapeColor, subHeadingColor, headingColor } = attributes;
    return(
        <>
            <InspectorControls group="styles">
				<PanelBody title={__('Sub Heading', 'dual-heading-block')} initialOpen={true}>
					<p>{__('Sub Heading Color', 'dual-heading-block')}</p>
					<ColorPalette
						value={subHeadingColor}
						onChange={(color) => setAttributes({ subHeadingColor: color })}
					/>
				</PanelBody>
				<PanelBody title={__('Heading', 'dual-heading-block')} initialOpen={true}>
					<p>{__('Heading Color', 'dual-heading-block')}</p>
					<ColorPalette
						value={headingColor}
						onChange={(color) => setAttributes({ headingColor: color })}
					/>
				</PanelBody>
				<PanelBody title={__('Advanced', 'dual-heading-block')} initialOpen={true}>
					<p>{__('Before Shape Color', 'dual-heading-block')}</p>
					<ColorPalette
						value={shapeColor}
						onChange={(color) => setAttributes({ shapeColor: color })}
					/>
				</PanelBody>
			</InspectorControls>
        </>
    )
}
export default StyleControls;