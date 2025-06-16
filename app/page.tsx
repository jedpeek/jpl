import { draftMode } from "next/headers";

import MoreStories from "./more-stories";

import { getAllPosts } from "@/lib/api";
import HeroPost from "./comps/HeroPost";
import Hero from "./comps/hero";
import LoanInfo from "./comps/loans";

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div className="container mx-auto px-5">
      <Hero />
      <LoanInfo />
      <MoreStories morePosts={morePosts} />
    </div>
  );
}
