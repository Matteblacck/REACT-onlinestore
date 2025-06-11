export const loadProductData = async (section: string, category?: string, subcategory?: string) => {
    try {
      let path = `../05-entities/products/${section}`;
  
      if (category) {
        path += `/${category}`;
      }
      
      if (subcategory) {
        path += `/${subcategory}`;
      }
  
      path += `.ts`;
  
      const module = await import(/* @vite-ignore */ path);
      return module.default || [];
    } catch (error) {
      console.error("Ошибка загрузки данных:", error);
      return [];
    }
  };

