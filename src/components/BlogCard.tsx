import Image from "next/image";
import Link from "next/link";

type Blog = {
  id: number | string;
  name: string;
  description: string;
  image: string;
};

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="flex flex-col items-end p-4 sm:p-6 gap-6 sm:gap-8 min-h-[400px] sm:min-h-[527px] bg-[#F3F3F3] rounded-[8px]">
      <Link href={`blogs/${blog.id}`}>
        <div className="relative w-full h-[250px] sm:h-[400px]">
          <Image
            width={380}
            height={380}
            src={blog.image}
            alt={blog.name}
            className="w-full h-full rounded-lg object-cover"
            unoptimized
          />
        </div>

        <div className="p-2 sm:p-3 text-right">
          <h3 className="font-bold text-[20px] sm:text-[32px] leading-[28px] sm:leading-[46px] text-[#1A1A1A]">
            {blog.name}
          </h3>
          <p className="font-medium text-[16px] sm:text-[20px] leading-[22px] sm:leading-[29px] text-[#414141] my-3 sm:my-5">
            {blog.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
