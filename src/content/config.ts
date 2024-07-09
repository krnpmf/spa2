import { defineCollection, z } from "astro:content";

const staff = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      url: z.string(),
      image: image().refine((img) => img.height / img.width != 1.25, {
        message: "Profile image must be of 1.25 aspect ratio!",
      }),
      position: z.string(),
      contact: z.string(),
      officeHours: z.string(),
      group: z.array(z.enum(["p", "tv", "pv"])),
      order: z.number().optional(),
    }),
});

export const collections = {
  staff,
};
