<?php

use App\Http\Controllers\UrlController;
use App\Http\Controllers\UserController;
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

Route::middleware('auth')->group(function(){

    Route::get('/', function () {
        return view('home');
    });

    Route::post('/user/logout' , [UserController::class , 'logout'])->name('logout');



});




Route::get('/user/register' , [UserController::class , 'registerForm'])->name('register');

Route::post('/user/register' , [UserController::class , 'store'])->name('register');

Route::get('/user/login' , [UserController::class , 'loginForm'])->name('Login');

Route::post('/user/login' , [UserController::class , 'auth'])->name('login');


Route::get('visit/{shorten_url}' , [UrlController::class , 'show']);


