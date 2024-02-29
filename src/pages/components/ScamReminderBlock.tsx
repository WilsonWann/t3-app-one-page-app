import React from 'react'
import { Block, BlockContent } from './FormBlock'
type Props = {}

const ScamReminderBlock = (props: Props) => {
  return (
    <Block>
      <BlockContent>
        <div>
          <p>
            【詐騙猖獗，小心詐騙】本店絕不會另外通知消費者交易失敗，或是付款錯誤，一些奇怪理由，要您去提款機做任何取消交易或轉帳的動作，請小心不要受騙。
          </p>
          <p>會員點數介紹:</p>
          <p>
            加入會員消費可獲得點數回饋,可於下筆訂單折抵使用,50元可獲得一點,每筆訂單折抵上限50點=50元,點數期限為一年,每年會員生日還會免費獲得50點,於每月1日發送點數,無加入會員,點數回饋視同放棄!!
          </p>
          <p>!!超商限重!!一張單最多8罐與1罐XO醬共9罐,10罐以上請選擇宅配運送,滿1500元宅配免運</p>
          <p>@請依序操作至發票設定功能,才是完整訂單完成喔!! 電話客服時間為下午三點（04）20202020</p>
        </div>
      </BlockContent>
    </Block>
  )
}

export default ScamReminderBlock
