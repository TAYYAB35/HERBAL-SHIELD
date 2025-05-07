export interface Product {
  id: number
  slug: string
  name: {
    en: string
    ur: string
  }
  shortDescription: {
    en: string
    ur: string
  }
  description: {
    en: string
    ur: string
  }
  excerpt: {
    en: string
    ur: string
  }
  image: string
  linkAry: Array<{ link: string }>
  imgAry: Array<{ blink: string, bText: string , alink: string, aText: string,overlayText : string  }>,
  disadvantages: {
    en: Array<{ title: string; description: string }>
    ur: Array<{ title: string; description: string }>
  }
  advantages: {
    en: Array<{ title: string; description: string }>
    ur: Array<{ title: string; description: string }>
  }
  faqs: {
    en: Array<{ question: string; answer: string }>
    ur: Array<{ question: string; answer: string }>
  }
  testimonials: {
    en: Array<{
      name: string
      avatar?: string
      rating: number
      text: string
      location: string
    }>
    ur: Array<{
      name: string
      avatar?: string
      rating: number
      text: string
      location: string
    }>
  }
}

export const products: Product[] = [
  {
    id: 1,
    slug: "pesticide-control",
    name: {
      en: "PlantGuard , SafeSpray",
      ur: "PlantGuard , SafeSpray",
    },
    shortDescription: {
      en: "Keep pests out — the natural way, with PlantGuard",
      ur: "پلانٹ گارڈ کے ساتھ کیڑوں سے نجات حاصل کریں، وہ بھی قدرتی انداز میں۔",
    },
    description: {
      en: "Say goodbye to synthetic pesticides—PlantGuard uses plant-based protection that is safe for your garden, your family, and the earth.",
      ur: "مصنوعی کیمیائی زہروں کو خیرباد کہہ دیں — پلانٹ گارڈ پودوں پر مبنی ایسا محفوظ تحفظ فراہم کرتا ہے جو آپ کے باغ، آپ کے خاندان، اور زمین کے لیے محفوظ ہے",
    },
    excerpt: {
      en: "Plants nervous system response towards insects/pes",
      ur:
        "یہ ویڈیو دیکھیں اور جانیں کہ پودے کیڑے یا آفات کے حملے پر کس طرح ردعمل ظاہر کرتے ہیں۔ پودوں کا اعصابی نظام کیڑوں اور آفات کے خلاف کس طرح کام کرتا ہے",
    },
    image: "/images/pesticide-product.jpg",
    linkAry: [{ link: "https://www.youtube.com/embed/LeLSyU_iI9o?si=FSCKwuk3unKdWx2X" }],
    imgAry: [
      { blink: "/images/extracted_images/slide2_image1.jpg",overlayText : 'Citrus (سنترہ، لیموں وغیرہ)', bText: 'Before', alink: "/images/extracted_images/slide2_image2.jpg", aText: 'After' },
      { blink: "/images/extracted_images/slide3_image3.png",overlayText : 'Citrus (سنترہ، لیموں وغیرہ)', bText: 'Untreated control', alink: "/images/extracted_images/slide3_image4.png", aText: 'Treated, after one spray' },
      { blink: "/images/extracted_images/slide4_image5.png",overlayText : 'Maize (مکئی)', bText: 'Untreated control', alink: "/images/extracted_images/slide4_image6.png", aText: 'Treated, after one spray' },
    ],
    disadvantages: {
      en: [
        {
          title: "Chemical Residue",
          description: "Chemical pesticides leave harmful residues on crops that can be ingested by consumers.",
        },
        {
          title: "Environmental Damage",
          description: "Synthetic pesticides contaminate soil, water, and air, harming ecosystems.",
        },
        {
          title: "Pest Resistance",
          description: "Pests develop resistance to chemical pesticides over time, requiring stronger chemicals.",
        },
        {
          title: "Harm to Beneficial Insects",
          description:
            "Chemical pesticides kill beneficial insects like bees and butterflies that are essential for pollination.",
        },
      ],
      ur: [
        {
          title: "کیمیائی بقایا",
          description:
            "کیمیائی کیڑے مار ادویات فصلوں پر نقصان دہ بقایا چھوڑتی ہیں جو صارفین کے ذریعے کھائے جا سکتے ہیں۔",
        },
        {
          title: "ماحولیاتی نقصان",
          description:
            "مصنوعی کیڑے مار ادویات مٹی، پانی اور ہوا کو آلودہ کرتی ہیں، جس سے ماحولیاتی نظام کو نقصان پہنچتا ہے۔",
        },
        {
          title: "کیڑوں کی مزاحمت",
          description:
            "کیڑے وقت کے ساتھ کیمیائی کیڑے مار ادویات کے خلاف مزاحمت پیدا کرتے ہیں، جس کے لیے مضبوط کیمیکلز کی ضرورت ہوتی ہے۔",
        },
        {
          title: "فائدہ مند کیڑوں کو نقصان",
          description:
            "کیمیائی کیڑے مار ادویات شہد کی مکھیوں اور تتلیوں جیسے فائدہ مند کیڑوں کو مار دیتی ہیں جو گرد افشانی کے لیے ضروری ہیں۔",
        },
      ],
    },
    advantages: {
      en: [
        {
          title: "100% Organic",
          description: "Made from natural plant extracts with no synthetic chemicals.",
        },
        {
          title: "Safe for Beneficial Insects",
          description: "Targets harmful pests while preserving bees, butterflies, and other beneficial insects.",
        },
        {
          title: "No Harmful Residue",
          description: "Leaves no toxic residue on plants or in the soil.",
        },
        {
          title: "Sustainable Solution",
          description: "Environmentally friendly and supports sustainable farming practices.",
        },
        {
          title: "Long-lasting Protection",
          description: "Provides extended protection without the need for frequent reapplication.",
        },
      ],
      ur: [
        {
          title: "100% قدرتی",
          description: "مصنوعی کیمیکلز کے بغیر قدرتی پودوں کے عرق سے بنایا گیا ہے۔",
        },
        {
          title: "فائدہ مند کیڑوں کے لیے محفوظ",
          description:
            "شہد کی مکھیوں، تتلیوں اور دیگر فائدہ مند کیڑوں کو محفوظ رکھتے ہوئے نقصان دہ کیڑوں کو نشانہ بناتا ہے۔",
        },
        {
          title: "کوئی نقصان دہ بقایا نہیں",
          description: "پودوں یا مٹی میں کوئی زہریلا بقایا نہیں چھوڑتا ہے۔",
        },
        {
          title: "پائیدار حل",
          description: "ماحول دوست اور پائیدار کاشتکاری کے طریقوں کی حمایت کرتا ہے۔",
        },
        {
          title: "طویل مدتی تحفظ",
          description: "بار بار دوبارہ استعمال کی ضرورت کے بغیر وسیع تحفظ فراہم کرتا ہے۔",
        },
      ],
    },
    faqs: {
      en: [
        {
          question: "How often should I apply the organic pesticide?",
          answer:
            "For preventive measures, apply once every 2-3 weeks. If you already have a pest problem, apply once every 7-10 days until the issue is resolved, then return to the preventive schedule.",
        },
        {
          question: "What pests does it control?",
          answer:
            "Our organic pesticide is effective against aphids, jassid, caterpillars, whiteflies, spider mites, and many other common garden pests.",
        },
        {
          question: "Does it work as well as chemical pesticides?",
          answer:
            "Our organic solution may take slightly longer to show results compared to harsh chemicals, but it provides effective control without the harmful side effects. For severe infestations, multiple applications (2-3) may be necessary.",
        },
      ],
      ur: [
        {
          question: "مجھے نامیاتی کیڑے مار دوا کتنی بار لگانی چاہیے؟",
          answer:
            "احتیاطی تدابیر کے طور پر، ہر 2-3 ہفتے بعد استعمال کریں۔ اگر پہلے سے کیڑوں کا مسئلہ ہے تو ہر 7-10 دن بعد لگائیں جب تک مسئلہ حل نہ ہو جائے، پھر دوبارہ احتیاطی شیڈول پر واپس آجائیں۔",
        },
        {
          question: "یہ کون سے کیڑوں کو قابو میں رکھتی ہے؟",
          answer:
            "ہماری نامیاتی کیڑے مار دوا ایفڈز، جیسڈ، کیٹرپلرز، وائٹ فلائز، اسپائیڈر مائٹس اور دیگر عام باغی کیڑوں کے خلاف مؤثر ہے۔",
        },
        {
          question: "کیا یہ کیمیائی کیڑے مار دوا کی طرح مؤثر ہے؟",
          answer:
            "ہماری نامیاتی دوا کے اثرات ظاہر ہونے میں کیمیکل کی نسبت تھوڑا وقت لگ سکتا ہے، لیکن یہ بغیر نقصان دہ اثرات کے مؤثر تحفظ فراہم کرتی ہے۔ شدید حملے کی صورت میں 2-3 بار اسپرے کی ضرورت پڑ سکتی ہے۔",
        },
      ],
    },
    testimonials: {
      en: [
        {
          name: "Sarah Johnson",
          avatar: "/images/avatar-1.jpg",
          rating: 5,
          text: "I've been using chemical pesticides for years and was skeptical about switching to an organic solution. I'm amazed at how effective this product is! My garden is thriving and I feel better knowing I'm not using harmful chemicals.",
          location: "California, USA",
        },
        {
          name: "Michael Chen",
          avatar: "/images/avatar-2.jpg",
          rating: 4,
          text: "Great product that actually works. I've noticed more beneficial insects in my garden since switching to this organic pesticide. It took a couple of applications to fully control my aphid problem, but now my plants are pest-free.",
          location: "Toronto, Canada",
        },
        {
          name: "Emma Wilson",
          avatar: "/images/avatar-3.jpg",
          rating: 5,
          text: "As a mother of three, I was concerned about using chemical pesticides in our vegetable garden. This organic solution gives me peace of mind while effectively keeping pests away. Highly recommend!",
          location: "London, UK",
        },
      ],
      ur: [
        {
          name: "سارہ جانسن",
          avatar: "/images/avatar-1.jpg",
          rating: 5,
          text: "میں سالوں سے کیمیائی کیڑے مار ادویات استعمال کر رہی تھی اور قدرتی حل پر سوئچ کرنے کے بارے میں شکوک تھے۔ مجھے حیرت ہے کہ یہ مصنوعات کتنی مؤثر ہے! میرا باغ پھل پھول رہا ہے اور مجھے بہتر محسوس ہوتا ہے کہ میں نقصان دہ کیمیکلز استعمال نہیں کر رہی ہوں۔",
          location: "کیلیفورنیا، امریکہ",
        },
        {
          name: "مائیکل چین",
          avatar: "/images/avatar-2.jpg",
          rating: 4,
          text: "بہترین مصنوعات جو واقعی کام کرتی ہے۔ میں نے اس قدرتی کیڑے مار دوا پر سوئچ کرنے کے بعد سے اپنے باغ میں زیادہ فائدہ مند کیڑے دیکھے ہیں۔ میرے ایفڈ مسئلے کو مکمل طور پر کنٹرول کرنے کے لیے کچھ ایپلیکیشنز لگیں، لیکن اب میرے پودے کیڑوں سے پاک ہیں۔",
          location: "ٹورنٹو، کینیڈا",
        },
        {
          name: "ایما ولسن",
          avatar: "/images/avatar-3.jpg",
          rating: 5,
          text: "تین بچوں کی ماں کے طور پر، مجھے اپنے سبزیوں کے باغ میں کیمیائی کیڑے مار ادویات استعمال کرنے کے بارے میں فکر تھی۔ یہ قدرتی حل مجھے ذہنی سکون دیتا ہے جبکہ مؤثر طریقے سے کیڑوں کو دور رکھتا ہے۔ زبردست سفارش!",
          location: "لندن، یوکے",
        },
      ],
    },
  },
  {
    id: 2,
    slug: "hormones-control",
    name: {
      en: "HormoGuard, BioSync, BioSync Guard",
      ur: "HormoGuard, BioSync, BioSync Guard",
    },
    shortDescription: {
      en: "Natural hormone regulation for plants",
      ur: "پودوں کے لیے قدرتی ہارمون ریگولیشن",
    },
    description: {
      en: "Our ‘HormoGuard’ organic hormonal control solution helps to regulate plant growth and developmental stages irrespective of climate change scenarios that ensures better yield.",
      ur: "ہمارا ’ہارمو گارڈ‘ نامیاتی ہارمونی کنٹرول حل پودوں کی نشوونما اور ترقی کے مراحل کو موسمیاتی تبدیلی کے باوجود متوازن رکھتا ہے، جو بہتر پیداوار کو یقینی بناتا ہے۔",
    },
    excerpt: {
      en: "Enhance plant growth naturally with our organic hormone control solution. Promotes balanced development and increases yield without synthetic chemicals.",
      ur: "ہمارے قدرتی ہارمون کنٹرول حل کے ساتھ قدرتی طور پر پودوں کی نشوونما کو بڑھائیں۔ مصنوعی کیمیکلز کے بغیر متوازن ترقی کو فروغ دیتا ہے اور پیداوار میں اضافہ کرتا ہے۔",
    },
    image: "/images/hormones-product.jpeg",
    linkAry: [{ link: "https://www.youtube.com/embed/Z8A3PZIkuyQ?si=tdFTed1R84PP5qxE" }],
    imgAry: [
      { blink: "/images/extracted_images/slide6_image7.jpg",overlayText : 'Citrus (سنترہ، لیموں وغیرہ)',bText :'Before', aText:'Ater , One Year', alink: "/images/extracted_images/slide6_image8.png" },
      { blink: "/images/extracted_images/slide7_image9.jpg",overlayText : 'Citrus (سنترہ، لیموں وغیرہ)',bText :'Before', aText:'After', alink: "/images/extracted_images/slide7_image10.jpg" },
      { blink: "/images/extracted_images/slide8_image11.jpg",overlayText : 'Citrus (سنترہ، لیموں وغیرہ)',bText :'Stem Length , Before', aText:'Stem Length , After', alink: "/images/extracted_images/slide8_image12.jpg" },
      { blink: "/images/extracted_images/slide9_image13.png",overlayText : 'Apple (سیب)',bText :'Before', aText:'After (One Month)', alink: "/images/extracted_images/slide9_image14.png" }
    ], disadvantages: {
      en: [
        {
          title: "stunted growth",
          description: "Synthetic hormones force stunted growth patterns that can weaken plants.",
        },
        {
          title: "Reduced Nutrient Content",
          description: "Artificially accelerated growth often results in produce with lower nutritional value.",
        },
        {
          title: "Health Concerns",
          description: "Synthetic hormone residues in food have been linked to various health issues in humans.",
        },
        {
          title: "Environmental Impact",
          description: "Synthetic hormones can disrupt natural ecosystems and harm wildlife.",
        },
      ],
      ur: [
        {
          title: "غیر فطری نشوونما",
          description: "مصنوعی ہارمونز غیر فطری نشوونما کے پیٹرن پر مجبور کرتے ہیں جو پودوں کو کمزور کر سکتے ہیں۔",
        },
        {
          title: "غذائی اجزاء کی کمی",
          description: "مصنوعی طور پر تیز رفتار نشوونما اکثر کم غذائی قدر کے ساتھ پیداوار کا باعث بنتی ہے۔",
        },
        {
          title: "صحت کے مسائل",
          description: "کھانے میں مصنوعی ہارمون کے بقایا جات انسانوں میں مختلف صحت کے مسائل سے منسلک ہیں۔",
        },
        {
          title: "ماحولیاتی اثر",
          description:
            "مصنوعی ہارمونز قدرتی ماحولیاتی نظام کو خراب کر سکتے ہیں اور جنگلی حیات کو نقصان پہنچا سکتے ہیں۔",
        },
      ],
    },
    advantages: {
      en: [
        {
          title: "Balanced Growth",
          description: "Promotes natural, balanced growth patterns for stronger, healthier plants.",
        },
        {
          title: "Higher Nutrient Content",
          description: "Plants grown with natural hormones develop higher nutritional value.",
        },
        {
          title: "Improved Stress Resistance",
          description: "Helps plants naturally develop better resistance to environmental stressors.",
        },
        {
          title: "Better Taste",
          description: "Produces fruits and vegetables with enhanced flavor profiles.",
        },
        {
          title: "Environmentally Safe",
          description: "No harmful effects on ecosystems or beneficial organisms.",
        },
      ],
      ur: [
        {
          title: "متوازن نشوونما",
          description: "مضبوط، صحت مند پودوں کے لیے قدرتی، متوازن نشوونما کے پیٹرن کو فروغ دیتا ہے۔",
        },
        {
          title: "زیادہ غذائی مواد",
          description: "قدرتی ہارمونز کے ساتھ اگائے گئے پودے زیادہ غذائی قدر پیدا کرتے ہیں۔",
        },
        {
          title: "بہتر تناؤ مزاحمت",
          description: "پودوں کو ماحولیاتی تناؤ کے خلاف قدرتی طور پر بہتر مزاحمت پیدا کرنے میں مدد کرتا ہے۔",
        },
        {
          title: "بہتر ذائقہ",
          description: "بہتر ذائقہ پروفائل کے ساتھ پھل اور سبزیاں پیدا کرتا ہے۔",
        },
        {
          title: "ماحولیاتی طور پر محفوظ",
          description: "ماحولیاتی نظام یا فائدہ مند جانداروں پر کوئی نقصان دہ اثرات نہیں۔",
        },
      ],
    },
    faqs: {
      en: [
        {
          question: "How long until I see results?",
          answer:
            "You may notice improved vigor within 1-2 weeks, but the full benefits for growth, flowering, and fruiting will develop over the entire growing season.HormoGuard is the best product to get the desired vegetative growth, thus ensuring promising yield outcomes under climate change scenarios. ",
        },

      ],
      ur: [
        {
          question: "نتائج ظاہر ہونے میں کتنا وقت لگتا ہے؟",
          answer:
            "آپ 1 سے 2 ہفتوں میں پودے کی بہتر توانائی اور نشوونما محسوس کر سکتے ہیں، لیکن مکمل فوائد جیسے نشوونما، پھول آنا، اور پھل دینا پورے اگنے کے موسم میں ظاہر ہوں گے۔ ہارموگارڈ بہترین پیداوار کے لیے مطلوبہ سبز نشوونما حاصل کرنے کا بہترین حل ہے، خاص طور پر موسمیاتی تبدیلی کے حالات میں۔",
        },
      ],
    },
    testimonials: {
      en: [
        {
          name: "David Rodriguez",
          avatar: "/images/avatar-4.jpg",
          rating: 5,
          text: "I've been growing tomatoes for 20 years and have never seen such healthy plants. The fruit yield increased by at least 30% and the tomatoes taste amazing. This organic hormone control is a game-changer!",
          location: "Florida, USA",
        },
        {
          name: "Aisha Patel",
          avatar: "/images/avatar-5.jpg",
          rating: 5,
          text: "My flower garden has never looked better! The blooms are larger, more vibrant, and last longer. I appreciate that I can enhance my garden's beauty without using harmful chemicals.",
          location: "Manchester, UK",
        },
        {
          name: "Thomas Müller",
          avatar: "/images/avatar-6.jpg",
          rating: 4,
          text: "As a commercial organic farmer, I was looking for ways to improve yield without compromising my organic certification. This product delivered exactly what I needed. My customers have noticed the improved quality of my produce.",
          location: "Bavaria, Germany",
        },
      ],
      ur: [
        {
          name: "ڈیوڈ روڈریگز",
          avatar: "/images/avatar-4.jpg",
          rating: 5,
          text: "میں 20 سالوں سے ٹماٹر اگا رہا ہوں اور کبھی بھی اتنے صحت مند پودے نہیں دیکھے۔ پھل کی پیداوار کم از کم 30% بڑھ گئی اور ٹماٹر کا ذائقہ حیرت انگیز ہے۔ یہ قدرتی ہارمون کنٹرول ایک گیم چینجر ہے!",
          location: "فلوریڈا، امریکہ",
        },
        {
          name: "عائشہ پٹیل",
          avatar: "/images/avatar-5.jpg",
          rating: 5,
          text: "میرا پھولوں کا باغ کبھی بھی اتنا اچھا نہیں لگا! پھول بڑے، زیادہ متحرک ہیں، اور زیادہ دیر تک رہتے ہیں۔ میں اس بات کی تعریف کرتا ہوں کہ میں نقصان دہ کیمیکلز استعمال کیے بغیر اپنے باغ کی خوبصورتی کو بڑھا سکتا ہوں۔",
          location: "مانچسٹر، یوکے",
        },
        {
          name: "تھامس مولر",
          avatar: "/images/avatar-6.jpg",
          rating: 4,
          text: "ایک تجارتی قدرتی کسان کے طور پر، میں اپنی قدرتی سرٹیفیکیشن سے سمجھوتہ کیے بغیر پیداوار کو بہتر بنانے کے طریقے تلاش کر رہا تھا۔ اس مصنوعات نے بالکل وہی فراہم کیا جس کی مجھے ضرورت تھی۔ میرے گاہکوں نے میری پیداوار کے بہتر معیار کو نوٹ کیا ہے۔",
          location: "بویریا، جرمنی",
        },
      ],
    },
  },
  {
    id: 3,
    slug: "nutrition-control",
    name: {
      en: "NutriGuard, Plant-IQ",
      ur: "NutriGuard, Plant-IQ",
    },
    shortDescription: {
      en: "Complete organic plant nutrition",
      ur: "مکمل قدرتی پودوں کی غذائیت",
    },
    description: {
      en: "Unlock the full potential of your plants with our balanced nutrients blend “NutriGuard” formula, promoting growth, profuse flowering and fruiting, avoid pre-harvest fruit drop issues, thus nutritious and flavorful bio-fortified plant products.",
      ur: "اپنے پودوں کی مکمل صلاحیت کو اُجاگر کریں ہمارے متوازن غذائی مرکبنیوٹری گارڈ کے ذریعے، جو نشوونما، بھرپور پھولوں اور پھلوں کی افزائش کو فروغ دیتا ہے، قبل از وقت پھل گرنے کے مسائل سے بچاتا ہے، اور غذائیت سے بھرپور اور ذائقہ دار حیاتیاتی طور پر مضبوط پیداوار کو یقینی بناتا ہے۔"
    },
    excerpt: {
      en: "Provide your plants with complete nutrition using our organic solution. Improves soil health and promotes vigorous growth without synthetic fertilizers.",
      ur: "ہمارے قدرتی حل کا استعمال کرتے ہوئے اپنے پودوں کو مکمل غذائیت فراہم کریں۔ مصنوعی کھادوں کے بغیر مٹی کی صحت کو بہتر بناتا ہے اور مضبوط نشوونما کو فروغ دیتا ہے۔",
    },
    image: "/images/nutrition-product.webp",
    imgAry: [
      { blink: "/images/extracted_images/slide11_image15.png",overlayText : 'Citrus (سنترہ، لیموں وغیرہ)', bText: 'Before', aText: 'After', alink: "/images/extracted_images/slide11_image16.png" },
      { blink: "/images/extracted_images/slide12_image17.png",overlayText : 'Citrus (سنترہ، لیموں وغیرہ)', bText: 'Untreacted Control', aText: 'After Treatment', alink: "/images/extracted_images/slide12_image18.png" },
      { blink: "/images/extracted_images/slide13_image19.png",overlayText : 'Citrus (سنترہ، لیموں وغیرہ)', bText: 'Before', aText: 'After', alink: "/images/extracted_images/slide13_image20.png" },
      { blink: "/images/extracted_images/slide14_image21.png",overlayText : 'Apricot (خوبانی)', bText: 'Before', aText: 'After', alink: "/images/extracted_images/slide14_image22.png" }
    ],
    linkAry: [{ link: "https://www.youtube.com/embed/j1HIClkuLnw?si=J_yvqnqrtz-0BIkZ" }, { link: "https://www.youtube.com/embed/8TvK0UN6A2E?si=yolqcl_8stlzV9-a" }],
    disadvantages: {
      en: [
        {
          title: "malnourished nutrition",
          description: "Just like humans, plants require balanced nutrition to thrive. Our organic solution combats malnourishment and soil issues, ensuring optimal growth and vitality",
        },
        {
          title: "Soil Degradation",
          description: "Chemical fertilizers can harm beneficial soil microorganisms and reduce soil health over time.",
        },
        {
          title: "Water Pollution",
          description: "Synthetic nutrients easily leach into groundwater and waterways, causing pollution.",
        },
        {
          title: "Dependency cycle for nutrients",
          description: "Plants rely on a continuous nutrient cycle for growth, where soil, water, and organic matter provide essential elements. Disruptions in this cycle, like nutrient depletion or imbalance, can hinder plant health and productivity",
        },
      ],
      ur: [
        {
          title: "غذائی قلت",
          description:
            "جیسے انسانوں کو متوازن غذا کی ضرورت ہوتی ہے، ویسے ہی پودوں کی نشوونما کے لیے مکمل غذائیت ضروری ہے۔ ہمارا نامیاتی حل غذائی قلت اور مٹی کے مسائل پر قابو پاتا ہے تاکہ بہتر نشوونما اور توانائی ممکن ہو سکے۔",
        },
        {
          title: "مٹی کی تنزلی",
          description:
            "کیمیائی کھادیں مٹی میں موجود فائدہ مند مائیکرو آرگنزمز کو نقصان پہنچا سکتی ہیں اور وقت کے ساتھ ساتھ مٹی کی مجموعی صحت کو کم کر دیتی ہیں۔",
        },
        {
          title: "پانی کی آلودگی",
          description:
            "مصنوعی غذائی اجزاء زیر زمین پانی اور آبی گزرگاہوں میں آسانی سے شامل ہو کر ماحولیاتی آلودگی کا باعث بنتے ہیں۔",
        },
        {
          title: "غذائی انحصار کا چکر",
          description:
            "پودوں کی نشوونما کے لیے مٹی، پانی اور نامیاتی مادہ سے حاصل ہونے والے غذائی اجزاء کا مسلسل چکر ضروری ہوتا ہے۔ اس میں کسی بھی قسم کا خلل، جیسے غذائی قلت یا عدم توازن، پودوں کی صحت اور پیداوار کو متاثر کر سکتا ہے۔",
        },
      ],

    },
    advantages: {
      en: [
        {
          title: "Balanced nutrition",
          description: "Slow release should be changed Readily available to plants (Foliar nutrition provides nutrients directly to plants through their leaves, offering a readily available and fast-acting source of nourishmen",
        },
        {
          title: "Soil Enrichment",
          description: "Improves soil structure and promotes beneficial microbial activity.",
        },
        {
          title: "Slow Release",
          description: "Nutrients are released gradually, providing consistent nourishment over time.",
        },
        {
          title: "Increased Resilience",
          description: "Plants develop stronger natural defenses against pests and diseases.",
        },
        {
          title: "Sustainable Farming",
          description: "Supports long-term soil health and sustainable agricultural practices.",
        },
      ],
      ur: [
        {
          title: "مکمل غذائیت",
          description: "پودوں کی بہترین صحت کے لیے میکرو اور مائیکرو غذائی اجزاء کا مکمل سپیکٹرم فراہم کرتا ہے۔",
        },
        {
          title: "مٹی کی افزائش",
          description: "مٹی کی ساخت کو بہتر بناتا ہے اور فائدہ مند مائیکروبیل سرگرمی کو فروغ دیتا ہے۔",
        },
        {
          title: "آہستہ آہستہ رہائی",
          description: "غذائی اجزاء آہستہ آہستہ جاری ہوتے ہیں، وقت کے ساتھ مستقل غذائیت فراہم کرتے ہیں۔",
        },
        {
          title: "بڑھی ہوئی لچک",
          description: "پودے کیڑوں اور بیماریوں کے خلاف مضبوط قدرتی دفاع تیار کرتے ہیں۔",
        },
        {
          title: "پائیدار کاشتکاری",
          description: "طویل مدتی مٹی کی صحت اور پائیدار زرعی طریقوں کی حمایت کرتا ہے۔",
        },
      ],
    },
    faqs: {
      en: [
        {
          question: "How often should I apply the nutrition control solution?",
          answer:
            "For most plants, apply once every 2-4 weeks during the growing season. Adjust frequency based on plant type and growth stage - more frequently during periods of rapid growth or fruiting.",
        },
        {
          question: "Can I use this on indoor plants?",
          answer:
            "Yes, our organic nutrition control is perfect for indoor plants. Use at half strength for container plants with limited soil volume.",
        },
        {
          question: "Will this help with flowering and fruiting?",
          answer:
            "Absolutely. Our balanced formula includes phosphorus and potassium, which are essential for robust flowering and fruit development.",
        },
        {
          question: "Is it safe to use in vegetable gardens?",
          answer:
            "Yes, it's specifically formulated to be safe for edible plants. It contains no harmful chemicals and helps produce healthier, more nutritious vegetables.",
        },
        {
          question: "How does this compare to compost?",
          answer:
            "While compost is excellent for soil health, our nutrition control provides a more balanced and complete nutrient profile. For best results, use both: compost to build soil structure and our product to ensure complete nutrition.",
        },
      ],
      ur: [
        {
          question: "مجھے غذائیت کنٹرول سلوشن کتنی بار لگانا چاہیے؟",
          answer:
            "زیادہ تر پودوں کے لیے، اگاؤ کے موسم کے دوران ہر 2-4 ہفتوں میں ایک بار لگائیں۔ پودے کی قسم اور نشوونما کے مرحلے کی بنیاد پر تعدد کو ایڈجسٹ کریں - تیز نشوونما یا پھل آنے کے دوران زیادہ کثرت سے۔",
        },
        {
          question: "کیا میں اسے اندرونی پودوں پر استعمال کر سکتا ہوں؟",
          answer:
            "ہاں، ہمارا قدرتی غذائیت کنٹرول اندرونی پودوں کے لیے بالکل مناسب ہے۔ محدود مٹی کی مقدار والے کنٹینر پودوں کے لیے نصف طاقت استعمال کریں۔",
        },
        {
          question: "کیا یہ پھولوں اور پھلوں میں مدد کرے گا؟",
          answer:
            "بالکل۔ ہمارے متوازن فارمولے میں فاسفورس اور پوٹاشیم شامل ہیں، جو مضبوط پھولوں اور پھلوں کی نشوونما کے لیے ضروری ہیں۔",
        },
        {
          question: "کیا یہ سبزیوں کے باغوں میں استعمال کرنے کے لیے محفوظ ہے؟",
          answer:
            "ہاں، یہ خاص طور پر کھانے والے پودوں کے لیے محفوظ بنایا گیا ہے۔ اس میں کوئی نقصان دہ کیمیکلز نہیں ہیں اور یہ صحت مند، زیادہ غذائیت والی سبزیاں پیدا کرنے میں مدد کرتا ہے۔",
        },
        {
          question: "یہ کمپوسٹ سے کیسے موازنہ کرتا ہے؟",
          answer:
            "اگرچہ کمپوسٹ مٹی کی صحت کے لیے بہترین ہے، ہمارا غذائیت کنٹرول زیادہ متوازن اور مکمل غذائی پروفائل فراہم کرتا ہے۔ بہترین نتائج کے لیے، دونوں استعمال کریں: مٹی کی ساخت بنانے کے لیے کمپوسٹ اور مکمل غذائیت کو یقینی بنانے کے لیے ہماری مصنوعات۔",
        },
      ],
    },
    testimonials: {
      en: [
        {
          name: "Jennifer Williams",
          avatar: "/images/avatar-7.jpg",
          rating: 5,
          text: "I've tried many organic fertilizers over the years, but this nutrition control solution is by far the best. My vegetable garden produced an abundance of flavorful, nutrient-rich produce this year!",
          location: "Oregon, USA",
        },
        {
          name: "Raj Sharma",
          avatar: "/images/avatar-8.jpg",
          rating: 4,
          text: "As someone who manages a community garden, I needed a reliable organic nutrition solution that works for various plants. This product exceeded my expectations. Our members have noticed healthier plants and better harvests.",
          location: "British Columbia, Canada",
        },
        {
          name: "Sophie Laurent",
          avatar: "/images/avatar-9.jpg",
          rating: 5,
          text: "I switched to this organic nutrition control for my vineyard last year, and the difference is remarkable. The vines are more vigorous, and the grapes developed better flavor profiles. This will be a permanent part of our organic growing program.",
          location: "Bordeaux, France",
        },
      ],
      ur: [
        {
          name: "جینیفر ولیمز",
          avatar: "/images/avatar-7.jpg",
          rating: 5,
          text: "میں نے سالوں سے بہت سی قدرتی کھادیں آزمائی ہیں، لیکن یہ غذائیت کنٹرول سلوشن اب تک بہترین ہے۔ میرے سبزیوں کے باغ نے اس سال ذائقہ دار، غذائیت سے بھرپور پیداوار کی بہتات پیدا کی!",
          location: "اوریگون، امریکہ",
        },
        {
          name: "راج شرما",
          avatar: "/images/avatar-8.jpg",
          rating: 4,
          text: "ایک ایسے شخص کے طور پر جو کمیونٹی گارڈن کا انتظام کرتا ہے، مجھے ایک قابل اعتماد قدرتی غذائیت کے حل کی ضرورت تھی جو مختلف پودوں کے لیے کام کرتا ہے۔ اس مصنوعات نے میری توقعات سے بڑھ کر کام کیا۔ ہمارے ممبران نے صحت مند پودوں اور بہتر فصلوں کو نوٹس کیا ہے۔",
          location: "برٹش کولمبیا، کینیڈا",
        },
        {
          name: "صوفی لارینٹ",
          avatar: "/images/avatar-9.jpg",
          rating: 5,
          text: "میں نے پچھلے سال اپنے انگور کے باغ کے لیے اس قدرتی غذائیت کنٹرول پر سوئچ کیا، اور فرق قابل ذکر ہے۔ بیلیں زیادہ طاقتور ہیں، اور انگور نے بہتر ذائقہ پروفائل تیار کیے۔ یہ ہمارے قدرتی اگاؤ پروگرام کا ایک مستقل حصہ ہوگا۔",
          location: "بورڈو، فرانس",
        },
      ],
    },
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}
