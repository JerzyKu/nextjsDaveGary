import getAllUsers from "@/lib/getAllUsers";
import { log } from "console";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function Users() {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  log('hello :0 ')

  const content = (
    <section>
      <h2>
        <Link href={"/"}>Back to Home</Link>
      </h2>
      <hr />
      {users.map((user) => {
        return <p key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
        </p>;
      })}
    </section>
  );

  return (
    <>
      <h1>Users</h1>
      {content}
    </>
  );
}
