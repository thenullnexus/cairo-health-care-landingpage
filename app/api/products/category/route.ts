import { NextResponse } from 'next/server';
import { getProductsByCategory } from '@/lib/excel-utils';

export async function GET() {
  try {
    const productsByCategory = await getProductsByCategory();
    return NextResponse.json(productsByCategory);
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
