@extends('base')

@section('title', 'Mention-Legales')
@section('meta', 'Développeur web, je crée des sites modernes et performants sur mesure pour répondre à vos besoins numériques. Sites vitrines, e-commerce et plus.')
@section('hero-banner', asset('css/include/hero-banner/style.css'))
@section('service', asset('css/include/service/style.css'))
@section('contact', asset('css/include/contact/style.css'))
@section('body',asset('css/body/style2.css'))
@section('propos', asset('css/include/propos/style.css'))
@section('realisation', asset('css/include/realisation/style.css'))
@section('realisationJs', asset('js/realisation/script.js'))
@section('content')
<style>
    section{  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:white;
    margin-right:5%;
    margin-left:5%;
    }

</style>
<section>
    <h1>Mentions Légales</h1>

    <h2>1. Informations légales</h2>

    <h3>Propriétaire du site</h3>
    <p><strong>Nom de l'entreprise :</strong>Rc Tech web</p>
    <p><strong>Forme juridique :</strong>SASU</p>
    <p><strong>Capital social :</strong>500e</p>
    <p><strong>Siège social :</strong> 4 BOULEVARD DE CIMIEZ 06000 NICE</p>
    <p><strong>SIRET :</strong>920408754</p>
    <p><strong>E-mail :</strong>romain@rc-dev.pro</p>

    <h3>Hébergeur du site</h3>
    <p><strong>Nom de l'hébergeur :</strong>Amazon Web Services EMEA SARL</p>
    <p><strong>Adresse de l'hébergeur :</strong>31 Place des Corolles, Tour Carpe Diem,<br>
    Esplanade Nord, 92400 Courbevoie, France</p>
    <p><strong>E-mail :</strong>aws-in-france@amazon.com</p>
    <p><strong>Site Web :</strong>https://aws.amazon.com/fr/local/france/</p>

    <h2>2. Propriété intellectuelle</h2>
    <p>Le site internet <strong>rc-dev.pro</strong> et tous ses contenus (textes, images, graphismes, logos, vidéos, etc.) sont protégés par le droit d'auteur en vertu du Code de la Propriété Intellectuelle. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces éléments est strictement interdite sans l'accord écrit préalable du propriétaire.</p>

    <h2>3. Données personnelles</h2>
    <p>Conformément à la loi n°78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés modifiée, et au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès, de rectification, de suppression, et d’opposition au traitement de vos données personnelles.</p>
    <p>Les informations collectées via le site <strong>rc-dev.pro</strong> sont uniquement destinées à [indiquer l'usage des données : répondre aux demandes, envoyer des informations, etc.]. Aucune de ces informations ne sera cédée à des tiers sans votre consentement préalable.</p>
    <p>Pour exercer vos droits, vous pouvez contacter <strong>romain@rc-dev.pro</strong>.</p>

    <h2>4. Cookies</h2>
    <p>Le site <strong>rc-dev.pro</strong> utilise des cookies pour améliorer l'expérience de l'utilisateur, analyser le trafic, et offrir des fonctionnalités relatives aux réseaux sociaux. Vous avez la possibilité de désactiver les cookies via les paramètres de votre navigateur.</p>

    <h2>5. Limitation de responsabilité</h2>
    <p>L'éditeur du site ne pourra être tenu responsable des erreurs ou omissions dans les informations diffusées sur le site, ni des éventuels dommages directs ou indirects résultant de l’accès ou de l’utilisation du site <strong>[nom du site]</strong>.</p>

    <h2>6. Droit applicable</h2>
    <p>Les présentes mentions légales sont régies par la loi française. Tout litige relatif à l’utilisation du site <strong>[nom du site]</strong> sera soumis à la compétence exclusive des tribunaux français.</p>

    <h2>7. Contact</h2>
    <p>Pour toute question ou demande d'information concernant le site, vous pouvez contacter le propriétaire à l'adresse suivante : <strong>romain@rc-dev.pro</strong>.</p>
</section>
@endsection