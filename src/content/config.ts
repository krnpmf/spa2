import { defineCollection, z } from "astro:content";
import { type ImageMetadata } from "astro";

const ZodPerson = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string(),
  position: z.string(),
  contact: z.string(),
  officeHours: z.string(),
  group: z.array(z.enum(["p", "tv", "pv"])),
  order: z.number(),
});

export type Person = z.infer<typeof ZodPerson> & { image: ImageMetadata };

const staff = defineCollection({
  type: "content",
  schema: ({ image }) => ZodPerson.extend({ image: image() }),
});

export const collections = {
  staff,
};
