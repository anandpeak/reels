import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Video, Mic, FileText } from "lucide-react";
import { useEffect, useRef } from "react";

const Index = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((e) => {
          console.warn("Autoplay with sound failed:", e);
        });
      }
      window.removeEventListener("click", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <Layout>
      {/* Hero Section */}

      {/* Desktop version - shown on large screens and up */}
      <section
        style={{ backgroundImage: `url('/img/back.jpg')` }}
        className="hidden md:block relative py-20 bg-grid"
      >
        {/* <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-lightBlue/20 z-0"></div> */}
        <div className="container relative z-10 flex items-center justify-between gap-10">
          <img
            className="max-w-xs rounded-xl shadow-lg"
            src="/img/test.jpg"
            alt="aaa"
          />
          <div className="flex flex-col items-center text-center space-y-8 max-w-xl mx-auto">
            <h1
              className="text-4xl font-bold tracking-tight text-white"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
            >
              Хором бүрт сэтгэл татам <br /> сошиал медиа бичлэгийг{" "}
              <span className="text-[#F48D7E] underline">
                өөрийн хоолойгоороо
              </span>{" "}
              бий болгоорой
            </h1>

            <p
              className="text-xl text-white max-w-2xl relative"
              style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}
            >
              Фото зургийг өөрийнхөөрөө оруулж, дуугаа бичиж, скрипт нэмээд,
              хиймэл оюун таны дүр төрх, хоолойг ашиглан мэргэжлийн бичлэг
              үүсгэнэ.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 relative">
              <Button size="lg" asChild>
                <Link
                  target="_blank"
                  to="https://docs.google.com/forms/d/e/1FAIpQLSeovzY15GVO_XJQUhxJlSxRyBmlGfvnfa9i1nNvOYsNCxpm-g/viewform"
                >
                  Нэвтрэх
                </Link>
              </Button>
            </div>
          </div>
          <video
            ref={videoRef}
            className="max-w-xs rounded-xl shadow-lg cursor-pointer"
            src="/img/test.mp4"
            playsInline
            loop
            onClick={togglePlay}
          />
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
              loop
              playsInline
            ></video>
          </div>

          {/* Description and Button */}
          <div className="flex flex-col items-center space-y-8 max-w-xl">
            <p className="text-lg text-muted-foreground">
              Өөрийн зургаа байршуулаад, дуу хоолойгоо бичиж, текст нэмээд,
              хиймэл оюунд өөрийн төрх, дуу хоолойгоор мэргэжлийн түвшний сошиал
              медиа бичлэг үүсгүүлээрэй.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link
                  target="_blank"
                  to="https://docs.google.com/forms/d/e/1FAIpQLSeovzY15GVO_XJQUhxJlSxRyBmlGfvnfa9i1nNvOYsNCxpm-g/viewform"
                >
                  Эхлэх{" "}
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
            <h2 className="text-3xl font-bold tracking-tight">
              Хэрхэн ажилладаг вэ?
            </h2>
            <p className="text-muted-foreground">
              Зөвхөн 3 энгийн алхмаар мэргэжлийн сошиал медиа бичлэгүүдийг
              бүтээнэ үү
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card space-y-4">
              <div className="p-3 rounded-full bg-brand-purple/10">
                <Video className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-medium">
                1. Өөрийн Медиагаа Байршуулах
              </h3>
              <p className="text-muted-foreground">
                Таны бичлэгийн үндсэн суурь болох өөрийн зураг эсвэл богино
                видеог байршуулаарай
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card space-y-4">
              <div className="p-3 rounded-full bg-brand-purple/10">
                <Mic className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-medium">
                2. Дуу Хоолойгоо Хуулаарай
              </h3>
              <p className="text-muted-foreground">
                Хиймэл оюун таны өвөрмөц дуу хоолойг суралцаж дуурайхаар богино
                аудио бичлэг хийгээрэй
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card space-y-4">
              <div className="p-3 rounded-full bg-brand-purple/10">
                <FileText className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-medium">3. Текстээ Нэмэх</h3>
              <p className="text-muted-foreground">
                Мэргэжлийн бичлэг болон гарчиг болгон хувиргах текстээ бичиж
                эсвэл хуулж оруулна уу
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
            <h2 className="text-3xl font-bold tracking-tight">Онцлогууд</h2>
            <p className="text-muted-foreground">
              Мэргэжлийн сошиал медиа контент бүтээхэд шаардлагатай бүх зүйл
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg border bg-card space-y-3">
              <h3 className="text-xl font-medium">
                🤖 Хиймэл Оюунт Видео Үүсгэх
              </h3>
              <p className="text-muted-foreground">
                Манай дэвшилтэт хиймэл оюун таны зургийг эсвэл видеог мэргэжлийн
                түвшний хөдөлгөөнт, амьдралтай бичлэг болгон хувиргана
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card space-y-3">
              <h3 className="text-xl font-medium">
                🗣️ Дуу Хоолойн Хууламж Технологи
              </h3>
              <p className="text-muted-foreground">
                Манай хамгийн сүүлийн үеийн дуу хоолойн нийлэгжүүлэлтийн
                технологиор яг таны дуу хоолой мэт яриа үүсгээрэй
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card space-y-3">
              <h3 className="text-xl font-medium">📝 Автомат Гарчиг</h3>
              <p className="text-muted-foreground">
                Бүх бичлэгүүд мэргэжлийн загвартай, таны контентод яг тохирсон
                гарчигтай ирдэг
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card space-y-3">
              <h3 className="text-xl font-medium">😮 Нэг товчоор Хуваалцах</h3>
              <p className="text-muted-foreground">
                Бэлэн болсон бичлэгээ амархан татаж авах эсвэл голлох сошиал
                медиа платформуудад шууд хуваалцаарай
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
              Сошиал Медиа Дэлгэцээ Өөрчлөхөд Бэлэн үү?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl">
              Цаг хэмнэн, өндөр чанартай сошиал медиа контент бүтээж буй мянга
              мянган контент бүтээгчдийн нэг болоорой
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
