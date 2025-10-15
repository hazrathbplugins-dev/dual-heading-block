import { useBlockProps, RichText } from '@wordpress/block-editor';
import Style from './Style';

export default function save({ attributes }) {
	const {
		subHeadingText,
		headingText,
		descriptionText,
		headingIcon,
		subHeadingTag,
		headingTag,
		shapeColor,
		styleType,
		alignment,
		subHeadingColor,
		headingColor,
		subHeadingFontFamily,
		subHeadingFontWeight,
		subHeadingTextTransform,
		subHeadingFontSizeDesktop,
		subHeadingLineHeightDesktop,
		subHeadingFontSizeTablet,
		subHeadingLineHeightTablet,
		subHeadingFontSizeMobile,
		subHeadingLineHeightMobile,
		headingFontFamily,
		headingFontWeight,
		headingTextTransform,
		headingFontSizeDesktop,
		headingLineHeightDesktop,
		headingFontSizeTablet,
		headingLineHeightTablet,
		headingFontSizeMobile,
		headingLineHeightMobile,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `dual-heading ${styleType}`,
		style: { textAlign: alignment || 'center' },
	});

	return (
		<>
			{/* Inline style for typography & responsive */}
			<Style attributes={attributes} />

			<div {...blockProps}>
				{/* Style 1 */}
				{styleType === 'style1' && (
					<div className="style-one">
						{/* Sub Heading */}
						<RichText.Content
							tagName={subHeadingTag}
							value={subHeadingText}
							className="sub-heading"
						/>
						{/* Main Heading */}
						<RichText.Content
							tagName={headingTag}
							value={headingText}
							className="main-heading"
						/>
						
					</div>
				)}

				{/* Style 2 */}
				{styleType === 'style2' && (
					<>
						<p>{headingIcon}</p>
						<RichText.Content
							tagName={subHeadingTag}
							value={subHeadingText}
							className="sub-heading"
							style={{
								color: subHeadingColor,
								fontFamily: subHeadingFontFamily,
								fontWeight: subHeadingFontWeight,
								textTransform: subHeadingTextTransform,
								fontSize: `${subHeadingFontSizeDesktop || 18}px`,
								lineHeight: subHeadingLineHeightDesktop || 1.4,
							}}
						/>
						<RichText.Content
							tagName={headingTag}
							value={headingText}
							className="main-heading"
							style={{
								color: headingColor,
								fontFamily: headingFontFamily,
								fontWeight: headingFontWeight,
								textTransform: headingTextTransform,
								fontSize: `${headingFontSizeDesktop || 40}px`,
								lineHeight: headingLineHeightDesktop || 1.2,
							}}
						/>
					</>
				)}

				{/* Style 3 */}
				{styleType === 'style3' && (
					<RichText.Content
						tagName="p"
						value={descriptionText}
					/>
				)}
			</div>
		</>
		
	);
}
