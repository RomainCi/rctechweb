<section class="section-service">
    <div>
        <div class="title-service">
            <h1>Nos services</h1>
        </div>
        <div class="container-service">
            @foreach ($cards as $card)
                <div class="content-service">
                    <h4>{{ $card['title'] }}</h4>
                    <img src="{{ $card['image'] }}" alt="">
                    <p>{{ $card['text'] }}</p>
                </div>
            @endforeach
        </div>
    </div>
</section>
