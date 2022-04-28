@if(is_active_sidebar( 'sidebar-footer' ) )
<div class="footer__widgets / u-grid u-grid-cols-1 sm:u-grid-cols-3 u-gap-md">
  @php(dynamic_sidebar('sidebar-footer'))
</div>
@endif
