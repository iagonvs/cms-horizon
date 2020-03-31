<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Surfista;
use App\Bateria;
use App\Onda;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\SurfistaCollection;

use DB;
class OndaController extends Controller
{

    public function index()
    {      
        $onda = new Onda();

        $onda = DB::table('onda')
        ->join('surfista', 'onda.Surfista', 'surfista.numero')
        ->select('id', 'Bateria', 'Surfista','surfista.nome')
        ->get();

        return $onda;
    }



    public function store(Request $request)
    {
       $onda = new Onda();

       $onda->Bateria = $request->Bateria;
       $onda->Surfista = $request->Surfista;
       
       $onda->save();
       return response($onda, 200);
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
        $onda = Onda::find($id);
        if (isset($onda)){
            $onda->delete();
            return 204;
        }
        return response('Onda não encontrada', 404);
    }
}
