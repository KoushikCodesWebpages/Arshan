import { theme } from "@/lib/theme";

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className={`text-5xl font-bold ${theme.text.brand} mb-6`}>Our Mission</h1>
        <p className={`${theme.text.muted} max-w-3xl mx-auto text-lg`}>
          We empower SMBs by bridging the gap between European regulatory standards 
          and global technical excellence.
        </p>
      </section>
    </main>
  );
}