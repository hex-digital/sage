
@php
$classname = isset($c) ? esc_attr($c) : 'wp-picture';
@endphp

@if ($image['caption'])
<figure class="{{ $classname  }}">
@endif

  <img
    src="{{ esc_url($src) }}"
    class="{{ !$image['caption'] ? $classname : ''  }}"
    title="{{ esc_attr($image['title']) }}"
    alt="{{ esc_attr($image['alt']) }}"
    width="{{ isset($w) ? esc_attr($w) : ''  }}"
    height="{{ isset($h) ? esc_attr($h) : ''  }}"
    loading="lazy"
  />

@if ($image['caption'])
  <figcaption class="c-fig-caption">
      {{ esc_html($image['caption']) }}
    </figcaption>
  </figure>
@endif
