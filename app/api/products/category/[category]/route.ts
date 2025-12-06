import { NextResponse } from 'next/server';
import { getProductsByCategory } from '@/lib/excel-utils';

export async function GET(
  request: Request,
  { params }: { params: { category: string } }
) {
  try {
    // Ensure params is properly awaited
    const { category } = await Promise.resolve(params);

    if (!category) {
      return NextResponse.json(
        { error: 'Category parameter is required' },
        { status: 400 }
      );
    }

    // Special handling for known category names
    const categoryMap: Record<string, string> = {
      'iv-fluids': 'IV Fluids',
      'general-tablets': 'General Tablets',
      'oncology': 'Oncology',
      'cosmetics': 'Cosmetics'
    };

    // Use mapped category name if it exists, otherwise format normally
    const formattedCategory = categoryMap[category] || category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const productsByCategory = await getProductsByCategory();
    const products = productsByCategory[formattedCategory] || [];

    if (products.length === 0) {
      console.warn(`No products found for category: ${formattedCategory}`);
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
