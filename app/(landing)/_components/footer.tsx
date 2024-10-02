// import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";


const Footer = () => {
  return (
    <footer className="z-50 flex w-full items-center justify-between bg-background p-6 dark:bg-[#1F1F1F] mt-2">
        {/* <Separator className="my-4" /> */}
        <Button variant="link" size="default">
        &#169; 2024 steller!
        </Button>
      <div className="flex w-full items-center gap-x-2 text-muted-foreground md:ml-auto md:justify-end">
        <Button variant="ghost" size="default">
          Terms of Use
        </Button>
        <Button variant="ghost" size="default">
        Buy me a Coffee
        </Button>
      </div>
    </footer>
  );
};
export default Footer;



// const Footer = () => {
//   return (
//     <div className="mt-1">
//     <Separator className="my-4" />
//         <div className="items-center w-full p-6 bg-background z-50">
// <div className="justify-between row">
// <div className="grid-cols-4">
// &#169; 2024 steller!
// </div>
// <div className="grid-cols-4">
// <Button variant="link">buy me a coffee</Button>
// </div>
// </div>
// </div>
// </div>
//  );
// };