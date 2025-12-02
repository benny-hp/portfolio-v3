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
    }),
    "engagement-models": z
      .object({
        heading: z.string(),
        models: z.array(
          z.object({
            heading: z.string(),
            icon: z.string(),
            benefits: z.array(
              z.object({
                icon: z.string(),
                text: z.string(),
              })
            ),
          })
        ),
      })
      .nullable(),
    approach: z
      .object({
        heading: z.string(),
        description: z.string(),
      })
      .nullable(),
    capabilities: z.array(
      z.object({
        icon: z.string(),
        heading: z.string(),
        description: z.string(),
        "background-color": z.string(),
      })
    ),
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
        icon: z.object({
          url: z.string(),
          alt: z.string(),
        }),
        href: z.string(),
        label: z.string(),
      }),
    }),
  }),
});

export const collections = { globals };
