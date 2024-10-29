<?php

use App\Http\Controllers\ContactStore;
use App\Http\Controllers\ServiceIndex;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', ServiceIndex::class)->name('home.index');

Route::get('/mention-legales', function () {
    return view('mention-legales.index');
})->name('mention-legales.index');

Route::get('/contact',function(){
    return abort(404);
});

Route::post('/contact', ContactStore::class)->name('contact.store');
