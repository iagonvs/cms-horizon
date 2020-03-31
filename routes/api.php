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


Route::get('/', 'SurfistaController@index');
Route::post('/', 'SurfistaController@store');
Route::delete('/{id}', 'SurfistaController@delete');


Route::get('/bateria', 'BateriaController@index');
Route::post('/bateria/store', 'BateriaController@store');
Route::delete('/bateria/{id}', 'BateriaController@delete');

Route::get('/onda', 'OndaController@index');
Route::post('/onda/store', 'OndaController@store');
Route::delete('/onda/{id}', 'OndaController@delete');

Route::get('/nota', 'NotaController@index');
Route::post('/nota/store', 'NotaController@store');
Route::get('/nota/notafinal', 'NotaController@notafinal');
Route::get('/nota/final/{id}', 'NotaController@final');
Route::delete('/nota/{id}', 'NotaController@delete');



