<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sweets extends Model
{
    use HasFactory;

    protected $table = 'sweets';

    protected $fillable = [
       'FoodName',
       'Quantity',
      'price',
    ];

    protected $casts = [
        'price' => 'integer',
    ];
    
}
