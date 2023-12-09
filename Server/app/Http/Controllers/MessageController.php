<?php

namespace App\Http\Controllers;

use App\Models\Messages;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    

public function createMessage(Request $request){

$request ->validate([
    'name'=>'required',
    'email'=>'required',
    'contact'=>'required',
    'message'=>'required'

]);

$Data = Messages::create($request->all());

return $Data;

}

public function getMessages()
{
    $messages = Messages::all();
    return response()->json($messages);
}


public function deleteMessage($id)
{
    $message = Messages::find($id);

    if (!$message) {
        return response()->json(['error' => 'Message not found'], 404);
    }

    $message->delete();

    return response()->json(['message' => 'Message deleted successfully']);
}




}
