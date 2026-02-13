import { getProductsByCategory } from '@/lib/excel-utils'

export async function getCategoryProducts(category: string) {
  const productsByCategory = await getProductsByCategory()
  
  // Special handling for known category names
  const categoryMap: Record<string, string> = {
    'iv-fluids': 'IV Fluids',
    'general-tablets': 'General Tablets',
    'oncology': 'Oncology',
    'cosmetics': 'Cosmetics'
  }

  // Use mapped category name if it exists, otherwise format normally
  const formattedCategory = categoryMap[category] || category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return productsByCategory[formattedCategory] || []
}

export async function getAllCategorySlugs() {
  const productsByCategory = await getProductsByCategory()
  const categories = Object.keys(productsByCategory || {})
  
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, '-')
  }))
}
