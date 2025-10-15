import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import Toolbar from './Settings/General/Toolbar';
import Settings from './Settings/General/Settings';
import StyleControls from './Settings/Style/StyleControls';
import './editor.scss';
import Style from './Style';

export default function Edit({ attributes, setAttributes }) {
	const { subHeadingText, headingText, descriptionText, headingIcon, subHeadingTag, headingTag, styleType, shapeColor, alignment, subHeadingColor, headingColor } = attributes;
	console.log(attributes);

	const blockProps = useBlockProps({
		className: `dual-heading ${styleType}`,
		style: { textAlign: alignment || 'center' }
	});
	
	// We'll handle responsive font sizes and line heights in the style tag
	
	return (
		<>
			{/* Toolbar Controls */}
			<Toolbar attributes={attributes} setAttributes={setAttributes} />
			{/* Settings Controls */}
			<Settings attributes={attributes} setAttributes={setAttributes} />
			{/* Style Controls */}
			<StyleControls attributes={attributes} setAttributes={setAttributes} />

			<Style attributes={attributes} />

			{styleType === 'style1' && (
				<div {...blockProps}>
					<div className="style-one">
						<RichText
							tagName={subHeadingTag}
							value={subHeadingText}
							onChange={(val) => setAttributes({ subHeadingText: val })}
							placeholder="Sub heading..."
							className="sub-heading"
						/>
						<RichText
							tagName={headingTag}
							value={headingText}
							className="main-heading"
							onChange={(val) => setAttributes({ headingText: val })}
							placeholder="Heading..."
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
