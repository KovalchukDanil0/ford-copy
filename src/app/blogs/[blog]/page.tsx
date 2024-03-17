import { Spinner } from "flowbite-react";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

type PropsType = {
  params: { blog: string };
};

function LoadingElm() {
  return (
    <div className="flex h-20 items-center justify-center">
      <Spinner />
    </div>
  );
}

export default function BlogPage(props: Readonly<PropsType>) {
  const DynamicBlog = dynamic(
    () => import(`./${props.params.blog}.mdx`).catch(() => notFound()),
    {
      ssr: false,
      loading: () => LoadingElm(),
    },
  );
  return <DynamicBlog />;
}
