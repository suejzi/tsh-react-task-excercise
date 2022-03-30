import Config from "../../config";
import BASE_URL from "../consts/url";

const api = async (urlArgPoint: string, objType?: string) => {
  try {
    const response = await fetch(`${Config.API_URL}${urlArgPoint}`);

    if (!response.ok) {
      console.log(`${objType} not found - 404`);
    }

    return await response.json();
  } catch (error) {
    throw new Error("Cannot load api obj");
  }
};

async function getAllProducts() {
  return api(`${BASE_URL.products}`, "Products");
}

export { getAllProducts };
