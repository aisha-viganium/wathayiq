
import Image from "next/image";
import Link from "next/link";

type Service = {
  id: number | string;
  name: string;
  description: string;
  image: string;
  tags: string[];
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-col items-end pt-8 pb-8 pr-6 pl-6 sm:pr-[29px] sm:pl-[29px] gap-8 min-h-[527px] bg-[#F3F3F3] rounded-[8px]">
      <Link href={`services/${service.id}`}>
        <div className="relative w-full min-h-[250px] sm:min-h-[380px]">
          <Image
            width={380}
            height={380}
            src={service.image}
            alt={service.name}
            className="w-full h-full rounded-[8px] object-cover"
            unoptimized
          />
        </div>

        <div className="p-3 text-right">
          <h3 className="font-bold text-[24px] sm:text-[32px] leading-[34px] sm:leading-[46px] text-[#414141]">
            {service.name}
          </h3>
          <p className="font-medium text-[16px] sm:text-[20px] leading-[19px] sm:leading-[29px] text-[#414141] my-5">
            {service.description}
          </p>

          {service.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {service.tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex justify-center items-center py-2 px-3 min-w-[120px] sm:min-w-[170px] min-h-[40px] sm:min-h-[47px] border-2 border-[#1A1A1A] rounded-[37px] font-medium text-[14px] sm:text-[16px] text-[#414141]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
