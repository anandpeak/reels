import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold gradient-text">Azi.ai</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Хиймэл оюунд тулгуурлан хэдхэн минутанд <br /> мэргэжлийн сошиал
              медиа бичлэг үүсгээрэй.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-3">Бүтээгдэхүүн</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Студи
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Үнэ төлбөр
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Компанид</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Бидний тухай
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Блог
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Холбоо барих
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Хууль эрхзүйн</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Нууцлалын бодлого
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Үйлчилгээний нөхцөл
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ReelCraft. Бүх эрх хуулиар
            хамгаалагдсан.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
