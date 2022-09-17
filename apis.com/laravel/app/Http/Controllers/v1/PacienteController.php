<?php

namespace App\Http\Controllers\v1;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\v1\Paciente; 

class PacienteController extends Controller
{
    function getAll(Request $request)
    {
        $search=$request->search;
        $response= new \stdClass();
        $paciente= Paciente::all();
        $response->success=true;
        $response->data = $paciente;
        return response()->json($response,200);
    }

    function getItem($id)
    {
        $response= new \stdClass();
        $paciente= Paciente::find($id);
        $response->success=true;
        $response->data = $paciente;
        return response()->json($response,200);   
    }

    function store(Request $request)
    {
        $response = new \stdClass();
        $paciente = new Paciente();
        $paciente->apellido_pat = $request->apellido_pat;
        $paciente->apellido_mat = $request->apellido_mat;
        $paciente->nombre = $request->nombre;
        $paciente->sexo = $request->sexo;
        $paciente->edad = $request->edad;
        

        $paciente->save();
        $response->success = true; 
        $response->data = $paciente;
        return response()->json($response,200);   
    }

    function putUpdate(Request $request)
    {
        $response = new \stdClass();
        $paciente = Paciente::find($request->id);

        if($paciente)
        {
            $paciente->apellido_pat = $request->apellido_pat;
            $paciente->apellido_mat = $request->apellido_mat;
            $paciente->nombre = $request->nombre;
            $paciente->sexo = $request->sexo;
            $paciente->edad = $request->edad;
            
          
            $paciente->save();
            $response->success = true;
            $response->data = $paciente;
        }
        else{
            $response->success = false;
            $response->errors = ["el paciente con el id ".$request->id."no existe"];
        }

        return response()->json($response, ($response->success?200:401));   
    }
    
    function patchUpdate(Request $request)
    {
        $response = new \stdClass();
        $paciente = Paciente::find($request->id);

        if($paciente)
        {
            if($request->apellido_pat)
            $paciente->apellido_pat = $request->apellido_pat;
            if($request->apellido_mat)
            $paciente->apellido_mat = $request->apellido_mat;
            if($request->nombre)
            $paciente->nombre = $request->nombre;
            if($request->sexo)
            $paciente->sexo = $request->sexo;
            if($request->edad)
            $paciente->edad = $request->edad;
            


            $paciente->save();
            $response->success = true;
            $response->data = $paciente;
        }
        else{
            $response->success = false;
            $response->errors = ["el paciente con el id ".$request->id." no existe"];
        }

        return response()->json($response, ($response->success?200:401));   
    }
    
    function delete($id)
    {
        $response = new \stdClass();
        $paciente = Paciente::find($id); 
        if($paciente){
            $paciente->delete();
            $response->success = true;

        }
        else{
            $response->success = false;
            $response->errors = ["el paciente con el id ".$id." no existe"];
        }
        return response()->json($response, ($response->success?200:401));

    }
}

