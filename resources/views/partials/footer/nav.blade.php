<nav class="c-header-nav u-flex-col u-flex u-items-center">
  <ul class="u-flex-col u-text-center md:u-flex-row  u-flex">
      @foreach ($footerNav as $item)
      <li class="u-pb-32 u-relative md:u-mr-32 last:u-mr-0">
          <a
            class="c-footer-nav__item c-btn-hover--line {!! $item->active ? 'c-footer-nav__item--current' : '' !!}"
            href="{{ $item->url }}">
          {{ $item->label }}
          </a>
      </li>
      @endforeach
  </ul>
</nav>
