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
    .bs-docs-section {
      border: solid 1px silver;
      border-bottom: solid 3px black;
      padding: 1rem;
      padding-top: 0;
      position: relative;
    }
    .bs-docs-title {
      margin: 0 -1rem;
      margin-bottom: 2rem;
      font-size: 1.5rem;
      background: black;
      border-bottom: solid 3px black;
      color: white;
      padding: .8rem;
      text-transform: uppercase;
      position: sticky;
      z-index: 800;
      top: 100px;
    }
    .logged-in .bs-docs-title {
      top: 32px;
    }

  </style>

@endsection


