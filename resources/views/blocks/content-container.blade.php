<div id="{{$id}}" class="{{ $classes }} u-overflow-auto"  {!!$style !!}>

  @if ($anchor)
  <div id="{{$anchor}}" class="anchor"></div>
  @endif

  <div class="container">
    <InnerBlocks />
  </div>
</div>
