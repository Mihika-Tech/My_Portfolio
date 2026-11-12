import fs from "node:fs";
import path from "node:path";
import { z } from "zod";

// The single source of truth for what a project's metadata must contain.
// If an MDX file is missing a field or has the wrong type, the build fails.
export const ProjectMeta = z.object({
  title: z.string(),
  summary: z.string().max(200),
  stack: z.array(z.string()).min(1),
  year: z.number().int(),
  order: z.number().int(), // controls position on the home page
  featured: z.boolean(),
  links: z
    .object({
      code: z.url().optional(),
      demo: z.url().optional(),
    })
    .default({}),
});

export type Project = z.infer<typeof ProjectMeta> & { slug: string };

const WORK_DIR = path.join(process.cwd(), "content", "work");

export function getProjectSlugs(): string[] {
  return fs
    .readdirSync(WORK_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getProject(slug: string) {
  const mod = await import(`../content/work/${slug}.mdx`);
  const result = ProjectMeta.safeParse(mod.meta);
  if (!result.success) {
    throw new Error(`Invalid meta in content/work/${slug}.mdx:\n${z.prettifyError(result.error)}`);
  }
  return { meta: { ...result.data, slug } as Project, Content: mod.default };
}

export async function getProjects(): Promise<Project[]> {
  const all = await Promise.all(getProjectSlugs().map(async (s) => (await getProject(s)).meta));
  return all.sort((a, b) => a.order - b.order);
}