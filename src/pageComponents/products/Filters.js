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

const defaultFilters = [
  {
    name: "milk_type",
    options: ["Buffalo", "Cow", "Goat", "Sheep"],
    checked: null,
    label: "Milk Type",
    id: "p1"
  },
  {
    name: "milk_treatment",
    options: ["Raw", "Pasteurized", "Thermized"],
    checked: null,
    label: "Treatment",
    id: "p2"
  },
  {
    name: "texture",
    options: ["Soft", "Semihard", "Hard"],
    checked: null,
    label: "Texture",
    id: "p3"
  },
  {
    name: "origin",
    options: [
      "Alpage",
      "Certified Mountain Cheese",
      "Certified Mountain Milk",
      "Certified Mountain Meadow Milk",
      "Available Certified Organic"
    ],
    checked: null,
    label: "Origin",
    id: "p4"
  },
  {
    name: "selection",
    options: ["Hostettler", "Beeler"],
    checked: null,
    label: "Selection",
    id: "p5"
  }
]

const getUIFromParams = filters => {
  const defaults = cloneDeep(defaultFilters)
  if (filters) {
    return defaults.map(filter => {
      const name = filter.name
      if (filters.hasOwnProperty(name)) {
        filter.checked = filters[name]
      }
      return filter
    })
  } else {
    return defaults
  }
}

const useRadios = initialState => {
  const [values, setValues] = useState(initialState)
  const setRadios = e => {
    const filterName = e.target.name
    const newValues = values.map(value => {
      if (value.name === filterName) {
        value.checked = e.target.value
      }
      return value
    })
    setValues(newValues)
  }
  const filterValues = () => {
    const checkedFilters = values.reduce((a, c) => {
      if (c.checked !== null) {
        return { ...a, [c.name]: c.checked }
      }
      return a
    }, {})
    if (
      Object.entries(checkedFilters).length !== 0 &&
      checkedFilters.constructor === Object
    ) {
      navigate(`/products?filters=${JSON.stringify(checkedFilters)}`)
    }
  }
  const resetValues = async () => {
    console.log(defaultFilters)
    await navigate("/products/")
    setValues(defaultFilters)
  }
  return [values, setRadios, filterValues, resetValues]
}

const Filters = ({ filters, hideFilters, ...props }) => {
  const [radios, setRadios, filter, reset] = useRadios(() =>
    getUIFromParams(filters)
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
        {radios.map(({ name, options, checked, label, id }) => {
          return (
            <Flex flexDirection="column" key={id} mb={4}>
              <H6 mb={1}>{label}</H6>
              {options.map(option => (
                <label key={option}>
                  <Flex>
                    <input
                      type="radio"
                      name={name}
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
