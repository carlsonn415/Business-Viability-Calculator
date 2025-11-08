import { NextResponse } from "next/server";

export interface ApiError {
  ok: false;
  error: string;
  code?: string;
  details?: unknown;
}

export interface ApiSuccess<T = unknown> {
  ok: true;
  data?: T;
  [key: string]: unknown;
}

export type ApiResponse<T = unknown> = ApiError | ApiSuccess<T>;

/**
 * Create a standardized error response
 */
export function errorResponse(
  message: string,
  status: number = 400,
  code?: string,
  details?: unknown
): NextResponse<ApiError> {
  return NextResponse.json(
    {
      ok: false,
      error: message,
      ...(code && { code }),
      ...(details && { details }),
    },
    { status }
  );
}

/**
 * Create a standardized success response
 */
export function successResponse<T>(
  data?: T,
  status: number = 200,
  meta?: Record<string, unknown>
): NextResponse<ApiSuccess<T>> {
  return NextResponse.json(
    {
      ok: true,
      ...(data !== undefined && { data }),
      ...(meta && meta),
    },
    { status }
  );
}

/**
 * Handle API route errors consistently
 */
export function handleApiError(err: unknown): NextResponse<ApiError> {
  console.error("API Error:", err);

  // Zod validation errors
  if (err && typeof err === "object" && "issues" in err) {
    const zodError = err as { issues: Array<{ path: string[]; message: string }> };
    const firstIssue = zodError.issues[0];
    const field = firstIssue.path.join(".");
    return errorResponse(
      `Validation error: ${field} - ${firstIssue.message}`,
      400,
      "VALIDATION_ERROR",
      zodError.issues
    );
  }

  // Prisma errors
  if (err && typeof err === "object" && "code" in err) {
    const prismaError = err as { code: string; meta?: unknown };
    if (prismaError.code === "P2002") {
      return errorResponse("A record with this value already exists", 409, "DUPLICATE_ENTRY");
    }
    if (prismaError.code === "P2025") {
      return errorResponse("Record not found", 404, "NOT_FOUND");
    }
  }

  // Standard Error objects
  if (err instanceof Error) {
    // Don't expose internal error messages in production
    const message =
      process.env.NODE_ENV === "production"
        ? "An unexpected error occurred"
        : err.message;

    return errorResponse(message, 500, "INTERNAL_ERROR");
  }

  // Unknown error type
  return errorResponse(
    process.env.NODE_ENV === "production"
      ? "An unexpected error occurred"
      : String(err),
    500,
    "UNKNOWN_ERROR"
  );
}

