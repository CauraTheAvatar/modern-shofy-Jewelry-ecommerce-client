import { useState } from "react";
// internal
import { Search } from "@/svg";
import NiceSelect from "@/ui/nice-select";
import useSearchFormSubmit from "@/hooks/use-search-form-submit";

const HeaderSearchForm = () => {
  const { setSearchText, setCategory, handleSubmit, searchText } = useSearchFormSubmit();

  // selectHandle
  const selectCategoryHandle = (e) => {
    setCategory(e.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="tp-header-search-wrapper d-flex align-items-center">
        <div className="tp-header-search-box">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            type="text"
            placeholder="Search for Products..."
          />
        </div>
        <div className="tp-header-search-category">
          <NiceSelect
            options={[
              { value: "Select Category", text: "Select Category" },
              { value: "Fresh Produce", text: "Fresh Produce" },
              { value: "Grains & Cereals", text: "Grains & Cereals" },
              { value: "Natural & Organic Products", text: "Natural & Organic Products" },
              { value: "Seeds, Plants & Saplings", text: "Seeds, Plants & Saplings" },
              { value: "Processed & Packaged Goods", text: "Processed & Packaged Goods" },
              { value: "Agricultural Supplies", text: "Agricultural Supplies" },
              { value: "Nuts & Oilseeds", text: "Nuts & Oilseeds" },
              { value: "Handmade & Craft Products", text: "Handmade & Craft Products" },
              { value: "Animal By-products", text: "Animal By-products" },
              { value: "Aquaculture Products", text: "Aquaculture Products" },
              { value: "Wellness & Beauty", text: "Wellness & Beauty" },
              { value: " Bulk & Wholesale", text: " Bulk & Wholesale" },
            ]}
            defaultCurrent={0}
            onChange={selectCategoryHandle}
            name="Select Category"
          />
        </div>
        <div className="tp-header-search-btn">
          <button type="submit">
            <Search />
          </button>
        </div>
      </div>
    </form>
  );
};

export default HeaderSearchForm;
