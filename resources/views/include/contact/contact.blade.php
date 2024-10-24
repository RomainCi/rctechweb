<section id="contact">
    <div class="title-contact">
        <h1>Contactez-Nous</h1>
    </div>
    <div class="container-contact">
        <div class="container-contact-image">
            <div class="content-contact-color"></div>
            <img class="content-contact-image" src="{{asset('assets/contact/robot 1.webp')}}" alt="robot">
        </div>
        <div id="formulaire">
            <form class="container-form" action="{{ route('contact.store') }}" method="POST">
                @csrf
                <div class="content-form">
                    <!-- <label for="lastname">Nom</label> -->
                    <input placeholder="Nom" type="text" name="lastname" id="lastname" value="{{ old('lastname') }}">
                    @error('lastname')
                    <div class="message-error">
                        {{ $message }}
                    </div>
                    @enderror
                </div>

                <div class="content-form">
                    <!-- <label for="firstname">Prénom</label> -->
                    <input placeholder="Prénom" type="text" name="firstname" id="firstname" value="{{ old('firstname') }}">
                    @error('firstname')
                    <div class="message-error">
                        {{ $message }}
                    </div>
                    @enderror
                </div>

                <div class="content-form">
                    <!-- <label for="email">email</label> -->
                    <input placeholder="Email" type="text" name="email" id="email">
                    @error('email')
                    <div class="message-error">
                        {{ $message }}
                    </div>
                    @enderror
                </div>

                <div class="content-form">
                    <!-- <label for="text">Message</label> -->
                    <textarea placeholder="Votre message" name="text" id="text" cols="30" rows="10">{{ old('text') }}</textarea>
                    @error('text')
                    <div class="message-error">
                        {{ $message }}
                    </div>
                    @enderror
                </div>

                <button class="button-form" type="submit">ENVOYER</button>
            </form>
        </div>
        @if (session('successMessage'))
        <div class="session-message success">
            <p>{{ session('successMessage') }}</p>
        </div>
        @endif
        @if (session('errorMessage'))
        <div class="session-message error">
            <p>{{ session('errorMessage') }}</p>
        </div>
        @endif
    </div>



</section>