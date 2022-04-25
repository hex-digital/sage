<footer id="site-footer" class="site-footer / u-h-footer-height u-border-t">

  <div class="container">

    <?php if(is_active_sidebar( 'sidebar-footer' ) ): ?>
    <div class="footer__widgets / u-grid u-grid-cols-1 sm:u-grid-cols-3 u-gap-md">
      <?php (dynamic_sidebar('sidebar-footer')); ?>
    </div>
    <?php endif; ?>

  </div>

</footer>

<?php /**PATH /Users/andyfairlie/Wordpress Websites/sandbox/app/public/wp-content/themes/sage-dev/resources/views/partials/footer.blade.php ENDPATH**/ ?>