import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts: BlogPost[] = getSortedPostsData();

  const content = posts.map((post) => {
    return <ListItem post={post} key={post.id}/>;
  });

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
      <ul className="w-full">{content}</ul>
    </section>
  );
}