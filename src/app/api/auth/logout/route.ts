import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST() {
  const response = NextResponse.json({ success: true, message: 'ออกจากระบบเรียบร้อยแล้ว' });
  response.cookies.delete('tl_auth_token');
  return response;
}
