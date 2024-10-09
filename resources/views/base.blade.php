<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="@yield('meta')">
    <link rel="icon" href="{{ asset('assets/icon/rctechnoir.png') }}" sizes="192x192" type="image/png">
    <link rel="stylesheet" href="@yield('hero-banner')">
    <link rel="stylesheet" href="@yield('service')">
    <link rel="stylesheet" href="@yield('contact')">
    <link rel="stylesheet" href="@yield('realisation')">
    <link rel="stylesheet" href="@yield('propos')">
    <link rel="stylesheet" href="{{ asset('css/nav/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/body/style.css') }}">
    <link rel="stylesheet" href="{{asset('css/footer/style.css')}}">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.10.4/lottie.min.js" defer></script>
    <script type="text/javascript" src="{{ asset('js/base/script.js') }}" defer></script>


    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <title>@yield('title')</title>
</head>

<body class="antialiased">
    <!-- <div id="blob"></div>
    <div class="blur main"> -->
    <div id="lottie-mouse"></div>
    <div id="lottie-container"></div>

    <header>
        <nav class="navbar">
            <div class="logo"><img src="{{ asset('assets/logo/rctech.webp') }}" alt="logo"></div>
            <div class="progress-container">
                <div class="progress-bar" id="progressBar"></div>
            </div>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#accueil" class="nav-link">accueil</a>
                </li>
                <li class="nav-item">
                    <a href="#propos" class="nav-link">propos</a>
                </li>
                <li class="nav-item">
                    <a href="#realisation" class="nav-link">réalisation</a>
                </li>
                <li class="nav-item">
                    <a href="#service" class="nav-link">service</a>
                </li>
                <li class="nav-item">
                    <a href="#contact" class="nav-link">contact</a>
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

    <footer>
        <div class="logo"><img src="{{asset('assets/logo/rctech.webp')}}" alt="logo"></div>
        <div class="content-free"> <a href="https://www.freepik.com" target="_blank">Les images sont concus par freepick</a></div>
        <div class="logo-footer">
            <a href="https://www.instagram.com/rctechweb/" target="blank"><i class="fa-brands fa-instagram"></i></a>
            <!-- <i class="fa-brands fa-linkedin"></i> -->
            <a href="mailto:romain@rc-dev.pro"><i class="fa-regular fa-envelope"></i></a>
            <!-- <i class="fa-solid fa-phone"></i> -->
        </div>
    </footer>

    </div>
    <script src="https://kit.fontawesome.com/40f157f11e.js" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/lenis@1.1.5/dist/lenis.min.js"></script>
</body>

</html>