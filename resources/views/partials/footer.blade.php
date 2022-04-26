<footer id="site-footer" class="site-footer / u-h-footer-height u-border-t">

  <div class="container">

    @if(is_active_sidebar( 'sidebar-footer' ) )
    <div class="footer__widgets / u-grid u-grid-cols-1 sm:u-grid-cols-3 u-gap-md">
      @php(dynamic_sidebar('sidebar-footer'))
    </div>
    @endif

  </div>

</footer>

<div class="overlay__mobile-menu"></div>
<div class="overlay__search"></div>
