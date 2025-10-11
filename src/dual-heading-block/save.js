import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { subHeadingText, headingText, descriptionText, headingIcon, subHeadingTag, headingTag, shapeColor, styleType, alignment, subHeadingColor, headingColor } = attributes;

	const blockProps = useBlockProps.save({
		className: `dual-heading ${styleType}`,
		style: { textAlign: alignment || 'center' }
	});
	
	return (
		<>
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
			<div {...blockProps}>
				{styleType === 'style2' && (
					<p>{headingIcon}</p>
				)}
				{styleType === 'style1' && (
					<div {...blockProps}>
						<div className="style-one">
							<RichText.Content
								tagName={subHeadingTag}
								value={subHeadingText}
								placeholder="Sub heading..."
								style={{ color: subHeadingColor }}
							/>
							<RichText.Content
								tagName={headingTag}
								value={headingText}
								className="main-heading"
								placeholder="Heading..."
								style={{ color: headingColor }}
							/>
						</div>
					</div>
				)}
				{styleType === 'style3' && (
					<RichText.Content tagName="p" value={descriptionText} />
				)}
			</div>
		</>
	);
}