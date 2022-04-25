<?php if(has_nav_menu('primary_navigation')): ?>
<nav id="site-navigation" aria-label="<?php echo e(wp_get_nav_menu_name('primary_navigation')); ?>">
  <?php echo wp_nav_menu([
    'container' => false,
    'theme_location' => 'primary_navigation',
    'menu' => __( 'The Main Menu', 'sesha' ),
    'menu_class' => 'site-menu',
    'echo' => false,
    // 'walker' => new site_navigation_menu()
    ]); ?>

</nav>

<?php echo $__env->make('partials.header.hamburger-icon', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php endif; ?>
<?php /**PATH /Users/andyfairlie/Wordpress Websites/sandbox/app/public/wp-content/themes/sage-dev/resources/views/partials/header/main-nav.blade.php ENDPATH**/ ?>