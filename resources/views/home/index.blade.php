@extends('base')

@section('title', 'Accueil')
@section('meta', 'coucou je suis la méta description')
@section('hero-banner', asset('css/include/hero-banner/style.css'))
@section('service', asset('css/include/service/style.css'))
@section('contact', asset('css/include/contact/style.css'))
@section('propos', asset('css/include/propos/style.css'))
@section('realisation', asset('css/include/realisation/style.css'))
@section('realisationJs', asset('js/realisation/script.js'))
@section('content')
@include('include.hero-banner.hero-banner')
@include('include.propos.propos')
@include('include.service.service')
@include('include.realisation.realisation')

@include('include.contact.contact')
@endsection