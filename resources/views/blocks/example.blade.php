<div class="{{ $block->classes }}">

  @while($posts->have_posts()) @php($posts->the_post())
    @includeFirst(['partials.content-' . get_post_type(), 'partials.content'])
  @endwhile


  <div>
    <InnerBlocks />
  </div>
</div>
