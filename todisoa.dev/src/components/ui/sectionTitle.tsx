type Props = {
  subtitle?: string;
  title: string;
};

export default function SectionTitle({
  subtitle,
  title,
}: Props) {
  return (
    <div className="mb-16 text-center">
      {subtitle && (
        <p className="text-red-500 font-semibold mb-2">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl md:text-5xl font-bold">
        {title}
      </h2>
    </div>
  );
}