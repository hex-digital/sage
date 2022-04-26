<a href="{{ home_url('/') }}">
  @if($logo)
    <img class="u-h-logo-height" src="{{$logo}}" alt=" {{ $siteName }}">
  @else
    <h1>
      {{ $siteName }}
    </h1>
  @endif
</a>
