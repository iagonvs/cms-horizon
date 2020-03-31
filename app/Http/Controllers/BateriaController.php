<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Surfista;
use App\Bateria;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\SurfistaCollection;

use DB;

class BateriaController extends Controller
{

    public function index()
    {

        //Retornando via GET os dados da tabela Bateria
        $bateria = new Bateria();


        $bateria = DB::table('bateria as b')
            ->join('surfista as s', 'b.Surfista1', 's.numero')
            ->join('surfista as ss', 'b.Surfista2', 'ss.numero')
            ->select('id', 's.nome as s1', 'ss.nome as s2', 'Surfista1', 'Surfista2')
            ->get();



        return $bateria;
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //Inserindo os dados dando um request no input do frontend
        $bateria = new Bateria();

        $bateria->Surfista1 = $request->Surfista1;
        $bateria->Surfista2 = $request->Surfista2;

        $bateria->save();
        return response($bateria, 200);
    }

    public function show($id)
    {
        //
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
        $bateria = Bateria::find($id);
        if (isset($bateria)) {
            $bateria->delete();
            return 204;
        }
        return response('Bateria não encontrada', 404);
    }
}
