<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Exception;
use App\Models\User;
use App\Models\Formulaire;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;

class ContactStore extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        try {
            $data = $request->validate([
                'lastname' => 'required|string|max:40',
                'firstname' => 'required|string|max:40',
                'email' => 'required|email|max:100',
                'text' => 'required|string|max:2000',
            ]);
            DB::beginTransaction();
            try {
                $user = User::updateOrCreate(
                    ["email" => $data['email']],
                    ["lastname" => $data['lastname'], "firstname" => $data["firstname"]]
                );

                // throw new \Exception('Erreur intentionnelle lors de l\'envoi du formulaire');
                Formulaire::create([
                    "users_id" => $user->id,
                    "text" => $data['text'],
                ]);

                Mail::to("contact@rctechweb.fr")->send(new ContactMail($data));
                DB::commit();
                Session::flash('successMessage', 'Votre formulaire a été envoyé avec succes');
                return Redirect::to(URL::previous() . "#formulaire");
            } catch (Exception $e) {
                DB::rollBack();
                Log::error("erreur dans le controller ContactStore : " . $e->getMessage());
                Session::flash('errorMessage', "Une erreur c'est produite lors de l'envoie de votre message");
                return Redirect::to(URL::previous() . "#formulaire");
            }
        } catch (\Illuminate\Validation\ValidationException $e) {
            // La validation a échoué, vous pouvez accéder aux erreurs
            $errors = $e->validator->errors();
            return Redirect::to(URL::previous() . "#formulaire")->withErrors($errors)->withInput();
        }
    }
}
