import { __ } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

function Toolbar({ attributes, setAttributes }) {
    const { styleType } = attributes;
    return(
        <>
            <BlockControls>
				<ToolbarGroup label={__('Style', 'dual-heading-block')}>
					<ToolbarButton
						isPressed={styleType === 'style1'}
						label={__('Style 1', 'dual-heading-block')}
						icon="editor-textcolor"
						name="style1"
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
        </>
    )
}
export default Toolbar;
