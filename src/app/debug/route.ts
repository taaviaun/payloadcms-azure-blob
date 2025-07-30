// eslint-disable-next-line @typescript-eslint/no-require-imports
const wtf = require('wtfnode')

import { NextResponse } from 'next/server'

export const revalidate = 0

export async function GET() {
  wtf.dump()
  return NextResponse.json({})
}
