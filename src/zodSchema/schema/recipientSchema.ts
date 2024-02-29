import { z } from 'zod'

const recipientSchema = z.object({
  name: z.string().min(1, { message: '名字必填' }),
  cellphone: z.string().regex(/(^[09]{2}\d{8}$)/g, { message: '手機號碼格式錯誤' }),
  address: z.object({
    city: z.union([z.literal(-1), z.string()]).refine((value) => value !== -1, {
      message: '縣市必填'
    }),
    district: z.union([z.literal(-1), z.string()]).refine((value) => value !== -1, {
      message: '區域必填'
    }),
    street: z.string().min(1, { message: '地址必填' })
  }),
  timeToReceive: z.union([z.literal('unset'), z.literal('morning'), z.literal('afternoon')]),
  gender: z.union([z.literal('unset'), z.literal('male'), z.literal('female')]),
  email: z.string().email('信箱格式錯誤'),
  note: z.string()
})

export { recipientSchema }