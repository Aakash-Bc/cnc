<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Display a listing of all active services.
     */
    public function index()
    {
        try {
            $services = Service::where('active', true)
                ->orderBy('order')
                ->get();
            
            return response()->json([
                'success' => true,
                'data' => $services
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error fetching services',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get services filtered by department.
     */
    public function getByDepartment($department)
    {
        try {
            $validDepartments = ['civil', 'it', 'all'];
            if (!in_array($department, $validDepartments)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Invalid department'
                ], 400);
            }

            $query = Service::where('active', true);

            if ($department !== 'all') {
                $query->where('department', $department);
            }

            $services = $query->orderBy('order')->get();

            return response()->json([
                'success' => true,
                'department' => $department,
                'data' => $services
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error fetching services',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}

