import React from "react";
import { PROFILES } from "@/lib/constants";

function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 dark:text-neutral-400 py-4">
      <div className="flex items-center justify-center gap-4">
        {Object.values(PROFILES).map((profile, index) => (
          <a
            key={profile.url}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm dark:text-neutral-600 dark:hover:text-neutral-300
            text-neutral-400 hover:text-neutral-600
            "
          >
            {profile.title}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default React.memo(Footer);
