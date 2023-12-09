<?php

namespace App\Http\Controllers;

use App\Mail\WelcomeEmail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class customerregistration extends Controller
{
  

    public function createCustomer(Request $request){

        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed',
            'address' => 'nullable|string',
            'contact_number' => 'nullable|string',

          ]);
       
       $data = User::create([
       
       'name' => $fields['name'],
       'email'=> $fields['email'],
       'password' => bcrypt($fields['password']),
       'address' => $fields['address'],
    'contact_number' => $fields['contact_number'],
       
       ]);
       
       
       $token = $data->createToken('ShopToken')->plainTextToken;
       
       $response =[
           'data' => $data,
           'token' => $token
       ];
       
       return response($response, 201);
       
    }


    
//loginssssss
public function customerLogin(Request $request){

    $fields = $request->validate([
    
        'email' => 'required|string',
        'password' => 'required|string'
      ]);
   
      $data = User::where('email',$fields['email'])->first();

      if(!$data || !Hash::check($fields['password'], $data->password)){
        return response([
            'message' => 'Email not Found'
        ],404);
      }
   
   $token = $data->createToken('ShopToken')->plainTextToken;
   
   $response =[
       'data' => $data,
     'token' => $token
   ];

   

   return response($response, 201);
   


}

public function getUserDetailsPublic($userId)
{
    $user = User::findOrFail($userId);

    if (!$user) {
        return response()->json(['error' => 'User not found'], 404);
    }

    // Return only the required fields
    return response()->json([
        'name' => $user->name,
        'address' => $user->address,
        'contact' => $user->contact,
    ]);

}


public function getCustomer()
{
    $admins = User::all();
    return response()->json($admins);
}



public function logout(Request $request){
    $user = $request->user();
    $user->currentAccessToken()->delete();
    return response('', 204);
}


}
