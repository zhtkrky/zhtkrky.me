import React from "react";
import { PROFILES } from "@/lib/constants";

function Footer() {
  return (
    <div className="mb-4 flex items-center justify-center text-sm">
      <div className="flex gap-4">
        {Object.values(PROFILES).map((profile, index) => (
          <a
            key={profile.url}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-neutral-600 dark:hover:text-neutral-300
            text-neutral-400 hover:text-neutral-600
            "
          >
            {profile.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default React.memo(Footer);
