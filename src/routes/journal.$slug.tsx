import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { posts } from "@/lib/nursery-data";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — R.K Nursery Journal` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:image", content: loaderData.post.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="container-rk py-24 text-center">
      <h1 className="font-display text-3xl text-primary">Post not found</h1>
      <Link to="/journal" className="mt-4 inline-block text-primary underline">Back to journal</Link>
    </div>
  ),
  component: Post,
});

function Post() {
  const { post } = Route.useLoaderData();
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <article className="container-rk max-w-3xl pt-12 pb-24 md:pt-16">
        <Link to="/journal" className="text-sm text-muted-foreground hover:text-primary">← Journal</Link>
        <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">{post.date} · {post.readTime}</p>
        <h1 className="mt-3 text-4xl text-primary md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
        <img src={post.image} alt={post.title} loading="lazy" width={1200} height={800} className="mt-10 aspect-[16/9] w-full rounded-2xl object-cover" />
        <div className="prose prose-lg mt-10 max-w-none text-foreground/80">
          <p className="whitespace-pre-line leading-relaxed">{post.body}</p>
        </div>
      </article>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
