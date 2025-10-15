import { __ } from '@wordpress/i18n';
import {
	Button,
	Modal,
	SelectControl,
	RangeControl,
	PanelRow,
	Flex,
	FlexItem,
	ButtonGroup,
	Icon,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { desktop, tablet, mobile } from '@wordpress/icons';

export const TypographyControl = ({ attributes, setAttributes, prefix }) => {
	const [isOpen, setOpen] = useState(false);
	const [device, setDevice] = useState('desktop');

	// Helper to build keys like headingFontSizeDesktop
	const getKey = (key) => {
		// For responsive attributes (FontSize, LineHeight)
		if (key === 'FontSize' || key === 'LineHeight') {
			// Capitalize first letter of device name
			const deviceCapitalized = device.charAt(0).toUpperCase() + device.slice(1);
			return `${prefix}${key}${deviceCapitalized}`;
		}
		// Non-responsive attributes
		return `${prefix}${key.charAt(0).toUpperCase() + key.slice(1)}`;
	};

	const getAttr = (key) => attributes[getKey(key)];
	const updateAttr = (key, value) => setAttributes({ [getKey(key)]: value });

	// Get all values
	const fontFamily = getAttr('FontFamily');
	const fontSize = getAttr('FontSize');
	const fontWeight = getAttr('FontWeight');
	const textTransform = getAttr('TextTransform');
	const lineHeight = getAttr('LineHeight');

	// Reset function (per-device for responsive properties)
	const resetTypography = () => {
		// Default values based on prefix (heading or subHeading)
		const defaults = {
			heading: {
				FontFamily: '',
				FontWeight: '700',
				TextTransform: 'none',
				FontSizeDesktop: 40,
				FontSizeTablet: 28,
				FontSizeMobile: 22,
				LineHeightDesktop: 1.1,
				LineHeightTablet: 1.2,
				LineHeightMobile: 1.3
			},
			subHeading: {
				FontFamily: '',
				FontWeight: '400',
				TextTransform: 'none',
				FontSizeDesktop: 16,
				FontSizeTablet: 14,
				FontSizeMobile: 12,
				LineHeightDesktop: 1.5,
				LineHeightTablet: 1.6,
				LineHeightMobile: 1.7
			}
		};

		// Get the appropriate defaults based on the prefix
		const typeDefaults = defaults[prefix] || defaults.heading;
		
		// Create an object with all the attributes to reset
		const resetAttributes = {};
		
		// Set all attributes to their default values
		Object.keys(typeDefaults).forEach(key => {
			resetAttributes[`${prefix}${key}`] = typeDefaults[key];
		});
		
		// Apply all resets at once
		setAttributes(resetAttributes);
	};

	return (
		<div className="typography-control-wrapper">
			<div className="typography-btn-control">
				<p>{__('Typography', 'dual-heading-block')}</p>

				{/* Responsive Device Buttons */}
				<ButtonGroup className="responsive-toggle">
					<Button
						icon={<Icon icon={desktop} />}
						isPressed={device === 'desktop'}
						onClick={() => setDevice('desktop')}
						label={__('Desktop', 'dual-heading-block')}
					/>
					<Button
						icon={<Icon icon={tablet} />}
						isPressed={device === 'tablet'}
						onClick={() => setDevice('tablet')}
						label={__('Tablet', 'dual-heading-block')}
					/>
					<Button
						icon={<Icon icon={mobile} />}
						isPressed={device === 'mobile'}
						onClick={() => setDevice('mobile')}
						label={__('Mobile', 'dual-heading-block')}
					/>
				</ButtonGroup>

				<Button
					variant="secondary"
					onClick={() => setOpen(true)}
					icon="admin-customizer"
				/>
			</div>

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
							label={`${__('Font Size', 'dual-heading-block')} (${device})`}
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
							label={`${__('Line Height', 'dual-heading-block')} (${device})`}
							value={lineHeight}
							onChange={(val) => updateAttr('LineHeight', val)}
							min={0.8}
							max={3}
							step={0.1}
						/>
					</PanelRow>

					<Flex justify="space-between" style={{ marginTop: '20px' }}>
						<FlexItem>
							<Button
								isSecondary
								onClick={resetTypography}
								icon="image-rotate"
							>
								{__('Reset', 'dual-heading-block')}
							</Button>
						</FlexItem>

						<FlexItem>
							<Button isPrimary onClick={() => setOpen(false)}>
								{__('Apply & Close', 'dual-heading-block')}
							</Button>
						</FlexItem>
					</Flex>
				</Modal>
			)}
		</div>
	);
};
