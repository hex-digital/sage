<form role="search" method="get" class="search-form u-flex" action="{{ home_url('/') }}">
  <label>
    <span class="u-sr-only">
      {{ _x('Search for:', 'label', 'sage') }}
    </span>

    <input type="search" placeholder="{!! esc_attr_x('Search &hellip;', 'placeholder', 'sage') !!}" value="{{ get_search_query() }}" name="s">
  </label>

  <input type="submit" class="btn btn-primary btn-sm" value="{{ esc_attr_x('Search', 'submit button', 'sage') }}">
</form>
