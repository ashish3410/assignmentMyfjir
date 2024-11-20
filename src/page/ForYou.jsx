import React,{useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const FlooringSlider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);

    const flooringOptions = [
        {
          title: "Vinyl Flooring",
          imgSrc:
            "https://ayatrio-bucket.s3.ap-south-1.amazonaws.com/1723646475477_subCategoriesImage_Vinyl-carpet-flooring-Vinyl-floor-carpet-Vinyl-tiles.webp",
          alt: "Vinyl flooring",
        },
        {
          title: "Luxury Vinyl Flooring",
          imgSrc:
            "https://ayatrio-bucket.s3.ap-south-1.amazonaws.com/1723646475477_subCategoriesImage_LVT-flooring-Pvc-vinyl-flooring-sheet-Vinyl-plank-flooring.webp",
          alt: "Luxury vinyl flooring",
        },
        {
          title: "SPC Flooring",
          imgSrc:
            "https://ayatrio-bucket.s3.ap-south-1.amazonaws.com/1723646475477_subCategoriesImage_Spc-flooring-Spc-wood-flooring-Tiles-flooring.webp",
          alt: "SPC flooring",
        },
        {
          title: "Laminate Flooring",
          imgSrc:
            "https://ayatrio-bucket.s3.ap-south-1.amazonaws.com/1723646475477_subCategoriesImage_Laminate-wood-flooring-Wooden-flooring-Laminate-flooring.webp",
          alt: "Laminate flooring",
        },
        {
          title: "Engineered Wood Flooring",
          imgSrc:
            "https://ayatrio-bucket.s3.ap-south-1.amazonaws.com/1723646475522_subCategoriesImage_Engineered-wood-flooring-engineered-wood-sheet.webp",
          alt: "Engineered wood flooring",
        },
      ];
  return (
    <>
    <div className="flex flex-col overflow-hidden md:px-10 px-4">
      <div className="md:mt-20 mt-10"></div>
      <h1 className="font-semibold text-2xl pb-[20px] lg:pt-[30px] capitalize">
        <p>Flooring</p>
      </h1>
      <div className="flex items-center">
        <div className="group flex flex-row items-center justify-start gap-2 mb-4">
          <Swiper
            navigation
            spaceBetween={10}
            slidesPerView="auto"
            modules={[Navigation]}
            style={{ "--swiper-navigation-size": "24px" }}
          >
            {flooringOptions.map((option, index) => (
              <SwiperSlide
                key={index}
                style={{ maxWidth: "130px", width: "274px", marginRight: "10px" }}
              >
                <div className="cursor-pointer">
                  <div className="flex flex-col">
                    <div className="lg:mb-[12px]">
                      <img
                        src={option.imgSrc}
                        alt={option.alt}
                        width="200"
                        height="130"
                        className="w-[200px] h-[70px]"
                      />
                    </div>
                    <h2 className="text-[#333333] text-[14px] hover:underline line-clamp-1">
                      {option.title}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
    <p className="leading-2 mb-4 text-[14px] pt-[5px] text-[#484848] lg:w-[70%] line-clamp-2 lg:px-10">
      Choose Ayatrio extensive range of Vinyl flooring, SPC Flooring, Laminate flooring, Engineered Wood Flooring, Wooden flooring, Tile, and Carpet to create a cohesive look that also contributes to its comfort and practicality. 
      <span className="font-bold"> ✔20000+ Choices ✔Free Shipping ✔No Cost EMI ✔Easy Returns</span>
    </p>
    <div className="flex sticky top-0 z-[9996] bg-white py-2 sm:py-5 overflow-x-auto md:overflow-x-visible mb-[5px] md:mb-0">
      {[
        { label: "Sort", icon: "https://www.ayatrio.com/icons/downarrow.svg" },
        { label: "Styles", icon: "https://www.ayatrio.com/icons/downarrow.svg" },
        { label: "Colors", icon: "https://www.ayatrio.com/icons/downarrow.svg" },
        { label: "Offers", icon: "https://www.ayatrio.com/icons/downarrow.svg" },
        { label: "New", icon: "https://www.ayatrio.com/icons/downarrow.svg" },
        { label: "Price", icon: "https://www.ayatrio.com/icons/downarrow.svg" },
        { label: "All Filters", icon: "https://www.ayatrio.com/icons/filter.svg" },
      ].map((item, index) => (
        <div key={index} className="flex flex-col w-fit">
          <button
            className={`bg-gray-100 relative tabS border text-[14px] font-medium border-white px-[24px] py-[0.65rem] mr-2.5 rounded-full flex whitespace-nowrap ${
              item.label === "All Filters" ? "z-0" : ""
            }`}
          >
            {item.label} &nbsp;
            <img
              alt={`${item.label} icon`}
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
              className="w-4 h-4 mt-1 sm:block hidden -rotate-90"
              src={item.icon}
            />
          </button>
        </div>
      ))}
    </div>
    <div className="md:flex gap-4 border-b border-r sm:border-none px-4 lg:px-10 w-full">
      {/* Product Image Section */}
    {/* card-1   */}
    <div className="sm:w-full md:w-1/2 lg:w-1/4">
    <div
        className="relative w-fit"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Checkbox for selection */}
        <div className="absolute top-0 right-0 z-50 hidden checkbox-div">
          <input
            className="accent-black"
            type="checkbox"
            style={{ border: "2px solid red" }}
          />
        </div>
        {/* Offer and Member Price */}
        <div className="absolute top-2 left-2 z-10 flex gap-2">
          <p className="text-[12px] text-black font-normal bg-white py-[.1rem] px-[.5rem]">
            Member price
          </p>
          <p className="text-[12px] text-[#C31952] font-normal bg-white py-[.1rem] px-[.5rem]">
            10% Off*
          </p>
        </div>
        {/* Main Image */}
        <div className="relative flex h-full w-full items-center justify-center aspect-square bg-[#f5f5f5]">
          <a href="https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726528951018_image_ayatrio%2520Woodland%2520oak%2520natural%2520main.webp&w=384&q=75">
            <img
              alt="Woodland oak natural"
              loading="lazy"
              width="300"
              height="300"
              decoding="async"
              className="aspect-square w-[400px]"
              src={
                isHovered
                  ? "https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726549913068_image_Ayatrio%2520Saw%2520cut%2520oak%2520grey%2520used.webp&w=828&q=75" // Replace with the alternate image URL
                  : "https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726549913058_image_Ayatrio%2520Saw%2520cut%2520oak%2520grey%2520main.webp&w=828&q=75"
              }
            />
          </a>
          {/* Pagination Dots */}
          <span className="flex absolute bottom-[16px]">
            {[...Array(4)].map((_, index) => (
              <button
                key={index}
                className={`${
                  index === 0 ? "bg-white" : "bg-[#ccc]"
                } w-[0.4rem] h-[0.4rem] cursor-pointer rounded-[50%] mr-1`}
              />
            ))}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <p className="font-medium text-[#0152be] mb-[3px] text-[12px]">
              Ayatrio Member Favorite
            </p>
            <h3 className="text-[14px] font-semibold">Woodland oak natural</h3>
          </div>
        </div>
        <p className="font-normal mb-1 text-[14px] py-[2px]">
          2050*240*9.5 mm, Majestic /Soft oak natural / MJ3546
        </p>
        <div className="flex h-[40px] items-center justify-between mt-2">
          <div className="flex gap-1 items-end">
            <h2 className="text-3xl flex font-semibold leading-[0.5] tracking-wide">
              <span className="text-sm pt-3.5">Rs. &nbsp;</span>
              <p className="pt-3">445</p>
            </h2>
            <span className="tracking-wide text-sm">/ sqft</span>
          </div>
        </div>
        <div className="flex flex-col mb-3">
          <p className="text-[#757575] text-[12px] pt-[3px]">
            Regular price:{" "}
            <span className="font-bold text-black">
              Rs.<span className="line-through text-base">495</span>
            </span>{" "}
            (incl. of all taxes)
          </p>
        </div>
        {/* Rating */}
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src="https://www.ayatrio.com/icons/star%20full%20white.svg"
              height="15"
              width="15"
              alt="full-star"
              className="mr-[2px] hover:text-gray-600"
            />
          ))}
          <p className="text-[14px] mt-1 ml-2">(0)</p>
        </div>
        {/* Action Buttons */}
        <div className="flex my-2 items-center gap-4">
          <div className="bg-[#0152be] p-1.5 mr-2 rounded-full">
            <img
              loading="lazy"
              width="25"
              height="25"
              decoding="async"
              className="cursor-pointer rounded-full"
              src="https://www.ayatrio.com/icons/adtocart%20plush.svg"
            />
          </div>
          <a href="/login">
            <img
              alt="like icon"
              loading="lazy"
              width="25"
              height="25"
              decoding="async"
              className="cursor-pointer hover:scale-105 transition-transform"
              src="https://www.ayatrio.com/icons/like.svg"
            />
          </a>
        </div>
        {/* Delivery Information */}
        <div className="flex flex-col items-start mt-2">
          <p className="text-[#757575] text-[12px] mt-1">
            Expected delivery on &nbsp;
            <span className="text-[#0152be] font-md font-semibold">
              Wed Nov 27 2024
            </span>
          </p>
        </div>
      </div>
    </div>
    {/* card-2 */}
    <div className="w-full md:w-1/2 lg:w-1/4">
    <div
        className="relative w-fit "
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        {/* Checkbox for selection */}
        <div className="absolute top-0 right-0 z-50 hidden checkbox-div">
          <input
            className="accent-black"
            type="checkbox"
            style={{ border: "2px solid red" }}
          />
        </div>
        {/* Offer and Member Price */}
        <div className="absolute top-2 left-2 z-10 flex gap-2">
          <p className="text-[12px] text-black font-normal bg-white py-[.1rem] px-[.5rem]">
            Member price
          </p>
          <p className="text-[12px] text-[#C31952] font-normal bg-white py-[.1rem] px-[.5rem]">
            10% Off*
          </p>
        </div>
        {/* Main Image */}
        <div className="relative flex h-full w-full items-center justify-center aspect-square bg-[#f5f5f5]">
          <a href="https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726528951018_image_ayatrio%2520Woodland%2520oak%2520natural%2520main.webp&w=384&q=75">
            <img
              alt="Woodland oak natural"
              loading="lazy"
              width="sm:w-full md:w-1/2"
              height="300"
              decoding="async"
              className="aspect-square w-[400px]"
              src={
                isHovered2
                  ? "https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726916923397_image_Java%2520Wood_1.webp&w=384&q=75" // Replace with the alternate image URL
                  : "https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726916923367_image_Java%2520Wood_2.webp&w=828&q=75"
              }
            />
          </a>
          {/* Pagination Dots */}
          <span className="flex absolute bottom-[16px]">
            {[...Array(4)].map((_, index) => (
              <button
                key={index}
                className={`${
                  index === 0 ? "bg-white" : "bg-[#ccc]"
                } w-[0.4rem] h-[0.4rem] cursor-pointer rounded-[50%] mr-1`}
              />
            ))}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <p className="font-medium text-[#0152be] mb-[3px] text-[12px]">
              Ayatrio Member Favorite
            </p>
            <h3 className="text-[14px] font-semibold">Woodland oak natural</h3>
          </div>
        </div>
        <p className="font-normal mb-1 text-[14px] py-[2px]">
          2050*240*9.5 mm, Majestic /Soft oak natural / MJ3546
        </p>
        <div className="flex h-[40px] items-center justify-between mt-2">
          <div className="flex gap-1 items-end">
            <h2 className="text-3xl flex font-semibold leading-[0.5] tracking-wide">
              <span className="text-sm pt-3.5">Rs. &nbsp;</span>
              <p className="pt-3">445</p>
            </h2>
            <span className="tracking-wide text-sm">/ sqft</span>
          </div>
        </div>
        <div className="flex flex-col mb-3">
          <p className="text-[#757575] text-[12px] pt-[3px]">
            Regular price:{" "}
            <span className="font-bold text-black">
              Rs.<span className="line-through text-base">495</span>
            </span>{" "}
            (incl. of all taxes)
          </p>
        </div>
        {/* Rating */}
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src="https://www.ayatrio.com/icons/star%20full%20white.svg"
              height="15"
              width="15"
              alt="full-star"
              className="mr-[2px] hover:text-gray-600"
            />
          ))}
          <p className="text-[14px] mt-1 ml-2">(0)</p>
        </div>
        {/* Action Buttons */}
        <div className="flex my-2 items-center gap-4">
          <div className="bg-[#0152be] p-1.5 mr-2 rounded-full">
            <img
              loading="lazy"
              width="25"
              height="25"
              decoding="async"
              className="cursor-pointer rounded-full"
              src="https://www.ayatrio.com/icons/adtocart%20plush.svg"
            />
          </div>
          <a href="/login">
            <img
              alt="like icon"
              loading="lazy"
              width="25"
              height="25"
              decoding="async"
              className="cursor-pointer hover:scale-105 transition-transform"
              src="https://www.ayatrio.com/icons/like.svg"
            />
          </a>
        </div>
        {/* Delivery Information */}
        <div className="flex flex-col items-start mt-2">
          <p className="text-[#757575] text-[12px] mt-1">
            Expected delivery on &nbsp;
            <span className="text-[#0152be] font-md font-semibold">
              Wed Nov 27 2024
            </span>
          </p>
        </div>
    </div>
    </div>
    {/* card-4 */}
    <div className="md:w-1/2 lg:w-1/4">
    <div
        className="relative w-fit "
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
      >
        {/* Checkbox for selection */}
        <div className="absolute top-0 right-0 z-50 hidden checkbox-div">
          <input
            className="accent-black"
            type="checkbox"
            style={{ border: "2px solid red" }}
          />
        </div>
        {/* Offer and Member Price */}
        <div className="absolute top-2 left-2 z-10 flex gap-2">
          <p className="text-[12px] text-black font-normal bg-white py-[.1rem] px-[.5rem]">
            Member price
          </p>
          <p className="text-[12px] text-[#C31952] font-normal bg-white py-[.1rem] px-[.5rem]">
            10% Off*
          </p>
        </div>
        {/* Main Image */}
        <div className="relative flex h-full w-full items-center justify-center aspect-square bg-[#f5f5f5]">
          <a href="https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726528951018_image_ayatrio%2520Woodland%2520oak%2520natural%2520main.webp&w=384&q=75">
            <img
              alt="Woodland oak natural"
              loading="lazy"
              width="300"
              height="300"
              decoding="async"
              className="aspect-square w-[400px]"
              src={
                isHovered3
                  ? "https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726934606120_image_Serenity%2520Sunflower_1.webp&w=384&q=75" // Replace with the alternate image URL
                  : "https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726934606110_image_Serenity%2520Sunflower_2.webp&w=828&q=75"
              }
            />
          </a>
          {/* Pagination Dots */}
          <span className="flex absolute bottom-[16px]">
            {[...Array(4)].map((_, index) => (
              <button
                key={index}
                className={`${
                  index === 0 ? "bg-white" : "bg-[#ccc]"
                } w-[0.4rem] h-[0.4rem] cursor-pointer rounded-[50%] mr-1`}
              />
            ))}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <p className="font-medium text-[#0152be] mb-[3px] text-[12px]">
              Ayatrio Member Favorite
            </p>
            <h3 className="text-[14px] font-semibold">Woodland oak natural</h3>
          </div>
        </div>
        <p className="font-normal mb-1 text-[14px] py-[2px]">
          2050*240*9.5 mm, Majestic /Soft oak natural / MJ3546
        </p>
        <div className="flex h-[40px] items-center justify-between mt-2">
          <div className="flex gap-1 items-end">
            <h2 className="text-3xl flex font-semibold leading-[0.5] tracking-wide">
              <span className="text-sm pt-3.5">Rs. &nbsp;</span>
              <p className="pt-3">445</p>
            </h2>
            <span className="tracking-wide text-sm">/ sqft</span>
          </div>
        </div>
        <div className="flex flex-col mb-3">
          <p className="text-[#757575] text-[12px] pt-[3px]">
            Regular price:{" "}
            <span className="font-bold text-black">
              Rs.<span className="line-through text-base">495</span>
            </span>{" "}
            (incl. of all taxes)
          </p>
        </div>
        {/* Rating */}
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src="https://www.ayatrio.com/icons/star%20full%20white.svg"
              height="15"
              width="15"
              alt="full-star"
              className="mr-[2px] hover:text-gray-600"
            />
          ))}
          <p className="text-[14px] mt-1 ml-2">(0)</p>
        </div>
        {/* Action Buttons */}
        <div className="flex my-2 items-center gap-4">
          <div className="bg-[#0152be] p-1.5 mr-2 rounded-full">
            <img
              loading="lazy"
              width="25"
              height="25"
              decoding="async"
              className="cursor-pointer rounded-full"
              src="https://www.ayatrio.com/icons/adtocart%20plush.svg"
            />
          </div>
          <a href="/login">
            <img
              alt="like icon"
              loading="lazy"
              width="25"
              height="25"
              decoding="async"
              className="cursor-pointer hover:scale-105 transition-transform"
              src="https://www.ayatrio.com/icons/like.svg"
            />
          </a>
        </div>
        {/* Delivery Information */}
        <div className="flex flex-col items-start mt-2">
          <p className="text-[#757575] text-[12px] mt-1">
            Expected delivery on &nbsp;
            <span className="text-[#0152be] font-md font-semibold">
              Wed Nov 27 2024
            </span>
          </p>
        </div>
    </div>
    </div>
    {/* card 5 */}
    <div className="md:w-1/2 lg:w-1/4">
    <div
        className="relative w-fit "
        onMouseEnter={() => setIsHovered4(true)}
        onMouseLeave={() => setIsHovered4(false)}
      >
        {/* Checkbox for selection */}
        <div className="absolute top-0 right-0 z-50 hidden checkbox-div">
          <input
            className="accent-black"
            type="checkbox"
            style={{ border: "2px solid red" }}
          />
        </div>
        {/* Offer and Member Price */}
        <div className="absolute top-2 left-2 z-10 flex gap-2">
          <p className="text-[12px] text-black font-normal bg-white py-[.1rem] px-[.5rem]">
            Member price
          </p>
          <p className="text-[12px] text-[#C31952] font-normal bg-white py-[.1rem] px-[.5rem]">
            10% Off*
          </p>
        </div>
        {/* Main Image */}
        <div className="relative flex h-full w-full items-center justify-center aspect-square bg-[#f5f5f5]">
          <a href="https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726528951018_image_ayatrio%2520Woodland%2520oak%2520natural%2520main.webp&w=384&q=75">
            <img
              alt="Woodland oak natural"
              loading="lazy"
              width="300"
              height="300"
              decoding="async"
              className="aspect-square w-[400px]"
              src={
                isHovered4
                  ? "https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726529938817_image_Ayatrio-Classic%2520oak%2520natural-uesd.webp&w=384&q=75" // Replace with the alternate image URL
                  : "https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726528951018_image_ayatrio%2520Woodland%2520oak%2520natural%2520main.webp&w=384&q=75"
              }
            />
          </a>
          {/* Pagination Dots */}
          <span className="flex absolute bottom-[16px]">
            {[...Array(4)].map((_, index) => (
              <button
                key={index}
                className={`${
                  index === 0 ? "bg-white" : "bg-[#ccc]"
                } w-[0.4rem] h-[0.4rem] cursor-pointer rounded-[50%] mr-1`}
              />
            ))}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <p className="font-medium text-[#0152be] mb-[3px] text-[12px]">
              Ayatrio Member Favorite
            </p>
            <h3 className="text-[14px] font-semibold">Woodland oak natural</h3>
          </div>
        </div>
        <p className="font-normal mb-1 text-[14px] py-[2px]">
          2050*240*9.5 mm, Majestic /Soft oak natural / MJ3546
        </p>
        <div className="flex h-[40px] items-center justify-between mt-2">
          <div className="flex gap-1 items-end">
            <h2 className="text-3xl flex font-semibold leading-[0.5] tracking-wide">
              <span className="text-sm pt-3.5">Rs. &nbsp;</span>
              <p className="pt-3">445</p>
            </h2>
            <span className="tracking-wide text-sm">/ sqft</span>
          </div>
        </div>
        <div className="flex flex-col mb-3">
          <p className="text-[#757575] text-[12px] pt-[3px]">
            Regular price:{" "}
            <span className="font-bold text-black">
              Rs.<span className="line-through text-base">495</span>
            </span>{" "}
            (incl. of all taxes)
          </p>
        </div>
        {/* Rating */}
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src="https://www.ayatrio.com/icons/star%20full%20white.svg"
              height="15"
              width="15"
              alt="full-star"
              className="mr-[2px] hover:text-gray-600"
            />
          ))}
          <p className="text-[14px] mt-1 ml-2">(0)</p>
        </div>
        {/* Action Buttons */}
        <div className="flex my-2 items-center gap-4">
          <div className="bg-[#0152be] p-1.5 mr-2 rounded-full">
            <img
              loading="lazy"
              width="25"
              height="25"
              decoding="async"
              className="cursor-pointer rounded-full"
              src="https://www.ayatrio.com/icons/adtocart%20plush.svg"
            />
          </div>
          <a href="/login">
            <img
              alt="like icon"
              loading="lazy"
              width="25"
              height="25"
              decoding="async"
              className="cursor-pointer hover:scale-105 transition-transform"
              src="https://www.ayatrio.com/icons/like.svg"
            />
          </a>
        </div>
        {/* Delivery Information */}
        <div className="flex flex-col items-start mt-2">
          <p className="text-[#757575] text-[12px] mt-1">
            Expected delivery on &nbsp;
            <span className="text-[#0152be] font-md font-semibold">
              Wed Nov 27 2024
            </span>
          </p>
        </div>
    </div>
    </div>
    </div>
    <div className="md:flex gap-4 border-b border-r sm:border-none px-4 lg:px-10 sm:w-full mt-10">
      {/* Product Image Section */}
    {/* card-1   */}
    <div className="md:w-1/2 lg:w-1/4">
    <div
        className="relative w-fit"
        onMouseEnter={() => setIsHovered5(true)}
        onMouseLeave={() => setIsHovered5(false)}
      >
        {/* Checkbox for selection */}
        <div className="absolute top-0 right-0 z-50 hidden checkbox-div">
          <input
            className="accent-black"
            type="checkbox"
            style={{ border: "2px solid red" }}
          />
        </div>
        {/* Offer and Member Price */}
        <div className="absolute top-2 left-2 z-10 flex gap-2">
          <p className="text-[12px] text-black font-normal bg-white py-[.1rem] px-[.5rem]">
            Member price
          </p>
          <p className="text-[12px] text-[#C31952] font-normal bg-white py-[.1rem] px-[.5rem]">
            10% Off*
          </p>
        </div>
        {/* Main Image */}
        <div className="relative flex h-full w-full items-center justify-center aspect-square bg-[#f5f5f5]">
          <a href="https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726528951018_image_ayatrio%2520Woodland%2520oak%2520natural%2520main.webp&w=384&q=75">
            <img
              alt="Woodland oak natural"
              loading="lazy"
              width="300"
              height="300"
              decoding="async"
              className="aspect-square w-[400px]"
              src={
                isHovered5
                  ? "https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726528951051_image_Ayatrio%2520Woodland%2520oak%2520natural%2520used.webp&w=384&q=75" // Replace with the alternate image URL
                  : "https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726528951018_image_ayatrio%2520Woodland%2520oak%2520natural%2520main.webp&w=384&q=75"
              }
            />
          </a>
          {/* Pagination Dots */}
          <span className="flex absolute bottom-[16px]">
            {[...Array(4)].map((_, index) => (
              <button
                key={index}
                className={`${
                  index === 0 ? "bg-white" : "bg-[#ccc]"
                } w-[0.4rem] h-[0.4rem] cursor-pointer rounded-[50%] mr-1`}
              />
            ))}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <p className="font-medium text-[#0152be] mb-[3px] text-[12px]">
              Ayatrio Member Favorite
            </p>
            <h3 className="text-[14px] font-semibold">Woodland oak natural</h3>
          </div>
        </div>
        <p className="font-normal mb-1 text-[14px] py-[2px]">
          2050*240*9.5 mm, Majestic /Soft oak natural / MJ3546
        </p>
        <div className="flex h-[40px] items-center justify-between mt-2">
          <div className="flex gap-1 items-end">
            <h2 className="text-3xl flex font-semibold leading-[0.5] tracking-wide">
              <span className="text-sm pt-3.5">Rs. &nbsp;</span>
              <p className="pt-3">445</p>
            </h2>
            <span className="tracking-wide text-sm">/ sqft</span>
          </div>
        </div>
        <div className="flex flex-col mb-3">
          <p className="text-[#757575] text-[12px] pt-[3px]">
            Regular price:{" "}
            <span className="font-bold text-black">
              Rs.<span className="line-through text-base">495</span>
            </span>{" "}
            (incl. of all taxes)
          </p>
        </div>
        {/* Rating */}
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src="https://www.ayatrio.com/icons/star%20full%20white.svg"
              height="15"
              width="15"
              alt="full-star"
              className="mr-[2px] hover:text-gray-600"
            />
          ))}
          <p className="text-[14px] mt-1 ml-2">(0)</p>
        </div>
        {/* Action Buttons */}
        <div className="flex my-2 items-center gap-4">
          <div className="bg-[#0152be] p-1.5 mr-2 rounded-full">
            <img
              loading="lazy"
              width="25"
              height="25"
              decoding="async"
              className="cursor-pointer rounded-full"
              src="https://www.ayatrio.com/icons/adtocart%20plush.svg"
            />
          </div>
          <a href="/login">
            <img
              alt="like icon"
              loading="lazy"
              width="25"
              height="25"
              decoding="async"
              className="cursor-pointer hover:scale-105 transition-transform"
              src="https://www.ayatrio.com/icons/like.svg"
            />
          </a>
        </div>
        {/* Delivery Information */}
        <div className="flex flex-col items-start mt-2">
          <p className="text-[#757575] text-[12px] mt-1">
            Expected delivery on &nbsp;
            <span className="text-[#0152be] font-md font-semibold">
              Wed Nov 27 2024
            </span>
          </p>
        </div>
      </div>
    </div>
    {/* card-2 */}
    <div className="md:w-1/2 lg:w-1/4">
    <div
        className="relative w-fit "
        onMouseEnter={() => setIsHovered6(true)}
        onMouseLeave={() => setIsHovered6(false)}
      >
        {/* Checkbox for selection */}
        <div className="absolute top-0 right-0 z-50 hidden checkbox-div">
          <input
            className="accent-black"
            type="checkbox"
            style={{ border: "2px solid red" }}
          />
        </div>
        {/* Offer and Member Price */}
        <div className="absolute top-2 left-2 z-10 flex gap-2">
          <p className="text-[12px] text-black font-normal bg-white py-[.1rem] px-[.5rem]">
            Member price
          </p>
          <p className="text-[12px] text-[#C31952] font-normal bg-white py-[.1rem] px-[.5rem]">
            10% Off*
          </p>
        </div>
        {/* Main Image */}
        <div className="relative flex h-full w-full items-center justify-center aspect-square bg-[#f5f5f5]">
          <a href="https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726528951018_image_ayatrio%2520Woodland%2520oak%2520natural%2520main.webp&w=384&q=75">
            <img
              alt="Woodland oak natural"
              loading="lazy"
              width="300"
              height="300"
              decoding="async"
              className="aspect-square w-[400px]"
              src={
                isHovered6
                  ? "https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726529938817_image_Ayatrio-Classic%2520oak%2520natural-uesd.webp&w=384&q=75" // Replace with the alternate image URL
                  : "https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726528951018_image_ayatrio%2520Woodland%2520oak%2520natural%2520main.webp&w=384&q=75"
              }
            />
          </a>
          {/* Pagination Dots */}
          <span className="flex absolute bottom-[16px]">
            {[...Array(4)].map((_, index) => (
              <button
                key={index}
                className={`${
                  index === 0 ? "bg-white" : "bg-[#ccc]"
                } w-[0.4rem] h-[0.4rem] cursor-pointer rounded-[50%] mr-1`}
              />
            ))}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <p className="font-medium text-[#0152be] mb-[3px] text-[12px]">
              Ayatrio Member Favorite
            </p>
            <h3 className="text-[14px] font-semibold">Woodland oak natural</h3>
          </div>
        </div>
        <p className="font-normal mb-1 text-[14px] py-[2px]">
          2050*240*9.5 mm, Majestic /Soft oak natural / MJ3546
        </p>
        <div className="flex h-[40px] items-center justify-between mt-2">
          <div className="flex gap-1 items-end">
            <h2 className="text-3xl flex font-semibold leading-[0.5] tracking-wide">
              <span className="text-sm pt-3.5">Rs. &nbsp;</span>
              <p className="pt-3">445</p>
            </h2>
            <span className="tracking-wide text-sm">/ sqft</span>
          </div>
        </div>
        <div className="flex flex-col mb-3">
          <p className="text-[#757575] text-[12px] pt-[3px]">
            Regular price:{" "}
            <span className="font-bold text-black">
              Rs.<span className="line-through text-base">495</span>
            </span>{" "}
            (incl. of all taxes)
          </p>
        </div>
        {/* Rating */}
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src="https://www.ayatrio.com/icons/star%20full%20white.svg"
              height="15"
              width="15"
              alt="full-star"
              className="mr-[2px] hover:text-gray-600"
            />
          ))}
          <p className="text-[14px] mt-1 ml-2">(0)</p>
        </div>
        {/* Action Buttons */}
        <div className="flex my-2 items-center gap-4">
          <div className="bg-[#0152be] p-1.5 mr-2 rounded-full">
            <img
              loading="lazy"
              width="25"
              height="25"
              decoding="async"
              className="cursor-pointer rounded-full"
              src="https://www.ayatrio.com/icons/adtocart%20plush.svg"
            />
          </div>
          <a href="/login">
            <img
              alt="like icon"
              loading="lazy"
              width="25"
              height="25"
              decoding="async"
              className="cursor-pointer hover:scale-105 transition-transform"
              src="https://www.ayatrio.com/icons/like.svg"
            />
          </a>
        </div>
        {/* Delivery Information */}
        <div className="flex flex-col items-start mt-2">
          <p className="text-[#757575] text-[12px] mt-1">
            Expected delivery on &nbsp;
            <span className="text-[#0152be] font-md font-semibold">
              Wed Nov 27 2024
            </span>
          </p>
        </div>
    </div>
    </div>
    {/* card-4 */}
    <div className="md:w-1/2 lg:w-1/4">
    <div
        className="relative w-fit "
        onMouseEnter={() => setIsHovered7(true)}
        onMouseLeave={() => setIsHovered7(false)}
      >
        {/* Checkbox for selection */}
        <div className="absolute top-0 right-0 z-50 hidden checkbox-div">
          <input
            className="accent-black"
            type="checkbox"
            style={{ border: "2px solid red" }}
          />
        </div>
        {/* Offer and Member Price */}
        <div className="absolute top-2 left-2 z-10 flex gap-2">
          <p className="text-[12px] text-black font-normal bg-white py-[.1rem] px-[.5rem]">
            Member price
          </p>
          <p className="text-[12px] text-[#C31952] font-normal bg-white py-[.1rem] px-[.5rem]">
            10% Off*
          </p>
        </div>
        {/* Main Image */}
        <div className="relative flex h-full w-full items-center justify-center aspect-square bg-[#f5f5f5]">
          <a href="https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726528951018_image_ayatrio%2520Woodland%2520oak%2520natural%2520main.webp&w=384&q=75">
            <img
              alt="Woodland oak natural"
              loading="lazy"
              width="300"
              height="300"
              decoding="async"
              className="aspect-square w-[400px]"
              src={
                isHovered7
                  ? "https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726529938817_image_Ayatrio-Classic%2520oak%2520natural-uesd.webp&w=384&q=75" // Replace with the alternate image URL
                  : "https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726528951018_image_ayatrio%2520Woodland%2520oak%2520natural%2520main.webp&w=384&q=75"
              }
            />
          </a>
          {/* Pagination Dots */}
          <span className="flex absolute bottom-[16px]">
            {[...Array(4)].map((_, index) => (
              <button
                key={index}
                className={`${
                  index === 0 ? "bg-white" : "bg-[#ccc]"
                } w-[0.4rem] h-[0.4rem] cursor-pointer rounded-[50%] mr-1`}
              />
            ))}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <p className="font-medium text-[#0152be] mb-[3px] text-[12px]">
              Ayatrio Member Favorite
            </p>
            <h3 className="text-[14px] font-semibold">Woodland oak natural</h3>
          </div>
        </div>
        <p className="font-normal mb-1 text-[14px] py-[2px]">
          2050*240*9.5 mm, Majestic /Soft oak natural / MJ3546
        </p>
        <div className="flex h-[40px] items-center justify-between mt-2">
          <div className="flex gap-1 items-end">
            <h2 className="text-3xl flex font-semibold leading-[0.5] tracking-wide">
              <span className="text-sm pt-3.5">Rs. &nbsp;</span>
              <p className="pt-3">445</p>
            </h2>
            <span className="tracking-wide text-sm">/ sqft</span>
          </div>
        </div>
        <div className="flex flex-col mb-3">
          <p className="text-[#757575] text-[12px] pt-[3px]">
            Regular price:{" "}
            <span className="font-bold text-black">
              Rs.<span className="line-through text-base">495</span>
            </span>{" "}
            (incl. of all taxes)
          </p>
        </div>
        {/* Rating */}
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src="https://www.ayatrio.com/icons/star%20full%20white.svg"
              height="15"
              width="15"
              alt="full-star"
              className="mr-[2px] hover:text-gray-600"
            />
          ))}
          <p className="text-[14px] mt-1 ml-2">(0)</p>
        </div>
        {/* Action Buttons */}
        <div className="flex my-2 items-center gap-4">
          <div className="bg-[#0152be] p-1.5 mr-2 rounded-full">
            <img
              loading="lazy"
              width="25"
              height="25"
              decoding="async"
              className="cursor-pointer rounded-full"
              src="https://www.ayatrio.com/icons/adtocart%20plush.svg"
            />
          </div>
          <a href="/login">
            <img
              alt="like icon"
              loading="lazy"
              width="25"
              height="25"
              decoding="async"
              className="cursor-pointer hover:scale-105 transition-transform"
              src="https://www.ayatrio.com/icons/like.svg"
            />
          </a>
        </div>
        {/* Delivery Information */}
        <div className="flex flex-col items-start mt-2">
          <p className="text-[#757575] text-[12px] mt-1">
            Expected delivery on &nbsp;
            <span className="text-[#0152be] font-md font-semibold">
              Wed Nov 27 2024
            </span>
          </p>
        </div>
    </div>
    </div>
    {/* card 5 */}
    <div className="md:w-1/2 lg:w-1/4">
    <div
        className="relative w-fit "
        onMouseEnter={() => setIsHovered8(true)}
        onMouseLeave={() => setIsHovered8(false)}
      >
        {/* Checkbox for selection */}
        <div className="absolute top-0 right-0 z-50 hidden checkbox-div">
          <input
            className="accent-black"
            type="checkbox"
            style={{ border: "2px solid red" }}
          />
        </div>
        {/* Offer and Member Price */}
        <div className="absolute top-2 left-2 z-10 flex gap-2">
          <p className="text-[12px] text-black font-normal bg-white py-[.1rem] px-[.5rem]">
            Member price
          </p>
          <p className="text-[12px] text-[#C31952] font-normal bg-white py-[.1rem] px-[.5rem]">
            10% Off*
          </p>
        </div>
        {/* Main Image */}
        <div className="relative flex h-full w-full items-center justify-center aspect-square bg-[#f5f5f5]">
          <a href="https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726528951018_image_ayatrio%2520Woodland%2520oak%2520natural%2520main.webp&w=384&q=75">
            <img
              alt="Woodland oak natural"
              loading="lazy"
              width="300"
              height="300"
              decoding="async"
              className="aspect-square w-[400px]"
              src={
                isHovered8
                  ? "https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726529938817_image_Ayatrio-Classic%2520oak%2520natural-uesd.webp&w=384&q=75" // Replace with the alternate image URL
                  : "https://www.ayatrio.com/_next/image?url=https%3A%2F%2Fayatrio-bucket.s3.ap-south-1.amazonaws.com%2F1726528951018_image_ayatrio%2520Woodland%2520oak%2520natural%2520main.webp&w=384&q=75"
              }
            />
          </a>
          {/* Pagination Dots */}
          <span className="flex absolute bottom-[16px]">
            {[...Array(4)].map((_, index) => (
              <button
                key={index}
                className={`${
                  index === 0 ? "bg-white" : "bg-[#ccc]"
                } w-[0.4rem] h-[0.4rem] cursor-pointer rounded-[50%] mr-1`}
              />
            ))}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <p className="font-medium text-[#0152be] mb-[3px] text-[12px]">
              Ayatrio Member Favorite
            </p>
            <h3 className="text-[14px] font-semibold">Woodland oak natural</h3>
          </div>
        </div>
        <p className="font-normal mb-1 text-[14px] py-[2px]">
          2050*240*9.5 mm, Majestic /Soft oak natural / MJ3546
        </p>
        <div className="flex h-[40px] items-center justify-between mt-2">
          <div className="flex gap-1 items-end">
            <h2 className="text-3xl flex font-semibold leading-[0.5] tracking-wide">
              <span className="text-sm pt-3.5">Rs. &nbsp;</span>
              <p className="pt-3">445</p>
            </h2>
            <span className="tracking-wide text-sm">/ sqft</span>
          </div>
        </div>
        <div className="flex flex-col mb-3">
          <p className="text-[#757575] text-[12px] pt-[3px]">
            Regular price:{" "}
            <span className="font-bold text-black">
              Rs.<span className="line-through text-base">495</span>
            </span>{" "}
            (incl. of all taxes)
          </p>
        </div>
        {/* Rating */}
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src="https://www.ayatrio.com/icons/star%20full%20white.svg"
              height="15"
              width="15"
              alt="full-star"
              className="mr-[2px] hover:text-gray-600"
            />
          ))}
          <p className="text-[14px] mt-1 ml-2">(0)</p>
        </div>
        {/* Action Buttons */}
        <div className="flex my-2 items-center gap-4">
          <div className="bg-[#0152be] p-1.5 mr-2 rounded-full">
            <img
              loading="lazy"
              width="25"
              height="25"
              decoding="async"
              className="cursor-pointer rounded-full"
              src="https://www.ayatrio.com/icons/adtocart%20plush.svg"
            />
          </div>
          <a href="/login">
            <img
              alt="like icon"
              loading="lazy"
              width="25"
              height="25"
              decoding="async"
              className="cursor-pointer hover:scale-105 transition-transform"
              src="https://www.ayatrio.com/icons/like.svg"
            />
          </a>
        </div>
        {/* Delivery Information */}
        <div className="flex flex-col items-start mt-2">
          <p className="text-[#757575] text-[12px] mt-1">
            Expected delivery on &nbsp;
            <span className="text-[#0152be] font-md font-semibold">
              Wed Nov 27 2024
            </span>
          </p>
        </div>
    </div>
    </div>
    </div>
    <div className="flex justify-center items-center gap-5">
      <button className="lg:mt-20 mt-6 bg-gray-200 border border-gray-400 py-2 px-4 rounded-full font-bold mb-10">More</button>
      <button className="lg:mt-20 mt-6 bg-gray-200 border border-gray-400 py-2 px-4 rounded-full font-bold mb-10">More</button>
      <button className="lg:mt-20 mt-6 bg-gray-200 border border-gray-400 py-2 px-4 rounded-full font-bold mb-10">More</button>
      <button className="lg:mt-20 mt-6 bg-gray-200 border border-gray-400 py-2 px-4 rounded-full font-bold mb-10">More</button>
      <button className="lg:mt-20 mt-6 bg-gray-200 border border-gray-400 py-2 px-4 rounded-full font-bold mb-10">More</button>
      <button className="lg:mt-20 mt-6 bg-gray-200 border border-gray-400 py-2 px-4 rounded-full font-bold mb-10">More</button>
      <button className="lg:mt-20 mt-6 bg-gray-200 border border-gray-400 py-2 px-4 rounded-full font-bold mb-10">More</button>
    </div>
    </>
  );
};

export default FlooringSlider;
