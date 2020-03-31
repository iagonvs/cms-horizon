<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Surfista extends Model
{
    public $timestamps = false;
    protected $table = 'Surfista';
    protected $primaryKey = 'numero';
}
