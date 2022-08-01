@include('partials.masthead')

<div class="content__wrapper / has-menu-animation">

  <a class="u-sr-only u-focus:not-sr-only" href="#site-content">
    {{ __('Skip to content') }}
  </a>

    <main id="site-content">
      @yield('content')
    </main>

</div>

@include('partials.footer')
