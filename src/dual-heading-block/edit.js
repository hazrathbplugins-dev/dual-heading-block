import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, InspectorControls, RichText } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, PanelBody, SelectControl, ColorPalette, TextControl, TabPanel } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { subHeadingText, headingText, descriptionText, headingIcon, subHeadingTag, headingTag, styleType, shapeColor, alignment, subHeadingColor, headingColor } = attributes;
	console.log(attributes);

	const blockProps = useBlockProps({
		className: `dual-heading ${styleType}`,
		style: { textAlign: alignment || 'center' }
	});
	return (
		<>
			{/* Toolbar Controls */}
			<BlockControls>
				<ToolbarGroup label={__('Style', 'dual-heading-block')}>
					<ToolbarButton
						isPressed={styleType === 'style1'}
						label={__('Style 1', 'dual-heading-block')}
						icon="editor-textcolor"
						name="style1"
						onClick={() => setAttributes({ styleType: 'style1' })}
					>
						{__('Style 1', 'dual-heading-block')}
					</ToolbarButton>
					<ToolbarButton
						isPressed={styleType === 'style2'}
						label={__('Style 2', 'dual-heading-block')}
						icon="format-bold"
						name="style2"
						onClick={() => setAttributes({ styleType: 'style2' })}
					>
						{__('Style 2', 'dual-heading-block')}
					</ToolbarButton>
					<ToolbarButton
						isPressed={styleType === 'style3'}
						onClick={() => setAttributes({ styleType: 'style3' })}
					>
						{__('Style 3', 'dual-heading-block')}
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>

			{/* Inspector Settings */}
			<InspectorControls>
				<PanelBody title={__('Settings', 'dual-heading-block')} initialOpen={true}>

					<TextControl
						label={__('Sub Heading', 'dual-heading-block')}
						value={subHeadingText}
						onChange={(value) => setAttributes({ subHeadingText: value })}
						placeholder={__('Type your sub heading...', 'dual-heading-block')}
					/>

					<TextControl
						label={__('Heading', 'dual-heading-block')}
						value={headingText}
						onChange={(value) => setAttributes({ headingText: value })}
						placeholder={__('Type your main heading...', 'dual-heading-block')}
					/>

					<TextControl
						label={__('Description (for Style 3)', 'dual-heading-block')}
						value={descriptionText}
						onChange={(value) => setAttributes({ descriptionText: value })}
						placeholder={__('Only for style 3', 'dual-heading-block')}
					/>
					<SelectControl
						label={__('Alignment', 'dual-heading-block')}
						value={alignment}
						options={[
							{ label: 'Left', value: 'left' },
							{ label: 'Center', value: 'center' },
							{ label: 'Right', value: 'right' },
						]}
						onChange={(value) => setAttributes({ alignment: value })}
					/>
					<SelectControl
						label={__('Sub Heading HTML Tag', 'dual-heading-block')}
						value={subHeadingTag}
						options={[
							{ label: 'H1', value: 'h1' },
							{ label: 'H2', value: 'h2' },
							{ label: 'H3', value: 'h3' },
							{ label: 'H4', value: 'h4' },
							{ label: 'H5', value: 'h5' },
							{ label: 'H6', value: 'h6' },
							{ label: 'P', value: 'p' },
							{ label: 'SPAN', value: 'span' },
						]}
						onChange={(value) => setAttributes({ subHeadingTag: value })}
					/>
					<SelectControl
						label={__('Heading HTML Tag', 'dual-heading-block')}
						value={headingTag}
						options={[
							{ label: 'H1', value: 'h1' },
							{ label: 'H2', value: 'h2' },
							{ label: 'H3', value: 'h3' },
							{ label: 'H4', value: 'h4' },
							{ label: 'H5', value: 'h5' },
							{ label: 'H6', value: 'h6' },
						]}
						onChange={(value) => setAttributes({ headingTag: value })}
					/>
				</PanelBody>
			</InspectorControls>
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
			<style>
				{`
					.style-one .main-heading:before {
						background-color: ${shapeColor};
					}
					.style-one .main-heading:after {
						background-color: ${shapeColor};
					}
				`}
			</style>
			{styleType === 'style1' && (
				<div {...blockProps}>
					<div className="style-one">
						<RichText
							tagName={subHeadingTag}
							value={subHeadingText}
							onChange={(val) => setAttributes({ subHeadingText: val })}
							placeholder="Sub heading..."
							style={{ color: subHeadingColor }}
						/>
						<RichText
							tagName={headingTag}
							value={headingText}
							className="main-heading"
							onChange={(val) => setAttributes({ headingText: val })}
							placeholder="Heading..."
							style={{ color: headingColor }}
						/>
					</div>
				</div>
			)}
			{styleType === 'style2' && (
				<div {...blockProps}>
					<p>{headingIcon}</p>
					<RichText
						tagName={subHeadingTag}
						value={subHeadingText}
						onChange={(val) => setAttributes({ subHeadingText: val })}
						placeholder="Sub heading..."
					/>
					<RichText
						tagName={headingTag}
						value={headingText}
						onChange={(val) => setAttributes({ headingText: val })}
						placeholder="Heading..."
					/>
				</div>
			)}
			{/* Only show description for style3 */}
			{styleType === 'style3' && (
				<div {...blockProps}>
					<RichText
						tagName="p"
						value={descriptionText}
						onChange={(val) => setAttributes({ descriptionText: val })}
						placeholder="Description"
					/>
				</div>
			)}
		</>

	);
}
