import { useRouter } from "next/router";

const queryParamsToObject = (params: any) => {
  const router = useRouter();
  let search = params.substring(1);
  try {
    return JSON.parse(
      '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
      function (key, value) {
        return key === "" ? value : decodeURIComponent(value);
      }
    );
  } catch (err) {
    router.push("/products");
    return {};
  }
};

// Make sure to validate filters
// const validFilters = {
//   texture: "texture",
//   type: "milk_type",
//   treatment: "milk_treatment",
//   origin: "origin",
//   selection: "selection"
// }
const validateFilters = (filters: any) => {
  return filters;
};

const validatePage = (page: any, maxPage: any) => {
  let activePage: number | null = 1;
  if (page) {
    const pageNum = page | 0;
    if (pageNum <= 1 || pageNum > maxPage) {
      activePage = null;
    } else {
      activePage = pageNum;
    }
  }
  return activePage;
};

const isObject = (obj: any) => obj === Object(obj);

const validateQueryParams = (params: any) => {
  const router = useRouter();
  const queryParamsObject = params === "" ? {} : queryParamsToObject(params);
  let filters = null;
  let page = null;
  if ("filters" in queryParamsObject) {
    try {
      let parsedFilters = JSON.parse(queryParamsObject.filters + "");
      if (isObject(parsedFilters)) filters = parsedFilters;
      else {
        filters = null;
        router.push("/products");
      }
    } catch (e) {
      filters = null;
      router.push("/products");
    }
  }
  if ("page" in queryParamsObject) {
    page = queryParamsObject.page;
  }
  return { filters, page };
};

export { validateQueryParams, validatePage, validateFilters };
