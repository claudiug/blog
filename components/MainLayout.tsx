import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";
interface Props {
  children: ComponentChildren;
}
const MainLayout = ({ children }: Props) => {
  return (
    <>
      <html data-theme="acid" />
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
          <Header />
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
};

export { MainLayout };
