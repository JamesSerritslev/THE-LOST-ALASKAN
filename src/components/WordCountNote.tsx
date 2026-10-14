export function WordCountNote({
  target,
  label = "SEO target",
}: {
  target: string;
  label?: string;
}) {
  return (
    <p className="word-count-note" role="note">
      {label}: {target}
    </p>
  );
}
