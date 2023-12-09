<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\customerregistration;
use App\Http\Controllers\FoodsControllers;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\SweetsController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', function () {
    return response()->json(['status' => 200, 'message' => 'This is the root of api path']);
});

Route::group(['middleware'=> ['auth:sanctum']],function (){
    Route::post('logout',[customerregistration::class,'logout']);
});


Route::post('register',[customerregistration::class,'createCustomer']);
Route::post('login',[customerregistration::class,'customerLogin']);

Route::post('Admin',[AdminController::class,'adminLogin']);
Route::post('input', [SweetsController::class, 'inputFoods']);
Route::get('input', [SweetsController::class, 'inputFoods']);
Route::delete('/delete/{id}',[SweetsController::class,'deletes']);

Route::get('/details/{userId}', [customerregistration::class, 'getUserDetailsPublic']);

Route::post('messages',[MessageController::class,'createMessage']);

Route::get('/messages', [MessageController::class, 'getMessages']);

Route::delete('/messages/{id}', [MessageController::class, 'deleteMessage']);

Route::post('getAdmin',[AdminController::class,'createAdmin']);

Route::get('Adminget',[AdminController::class,'getAdmins']);

Route::get('userget',[customerregistration::class,'getCustomer']);
