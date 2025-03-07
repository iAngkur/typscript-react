import React, { ChangeEvent, Fragment, useState } from "react";
import Select from "react-select";

const fruits = [
  { id: 1, category: "Apple", name: "Apple Shimla" },
  { id: 2, category: "Apple", name: "Apple Fuji" },
  { id: 3, category: "Apple", name: "Apple Gala" },
  { id: 4, category: "Banana", name: "Banana Cavendish" },
  { id: 5, category: "Banana", name: "Banana Lady Finger" },
  { id: 6, category: "Orange", name: "Orange Navel" },
  { id: 7, category: "Orange", name: "Orange Valencia" },
  { id: 8, category: "Grape", name: "Grape Concord" },
  { id: 9, category: "Grape", name: "Grape Thompson Seedless" },
  { id: 10, category: "Mango", name: "Mango Alphonso" },
  { id: 11, category: "Mango", name: "Mango Kent" },
  { id: 12, category: "Berry", name: "Strawberry" },
  { id: 13, category: "Berry", name: "Blueberry" },
  { id: 14, category: "Berry", name: "Raspberry" },
  { id: 15, category: "Melon", name: "Watermelon" },
  { id: 16, category: "Melon", name: "Cantaloupe" },
  { id: 17, category: "Melon", name: "Honeydew" },
  { id: 18, category: "Peach", name: "Peach Yellow" },
  { id: 19, category: "Peach", name: "Peach White" },
  { id: 20, category: "Pear", name: "Pear Bartlett" },
  { id: 21, category: "Pear", name: "Pear Anjou" },
  { id: 22, category: "Cherry", name: "Cherry Bing" },
  { id: 23, category: "Cherry", name: "Cherry Rainier" },
  { id: 24, category: "Plum", name: "Plum Black" },
  { id: 25, category: "Plum", name: "Plum Red" },
];

const categories = [
  { value: "Apple", label: "Apple" },
  { value: "Banana", label: "Banana" },
  { value: "Orange", label: "Orange" },
  { value: "Grape", label: "Grape" },
  { value: "Mango", label: "Mango" },
  { value: "Berry", label: "Berry" },
  { value: "Melon", label: "Melon" },
  { value: "Peach", label: "Peach" },
  { value: "Pear", label: "Pear" },
  { value: "Cherry", label: "Cherry" },
  { value: "Plum", label: "Plum" },
];

type Category = {
  value: string;
  label: string;
};

type Fruit = {
  id: number;
  category: string;
  name: string;
};

function Dropdown_v2() {
  const [filteredFruits, setFilteredFruits] = useState<Fruit[]>(fruits);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const handleFilter = (selectedOption: Category | null) => {
    setSelectedCategory(selectedOption);

    if (selectedOption === null) {
      setFilteredFruits(fruits);
    } else {
      setFilteredFruits(
        fruits.filter((fruit) => fruit.category === selectedOption?.value)
      );
    }
  };

  const renderGroupedFruits = () => {
    const data = filteredFruits.reduce((groups, item) => {
      const groupKey = item.category;

      if (!groups[groupKey]) groups[groupKey] = [];
      groups[groupKey].push(item);

      return groups;
    }, {} as Record<string, Fruit[]>);

    return Object.keys(data).map((objKey) => (
      <Fragment key={objKey}>
        <h3>{objKey}</h3>
        <ul style={{ listStyle: "none" }}>
          {data[objKey].map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </Fragment>
    ));
  };

  const onLoadMore = () => {
    console.log("On Load More....");
  };

  return (
    <div>
      <Select
        options={categories}
        value={selectedCategory}
        onChange={handleFilter}
        placeholder="Select a category"
        isClearable
        isSearchable
        styles={{
          option: (provided) => ({
            ...provided,
            cursor: "pointer",
          }),
        }}
        onMenuScrollToBottom={onLoadMore}
      />

      <div>{renderGroupedFruits()}</div>
    </div>
  );
}

export default Dropdown_v2;
