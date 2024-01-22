<section>
    <div>
        <h1>Contact</h1>
    </div>
    <div id="formulaire">
        @if (session('successMessage'))
            {{ session('successMessage') }}
        @endif
        @if (session('errorMessage'))
            {{ session('errorMessage') }}
        @endif
        <form class="container-form" action="{{ route('contact.store') }}" method="POST">
            @csrf
            <div class="content-form">
                <label for="lastname">Nom</label>
                <input type="text" name="lastname" id="lastname" value="{{ old('lastname') }}">
                @error('lastname')
                    {{ $message }}
                @enderror
            </div>

            <div class="content-form">
                <label for="firstname">Prénom</label>
                <input type="text" name="firstname" id="firstname" value="{{ old('firstname') }}">
                @error('firstname')
                    {{ $message }}
                @enderror
            </div>

            <div class="content-form">
                <label for="email">email</label>
                <input type="text" name="email" id="email">
                @error('email')
                    {{ $message }}
                @enderror
            </div>

            <div class="content-form">
                <label for="text">Message</label>
                <textarea name="text" id="text" cols="30" rows="10">{{ old('text') }}</textarea>
                @error('text')
                    {{ $message }}
                @enderror
            </div>

            <button class="button-form" type="submit">valider</button>
        </form>
    </div>
</section>
