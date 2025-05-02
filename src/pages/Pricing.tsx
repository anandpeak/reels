
import Layout from "@/components/layout/Layout";
import PricingCard from "@/components/pricing/PricingCard";
import { useToast } from "@/components/ui/use-toast";

const Pricing = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (plan: string) => {
    // In a real app, this would connect to a payment provider
    toast({
      title: `${plan} Subscription`,
      description: "This would redirect to payment processing in a real application.",
    });
  };

  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">Choose Your Plan</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the perfect plan for your content creation needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <PricingCard
              name="Free"
              description="Perfect for trying out the platform"
              price="Free"
              features={[
                { text: "3 reels per month", included: true },
                { text: "720p video quality", included: true },
                { text: "Basic subtitles", included: true },
                { text: "ReelCraft watermark", included: true },
                { text: "Priority generation", included: false },
                { text: "Custom branding", included: false },
                { text: "Advanced editing tools", included: false },
              ]}
              buttonText="Get Started"
              onSubscribe={() => handleSubscribe("Free")}
            />
            
            {/* Pro Plan */}
            <PricingCard
              name="Pro"
              description="For content creators and influencers"
              price="$19.99"
              features={[
                { text: "25 reels per month", included: true },
                { text: "1080p video quality", included: true },
                { text: "Advanced subtitles", included: true },
                { text: "No watermark", included: true },
                { text: "Priority generation", included: true },
                { text: "Custom branding", included: false },
                { text: "Advanced editing tools", included: false },
              ]}
              popular={true}
              onSubscribe={() => handleSubscribe("Pro")}
            />
            
            {/* Business Plan */}
            <PricingCard
              name="Business"
              description="For companies and professional creators"
              price="$49.99"
              features={[
                { text: "Unlimited reels", included: true },
                { text: "4K video quality", included: true },
                { text: "Premium subtitles", included: true },
                { text: "No watermark", included: true },
                { text: "Priority generation", included: true },
                { text: "Custom branding", included: true },
                { text: "Advanced editing tools", included: true },
              ]}
              onSubscribe={() => handleSubscribe("Business")}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              All plans include 24/7 support. Prices shown are in USD.
              <br />
              Need a custom plan? <a href="#" className="text-brand-purple hover:underline">Contact us</a> for enterprise options.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
