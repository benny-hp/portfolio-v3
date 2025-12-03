import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    seo: z.object({
      title: z.string(),
      description: z.string(),
      og: z.object({
        title: z.string(),
        description: z.string(),
        type: z.string(),
        url: z.string(),
      }),
      twitter: z.object({
        card: z.string(),
        title: z.string(),
        description: z.string(),
      }),
    }),
    hero: z.object({
      heading: z.string(),
      subheading: z.string(),
      text: z.string(),
      cta: z.array(
        z.object({
          icon: z.enum(["projects", "download"]),
          label: z.string(),
          href: z.string(),
        })
      ),
    }),
  }),
});

const globals = defineCollection({
  type: "data",
  schema: z.object({
    header: z.object({
      navLinks: z.array(
        z.object({
          label: z.string(),
          href: z.string(),
        })
      ),
      cta: z.object({
        icon: z.enum(["download", "projects"]),
        href: z.string(),
        label: z.string(),
      }),
    }),
  }),
});

export const collections = { globals, pages };
