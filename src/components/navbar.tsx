import Link from "next/link";
import ThemeToggler from "./theme-toggler";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const GITHUB_URL = "https://github.com/scott-tarnowsky/scotts-hashnode-blog";

export default function Navbar() {
  return (
    <div>
      <div className="w-full border-b mb-5">
        <div className="max-w-7xl w-full px-3 xl:p-0 my-5 mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">
            <Link href="/">A cool blog</Link>
          </div>
          <div className="flex items-center gap-5">
            <ThemeToggler />
            <Button>
              <Link
                href={GITHUB_URL}
                target="_blank"
                className="flex items-center gap-2"
              >
                <GitHubLogoIcon /> GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
