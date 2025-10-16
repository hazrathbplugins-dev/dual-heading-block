<?php
// This file is generated. Do not modify it manually.
return array(
	'dual-heading-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/dual-heading-block',
		'version' => '0.1.0',
		'title' => 'Dual Heading Block',
		'keywords' => array(
			'dual',
			'heading',
			'block',
			'title',
			'animated'
		),
		'category' => 'widgets',
		'icon' => 'heading',
		'description' => 'Create beautiful dual-style headings with full color, alignment, and typography control.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'background' => true,
				'gradients' => true,
				'text' => false
			),
			'align' => array(
				'left',
				'right',
				'full'
			)
		),
		'attributes' => array(
			'subHeadingText' => array(
				'type' => 'string',
				'default' => 'Type Sub Heading here'
			),
			'subHeadingTag' => array(
				'type' => 'string',
				'default' => 'span'
			),
			'headingText' => array(
				'type' => 'string',
				'default' => 'Type Heading here'
			),
			'descriptionText' => array(
				'type' => 'string',
				'default' => 'description'
			),
			'headingIcon' => array(
				'type' => 'string',
				'default' => 'picon'
			),
			'headingTag' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'styleType' => array(
				'type' => 'string',
				'default' => 'style1'
			),
			'alignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'subHeadingColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'headingColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'shapeColor' => array(
				'type' => 'string',
				'default' => '#b80000'
			),
			'headingFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'headingFontSizeDesktop' => array(
				'type' => 'number',
				'default' => 40
			),
			'headingFontSizeTablet' => array(
				'type' => 'number',
				'default' => 28
			),
			'headingFontSizeMobile' => array(
				'type' => 'number',
				'default' => 22
			),
			'headingFontWeight' => array(
				'type' => 'string',
				'default' => '700'
			),
			'headingTextTransform' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'headingLineHeightDesktop' => array(
				'type' => 'number',
				'default' => 1.1
			),
			'headingLineHeightTablet' => array(
				'type' => 'number',
				'default' => 1.2
			),
			'headingLineHeightMobile' => array(
				'type' => 'number',
				'default' => 1.3
			),
			'subHeadingFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'subHeadingFontSizeDesktop' => array(
				'type' => 'number',
				'default' => 16
			),
			'subHeadingFontSizeTablet' => array(
				'type' => 'number',
				'default' => 14
			),
			'subHeadingFontSizeMobile' => array(
				'type' => 'number',
				'default' => 12
			),
			'subHeadingFontWeight' => array(
				'type' => 'string',
				'default' => '400'
			),
			'subHeadingTextTransform' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'subHeadingLineHeight' => array(
				'type' => 'number',
				'default' => 1.5
			),
			'subHeadingLineHeightTablet' => array(
				'type' => 'number',
				'default' => 1.6
			),
			'subHeadingLineHeightMobile' => array(
				'type' => 'number',
				'default' => 1.7
			),
			'headingPadding' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => '0',
						'right' => '0',
						'bottom' => '0',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => true
					),
					'tablet' => array(
						'top' => '0',
						'right' => '0',
						'bottom' => '0',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => true
					),
					'mobile' => array(
						'top' => '0',
						'right' => '0',
						'bottom' => '0',
						'left' => '0',
						'unit' => '0',
						'isLinked' => true
					)
				)
			),
			'headingMargin' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => false
					),
					'tablet' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => false
					),
					'mobile' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => false
					)
				)
			)
		),
		'textdomain' => 'dual-heading-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
