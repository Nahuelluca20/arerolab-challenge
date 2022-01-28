import React from "react";
import {Stack, Divider, Button} from "@chakra-ui/react";

import {Product} from "~/product/types";

import {Filter} from "./types";
import Filters from "./Filters";
import Count from "./Count";
import Grid from "./Grid";

interface Props {
  products: Product[];
}

const ProductsList: React.FC<Props> = ({products}) => {
  const [filter, setFilter] = React.useState<Filter>(Filter.MostRecent);
  const [curPage, setCurPage] = React.useState(0);
  const [counterItems, setCounterItems] = React.useState<number>(16);

  const itemLimit = 16;

  const filteredProducts = React.useMemo(() => {
    switch (filter) {
      case Filter.HighestPrice: {
        return [...products].sort((a, b) => b.cost - a.cost);
      }

      case Filter.LowestPrice: {
        return [...products].sort((a, b) => a.cost - b.cost);
      }

      case Filter.MostRecent:
      default: {
        return products;
      }
    }
  }, [filter, products]);

  const handlePreviousPageChange = () => {
    setCurPage(0);
    if (counterItems === 16) {
      return;
    }
    setCounterItems(counterItems - 16);
  };

  const handleNextPageChange = () => {
    setCurPage(1);
    if (counterItems === products.length) {
      return;
    }
    setCounterItems(counterItems + 16);
  };

  return (
    <Stack alignItems="flex-start" spacing={6}>
      <Stack
        alignItems="center"
        as="nav"
        direction={{base: "column", sm: "row"}}
        divider={
          <Divider
            borderColor="gray.300"
            display={{base: "none", sm: "block"}}
            height={12}
            orientation="vertical"
          />
        }
        flex={1}
        spacing={6}
        width="100%"
      >
        <Count
          currentPage={curPage}
          itemLimit={counterItems}
          products={filteredProducts}
          total={products.length}
        />
        <Filters active={filter} onChange={setFilter} />
      </Stack>
      <Grid currentPage={curPage} itemLimit={itemLimit} products={filteredProducts} />
      <Count
        currentPage={curPage}
        itemLimit={counterItems}
        products={filteredProducts}
        total={products.length}
      />
      <Stack direction="row">
        <Button
          color="white"
          colorScheme="orange"
          variant="solid"
          width={100}
          onClick={handlePreviousPageChange}
        >
          Previous
        </Button>
        <Button
          color="white"
          colorScheme="orange"
          variant="solid"
          width={100}
          onClick={handleNextPageChange}
        >
          Next
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProductsList;
