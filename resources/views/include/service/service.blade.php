<section class="section-service" id="service">
    <div>
        <div class="title-service">
            <h1>Nos services</h1>
        </div>
        <div class="demoWrapper">
            @foreach ($cards as $index => $card)
            <div class="card box creative-pro service-{{ $index + 1 }}">
                <img class="card-img-top" src="{{ $card['image'] }}" alt="">
                <div class="card-body p-6">
                    <h4>{{ $card['title'] }}</h4>
                    <small class="card-clr d-block mb-3"><br>{{ $card['text'] }}</small>
                    <div>
                        <button class="contact-button">Contactez-nous</button>
                    </div>
                </div>

            </div>
            @endforeach
        </div>
    </div>
</section>