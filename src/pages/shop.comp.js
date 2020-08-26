import React from "react";

import "./shop.styles.scss";

import CollectionsOverview from "../components/collections-overview/collections-overview.comp";
import { Route } from "react-router-dom";
import CollectionPage from "./collection.comp";

const ShopPage = ({ match }) => (
  <div className="shop-page bg-pink">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
