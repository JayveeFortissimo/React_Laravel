<?php

namespace App\Http\Controllers;

use App\Models\Sweets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SweetsController extends Controller
{
    //
    public function inputFoods(Request $request)
    {
        try {
            if ($request->isMethod('post')) {
                $request->validate([
                    'cart' => 'required|array',
                    'cart.*.FoodName' => 'required|string',
                    'cart.*.Quantity' => 'required|integer',
                    'cart.*.price' => 'required|integer', // Validate the price field
                ]);

                foreach ($request->input('cart') as $item) {
                    Sweets::create([
                        'FoodName' => $item['FoodName'],
                        'Quantity' => $item['Quantity'],
                        'price' => $item['price'], // Store the price in the database
                    ]);
                }

                return response()->json(['message' => 'Cart items stored successfully']);
            } elseif ($request->isMethod('get')) {
                // Handling GET request for retrieving food items (example)
                $foodItems = Sweets::all();
                return response()->json(['foodItems' => $foodItems]);
            }

            return response()->json(['error' => 'Invalid request method'], 400);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        } catch (\Exception $e) {
            Log::error('Error processing cart request: ' . $e->getMessage());
            return response()->json(['error' => 'Error storing cart items'], 500);
        }
    }

    //delete
    public function deletes($id)
    {
        $sweet = Sweets::findOrFail($id);

        if ($sweet) {
            $sweet->delete();
            return response()->json(['status' => 200, 'message' => 'Item deleted successfully']);
        } else {
            return response()->json([
                'status' => 404,
                'message' => "no found"
            ], 404);
        }
    }

    
  
}
