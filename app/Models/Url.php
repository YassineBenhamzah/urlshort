<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Url extends Model
{
    protected $fillable = ['full_url' , 'shorten_url' , 'user_id' , 'url_desc' , 'visit'];
    use HasFactory;

    public function getCreatedAtAttribute($value){
        return Carbon::parse($value)->diffForHumans();
    }

    public function getRouteKeyName()
    {
        return 'shorten_url';
    }

}
