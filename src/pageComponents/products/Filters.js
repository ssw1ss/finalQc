import React, { useState } from "react"
import cloneDeep from "lodash.clonedeep"
import { navigate } from "@reach/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "@emotion/styled"

import { H6, Flex, Text } from "ui/base"
import { Box } from "@rebass/emotion"

const FilterButton = styled(Box)`
  font-size: ${props => props.theme.fontSizes[7]};
  padding: 0.25rem 0.65rem;
  border-radius: 3px;
  margin-bottom: 1rem;
  cursor: pointer;
`
const FilterProductsButton = styled(FilterButton)`
  background: ${({ theme }) => theme.colors.blue};
  color: #fff;
`

const defaultFilters = {
  milk_type: {
    options: ["Buffalo", "Cow", "Goat", "Sheep"],
    checked: null,
    label: "Milk Type"
  },
  milk_treatment: {
    options: ["Raw", "Pasteurized", "Thermized"],
    checked: null,
    label: "Treatment"
  },
  texture: {
    options: ["Soft", "Semihard", "Hard"],
    checked: null,
    label: "Texture"
  },
  origin: {
    options: [
      "Alpage",
      "Certified Mountain Cheese",
      "Certified Mountain Milk",
      "Certified Mountain Meadow Milk",
      "Available Certified Organic"
    ],
    checked: null,
    label: "Origin"
  },
  selection: {
    options: ["Hostettler", "Beeler"],
    checked: null,
    label: "Selection"
  }
}

const getUIFilters = filters => {
  let defaults = cloneDeep(defaultFilters)
  if (filters) {
    Object.entries(filters).map(([key, value]) => {
      defaults[key].checked = value
    })
  }
  return defaults
}

const useRadios = initialState => {
  const [values, setValues] = useState(initialState)
  const setRadios = e => {
    // console.log(
    //   `You selected ${e.target.value}, which is part of ${e.target.name}`
    // )
    const filterName = e.target.name
    const { options, label, checked } = values[filterName]
    const newChecked = setValues({
      ...values,
      [filterName]: {
        options,
        label,
        checked: e.target.value
      }
    })
  }
  const filterValues = () => {
    const clonedFilters = cloneDeep(values)
    const checkedFilters = Object.keys(clonedFilters).reduce((acc, key) => {
      if (clonedFilters[key].checked !== null) {
        return { ...acc, [key]: clonedFilters[key].checked }
      }
      return acc
    }, {})
    if (
      Object.entries(checkedFilters).length !== 0 &&
      checkedFilters.constructor === Object
    ) {
      navigate(`/products?filters=${JSON.stringify(checkedFilters)}`)
    }
  }
  const resetValues = async () => {
    await navigate("/products/")
    setValues({ ...defaultFilters })
  }
  return [values, setRadios, filterValues, resetValues]
}

const Filters = ({ filters, hideFilters, ...props }) => {
  const [radios, setRadios, filter, reset] = useRadios(() =>
    getUIFilters(filters)
  )
  const handleFilter = () => {
    filter()
    hideFilters()
  }
  const handleReset = () => {
    reset()
    hideFilters()
  }
  return (
    <>
      <Flex justifyContent="space-between">
        <FilterProductsButton onClick={handleFilter}>
          Filter Products
        </FilterProductsButton>
        <FilterButton onClick={handleReset}>
          Reset Filters <FontAwesomeIcon icon="sync-alt" />
        </FilterButton>
      </Flex>
      <form {...props}>
        {Object.entries(radios).map(([key, values], i) => {
          const radioGroup = key
          const { options, checked, label } = values
          return (
            <Flex flexDirection="column" key={i} mb={4}>
              <H6 mb={1}>{label}</H6>
              {options.map((option, idx) => (
                <label key={idx}>
                  <Flex>
                    <input
                      type="radio"
                      name={radioGroup}
                      value={option}
                      checked={checked === option}
                      onChange={setRadios}
                    />
                    <Text fontSize={6}>{option}</Text>
                  </Flex>
                </label>
              ))}
            </Flex>
          )
        })}
      </form>
    </>
  )
}

export { Filters }
