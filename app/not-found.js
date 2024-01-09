import Link from "next/link";
import { LinkButton } from "./components/ui/Button";

function NotFound() {
  return (
    <div className="relative flex w-full flex-col">
      <h2 className="text-xl">Not Found</h2>
      <p className="py-4">This link might be broken, deleted, or moved. Nevertheless, there’s nothing to see here..</p>
      <div className="flex items-center justify-start">
        <Link href="/">
          <LinkButton link="/">Back to Home</LinkButton>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
