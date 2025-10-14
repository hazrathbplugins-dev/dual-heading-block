import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ColorPalette } from '@wordpress/components';
import { TypographyControl } from './TypographyControl';

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
					<TypographyControl attributes={attributes} setAttributes={setAttributes}  prefix="subHeading"/>
				</PanelBody>
				<PanelBody title={__('Heading', 'dual-heading-block')} initialOpen={true}>
					<p>{__('Heading Color', 'dual-heading-block')}</p>
					<ColorPalette
						value={headingColor}
						onChange={(color) => setAttributes({ headingColor: color })}
					/>
					<TypographyControl attributes={attributes} setAttributes={setAttributes} prefix="heading" />
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