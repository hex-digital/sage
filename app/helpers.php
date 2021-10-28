<?php

/**
 * Theme helpers.
 */

namespace App;

use Illuminate\Support\Str;


// Get the current active style of a block
function getBlockStyle($styles, $classes)
{
    foreach ($styles as $blockStyle) {
        if (Str::contains($classes, $blockStyle['name'])) {
            return $blockStyle['name'];
        }
    }
}

//Get an excerpt of a post
function getExcerpt(\WP_Post $post, $maxCharacters = 20): ?string
{
    $excerpt = '';

    $blocks = parse_blocks($post->post_content);

    if (get_the_excerpt($post->ID)) { // Posts with an excerpt
        $excerpt = get_the_excerpt($post->ID);
    } else {  // Posts using the paragraph block
        foreach ($blocks as $block) {
          if ($block['blockName'] === 'core/paragraph') {
              $excerpt = trim(strip_tags($block['innerHTML']));

              if (strlen($excerpt)) {
                  break;
              }
          }
        }
    }

    return wp_trim_words($excerpt, $maxCharacters, '...');
}
