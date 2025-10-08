import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { subHeadingText, headingText, descriptionText, headingIcon, subHeadingTag, headingTag, styleType, alignment } = attributes;

	const blockProps = useBlockProps.save({
		className: `dual-heading ${styleType}`,
		style: { textAlign: alignment || 'center' }
	});

	return (
		<div {...blockProps}>
			{styleType === 'style2' && (
				<p>{headingIcon}</p>
			)}
			<RichText.Content
				tagName={subHeadingTag}
				value={subHeadingText}
			/>
			{styleType === 'style1' && <RichText.Content
				tagName={headingTag}
				value={headingText}
			/>}
			{styleType === 'style3' && (
				<RichText.Content tagName="p" value={descriptionText} />
			)}
		</div>
	);
}