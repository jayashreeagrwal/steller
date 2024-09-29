import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";


const Heroes = () => {
return (
    // <h1>hello, welcome to steller</h1>
    <div className="grid gap-4 py-4">
          <div className="grid grid-cols-6 items-center gap-4">

            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
            <Button variant="outline" size="lg" asChild>
                Guess
            </Button>
          </div></div>
);
        };
export default Heroes;