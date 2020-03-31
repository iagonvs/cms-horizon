<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Surfista;
use App\Bateria;
use App\Onda;
use App\Nota;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\SurfistaCollection;

use DB;

class NotaController extends Controller
{
    public function index()
    {   
        //Retornando via GET os dados da tabela Nota, sem calculo
        $nota = new Nota();

        $nota = DB::table('nota')
        ->join('onda','nota.Onda','onda.Onda')
        ->join('bateria','onda.Bateria','bateria.Bateria')
        ->select('id', 'notaParcial1','notaParcial2', 'notaParcial3', 'Onda', 'bateria.Bateria')
        ->get();

        return $nota;
    }

    public function notafinal()
    {   
        //Retornando as notas, com o cálculo de média parcial e sabendo o campeão da bateria
        $nota = new Nota();

        $select = "sum((notaParcial1+notaParcial2+notaParcial3)/3) as total";
        $select .= ",notaParcial1,  notaParcial2, notaParcial3, Onda, Bateria, Surfista, nota.id";

        
        $nota = DB::table('nota')
                ->join('onda','nota.Onda','onda.id')
                ->join('bateria','onda.Bateria','bateria.id')
                ->join('surfista','onda.Surfista','surfista.numero')
                ->select(\DB::raw($select))
                ->groupBy('notaParcial1','notaParcial2','notaParcial3','Onda','Bateria','Surfista', 'nota.id')
                ->orderBy('Onda', 'asc')
                ->get();
       
       return $nota;
    }

    public function store(Request $request)
    {
       $nota = new Nota();

       $nota->notaParcial1 = $request->notaParcial1;
       $nota->notaParcial2 = $request->notaParcial2;
       $nota->notaParcial3 = $request->notaParcial3;
       $nota->Onda = $request->Onda;
       $nota->Data = Now();
       
       $nota->save();
       return response($nota, 200); 
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
        $nota = Nota::find($id);
        if (isset($nota)){
            $nota->delete();
            return 204;
        }
        return response('nota não encontrada', 404);
    }
}
