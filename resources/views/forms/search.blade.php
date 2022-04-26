<form role="search" method="get" class="search__form u-flex u-gap-sm" action="{{ home_url('/') }}">
  <label class="u-flex-grow">
    <span class="u-sr-only">
      {{ _x('Search for:', 'label', 'sage') }}
    </span>

    <input type="search" placeholder="{!! esc_attr_x('Search &hellip;', 'placeholder', 'sage') !!}" value="{{ get_search_query() }}" name="s">
  </label>

  <input type="submit" class="btn btn-primary btn-sm" value="{{ esc_attr_x('Search', 'submit button', 'sage') }}">
</form>
