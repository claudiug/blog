import { MainLayout } from "../components/MainLayout.tsx";

const Index = () => {
  return (
    <MainLayout>
      <>
        <p class="border border-red-500 ">
          Hello, today is: {new Date().toDateString()}
        </p>
        <button class="btn">Button</button>
      </>
    </MainLayout>
  );
};

export default Index;
