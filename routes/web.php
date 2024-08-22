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

Route::get('/', ServiceIndex::class)->name('service.index');
Route::get('/contact', ServiceIndex::class)->name('service.index');
Route::get('/service', ServiceIndex::class)->name('service.index');
route::get('/realisation', ServiceIndex::class)->name('service.index');
Route::post('/contact', ContactStore::class)->name('contact.store');
