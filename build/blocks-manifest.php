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
			)
		),
		'textdomain' => 'dual-heading-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
