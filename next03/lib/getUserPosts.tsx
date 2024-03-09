import React from "react";

export default async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {
      //cache: 'force-cache', // by default 
      // cache: 'no-store',
      next: {
        revalidate: 60
      }
    }
  );

  if (!res.ok) {
    // throw new Error("failed to fetch user");
    return undefined
  }

  console.log(`getUserPosts `, userId);
  

  return res.json();
}
