import dynamic from "next/dynamic";

type PropsType = {
  params: { blog: string };
};

export default function BlogPage(props: Readonly<PropsType>) {
  const DynamicBlog = dynamic(() => import(`./${props.params.blog}.mdx`), {
    ssr: false,
  });

  return <DynamicBlog />;
}
