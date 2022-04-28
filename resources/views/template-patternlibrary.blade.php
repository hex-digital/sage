{{--
  Template Name: Pattern Library
--}}

@extends('layouts.app')

@section('content')

  @include('partials.pattern-library.type')
  @include('partials.pattern-library.buttons')
  @include('partials.pattern-library.tables')
  @include('partials.pattern-library.forms')

  <style>
    .hex-docs-section {
      border: solid 1px silver;
      border-bottom: solid 3px black;
      background: white;
      padding: 1rem;
      padding-top: 0;
      position: relative;
    }
    .hex-docs-title {
      margin: 0 -1rem;
      margin-bottom: 1rem;
      font-size: 1rem;
      color: white;
      padding: .5rem;
      text-transform: uppercase;
      position: sticky;
      z-index: 800;
      top: 100px;
    }
    .logged-in .hex-docs-title {
      top: 132px;
    }

  </style>

@endsection


