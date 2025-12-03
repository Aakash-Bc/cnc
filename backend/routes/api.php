<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\BlogPostController;

// Contact form
Route::post('/contact', [ContactController::class, 'store']);

// Services
Route::get('/services', [ServiceController::class, 'index']);
Route::get('/services/{department}', [ServiceController::class, 'getByDepartment']);

// Blog posts
Route::get('/blog', [BlogPostController::class, 'index']);
Route::get('/blog/{slug}', [BlogPostController::class, 'show']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
