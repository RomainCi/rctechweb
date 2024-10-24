<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServiceIndex extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $cards = [
            [
                "title" => "Site vitrine et E-commerce",
                "image" => asset("assets/service/shopping.webp"),
                "text" => "Vous souhaitez créer un site vitrine ou lancer votre boutique en ligne ? RC Tech Web vous accompagne, de l'analyse à la création sur mesure, avec un suivi personnalisé. Tous les outils essentiels pour réussir votre projet, qu'il s'agisse de visibilité ou d'e-commerce.",
            ],
            [
                "title" => "Application web",
                "image" => asset("assets/service/multisupport.webp"),
                "text" => "Vous envisagez une application multiplateforme ? Optez pour une application web. Sans téléchargement, avec des mises à jour simplifiées, elle offre une solution flexible et efficace pour répondre aux besoins de votre projet.",
            ],
            [
                "title" => "Web design",
                "image" => asset("assets/service/webdesign.webp"),
                "text" => "

                Votre identité de marque (logo, design pour tous vos supports web) est conçue sur mesure pour captiver votre audience cible.

Design de sites internet
Applications web & mobiles
Mise en page de contenu
Chaque élément est pensé pour refléter vos valeurs et renforcer votre présence en ligne.

                "
            ],
            [
                "title" => "SEO et SEA",
                "image" => asset("assets/service/seo.webp"),
                "text" => "Votre site est conçu pour apparaître en tête des résultats des moteurs de recherche.

Pages à chargement optimisé
Indexation automatique
Intégration des réseaux sociaux

                "
            ]
        ];
        return view('home.index')->with([
            'cards' => $cards
        ]);
    }
}
