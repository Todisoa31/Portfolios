export default function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-50 bg-[#111827]" />

      <div className="fixed -top-50 -left-25 w-125 h-125 bg-yellow-500/20 blur-[150px] rounded-full -z-40" />

      <div className="fixed -bottom-50 -right-25 w-125 h-125 bg-red-500/20 blur-[150px] rounded-full -z-40" />
    </>
  );
}