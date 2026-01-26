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
    about: z.object({
      social: z.array(
        z.object({
          icon: z.enum(["github", "linkedin", "x"]),
          href: z.string(),
        })
      ),
      description: z.string(),
      skills: z.array(
        z.object({
          section: z.string(),
          skills: z.array(
            z.object({
              name: z.string(),
            })
          ),
        })
      ),
    }),
    projects: z.array(
      z.object({
        featured_image: z.object({
          url: z.string(),
          width: z.number(),
          height: z.number(),
          alt: z.string(),
        }),
        featured: z.boolean(),
        name: z.string(),
        description: z.string(),
        technologies: z.array(z.string()),
        site: z.string().url().optional(),
        repo: z.string().url().optional(),
      })
    ),
    contact: z.object({
      heading: z.string(),
      description: z.string(),
      social: z.array(
        z.object({
          icon: z.enum(["github", "linkedin", "x"]),
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
