
@php
$classname = isset($c) ? esc_attr($c) : 'wp-picture';
@endphp

@if ($image['caption'])
  <figure class="{{ $classname  }}">
@endif

  <picture>
    <source srcset="{{ esc_url($image['sizes']['large']) }}" media="(min-width: 1200px)">
    <source srcset="{{ esc_url($image['sizes']['medium']) }}" media="(min-width: 800px)">

      @if ( isset($mobileFirst) && $mobileFirst === 'true')
        <img
          class="{{ !$image['caption'] ? $classname : ''  }}"
          alt="{{ esc_attr($image['alt']) }}"
          title="{{ esc_attr($image['title']) }}"
          src="{{ esc_url($image['sizes']['medium']) }}"
          height="{{ esc_attr($image['sizes']['large-height']) }}"
          width="{{ esc_attr($image['sizes']['large-width']) }}"
          loading="lazy">
      @else
        <img
          class="{{ !$image['caption'] ? $classname : ''  }}"
          alt="{{ esc_attr($image['alt']) }}"
          title="{{ esc_attr($image['title']) }}"
          src="{{ esc_url($image['sizes']['thumbnail']) }}"
          height="{{ esc_attr($image['sizes']['large-height']) }}"
          width="{{ esc_attr($image['sizes']['large-width']) }}"
          loading="lazy">
      @endif
  </picture>

@if ($image['caption'])
  <figcaption class="c-fig-caption">
      {{ esc_html($image['caption']) }}
    </figcaption>
  </figure>
@endif
