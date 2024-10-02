import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";


const Heroes = () => {
return (
    // <h1>hello, welcome to steller</h1>
    <div>
      <h1>Today, I'd like to go from this to this</h1>
    <div className="items-center py-4">
            <Input
              id="name"
              placeholder="Guess any star..."
            />
            <Button variant="outline" size="default">
                Guess
            </Button>
          </div>
          {/* Get a Hint */}
          <h2>Get a Hint (0/3)</h2>

          </div>
);
        };
export default Heroes;