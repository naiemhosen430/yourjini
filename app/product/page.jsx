import React from "react";
import TopBar from "../Components/Shared/Components/TopBar";
import Menu from "../Components/Shared/Menu";
import Footer from "../Components/Shared/Footer";
import ProductBox from "../Components/Box/ProductBox";

export default function page() {
  return (
    <>
      <TopBar />
      <Menu />

      <div className="text-center space-x-5 space-y-5">
        <ProductBox itemname={"bike"} price={1000} image={""} />
        <ProductBox itemname={"bike"} price={1000} image={""} />
        <ProductBox itemname={"bike"} price={1000} image={""} />
        <ProductBox itemname={"bike"} price={1000} image={""} />
        <ProductBox itemname={"bike"} price={1000} image={""} />
        <ProductBox itemname={"bike"} price={1000} image={""} />
        <ProductBox itemname={"bike"} price={1000} image={""} />
        <ProductBox itemname={"bike"} price={1000} image={""} />
        <ProductBox itemname={"bike"} price={1000} image={""} />
        <ProductBox itemname={"bike"} price={1000} image={""} />
        <ProductBox itemname={"bike"} price={1000} image={""} />
        <ProductBox itemname={"bike"} price={1000} image={""} />
        <ProductBox itemname={"bike"} price={1000} image={""} />
        <ProductBox itemname={"bike"} price={1000} image={""} />
        <ProductBox itemname={"bike"} price={1000} image={""} />
        <ProductBox itemname={"bike"} price={1000} image={""} />
      </div>

      <Footer />
    </>
  );
}
