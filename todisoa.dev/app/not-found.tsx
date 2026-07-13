import Link from 'next/link';

export const metadata = {
  title: 'Page introuvable | Todisoa Herinjanahary',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-transparent font-sans flex items-center justify-center px-4">
      <div className="glass max-w-lg w-full px-8 py-12 text-center">
        <p className="text-yellow-400 font-bold text-sm tracking-widest uppercase mb-4">
          Erreur 404
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Page introuvable</h1>

        <p className="text-gray-300 mb-10">
          Looks like you’ve followed a broken link or entered a URL that doesn’t exist on this
          site.
        </p>

        <Link
          href="/"
          className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:brightness-95 transition"
        >
          Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}
