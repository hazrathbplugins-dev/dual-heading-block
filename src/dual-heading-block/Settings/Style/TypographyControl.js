import { __ } from '@wordpress/i18n';
import {
	Button,
	Modal,
	SelectControl,
	RangeControl,
	PanelRow,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { FontSize } from '@wordpress/block-editor';

export const TypographyControl = ({ attributes, setAttributes, prefix }) => {
	const [isOpen, setOpen] = useState(false);

	// dynamic prefix-based attributes, e.g. headingFontFamily, headingFontSize
	const {
		[`${prefix}FontFamily`]: fontFamily,
		[`${prefix}FontSize`]: fontSize,
		[`${prefix}FontWeight`]: fontWeight,
		[`${prefix}TextTransform`]: textTransform,
		[`${prefix}LineHeight`]: lineHeight,
	} = attributes;

	// helper to update attribute dynamically
	const updateAttr = (key, val) => {
		setAttributes({ [`${prefix}${key}`]: val });
	};

	return (
		<div className="typography-control-wrapper">
			<Button
				variant="secondary"
				onClick={() => setOpen(true)}
				icon="editor-textcolor"
			>
				{__('Typography Settings', 'dual-heading-block')}
			</Button>

			{isOpen && (
				<Modal
					title={__('Typography Settings', 'dual-heading-block')}
					onRequestClose={() => setOpen(false)}
					className="typography-modal"
				>
					<PanelRow>
						<SelectControl
							label={__('Font Family', 'dual-heading-block')}
							value={fontFamily}
							options={[
								{ label: 'Default', value: '' },
								{ label: 'Roboto', value: 'Roboto' },
								{ label: 'Open Sans', value: 'Open Sans' },
								{ label: 'Poppins', value: 'Poppins' },
								{ label: 'Lato', value: 'Lato' },
							]}
							onChange={(val) => updateAttr('FontFamily', val)}
						/>
					</PanelRow>

					<PanelRow>
						<RangeControl
							label={__('Font Size (px)', 'dual-heading-block')}
							value={fontSize}
							onChange={(val) => updateAttr('FontSize', val)}
							min={10}
							max={100}
						/>
					</PanelRow>

					<PanelRow>
						<SelectControl
							label={__('Font Weight', 'dual-heading-block')}
							value={fontWeight}
							options={[
								{ label: 'Default', value: '' },
								{ label: 'Normal', value: '400' },
								{ label: 'Medium', value: '500' },
								{ label: 'Bold', value: '700' },
							]}
							onChange={(val) => updateAttr('FontWeight', val)}
						/>
					</PanelRow>

					<PanelRow>
						<SelectControl
							label={__('Text Transform', 'dual-heading-block')}
							value={textTransform}
							options={[
								{ label: 'None', value: 'none' },
								{ label: 'Uppercase', value: 'uppercase' },
								{ label: 'Lowercase', value: 'lowercase' },
								{ label: 'Capitalize', value: 'capitalize' },
							]}
							onChange={(val) => updateAttr('TextTransform', val)}
						/>
					</PanelRow>

					<PanelRow>
						<RangeControl
							label={__('Line Height', 'dual-heading-block')}
							value={lineHeight}
							onChange={(val) => updateAttr('LineHeight', val)}
							min={0.8}
							max={3}
							step={0.1}
						/>
					</PanelRow>

					<Button
						isPrimary
						onClick={() => setOpen(false)}
						style={{ marginTop: '15px' }}
					>
						{__('Apply & Close', 'dual-heading-block')}
					</Button>
				</Modal>
			)}
		</div>
	);
};
