import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Index from "./pages/Index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Index} />
    </BrowserRouter>
  );
}
