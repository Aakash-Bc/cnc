<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use Illuminate\Http\Request;

class BlogPostController extends Controller
{
    /**
     * Display a listing of published blog posts with pagination.
     */
    public function index()
    {
        try {
            $posts = BlogPost::where('published', true)
                ->orderBy('published_at', 'desc')
                ->paginate(10);
            
            return response()->json([
                'success' => true,
                'data' => $posts->items(),
                'pagination' => [
                    'total' => $posts->total(),
                    'per_page' => $posts->perPage(),
                    'current_page' => $posts->currentPage(),
                    'last_page' => $posts->lastPage()
                ]
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error fetching blog posts',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified blog post by slug.
     */
    public function show($slug)
    {
        try {
            $post = BlogPost::where('slug', $slug)
                ->where('published', true)
                ->firstOrFail();
            
            return response()->json([
                'success' => true,
                'data' => $post
            ], 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Blog post not found'
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error fetching blog post',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}

