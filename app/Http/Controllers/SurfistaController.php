<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Surfista;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\SurfistaCollection;

use DB;
class SurfistaController extends Controller
{

    public function index()
    {
        return Surfista::all();
    }



    public function store(Request $request)
    {
       $surfista = new Surfista();

       $surfista->nome = $request->nome;
       $surfista->pais = $request->pais;
       
       $surfista->save();
       return response($surfista, 200);
    }


    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        $surfista = Surfista::find($id);
        if (isset($surfista)){
            $surfista->delete();
            return 204;
        }
        return response('Surfista não encontrado', 404);
    }
}
