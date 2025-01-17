import * as cheerio from "cheerio";

export interface MenuItem {
  category: string;
  items: string[];
}

export let cachedMenu: MenuItem[] | null = null;
export let lastFetchDate: string | null = null;

export const extractMenu = (html: string): MenuItem[] => {
  const $ = cheerio.load(html);
  const menu: MenuItem[] = [];
  
  const firstMenu = $('.meal_foodies').first();
  
  firstMenu.children('li').each((_, element) => {
    const category = $(element).clone().children().remove().end().text().trim();
    const items: string[] = [];
    
    $(element).find('ul li').each((_, item) => {
      const text = $(item).text().trim();
      if (text === "OU") {
        items.push("\nOu bien:");
        return;
      }
      items.push("- " + $(item).text().trim());
    });
    
    if (category && items.length > 0) {
      menu.push({ category, items });
    }
  });
  
  return menu;
};

export const fetchMenu = async (): Promise<MenuItem[]> => {
  try {
    const response = await fetch('https://www.crous-strasbourg.fr/restaurant/resto-u-de-lillberg-2/');
    const html = await response.text();
    return extractMenu(html);
  } catch (error) {
    console.error('Error while fetching menu:', error);
    throw new Error('Impossible de récupérer le menu');
  }
};

export const updateMenuCache = async () => {
  try {
    const currentDate = new Date().toDateString();
    if (currentDate !== lastFetchDate) {
      cachedMenu = await fetchMenu();
      lastFetchDate = currentDate;
      console.log('Menu mis à jour:', new Date().toISOString());
    }
  } catch (error) {
    console.error('Erreur lors de la mise à jour du cache:', error);
  }
};
