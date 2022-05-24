@if ($buttons)
<div id="{{$id}}" class="{{ $classes }}">
    @foreach ($buttons as $item)

    @php
    $buttonClass = "btn {$item['button_style']} {$item['button_size']}";
    $buttonTarget = $item['new_tab'] ? 'target="_blank"' : '';
    @endphp

    <a class="{{ $buttonClass }}" href="{{ $item['url'] }}" {{$buttonTarget}}>
      {{ $item['title'] }}
    </a>
    @endforeach
  </div>
@else
  <p>{{ $block->preview ? 'Add a Button...' : 'No items found!' }}</p>
@endif

