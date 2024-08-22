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
                "image" => asset("assets/home/bobasiteCarre.jpg"),
                "text" => "Vous souhaitez un site vitrine pour présenter votre activité ou votre projet ? Ou alors digitaliser votre commerce ? Bonnie & Cloud est là pour vous aider. Analyse/Création/Suivi, tout les outils principaux pour bien vous lancer dans le monde du digital. "
            ],
            [
                "title" => "Application web",
                "image" => asset("assets/home/bobasiteCarre.jpg"),
                "text" => "Vous souhaitez une application multiplatforme ? Choisissez l'application web. Pas de téléchargement, des mises à jour simples à réaliser, l'application Web peut-être la solution pour votre projet. "
            ],
            [
                "title" => "Web design",
                "image" => asset("assets/home/bobasiteCarre.jpg"),
                "text" => "

                Votre identité de marque (logo, design de tous supports web) est créée sur mesure pour répondre aux besoins de votre cible.

                    Design de site internet
                    Application web & mobile
                    Mise en page de contenu

                "
            ],
            [
                "title" => "SEO et SEA",
                "image" => asset("assets/home/bobasiteCarre.jpg"),
                "text" => "

                Votre site internet est développé avec pour objectif d’apparaître dans les premières pages sur les moteurs de recherche.

                    temps de chargement des pages optimisés
                    Indexation automatique des pages
                    Intégration des différents réseaux sociaux

                "
            ]
        ];

        return view("home.index")->with("cards", $cards);
    }
}
