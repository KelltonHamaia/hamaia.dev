"use client";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(async () => {
  const lib = await import("react-github-calendar")
  return lib.GitHubCalendar
},
  { ssr: false },
);

export const Commits = () => {
  return (
    <section className="my-8">
      <GitHubCalendar
        username="KelltonHamaia"
        colorScheme="dark"
        labels={{
          totalCount: '{{count}} contribuições em {{year}}',
          legend: {
            less: 'Menos',
            more: 'Mais',
          },
        }}
      />
    </section>
  );
};
