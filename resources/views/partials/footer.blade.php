<footer id="site-footer" class="site-footer">
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

<div id="RESPONSIVE_XS" class="u-block / sm:u-hidden md:u-hidden lg:u-hidden"></div>
<div id="RESPONSIVE_SM" class="u-hidden sm:u-block / md:u-hidden lg:u-hidden"></div>
<div id="RESPONSIVE_MD" class="u-hidden md:u-block / lg:u-hidden"></div>
<div id="RESPONSIVE_LG" class="u-hidden lg:u-block"></div>
