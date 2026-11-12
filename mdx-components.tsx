import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const components: MDXComponents = {
  h2: (props) => <h2 className="mt-14 font-serif text-2xl" {...props} />,
  h3: (props) => <h3 className="mt-10 text-lg font-semibold" {...props} />,
  p: (props) => <p className="mt-5 leading-7" {...props} />,
  ul: (props) => <ul className="mt-5 list-disc space-y-2 pl-6 leading-7" {...props} />,
  ol: (props) => <ol className="mt-5 list-decimal space-y-2 pl-6 leading-7" {...props} />,
  a: ({ href = "", ...props }) =>
    href.startsWith("/") ? (
      <Link href={href} className="text-accent underline underline-offset-4" {...props} />
    ) : (
      <a href={href} className="text-accent underline underline-offset-4" target="_blank" rel="noreferrer" {...props} />
    ),
  blockquote: (props) => (
    <blockquote className="mt-6 border-l-2 border-accent pl-5 text-muted" {...props} />
  ),
  code: (props) => <code className="rounded bg-rule/60 px-1.5 py-0.5 font-mono text-[0.9em]" {...props} />,
  pre: (props) => (
    <pre className="mt-6 overflow-x-auto rounded-lg border border-rule p-4 font-mono text-sm [&_code]:bg-transparent [&_code]:p-0" {...props} />
  ),
  table: (props) => (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props) => <th className="border-b border-ink/30 py-2 pr-4 text-left font-medium" {...props} />,
  td: (props) => <td className="border-b border-rule py-2 pr-4 align-top" {...props} />,
  hr: () => <hr className="my-12 border-rule" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}