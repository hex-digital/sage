<a href="{{ home_url('/') }}">
  @if($logo)
    <img class="masthead-logo" src="{{$logo}}" alt=" {{ $siteName }}">
  @else
    <h1>
      {{ $siteName }}
    </h1>
  @endif
</a>
