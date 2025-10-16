import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { BaseControl, Button, TextControl, SelectControl, Tooltip } from '@wordpress/components';
import { link, linkOff } from '@wordpress/icons';
import DeviceSwitcher from '../Components/DeviceSwitcher';

const DimensionControl = ({ label, value, onChange }) => {
    const [device, setDevice] = useState('desktop');

    // Device switcher handled by shared component

	const current = value[device];

	const handleChange = (side, val) => {
		const newValue = { ...value };
		if (current.isLinked) {
			Object.keys(newValue[device]).forEach((key) => {
				if (['top', 'right', 'bottom', 'left'].includes(key)) {
					newValue[device][key] = val;
				}
			});
		} else {
			newValue[device][side] = val;
		}
		onChange(newValue);
	};

	const toggleLink = () => {
		const newValue = { ...value };
		newValue[device].isLinked = !current.isLinked;
		onChange(newValue);
	};

	const handleUnitChange = (unit) => {
		const newValue = { ...value };
		newValue[device].unit = unit;
		onChange(newValue);
	};

	return (
		<div className="responsive-dimension-control">
			<BaseControl label={label}>
                <DeviceSwitcher device={device} onChange={setDevice} syncPreview className="device-switcher responsive-toggle" />

				<div className="dimension-inputs">
					{['top', 'right', 'bottom', 'left'].map((side) => (
						<TextControl
							key={side}
							value={current[side] || ''}
							type="number"
							onChange={(val) => handleChange(side, val)}
							className={`dimension-input dimension-${side}`}
							label={side.toUpperCase()}
						/>
					))}

                    <Tooltip text={current.isLinked ? 'Unlink values' : 'Link values'}>
                        <Button
                            icon={current.isLinked ? link : linkOff}
                            isPressed={current.isLinked}
                            onClick={toggleLink}
                            className="link-toggle"
                        />
                    </Tooltip>

					<SelectControl
						value={current.unit}
						options={[
							{ label: 'px', value: 'px' },
							{ label: '%', value: '%' },
							{ label: 'em', value: 'em' },
						]}
						onChange={handleUnitChange}
						className="unit-selector"
					/>
				</div>
			</BaseControl>

			<style jsx>{`
				.responsive-dimension-control {
					margin-bottom: 15px;
				}
				.device-switcher {
					margin-bottom: 10px;
				}
				.dimension-inputs {
					display: flex;
					align-items: center;
					gap: 5px;
				}
				.dimension-input {
					width: 65px;
				}
				.link-toggle {
					margin-left: 4px;
				}
				.unit-selector {
					width: 30px;
					margin-left: auto;
				}
			`}</style>
		</div>
	);
};

export default DimensionControl;
