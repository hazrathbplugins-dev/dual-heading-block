import { useState } from '@wordpress/element';
import { BaseControl, Button, Popover, ColorPicker } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const ColorControl = ({ label, value, onChange, defaultColor = '' }) => {
	const [isPickerOpen, setIsPickerOpen] = useState(false);
    const handleReset = () => {
		onChange(defaultColor); // Reset to default or empty
		setIsPickerOpen(false); // Close picker (optional)
	};

	return (
		<BaseControl label={label} className="custom-color-control">
			<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
				<Button
					onClick={() => setIsPickerOpen(!isPickerOpen)}
					style={{
						width: '36px',
						height: '36px',
						borderRadius: '50%',
						backgroundColor: value || '#000',
						border: '1px solid #ccc',
					}}
				/>
                <Button
                    isDestructive
                    isSmall
                    onClick={handleReset}
                    icon="image-rotate"
                >
                </Button>
			</div>

			{isPickerOpen && (
				<Popover
					position="bottom left"
					onFocusOutside={() => setIsPickerOpen(false)}
				>
					<div style={{ padding: '10px' }}>
						<ColorPicker
							color={value}
							onChangeComplete={(newColor) => onChange(newColor.hex)}
						/>
					</div>
				</Popover>
			)}
		</BaseControl>
	);
};

export default ColorControl;
