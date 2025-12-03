<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Store a newly created contact in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'department' => 'required|in:civil,it,general',
            'message' => 'required|string|min:10'
        ]);

        try {
            $contact = Contact::create($validated);
            return response()->json([
                'success' => true,
                'message' => 'Thank you for your inquiry. We will get back to you soon.',
                'data' => $contact
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error saving contact form',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}

