import React from "react";
import { getGoodsDeliverAtom } from "~/atoms";
import { useAtom } from "jotai";

type Props = {};

const OrderPage = (props: Props) => {
  const [goodsDeliver] = useAtom(getGoodsDeliverAtom);
  console.log("🚀 ~ OrderPage ~ goodsDeliver:", goodsDeliver);
  return (
    <div>
      <div>`物流名稱：${goodsDeliver.logistics.logisticsName}`</div>
      <div>`運費：${goodsDeliver.logistics.freight}`</div>

      <div>
        <div>商品：</div>
        {/* {goodsDeliver.cartItems.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))} */}
      </div>

      <div>`總計：${goodsDeliver.subtotal}`</div>
      <div>
        <div>`姓名：${goodsDeliver.recipient.name}`</div>
        <div>`手機：${goodsDeliver.recipient.cellphone}`</div>
        <div>
          `地址：${goodsDeliver.recipient.address.city} $
          {goodsDeliver.recipient.address.district} $
          {goodsDeliver.recipient.address.street}`
        </div>
        <div>`方便收貨時間：${goodsDeliver.recipient.timeToReceive}`</div>
        <div>`性別：${goodsDeliver.recipient.gender}`</div>
        <div>`電子信箱：${goodsDeliver.recipient.email}`</div>
        <div>`備註：${goodsDeliver.recipient.note}`</div>
      </div>
    </div>
  );
};

export default OrderPage;
