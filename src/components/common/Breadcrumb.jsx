
import Link from "next/link";
import Container from "./Container";

export default function Breadcrumb({ items = [] }) {
  return (
    <div className="absolute bottom-0 left-0 w-full backdrop-blur-sm border-t border-gray-800 py-3 text-xs md:text-sm text-gray-400 z-10">
      <Container className="flex items-center justify-center gap-2">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>

        {items.map((item, index) => (
          <React.Fragment key={index}>
            <span className="text-gray-500">&gt;</span>

            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#EAB308] font-medium">
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </Container>
    </div>
  );
}
