@include('sections.masthead')

<div class="content__wrapper / has-menu-animation container">

  <a class="u-sr-only u-focus:not-sr-only" href="#site-content">
    {{ __('Skip to content') }}
  </a>

  @hasSection('sidebar')
    <div class="md:u-flex md:u-grow u-gap-md">
  @endif

    <main id="site-content" class="site-content md:u-grow md:u-basis-2/3">
      @yield('content')
    </main>

    @include('sections.sidebar')

  @hasSection('sidebar')
    </div>
  @endif


</div>

@include('sections.footer')
