<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
class AdminController extends Controller
{
    public function adminLogin(Request $request){

        $fields = $request->validate([
            'username' => 'required|string',
            'password' => 'required|string'
          ]);
       
          $datas = Admin::where('username',$fields['username'])->first();
    
          if(!$datas || !Hash::check($fields['password'], $datas->password)){
            return response([
                'message' => 'Badx'
            ],404);
          }
       
       return response($datas, 201);
       
    
    }

    public function createAdmin(Request $request){

      $fields = $request->validate([
          'username' => 'required|string|unique:admins,username',
          'password' => 'required|string|confirmed'
        ]);
     
     $data = Admin::create([
     
     'username'=> $fields['username'],
     'password' => bcrypt($fields['password'])
     
     ]);
     
     
   
     return response($data, 201);
     
  }


  public function getAdmins()
{
    $admins = Admin::all();
    return response()->json($admins);
}

    



}
