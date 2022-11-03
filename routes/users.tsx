import { Handlers, PageProps } from "$fresh/server.ts";
import { MainLayout } from "../components/MainLayout.tsx";

const url = "https://api.github.com/users";

interface Reddit {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
}

export const handler: Handlers<Reddit[] | []> = {
  async GET(_, ctx) {
    const resp = await fetch(url);
    if (resp.status === 404) {
      return ctx.render([]);
    }
    const reddits: Reddit[] = await resp.json();
    return ctx.render(reddits);
  },
};

export default function Users({ data }: PageProps<Reddit[] | []>) {
  return (
    <MainLayout>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Login</th>
              <th>avatar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person, index) => (
              <tr key={index}>
                <th>{person.id}</th>
                <th>{person.name}</th>
                <td>{person.login}</td>
                <td>{person.avatar_url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}
