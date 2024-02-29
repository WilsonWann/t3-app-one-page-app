export default function numberFormat(number: number) {
  return new Intl.NumberFormat('zh-TW',
    {
      style: 'currency',
      currency: 'NTD',
      maximumFractionDigits: 0,
      currencyDisplay: 'symbol'
    }
  ).format(number)
}