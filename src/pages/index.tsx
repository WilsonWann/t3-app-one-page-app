"use client";

import ShoppingArea from "../components/ShoppingArea";
import MarketingBlock from "../components/MarketingBlock";
import type { ReactElement } from "react";
import { useAtom } from "jotai";
import { productModalOpenAtom, shoppingListAtom } from "~/atoms";
import ProductModal from "../components/ProductModal";
import CartArea from "../components/CartArea";
import Promotion from "../components/Promotion";
// import { useSession } from "next-auth/react";
import ImageArea from "../components/ImageArea";
import VideoArea from "../components/VideoArea";
import type { NextPageWithLayout } from "./_app";
import RootLayout from "../components/rootLayout";
import { api } from "~/utils/api";

const Home: NextPageWithLayout = () => {
  const { data: shoppingList, isLoading } = api.shoppingItem.getAll.useQuery();
  const [, setShoppingList] = useAtom(shoppingListAtom);
  // useSession();
  const [modalOpen] = useAtom(productModalOpenAtom);

  if (isLoading) return <p>Loading...</p>;
  if (!shoppingList) return <p>No data</p>;
  setShoppingList(shoppingList);
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between">
    <>
      {/* react-lite-youtube video */}
      <Promotion
        title={
          "🎄聖誕佳節滿800元超商免運費！滿1500元宅配免運,加入會員好處多~紅利點數可折抵現金喔!!"
        }
      />
      <VideoArea />
      {/* images */}
      <ImageArea />
      {/* marketing paragraph */}
      <MarketingBlock
        title={"優惠折扣"}
        label={"優惠折扣"}
        content={
          " ～ 🎄聖誕佳節滿800元超商免運費！滿1500元宅配免運,加入會員好處多~紅利點數可折抵現金喔!!"
        }
      />

      <ShoppingArea data={shoppingList} />
      <ProductModal active={modalOpen} />

      <CartArea />

      <div></div>
      {/* member login */}
      {/* next auth */}

      {/* any question: fb chat button*/}
      <div></div>
    </>
    // </main>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;
