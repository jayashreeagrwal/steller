import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";


const Heroes = () => {
return (
    // <h1>hello, welcome to steller</h1>
    <div>
      <h2>Today, I'd like to go from this to this</h2>
    <div className="grid gap-4 col-span-6 items-center py-4">
            <Input
              id="name"
              placeholder="Guess any star..."
            />
            <Button variant="outline" size="default">
                Guess
            </Button>
          </div>
          </div>
);
        };
export default Heroes;