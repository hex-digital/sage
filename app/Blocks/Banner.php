<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use StoutLogic\AcfBuilder\FieldsBuilder;
use function Roots\bundle;

class Banner extends Block
{
    /**
     * The block name.
     *
     * @var string
     */
    public $name = 'Banner';

    /**
     * The block description.
     *
     * @var string
     */
    public $description = 'A simple Banner block.';

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
        'foreground' => '#17749C',
        'src' => 'cover-image',
    );


    /**
     * The block keywords.
     *
     * @var array
     */
    public $keywords = [];

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
    public $mode = 'preview';

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
        'align_text' => false,
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
    public $styles = [];

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
        return  $this->returnfields();
    }

    /**
     * The block field group.
     *
     * @return array
     */
    public function fields()
    {
        $banner = new FieldsBuilder('masthead_banner');

        $banner
            ->addImage('background_image', [
                'label' => 'Background Image'
            ])
            ->addText('footer_text', [
                'label' => 'Footer Text',
        ]);

        return $banner->build();
    }


    /**
     * Return all the fields
     *
     * @return array
     */
    public function returnfields() {
        $image = '';
        if(get_field('background_image')) {
            $image = get_field('background_image')['sizes']['large'];
            $image = " style='background-image: url(${image}) '";
        }

        $fields = [
            'id' => $this->id(),
            'classes' => $this->classes(),
            'background' => $image,
            'footer_text' => get_field('footer_text')
        ];

        return $fields;
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
        bundle('blockBanner')->enqueue();
    }
}
