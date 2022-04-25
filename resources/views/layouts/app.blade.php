@include('partials.header')

<div class="content__wrapper / has-menu-animation container">

  <a class="u-sr-only u-focus:not-sr-only" href="#site-content">
    {{ __('Skip to content') }}
  </a>

  @hasSection('sidebar')
    <div class="md:u-flex md:u-grow u-gap-md">
  @endif

    <main id="site-content" class="md:u-grow md:u-basis-2/3">
      @yield('content')
    </main>

    @hasSection('sidebar')
      <aside id="site-sidebar" class="sidebar md:u-basis-1/3">
        @yield('sidebar')
      </aside>
    @endif

    @hasSection('sidebar')
    </div>
  @endif


</div>

@include('partials.footer')
