import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="z-50 w-full border-t border-[#151F28] bg-background px-4 py-3 mt-1">
      <div className="flex flex-col gap-2 items-center justify-between md:flex-row">
        {/* Left: Copyright */}
        <Button variant="link" size="default" className="text-sm">
          &#169; 2024 Celestral!
        </Button>

        {/* Right: Links */}
        <div className="flex flex-col gap-1 items-center md:flex-row md:gap-x-3 text-muted-foreground">
          <Button variant="ghost" size="sm">
            Terms of Use
          </Button>
          <Button variant="ghost" size="sm">
            Buy me a Coffee
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
