export const categoryMenuList = [
  {
    id: 1,
    title: "দুগ্ধ / ডিম",
    src: "/dairy-eggs icon.png",
    href: "/shop/smart-phones"
  },
  {
    id: 2,
    title: "মাছ / সামুদ্রিক খাবার",
    src: "/fish-seafood icon.png",
    href: "/shop/tablets"
  },
  {
    id: 3,
    title: "তাজা / উৎপাদন",
    src: "/fresh-produce icon.png",
    href: "/shop/mouses"
  },
  {
    id: 4,
    title: "শস্য / শস্য",
    src: "/grains-cereals icon.png",
    href: "/shop/cameras"
  },
  {
    id: 5,
    title: "মাংস / মুরগি",
    src: "/meat-poultry icon.png",
    href: "/shop/watches"
  },
  {
    id: 6,
    title: "জৈব পণ্য",
    src: "/organic-products icon.png",
    href: "/shop/laptops"
  },
  {
    id: 7,
    title: "প্যাকেটজাত পণ্য",
    src: "/packaged-goods icon.png",
    href: "/shop/computers"
  },
  {
    id: 8,
    title: "পোস্ট হার্ভেস্ট টুলস",
    src: "/post-harvest-tools icon.png",
    href: "/shop/printers"
  },
  {
    id: 9,
    title: "বীজ/সার",
    src: "/seeds-fertilizers icon.png",
    href: "/shop/earbuds"
  },
  {
    id: 10,
    title: "মশলা/মশলা",
    src: "/spices-condiments icon.png",
    href: "/shop/headphones"
  },
];

export const incentives = [
  {
    name: "বিনামূল্যে শিপিং",
    description:
      "আমাদের শিপিং সম্পূর্ণ বিনামূল্যে এবং এটি আমাদের গ্রাহকদের জন্য সম্পূর্ণ ভাল।",
    imageSrc: "/shipping icon.png",
  },
  {
    name: "24/7 গ্রাহক সহায়তা",
    description:
      "আপনার যেকোনো প্রশ্নের উত্তর দিতে আমাদের সহায়তা দিনরাত কাজ করছে।",
    imageSrc: "/support icon.png",
  },
  {
    name: "দ্রুত শপিং কার্ট",
    description:
      "আমাদের অতি দ্রুত কেনাকাটার অভিজ্ঞতা রয়েছে এবং আপনি এটি উপভোগ করবেন।",
    imageSrc: "/fast shopping icon.png",
  },
];

export const navigation = {
  sale: [
    { name: "ছাড়", href: "#" },
    { name: "খবর", href: "#" },
    { name: "রেজিস্টার ডিসকাউন্ট", href: "#" },
  ],
  about: [
    { name: "কৃষি বাজার সম্পর্কে", href: "#" },
    { name: "আমাদের সাথে কাজ করুন", href: "#" },
    { name: "কোম্পানির প্রোফাইল", href: "#" },
  ],
  buy: [
    { name: "কৃষি বাজার লয়ালটি কার্ড", href: "#" },
    { name: "ব্যবহারের শর্তাবলী", href: "#" },
    { name: "গোপনীয়তা নীতি", href: "#" },
    { name: "অভিযোগ", href: "#" },
    { name: "অংশীদার", href: "#" },
  ],
  help: [
    { name: "যোগাযোগ", href: "#" },
    { name: "কৃষি বাজারে কিভাবে কিনবেন", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

export const isValidNameOrLastname = (input: string) => {
  // Simple name or lastname regex format check
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(input);
};

export const isValidEmailAddressFormat = (input: string) => {
  // simple email address format check
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(input);
};

export const isValidCardNumber = (input: string) => {
  // Remove all non-digit characters
  const cleanedInput = input.replace(/[^0-9]/g, "");
  // test for credit card number between 13 and 19 characters
  const regex = /^\d{13,19}$/;
  return regex.test(cleanedInput);
}

export const isValidCreditCardExpirationDate = (input: string) => {
  // simple expiration date format check
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  return regex.test(input);
};

export const isValidCreditCardCVVOrCVC = (input: string) => {
  // simple CVV or CVC format check
  const regex = /^[0-9]{3,4}$/;
  return regex.test(input);
};
