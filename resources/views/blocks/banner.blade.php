@if (!empty($background))
<div id="{{$id}}" class="{{ $classes }}"  {!!$background !!}>
  <div class="wp-block-banner__overlay">
    <div class="wp-block-banner__inner / container">
      <InnerBlocks />

      @if($footer_text)
      <p class="wp-block-banner__footertext u-mb-md">
        {{$footer_text}}
      </p>
      @endif
    </div>
  </div>
</div>
@else
  @if ($block->preview)
    @include('partials.empty-block')
  @endif
@endif
