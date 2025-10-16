import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { TypographyControl } from './TypographyControl';
import ColorControl from './ColorControl';
import DimensionControl from './DimensionControl';

function StyleControls({ attributes, setAttributes }) {
    const { shapeColor, subHeadingColor, headingColor, headingPadding, headingMargin } = attributes;
    return(
        <>
            <InspectorControls group="styles">
				<PanelBody title={__('Sub Heading', 'dual-heading-block')} initialOpen={true}>
					<TypographyControl attributes={attributes} setAttributes={setAttributes}  prefix="subHeading"/>
					<ColorControl 
						label={__('Color', 'dual-heading-block')}
						value={subHeadingColor}
						onChange={(color) => setAttributes({ subHeadingColor: color })}
						defaultColor="#222222"
						className="color-picker-control"
					/>
				</PanelBody>
				<PanelBody title={__('Heading', 'dual-heading-block')} initialOpen={true}>
					<TypographyControl attributes={attributes} setAttributes={setAttributes} prefix="heading" />
					<ColorControl 
						label={__('Color', 'dual-heading-block')}
						value={headingColor}
						onChange={(color) => setAttributes({ headingColor: color })}
						defaultColor="#222222"
						className="color-picker-control"
					/>
					<DimensionControl
						label="Padding"
						value={headingPadding}
						onChange={(newVal) => setAttributes({ headingPadding: newVal })}
					/>
					<DimensionControl
						label="Margin"
						value={headingMargin}
						onChange={(newVal) => setAttributes({ headingMargin: newVal })}
					/>
				</PanelBody>
				<PanelBody title={__('Advanced', 'dual-heading-block')} initialOpen={true}>
					<ColorControl 
						label={__('Shape Color', 'dual-heading-block')}
						value={shapeColor}
						onChange={(color) => setAttributes({ shapeColor: color })}
						defaultColor="#BE3737"
						className="color-picker-control"
					/>
				</PanelBody>
			</InspectorControls>
        </>
    )
}
export default StyleControls;