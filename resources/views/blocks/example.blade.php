<div class="{{ $block->classes }}">

<?php
  $postIDS = $block->block->data["relationship_field"];
  $posts = new WP_Query( array(
    'post_type' => 'post',
    'posts_per_page' => -1,
    'orderby' => 'post__in',
    'post__in' => $postIDS
  ));
?>

  @while($posts->have_posts()) @php($posts->the_post())
    @includeFirst(['partials.content-' . get_post_type(), 'partials.content'])
  @endwhile


  <div>
    <InnerBlocks />
  </div>
</div>
