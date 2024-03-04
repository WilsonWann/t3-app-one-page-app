import addBlurredDataUrls from "~/lib/getBase64";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
import type { ImagesResults } from "~/types";

export const shoppingItemRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.prisma.shoppingItem.findMany({
        where: {
          itemAvailableQuantity: {
            gt: 0
          }
        }
      });
    }),

  getBase64Images: publicProcedure
    .query(async ({ ctx }) => {
      const allProducts = await ctx.prisma.shoppingItem.findMany({
        where: {
          itemAvailableQuantity: {
            gt: 0
          }
        }
      });
      if (!allProducts || allProducts.length === 0) return []
      const allImages = {
        photos: allProducts.map((product) => (
          {
            src: product.imageSrc,
            alt: product.imageAlt,
            blurredDataUrl: ""
          }
        ))
      } satisfies ImagesResults
      return addBlurredDataUrls(allImages)
    })
  // create: protectedProcedure
  //   .input(z.object({ name: z.string().min(1) }))
  //   .mutation(async ({ ctx, input }) => {
  //     // simulate a slow db call
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     return ctx.prisma.shoppingItem.create({
  //       data: {
  //         name: input.name,
  //         createdBy: { connect: { id: ctx.session.user.id } },
  //       },
  //     });
  //   }),

  // getLatest: protectedProcedure.query(({ ctx }) => {
  //   return ctx.prisma.shoppingItem.findFirst({
  //     orderBy: { createdAt: "desc" },
  //     where: { createdBy: { id: ctx.session.user.id } },
  //   });
  // }),

  // getSecretMessage: protectedProcedure.query(() => {
  //   return "you can now see this secret message!";
  // }),
});
