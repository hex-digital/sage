<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use StoutLogic\AcfBuilder\FieldsBuilder;

class HexDigitalButtons extends Block
{
    /**
     * The block name.
     *
     * @var string
     */
    public $name = 'Hex Digital Buttons';

    /**
     * The block description.
     *
     * @var string
     */
    public $description = 'A set of buttons';

    /**
     * The block category.
     *
     * @var string
     */
    public $category = 'hex-blocks';

    /**
     * The block icon.
     *
     * @var string|array
     */
    public $icon = array(
        'background' => '#fff',
        'foreground' => '#ff5043',
        'src' => 'embed-generic',
    );

    /**
     * The block keywords.
     *
     * @var array
     */
    public $keywords = ['button', 'buttons', 'links'];

    /**
     * The block post type allow list.
     *
     * @var array
     */
    public $post_types = [];

    /**
     * The parent block type allow list.
     *
     * @var array
     */
    public $parent = [];

    /**
     * The default block mode.
     *
     * @var string
     */
    public $mode = 'edit';

    /**
     * The default block alignment.
     *
     * @var string
     */
    public $align = '';

    /**
     * The default block text alignment.
     *
     * @var string
     */
    public $align_text = '';

    /**
     * The default block content alignment.
     *
     * @var string
     */
    public $align_content = '';

    /**
     * The supported block features.
     *
     * @var array
     */
    public $supports = [
        'align' => false,
        'align_text' => true,
        'align_content' => false,
        'full_height' => false,
        'anchor' => false,
        'mode' => true,
        'multiple' => true,
        'jsx' => true,
    ];

    /**
     * The block styles.
     *
     * @var array
     */
    public $styles = [    ];

    /**
     * The block preview example data.
     *
     * @var array
     */
    public $example = [];

    /**
     * Data to be passed to the block before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            'buttons' => $this->buttons(),
            'id' => $this->id(),
            'classes' => $this->classes(),
        ];
    }

    /**
     * The block field group.
     *
     * @return array
     */
    public function fields()
    {
        $buttons = new FieldsBuilder('buttons');

        $buttons
        ->addRepeater('buttons', [
            'min' => 1,
            'max' => 3,
            'button_label' => 'Add a Button',
            'layout' => 'block',
          ])
            ->addTab('Data')
                ->addText('title')
                ->addUrl('url')
                ->addCheckbox('new_tab', [
                    'label' => 'Target',
                    'choices' => [
                        true => 'Does this button open in a new tab?'
                    ],
                    'return_format' => 'value',
                ])
            ->addTab('Styling')
                ->addSelect('button_style', [
                    'label' => 'Button Style',
                    'instructions' => '',
                    'choices' => [
                        "btn-default" => "Default Button",
                        "btn-primary" => "Primary Button",
                        "btn-secondary" => "Secondary Button",
                    ],
                    'default_value' => "btn-default",
                    'allow_null' => 0,
                    'multiple' => 0,
                    'ui' => 1,
                    'ajax' => 1,
                    'return_format' => 'value',
                ])
                ->addSelect('button_size', [
                    'label' => 'Button Size',
                    'instructions' => '',
                    'choices' => [
                        'btn-xs' => 'Small',
                        'btn-normal' => 'Normal',
                        'btn-lg' => 'Large',
                    ],
                    'allow_null' => 0,
                    'multiple' => 0,
                    'ui' => 1,
                    'ajax' => 1,
                    'return_format' => 'value',
                ]);

        return $buttons->build();
    }

    /**
     * Return the items field.
     *
     * @return array
     */
    public function buttons() {
        return get_field('buttons');
    }

    /**
     * Return the ID
     *
     * @return string
     */
    public function id() {
        return $this->block->id;
    }

    /**
     * Return the classes
     *
     * @return string
     */
    public function classes() {
        return $this->classes;
    }

    /**
     * Assets to be enqueued when rendering the block.
     *
     * @return void
     */
    public function enqueue()
    {
        //
    }
}
