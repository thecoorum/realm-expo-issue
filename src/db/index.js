import { createRealmContext } from "@realm/react";

import categories from "../static/categories.json";

import Category from "./models/Category";

const handleSeedData = (realm) => {
  categories.forEach((category, index) => {
    realm.create("Category", Category.create({ id: index + 1, ...category }));
  });
};

export default createRealmContext({
  schema: [Category],
  onFirstOpen: handleSeedData,
});
