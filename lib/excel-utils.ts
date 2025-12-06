import ExcelJS from 'exceljs';
import path from 'path';

export interface Product {
  name: string;
  dosage: string;
  category: string;
  type?: string;
  indication?: string;
}

export async function readExcelFile(): Promise<Product[]> {
  try {
    const filePath = path.join(process.cwd(), 'all_product.xlsx');
    console.log('Reading Excel file from path:', filePath);
    
    // Check if file exists
    const fs = await import('fs/promises');
    try {
      await fs.access(filePath);
      console.log('Excel file exists and is accessible');
    } catch (error) {
      console.error('Excel file does not exist or is not accessible:', filePath);
      console.error('Current working directory:', process.cwd());
      return [];
    }

    const workbook = new ExcelJS.Workbook();
    try {
      await workbook.xlsx.readFile(filePath);
      console.log('Successfully read Excel file');
    } catch (fileError) {
      console.error('Error reading Excel file at path:', filePath);
      console.error('File error details:', fileError);
      return [];
    }
    
    const worksheet = workbook.worksheets[0];
    const products: Product[] = [];

    worksheet.eachRow((row, rowNumber) => {
      // Skip header row
      if (rowNumber === 1) return;

      const product: Product = {
        name: row.getCell(1).text?.trim() || 'Unnamed Product',
        dosage: row.getCell(2).text?.trim() || '',
        category: row.getCell(3).text?.trim() || 'Uncategorized',
      };

      // Optional fields
      if (row.getCell(4)) product.type = row.getCell(4).text?.trim();
      if (row.getCell(5)) product.indication = row.getCell(5).text?.trim();

      products.push(product);
    });

    return products;
  } catch (error) {
    console.error('Error reading Excel file:', error);
    return [];
  }
}

export async function getProductsByCategory() {
  try {
    console.log('Getting products by category...');
    const products = await readExcelFile();
    console.log(`Read ${products.length} products from Excel`);
    
    if (products.length === 0) {
      console.warn('No products found in Excel file');
      return {};
    }
    
    const categories: Record<string, Product[]> = {};
    
    products.forEach(product => {
      if (!categories[product.category]) {
        categories[product.category] = [];
      }
      categories[product.category].push(product);
    });
    
    return categories;
  } catch (error) {
    console.error('Error in getProductsByCategory:', error);
    return {};
  }
}