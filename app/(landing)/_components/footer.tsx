import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

 

const Footer = () => {
  return (
    <div className="mt-1">
    <Separator className="my-4" />
        <div className="items-center w-full p-6 bg-background z-50">
<div className="justify-between row">
<div className="grid-cols-4">
&#169; 2024 steller!
</div>
<div className="grid-cols-4">
<Button variant="link">buy me a coffee</Button>
</div>
</div>
</div>
</div>
 );
};

export default Footer;