@include('sections.masthead')

@php
$hasSidebar = is_active_sidebar( 'sidebar-primary' ) &&
  ( is_home() || ( is_search() && isset( $_GET['post_type'] ) === 'post' ) ||
	  is_date() ||
	  is_category() ||
	  is_tag()
  );
@endphp

<div class="content__wrapper / has-menu-animation container">

  <a class="u-sr-only u-focus:not-sr-only" href="#site-content">
    {{ __('Skip to content') }}
  </a>

  @if ( $hasSidebar )
    <div class="md:u-flex md:u-grow u-gap-md">
  @endif

    <main id="site-content" class="site-content md:u-grow md:u-basis-2/3">
      @yield('content')
    </main>

  @if ( $hasSidebar )
    @include('sections.sidebar')
  </div>
  @endif

</div>

@include('sections.footer')
