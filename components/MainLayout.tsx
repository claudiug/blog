import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";
interface Props {
  children: ComponentChildren;
}
const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        {/* DaisyUI  */}
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@2.38.0/dist/full.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <div class="container mx-auto">
        <main>
          {children}
        </main>
      </div>
    </>
  );
};

export { MainLayout };
