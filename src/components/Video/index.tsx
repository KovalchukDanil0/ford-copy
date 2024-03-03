interface Video {
  videoID: string;
}

export default function Video({ videoID }: Readonly<Video>) {
  const src = `https://www.youtube.com/embed/${videoID}?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com`;

  return (
    <div className="relative w-full overflow-hidden pt-[56.25%]">
      <iframe
        title="Weather forecasts, nowcasts and history"
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
        src={src}
        allowFullScreen
      />
    </div>
  );
}
