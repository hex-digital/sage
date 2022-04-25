<header id="site-masthead">
  <div class="site-masthead__inner / container">
    <?php echo $__env->make('partials.header.logo', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->make('partials.header.main-nav', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->make('partials.header.search', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  </div>
</header>
<?php /**PATH /Users/andyfairlie/Wordpress Websites/sandbox/app/public/wp-content/themes/sage-dev/resources/views/partials/header.blade.php ENDPATH**/ ?>