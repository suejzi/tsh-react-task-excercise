import React, { ChangeEvent, FC, useMemo, useState } from "react";
import Header from "../../organisms/header";
import ProductList from "../../organisms/productList";
import { ProductFetchedData } from "../../../utils/interfaces/interface";
import { TemplateWrapper } from "../../../assets/styles/common/Layout";

const ProductTemplate: FC<ProductFetchedData> = ({ items, meta, links }) => {
  const [checkedInputs, setCheckedInputs] = useState<Array<any>>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [termChange, setTermChange] = useState<boolean>(false);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTermChange(true);
    setSearchTerm(event.target.value);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTermChange(true);
    if (event.target.checked) {
      setCheckedInputs([...checkedInputs, event.target.value]);
    } else {
      setCheckedInputs([
        ...checkedInputs.filter((item) => item !== event.target.value),
      ]);
    }
  };

  const checkboxFilteredItems = useMemo(
    () =>
      items.filter((item) =>
        checkedInputs.every((checkbox: keyof boolean) => item[checkbox])
      ),
    [items, checkedInputs]
  );

  const searchFilteredItems = checkboxFilteredItems.filter((item) =>
    item.name.includes(searchTerm)
  );

  return (
    <TemplateWrapper style={{ height: "100vh", backgroundColor: "#F0F1F5" }}>
      <Header
        isLogged={false}
        handleInputChange={handleInputChange}
        handleSearchChange={handleSearchChange}
      />
      <ProductList
        items={searchFilteredItems}
        meta={meta}
        links={links}
        termChange={termChange}
        setTermChange={setTermChange}
      />
    </TemplateWrapper>
  );
};

export default ProductTemplate;
