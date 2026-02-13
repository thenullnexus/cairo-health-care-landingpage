import { getProductsByCategory as getProducts } from '@/lib/excel-utils'

export async function getAllCategories() {
  try {
    const productsByCategory = await getProducts()
    return productsByCategory
  } catch (error) {
    console.error('Error fetching all categories:', error)
    return {}
  }
}

export async function getProductsByCategoryFunc(category: string) {
  try {
    const productsByCategory = await getProducts()
    // Convert to category from URL format to match Excel format (e.g., 'general-tablets' -> 'General Tablets')
    const formattedCategory = category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    return productsByCategory[formattedCategory] || []
  } catch (error) {
    console.error('Error fetching products by category:', error)
    return []
  }
}
