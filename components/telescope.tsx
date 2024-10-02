import '@/public/button.css';
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const TeleClick = () => {
    return (
        <Button className="button button2" size="lg" asChild>
        <Link href="/james-webb-telescope">Explore the James Webb Telescope</Link>
      </Button>
    );
};