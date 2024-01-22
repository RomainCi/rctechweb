<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="@yield('meta')">
    <link rel="stylesheet" href="@yield('hero-banner')">
    <link rel="stylesheet" href="@yield('service')">
    <link rel="stylesheet" href="@yield('contact')">
    <link rel="stylesheet" href="@yield('realisation')">
    <link rel="stylesheet" href="{{ asset('css/nav/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/body/style.css') }}">
    <script type="text/javascript" src="{{ asset('js/base/script.js') }}" defer></script>
    <script type="text/javascript" src="@yield('realisationJs')" defer></script>

    <title>@yield('title')</title>
</head>

<body class="antialiased">
    <div id="blob"></div>
    <div class="blur main">
        <header>
            <nav class="navbar">
                <div class="logo">LOGO</div>
                <ul class="nav-menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link">lien</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">lien</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">lien</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">lien</a>
                    </li>
                </ul>
                <div class="nav-hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        </header>
        <main>
            @yield('content')
        </main>
    </div>
    <script src="https://kit.fontawesome.com/40f157f11e.js" crossorigin="anonymous"></script>
</body>

</html>
