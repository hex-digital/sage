@if (has_nav_menu('primary_navigation'))
<nav id="site-navigation" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
  {!! wp_nav_menu([
    'container' => false,
    'theme_location' => 'primary_navigation',
    'menu' => __( 'The Main Menu', 'sesha' ),
    'menu_class' => 'site-menu',
    'echo' => false,
    'walker' => new site_navigation_menu()
    ]) !!}
</nav>

@include('partials.header.hamburger-icon')
@endif
