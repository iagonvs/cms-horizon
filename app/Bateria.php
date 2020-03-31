<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bateria extends Model
{
    public $timestamps = false;
    protected $table = 'Bateria';
    protected $primaryKey = 'id';
}
