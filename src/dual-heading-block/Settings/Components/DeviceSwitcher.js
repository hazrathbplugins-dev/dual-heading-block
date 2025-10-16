import { __ } from '@wordpress/i18n';
import { Button, ButtonGroup } from '@wordpress/components';
import { desktop, tablet, mobile } from '@wordpress/icons';
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

const editorDeviceMap = {
    desktop: 'Desktop',
    tablet: 'Tablet',
    mobile: 'Mobile',
};

const reverseEditorDeviceMap = {
    Desktop: 'desktop',
    Tablet: 'tablet',
    Mobile: 'mobile',
};

/**
 * Reusable responsive device switcher for controls.
 * Props:
 * - device: current device ('desktop' | 'tablet' | 'mobile')
 * - onChange: (newDevice) => void
 * - syncPreview: boolean (sync with WP editor preview device)
 * - className: optional className for the ButtonGroup
 */
export default function DeviceSwitcher({ device, onChange, syncPreview = false, className }) {
    const currentPreviewDevice = useSelect(select => {
        if (!syncPreview) return null;
        const store = select('core/edit-post');
        return store?.__experimentalGetPreviewDeviceType?.() || null;
    }, [syncPreview]);

    const { __experimentalSetPreviewDeviceType } = useDispatch('core/edit-post');

    useEffect(() => {
        if (!syncPreview || !currentPreviewDevice) return;
        const mapped = reverseEditorDeviceMap[currentPreviewDevice] || 'desktop';
        if (mapped !== device) {
            onChange(mapped);
        }
    }, [currentPreviewDevice]);

    const handleClick = (newDevice) => {
        onChange(newDevice);
        if (syncPreview && __experimentalSetPreviewDeviceType) {
            __experimentalSetPreviewDeviceType(editorDeviceMap[newDevice]);
        }
    };

    return (
        <ButtonGroup className={className || 'responsive-toggle'}>
            <Button
                icon={desktop}
                isPressed={device === 'desktop'}
                onClick={() => handleClick('desktop')}
                label={__('Desktop', 'dual-heading-block')}
            />
            <Button
                icon={tablet}
                isPressed={device === 'tablet'}
                onClick={() => handleClick('tablet')}
                label={__('Tablet', 'dual-heading-block')}
            />
            <Button
                icon={mobile}
                isPressed={device === 'mobile'}
                onClick={() => handleClick('mobile')}
                label={__('Mobile', 'dual-heading-block')}
            />
        </ButtonGroup>
    );
}