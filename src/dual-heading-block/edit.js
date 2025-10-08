import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, InspectorControls, RichText } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, PanelBody, SelectControl, ColorPalette } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { subHeadingText, headingText, descriptionText, headingIcon, subHeadingTag, headingTag, styleType, alignment } = attributes;
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
						name = "style1"
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
					<p>{__('First Heading Color', 'dual-heading-block')}</p>
					<ColorPalette
						// value={colorOne}
						// onChange={(color) => setAttributes({ colorOne: color })}
					/>

					<p>{__('Second Heading Color', 'dual-heading-block')}</p>
					<ColorPalette
						// value={colorTwo}
						// onChange={(color) => setAttributes({ colorTwo: color })}
					/>
				</PanelBody>
			</InspectorControls>
			{styleType === 'style1' && (
				<div {...blockProps}>
					<div class="one">
						<h1>Style One</h1>
					</div>
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
