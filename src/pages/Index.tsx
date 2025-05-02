import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Video, Mic, FileText } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}

      {/* Desktop version - shown on large screens and up */}
      <section className="hidden md:block relative py-20 bg-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-lightBlue/20 z-0"></div>
        <div className="container relative z-10 flex items-center justify-between gap-10">
          <img
            className="max-w-xs rounded-xl shadow-lg"
            src="/img/test.jpeg"
            alt="aaa"
          />
          <div className="flex flex-col items-center text-center space-y-8 max-w-xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight gradient-text">
              Create Stunning Social Media <br /> Reels in Minutes with{" "}
              <span className="text-[#F48D7E] underline">your voice</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl relative">
              Upload your photo, record your voice, add a script, and let AI
              create professional social media reels with your appearance and
              voice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 relative">
              <Button size="lg" asChild>
                <Link
                  target="_blank"
                  to="https://docs.google.com/forms/d/e/1FAIpQLSeovzY15GVO_XJQUhxJlSxRyBmlGfvnfa9i1nNvOYsNCxpm-g/viewform"
                >
                 Join wait list 
                </Link>
              </Button>
            </div>
          </div>
          <video
            className="max-w-xs rounded-xl shadow-lg"
            src="/img/test.mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
      </section>

      {/* Mobile version - only shown on small screens */}
      <section className="block md:hidden relative py-20 bg-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-lightBlue/20 z-0"></div>
        <div className="container relative z-10 flex flex-col items-center text-center gap-8">
          {/* Title */}
          <h1 className="text-2xl font-bold tracking-tight gradient-text max-w-xl">
            Create Stunning Social <br /> Media Reels in Minutes with{" "}
            <span className="text-[#F48D7E] underline">your voice</span>
          </h1>

          {/* Image */}
          <div className="flex justify-start mt-4">
            <img
              className="w-[60%] max-w-xs rounded-xl shadow-lg"
              src="/img/test.jpeg"
              alt="aaa"
            />
          </div>
          <div className="pe-20">
            <img className="rotate-12" src="/img/toRight.png" alt="arrow" />
          </div>

          {/* Video */}
          <div className="flex justify-end mb-4">
            <video
              className="w-[60%] max-w-xs rounded-xl shadow-lg"
              src="/img/test.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>

          {/* Description and Button */}
          <div className="flex flex-col items-center space-y-8 max-w-xl">
            <p className="text-lg text-muted-foreground">
              Upload your photo, record your voice, add a script, and let AI
              create professional social media reels with your appearance and
              voice
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link
                  target="_blank"
                  to="https://docs.google.com/forms/d/e/1FAIpQLSeovzY15GVO_XJQUhxJlSxRyBmlGfvnfa9i1nNvOYsNCxpm-g/viewform"
                >
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
            <p className="text-muted-foreground">
              Create professional social media reels in just 4 simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card space-y-4">
              <div className="p-3 rounded-full bg-brand-purple/10">
                <Video className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-medium">1. Upload Your Media</h3>
              <p className="text-muted-foreground">
                Upload a photo or short video of yourself that will be used as
                the base for your reel
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card space-y-4">
              <div className="p-3 rounded-full bg-brand-purple/10">
                <Mic className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-medium">2. Clone Your Voice</h3>
              <p className="text-muted-foreground">
                Record a short audio sample so our AI can learn and replicate
                your unique voice
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card space-y-4">
              <div className="p-3 rounded-full bg-brand-purple/10">
                <FileText className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-medium">3. Add Your Script</h3>
              <p className="text-muted-foreground">
                Type or paste your script that will be converted into a
                professional reel with subtitles
              </p>
            </div>
          </div>
          {/* <div className="flex justify-center mt-16">
            <Button size="lg" asChild>
              <Link to="/studio">Create Your First Reel</Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight">
              Powerful Features
            </h2>
            <p className="text-muted-foreground">
              Everything you need to create professional social media content
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg border bg-card space-y-3">
              <h3 className="text-xl font-medium">
                🤖 AI-Powered Video Generation
              </h3>
              <p className="text-muted-foreground">
                Our advanced AI transforms your photo or video into a dynamic,
                animated reel that looks professionally produced
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card space-y-3">
              <h3 className="text-xl font-medium">
                🗣️ Voice Cloning Technology
              </h3>
              <p className="text-muted-foreground">
                Generate speech that sounds exactly like you with our
                state-of-the-art voice synthesis technology
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card space-y-3">
              <h3 className="text-xl font-medium">📝 Automatic Subtitles</h3>
              <p className="text-muted-foreground">
                Every reel comes with professionally styled subtitles that match
                your content perfectly
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card space-y-3">
              <h3 className="text-xl font-medium">😮 One-Click Sharing</h3>
              <p className="text-muted-foreground">
                Easily download or share your finished reels directly to all
                major social media platforms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-purple text-white">
        <div className="container">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to Transform Your Social Media Presence?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl">
              Join thousands of content creators who are saving time and
              producing high-quality social media content
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="outline"
                className="hover:text-white border-white hover:bg-white/10 text-brand-purple"
                asChild
              >
                <Link to="/studio">Start Creating Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:text-white border-white hover:bg-white/10 text-brand-purple"
                asChild
              >
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div> */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
