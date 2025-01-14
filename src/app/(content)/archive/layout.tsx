import React, { ReactNode } from "react";

function ArchiveLayout({
  archive,
  latest,
}: {
  archive: ReactNode;
  latest: ReactNode;
}) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="latest-filter">{latest}</section>
    </div>
  );
}
 
export default ArchiveLayout;
