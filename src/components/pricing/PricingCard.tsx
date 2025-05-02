
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  features: PricingFeature[];
  popular?: boolean;
  buttonText?: string;
  onSubscribe: () => void;
}

const PricingCard = ({
  name,
  description,
  price,
  features,
  popular = false,
  buttonText = "Subscribe",
  onSubscribe,
}: PricingCardProps) => {
  return (
    <Card 
      className={cn(
        "flex flex-col", 
        popular && "border-brand-purple shadow-lg shadow-brand-purple/10"
      )}
    >
      {popular && (
        <div className="bg-brand-purple text-white py-1 px-3 text-xs font-medium tracking-wider text-center uppercase">
          Most Popular
        </div>
      )}
      
      <CardHeader>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "Free" && <span className="text-muted-foreground">/month</span>}
        </div>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check 
                className={cn(
                  "h-5 w-5 mr-2 flex-shrink-0", 
                  feature.included ? "text-brand-purple" : "text-muted"
                )} 
              />
              <span 
                className={cn(
                  "text-sm",
                  !feature.included && "text-muted-foreground line-through"
                )}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={onSubscribe}
          className={cn(
            "w-full", 
            popular ? "bg-brand-purple hover:bg-brand-purple/90" : ""
          )}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
