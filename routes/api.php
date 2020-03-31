<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Surfista
Route::get('/', 'SurfistaController@index');
Route::post('/', 'SurfistaController@store');


//Bateria
Route::get('/bateria', 'BateriaController@index');
Route::post('/bateria/store', 'BateriaController@store');

//Onda
Route::get('/onda', 'OndaController@index');
Route::post('/onda/store', 'OndaController@store');

//Nota
Route::get('/nota', 'NotaController@index');
Route::post('/nota/store', 'NotaController@store');
Route::get('/nota/notafinal', 'NotaController@notafinal');




