import { NextRequest } from 'next/server';

export function GET(request: NextRequest) {
  // return Response.json();
  return new Response('Hello!');
}

// export function POST(request) {}