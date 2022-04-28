@if (has_nav_menu('footer_navigation'))
<nav id="footer-navigation" class="footer-navigation" aria-label="{{ wp_get_nav_menu_name('footer_navigation') }}">
  {!! wp_nav_menu([
    'container' => false,
    'theme_location' => 'footer_navigation',
    'menu' => __( 'The Footer Menu', 'sesha' ),
    'menu_class' => 'footer-menu u-flex u-justify-center u-items-center u-gap-sm',
    'echo' => false,
    'walker' => new site_footer_menu()
    ]) !!}
</nav>
@endif
