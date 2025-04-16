// app/article/[id]/page.tsx
import { getArticle } from "@/lib/actions/getArticle.action";
import { getAllArticles } from "@/lib/actions/getAllArticles.action";
import { createArticle } from "@/lib/actions/createArticle.action";

type Props = {
  params: { id: string };
};

export default async function ArticlePage({ params }: Props) {
  
  // Fetch the single article for the provided ID
  const articleRes = await getArticle(params.id);

  // Fetch all articles for listing
  const allArticlesRes = await getAllArticles();

  // If the specific article isn't found, show an error message.
  if (!articleRes.success) {
    return <div>Article not found.</div>;
  }

  const article = articleRes.data;
  const allArticles = allArticlesRes.success ? allArticlesRes.data : [];

  return (
    <main style={{ maxWidth: 800, margin: "auto", padding: 40 }}>
      {/* Article Details */}
      <section>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
          {article.title}
        </h1>
        <p style={{ color: "#555", margin: "1rem 0" }}>
          {article.subheading}
        </p>
        <div style={{ marginTop: 30 }}>
          <h2>Intro</h2>
          <p>{article.intro}</p>
          <h2>{article.subheadingTitle}</h2>
          <p>{article.subheadingTwo}</p>
          <h2>{article.subheadingTitleTwo}</h2>
          <p>{article.extra}</p>
          <h2>{article.conclusionTitle}</h2>
          <p>{article.conclusion}</p>
          <h3>{article.extraHeading}</h3>
          <ul>
            {article.articleArrObj?.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <hr style={{ margin: "2rem 0" }} />

      {/* List All Articles */}
      <section>
        <h2>All Articles</h2>
        {allArticles.length > 0 ? (
          <ul>
            {allArticles.map((art: any) => (
              <li key={art.$id}>
                {art.title} (ID: {art.$id})
              </li>
            ))}
          </ul>
        ) : (
          <p>No articles found.</p>
        )}
      </section>

      <hr style={{ margin: "2rem 0" }} />

      {/* Create New Article */}
      <section>
        <h2>Create New Article</h2>
        {/* 
          When the form is submitted, it will call the createArticle server action.
          After creation, you may consider redirecting or revalidating (not shown here).
        */}
        <form action={createArticle}>
          <button type="submit">Create Article</button>
        </form>
      </section>
    </main>
  );
}
