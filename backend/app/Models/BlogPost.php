<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    /**
     * The table associated with the model.
     */
    protected $table = 'blog_posts';

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'content',
        'department',
        'author',
        'image',
        'published',
        'published_at'
    ];

    /**
     * The attributes that should be cast to native types.
     */
    protected $casts = [
        'published' => 'boolean',
        'published_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];
}
