import type { Metadata } from "next";
import Link from "next/link";
import { getProject, getProjectSlugs } from "../../../lib/project";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = await getProject(slug);
  return { title: meta.title, description: meta.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const { meta, Content } = await getProject(slug);

  return (
    <article className="pb-8">
      <Link href="/#work" className="font-mono text-xs uppercase tracking-widest text-muted hover:text-ink">
        ← All work
      </Link>
      <header className="mt-8 border-b border-rule pb-10">
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl">{meta.title}</h1>
        <p className="mt-5 text-lg text-ink/80">{meta.summary}</p>
        <dl className="mt-8 grid grid-cols-2 gap-6 font-mono text-xs sm:grid-cols-3">
          <div>
            <dt className="text-muted">Year</dt>
            <dd className="mt-1">{meta.year}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-muted">Stack</dt>
            <dd className="mt-1">{meta.stack.join(" · ")}</dd>
          </div>
        </dl>
        {(meta.links.code || meta.links.demo) && (
          <p className="mt-6 flex gap-6 text-sm">
            {meta.links.code && <a href={meta.links.code} className="text-accent underline underline-offset-4">Code ↗</a>}
            {meta.links.demo && <a href={meta.links.demo} className="text-accent underline underline-offset-4">Live demo ↗</a>}
          </p>
        )}
      </header>
      <div className="mt-4">
        <Content />
      </div>
    </article>
  );
}