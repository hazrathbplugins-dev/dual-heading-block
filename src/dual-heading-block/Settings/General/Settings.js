import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ColorPalette, TextControl } from '@wordpress/components';
function Settings( { attributes, setAttributes } ) {
	const { subHeadingText, headingText, descriptionText, subHeadingTag, headingTag, alignment } = attributes;
    {/* Inspector Settings */}
    return(
        <>
            <InspectorControls>
                <PanelBody title={__('Settings', 'dual-heading-block')} initialOpen={true}>

                    <TextControl
                        label={__('Sub Heading', 'dual-heading-block')}
                        value={subHeadingText}
                        onChange={(value) => setAttributes({ subHeadingText: value })}
                        placeholder={__('Type your sub heading...', 'dual-heading-block')}
                    />

                    <TextControl
                        label={__('Heading', 'dual-heading-block')}
                        value={headingText}
                        onChange={(value) => setAttributes({ headingText: value })}
                        placeholder={__('Type your main heading...', 'dual-heading-block')}
                    />

                    <TextControl
                        label={__('Description (for Style 3)', 'dual-heading-block')}
                        value={descriptionText}
                        onChange={(value) => setAttributes({ descriptionText: value })}
                        placeholder={__('Only for style 3', 'dual-heading-block')}
                    />
                    <SelectControl
                        label={__('Alignment', 'dual-heading-block')}
                        value={alignment}
                        options={[
                            { label: 'Left', value: 'left' },
                            { label: 'Center', value: 'center' },
                            { label: 'Right', value: 'right' },
                        ]}
                        onChange={(value) => setAttributes({ alignment: value })}
                    />
                    <SelectControl
                        label={__('Sub Heading HTML Tag', 'dual-heading-block')}
                        value={subHeadingTag}
                        options={[
                            { label: 'H1', value: 'h1' },
                            { label: 'H2', value: 'h2' },
                            { label: 'H3', value: 'h3' },
                            { label: 'H4', value: 'h4' },
                            { label: 'H5', value: 'h5' },
                            { label: 'H6', value: 'h6' },
                            { label: 'P', value: 'p' },
                            { label: 'SPAN', value: 'span' },
                        ]}
                        onChange={(value) => setAttributes({ subHeadingTag: value })}
                    />
                    <SelectControl
                        label={__('Heading HTML Tag', 'dual-heading-block')}
                        value={headingTag}
                        options={[
                            { label: 'H1', value: 'h1' },
                            { label: 'H2', value: 'h2' },
                            { label: 'H3', value: 'h3' },
                            { label: 'H4', value: 'h4' },
                            { label: 'H5', value: 'h5' },
                            { label: 'H6', value: 'h6' },
                        ]}
                        onChange={(value) => setAttributes({ headingTag: value })}
                    />
                    <p>{__('First Heading Color', 'dual-heading-block')}</p>
                    <ColorPalette
                        // value={colorOne}
                        // onChange={(color) => setAttributes({ colorOne: color })}
                    />

                    <p>{__('Second Heading Color', 'dual-heading-block')}</p>
                    <ColorPalette
                        // value={colorTwo}
                        // onChange={(color) => setAttributes({ colorTwo: color })}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    )
}
export default Settings;