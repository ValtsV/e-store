import React from "react";

import "./shop.styles.scss";

import CollectionsOverview from "../components/collections-overview/collections-overview.comp";
import { Route } from "react-router-dom";
import CollectionPage from "./collection.comp";
import ShopHeader from "../components/shop-header/shop-header.comp";

const ShopPage = ({ match }) => {
  console.log("match");
  console.log(match.path);
  return (
    <div className="shop-page bg-pink">
      <ShopHeader match={match} />
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
