<?php echo $__env->make('partials.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

<div class="content__wrapper / has-menu-animation container">

  <a class="u-sr-only u-focus:not-sr-only" href="#site-content">
    <?php echo e(__('Skip to content')); ?>

  </a>

  <?php if (! empty(trim($__env->yieldContent('sidebar')))): ?>
    <div class="md:u-flex md:u-grow u-gap-md">
  <?php endif; ?>

    <main id="site-content" class="md:u-grow md:u-basis-2/3">
      <?php echo $__env->yieldContent('content'); ?>
    </main>

    <?php if (! empty(trim($__env->yieldContent('sidebar')))): ?>
      <aside id="site-sidebar" class="sidebar md:u-basis-1/3">
        <?php echo $__env->yieldContent('sidebar'); ?>
      </aside>
    <?php endif; ?>

    <?php if (! empty(trim($__env->yieldContent('sidebar')))): ?>
    </div>
  <?php endif; ?>


</div>

<?php echo $__env->make('partials.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php /**PATH /Users/andyfairlie/Wordpress Websites/sandbox/app/public/wp-content/themes/sage-dev/resources/views/layouts/app.blade.php ENDPATH**/ ?>