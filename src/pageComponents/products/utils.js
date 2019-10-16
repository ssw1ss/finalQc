import { navigate } from "gatsby"

const queryParamsToObject = params => {
  let search = params.substring(1)
  try {
    return JSON.parse(
      '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
      function(key, value) {
        return key === "" ? value : decodeURIComponent(value)
      }
    )
  } catch (err) {
    navigate("/products")
    return {}
  }
}

// Make sure to validate filters
// const validFilters = {
//   texture: "texture",
//   type: "milk_type",
//   treatment: "milk_treatment",
//   origin: "origin",
//   selection: "selection"
// }
const validateFilters = filters => {
  return filters
}

const validatePage = (page, maxPage) => {
  let activePage = 1
  if (page) {
    const pageNum = page | 0
    if (pageNum <= 1 || pageNum > maxPage) {
      activePage = null
    } else {
      activePage = pageNum
    }
  }
  return activePage
}

const isObject = obj => obj === Object(obj)

const validateQueryParams = params => {
  const queryParamsObject = params === "" ? {} : queryParamsToObject(params)
  let filters = null
  let page = null
  if ("filters" in queryParamsObject) {
    try {
      let parsedFilters = JSON.parse(queryParamsObject.filters + "")
      if (isObject(parsedFilters)) filters = parsedFilters
      else {
        filters = null
        navigate("/products")
      }
    } catch (e) {
      filters = null
      navigate("/products")
    }
  }
  if ("page" in queryParamsObject) {
    page = queryParamsObject.page
  }
  return { filters, page }
}

export { validateQueryParams, validatePage, validateFilters }
