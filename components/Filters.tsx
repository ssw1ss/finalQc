import React, { useRef, useState } from "react";
import cloneDeep from "lodash.clonedeep";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { H6, Text } from "components";
import { Box, Card, Flex } from "@chakra-ui/react";
import { useClickAway } from "react-use";

const FilterButton = (props: any) => (
  <Box
    {...props}
    fontSize={7}
    p="0.25rem 0.65rem"
    borderRadius="3px"
    mb="1rem"
    sx={{ cursor: "pointer" }}
  />
);
const FilterProductsButton = (props: any) => (
  <FilterButton {...props} bg="brand.blue" color="#fff" />
);
const FiltersToggle = ({ children, ...props }: any) => (
  <Box
    fontSize={5}
    background="#eee"
    borderRadius="3px"
    padding="0.3rem 1.5rem"
    cursor="pointer"
    {...props}
  >
    {children}
  </Box>
);

const filtersArray = [
  {
    name: "milk_type",
    options: {
      Buffalo: false,
      Cow: false,
      Goat: false,
      Sheep: false,
    },
    label: "Milk Type",
  },
  {
    name: "milk_treatment",
    options: { Raw: false, Pasteurized: false, Thermized: false },
    label: "Treatment",
  },
  {
    name: "texture",
    options: { Soft: false, Semihard: false, Hard: false },
    label: "Texture",
  },
  {
    name: "origin",
    options: {
      Alpage: false,
      "Certified Mountain Cheese": false,
      "Certified Mountain Milk": false,
      "Certified Mountain Meadow Milk": false,
      "Available Certified Organic": false,
    },
    label: "Origin",
  },
  {
    name: "selection",
    options: { Hostettler: false, Beeler: false },
    label: "Selection",
  },
];

const Filters = ({ hideFilters, ...props }: any) => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const { query } = router;
  const currentPage = query.page;
  const [filters, setFilters] = useState(() => {
    const test = filtersArray.map((filter) => {
      const isActiveFilter = query[filter.name];
      if (isActiveFilter) {
        const activeFilterValues =
          typeof isActiveFilter === "string"
            ? [isActiveFilter]
            : isActiveFilter;
        Object.keys(filter.options).forEach(
          (optionName) =>
            // @ts-ignore
            (filter.options[optionName] =
              activeFilterValues.includes(optionName))
        );
      }
      return filter;
    });
    console.log("TEST: ", test);
    return test;
  });
  const filterRef = useRef(null);
  useClickAway(filterRef, (e: any) => {
    if (e.target.getAttribute("name") == "filter-toggle") {
      e.stopPropagation();
    } else {
      setVisible(false);
    }
  });
  const toggleFilterOption = (name: string, optionName: string) => {
    const newFilters = cloneDeep(filters);
    const index = newFilters.findIndex((filter) => filter.name === name);
    console.log("IDK: ", newFilters[index]);
    // @ts-ignore
    newFilters[index].options[optionName] =
      // @ts-ignore
      !newFilters[index].options[optionName];
    setFilters(newFilters);
  };
  const handleFilter = () => {
    const newQuery = filters.reduce((acc, filter) => {
      const activeOptions = Object.entries(filter.options)
        .filter(([_, val]) => val)
        .map(([key, _]) => key);
      if (activeOptions.length > 0) {
        acc[filter.name] = activeOptions;
      }
      return acc;
    }, {} as any);
    router.push({
      pathname: "/products",
      query: newQuery,
    });
    setVisible(false);
  };
  const handleReset = () => {
    setFilters(filtersArray);
    router.push({
      pathname: "/products",
      query: {},
    });
    setVisible(false);
  };
  return (
    <Box mb={5} style={{ position: "relative" }}>
      <FiltersToggle name="filter-toggle" onClick={() => setVisible(!visible)}>
        Filters <FontAwesomeIcon size="xs" icon="sort-amount-down" />
      </FiltersToggle>
      {visible && (
        <Card
          ref={filterRef}
          variant="default"
          style={{
            minWidth: "18rem",
            zIndex: "100",
            position: "absolute",
            right: "0",
            top: "100%",
          }}
          p={4}
        >
          <Flex justifyContent="space-between">
            <FilterProductsButton onClick={handleFilter}>
              Filter Products
            </FilterProductsButton>
            <FilterButton onClick={handleReset}>
              Reset Filters <FontAwesomeIcon icon="sync-alt" />
            </FilterButton>
          </Flex>
          <form {...props}>
            {filters.map(({ name, options, label }: any) => {
              return (
                <Flex flexDirection="column" key={name} mb={4}>
                  <H6 mb={1}>{label}</H6>
                  {Object.keys(options).map((optionName: any) => (
                    <label key={optionName}>
                      <Flex>
                        <input
                          type="checkbox"
                          name={name}
                          value={optionName}
                          onChange={() => toggleFilterOption(name, optionName)}
                          checked={options[optionName]}
                        />
                        <Text fontSize={6}>{optionName}</Text>
                      </Flex>
                    </label>
                  ))}
                </Flex>
              );
            })}
          </form>
        </Card>
      )}
    </Box>
  );
};

export default Filters;
