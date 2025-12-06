import XLSX from 'xlsx';
import path from 'path';
import fs from 'fs';

export interface Product {
  name: string;
  dosage: string;
  category: string;
}

export function getProductsByCategory(): Record<string, Product[]> {
  // Path to the Excel file
  const filePath = path.join(process.cwd(), 'all_product.xlsx');
  
  // Read the Excel file
  const file = XLSX.readFile(filePath);
  const sheetName = file.SheetNames[0];
  const worksheet = file.Sheets[sheetName];
  
  // Convert to JSON
  const data = XLSX.utils.sheet_to_json(worksheet) as Array<{
    'Product Name': string;
    'Dosage/Strength': string;
    'Category': string;
  }>;

  // Group by category
  const productsByCategory: Record<string, Product[]> = {};
  
  data.forEach(row => {
    const category = row['Category']?.trim();
    if (!category) return;
    
    const product: Product = {
      name: row['Product Name']?.trim() || 'Unnamed Product',
      dosage: row['Dosage/Strength']?.trim() || '',
      category: category
    };
    
    if (!productsByCategory[category]) {
      productsByCategory[category] = [];
    }
    
    productsByCategory[category].push(product);
  });
  
  return productsByCategory;
}

// This runs at build time
export const allProductsByCategory = getProductsByCategory();
