<form role="search" method="get" class="search-form u-flex" action="<?php echo e(home_url('/')); ?>">
  <label>
    <span class="u-sr-only">
      <?php echo e(_x('Search for:', 'label', 'sage')); ?>

    </span>

    <input type="search" placeholder="<?php echo esc_attr_x('Search &hellip;', 'placeholder', 'sage'); ?>" value="<?php echo e(get_search_query()); ?>" name="s">
  </label>

  <input type="submit" class="btn btn-primary btn-sm" value="<?php echo e(esc_attr_x('Search', 'submit button', 'sage')); ?>">
</form>
<?php /**PATH /Users/andyfairlie/Wordpress Websites/sandbox/app/public/wp-content/themes/sage-dev/resources/views/forms/search.blade.php ENDPATH**/ ?>