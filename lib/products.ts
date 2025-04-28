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
      en: "Pesticide Control",
      ur: "کیڑے مار کنٹرول",
    },
    shortDescription: {
      en: "Organic solution for pest control",
      ur: "کیڑے مار کنٹرول کے لیے نامیاتی حل",
    },
    description: {
      en: "Our organic pesticide control solution provides effective protection against pests without harmful chemicals. Safe for your plants, family, and the environment.",
      ur: "ہمارا نامیاتی کیڑے مار کنٹرول حل نقصان دہ کیمیکلز کے بغیر کیڑوں کے خلاف مؤثر تحفظ فراہم کرتا ہے۔ آپ کے پودوں، خاندان اور ماحول کے لیے محفوظ۔",
    },
    excerpt: {
      en: "Protect your plants naturally with our organic pesticide control solution. Effective against common pests while being safe for beneficial insects.",
      ur: "ہمارے نامیاتی کیڑے مار کنٹرول حل کے ساتھ اپنے پودوں کو قدرتی طور پر محفوظ رکھیں۔ عام کیڑوں کے خلاف مؤثر جبکہ فائدہ مند کیڑوں کے لیے محفوظ۔",
    },
    image: "/images/pesticide-product.jpg",
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
          title: "100% نامیاتی",
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
            "For preventive measures, apply once every 2-3 weeks. If you already have a pest problem, apply once a week until the issue is resolved, then return to the preventive schedule.",
        },
        {
          question: "Is it safe to use around children and pets?",
          answer:
            "Yes, our organic pesticide is safe for use around children and pets. However, as with any product, we recommend keeping children and pets away from the area until the spray has dried.",
        },
        {
          question: "How soon after application can I harvest my vegetables?",
          answer:
            "You can harvest vegetables the same day after the spray has dried. We recommend rinsing produce before consumption as a general practice.",
        },
        {
          question: "What pests does it control?",
          answer:
            "Our organic pesticide is effective against aphids, caterpillars, whiteflies, spider mites, and many other common garden pests.",
        },
        {
          question: "Does it work as well as chemical pesticides?",
          answer:
            "Our organic solution may take slightly longer to show results compared to harsh chemicals, but it provides effective control without the harmful side effects. For severe infestations, multiple applications may be necessary.",
        },
      ],
      ur: [
        {
          question: "مجھے نامیاتی کیڑے مار دوا کتنی بار لگانی چاہیے؟",
          answer:
            "حفاظتی اقدامات کے لیے، ہر 2-3 ہفتوں میں ایک بار لگائیں۔ اگر آپ کو پہلے سے ہی کیڑوں کا مسئلہ ہے، تو مسئلہ حل ہونے تک ہفتے میں ایک بار لگائیں، پھر حفاظتی شیڈول پر واپس آ جائیں۔",
        },
        {
          question: "کیا یہ بچوں اور پالتو جانوروں کے آس پاس استعمال کرنے کے لیے محفوظ ہے؟",
          answer:
            "ہاں، ہماری نامیاتی کیڑے مار دوا بچوں اور پالتو جانوروں کے آس پاس استعمال کرنے کے لیے محفوظ ہے۔ تاہم، کسی بھی مصنوعات کی طرح، ہم تجویز کرتے ہیں کہ سپرے کے خشک ہونے تک بچوں اور پالتو جانوروں کو علاقے سے دور رکھیں۔",
        },
        {
          question: "استعمال کے بعد میں اپنی سبزیاں کتنی جلدی کاٹ سکتا ہوں؟",
          answer:
            "آپ سپرے کے خشک ہونے کے بعد اسی دن سبزیاں کاٹ سکتے ہیں۔ ہم عام طور پر استعمال سے پہلے پیداوار کو دھونے کی تجویز کرتے ہیں۔",
        },
        {
          question: "یہ کن کیڑوں کو کنٹرول کرتا ہے؟",
          answer:
            "ہماری نامیاتی کیڑے مار دوا ایفڈز، کیٹرپلرز، وائٹ فلائیز، سپائیڈر مائٹس، اور بہت سے دیگر عام باغ کے کیڑوں کے خلاف مؤثر ہے۔",
        },
        {
          question: "کیا یہ کیمیائی کیڑے مار ادویات کی طرح کام کرتا ہے؟",
          answer:
            "ہمارا نامیاتی حل سخت کیمیکلز کے مقابلے میں نتائج دکھانے میں تھوڑا زیادہ وقت لے سکتا ہے، لیکن یہ نقصان دہ ضمنی اثرات کے بغیر مؤثر کنٹرول فراہم کرتا ہے۔ شدید انفیکشن کے لیے، متعدد ایپلیکیشنز کی ضرورت ہو سکتی ہے۔",
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
          text: "میں سالوں سے کیمیائی کیڑے مار ادویات استعمال کر رہی تھی اور نامیاتی حل پر سوئچ کرنے کے بارے میں شکوک تھے۔ مجھے حیرت ہے کہ یہ مصنوعات کتنی مؤثر ہے! میرا باغ پھل پھول رہا ہے اور مجھے بہتر محسوس ہوتا ہے کہ میں نقصان دہ کیمیکلز استعمال نہیں کر رہی ہوں۔",
          location: "کیلیفورنیا، امریکہ",
        },
        {
          name: "مائیکل چین",
          avatar: "/images/avatar-2.jpg",
          rating: 4,
          text: "بہترین مصنوعات جو واقعی کام کرتی ہے۔ میں نے اس نامیاتی کیڑے مار دوا پر سوئچ کرنے کے بعد سے اپنے باغ میں زیادہ فائدہ مند کیڑے دیکھے ہیں۔ میرے ایفڈ مسئلے کو مکمل طور پر کنٹرول کرنے کے لیے کچھ ایپلیکیشنز لگیں، لیکن اب میرے پودے کیڑوں سے پاک ہیں۔",
          location: "ٹورنٹو، کینیڈا",
        },
        {
          name: "ایما ولسن",
          avatar: "/images/avatar-3.jpg",
          rating: 5,
          text: "تین بچوں کی ماں کے طور پر، مجھے اپنے سبزیوں کے باغ میں کیمیائی کیڑے مار ادویات استعمال کرنے کے بارے میں فکر تھی۔ یہ نامیاتی حل مجھے ذہنی سکون دیتا ہے جبکہ مؤثر طریقے سے کیڑوں کو دور رکھتا ہے۔ زبردست سفارش!",
          location: "لندن، یوکے",
        },
      ],
    },
  },
  {
    id: 2,
    slug: "hormones-control",
    name: {
      en: "Hormones Control",
      ur: "ہارمونز کنٹرول",
    },
    shortDescription: {
      en: "Natural hormone regulation for plants",
      ur: "پودوں کے لیے قدرتی ہارمون ریگولیشن",
    },
    description: {
      en: "Our organic hormone control solution helps regulate plant growth naturally, promoting healthier development and higher yields without synthetic growth regulators.",
      ur: "ہمارا نامیاتی ہارمون کنٹرول حل مصنوعی گروتھ ریگولیٹرز کے بغیر صحت مند نشوونما اور زیادہ پیداوار کو فروغ دیتے ہوئے، قدرتی طور پر پودوں کی نشوونما کو منظم کرنے میں مدد کرتا ہے۔",
    },
    excerpt: {
      en: "Enhance plant growth naturally with our organic hormone control solution. Promotes balanced development and increases yield without synthetic chemicals.",
      ur: "ہمارے نامیاتی ہارمون کنٹرول حل کے ساتھ قدرتی طور پر پودوں کی نشوونما کو بڑھائیں۔ مصنوعی کیمیکلز کے بغیر متوازن ترقی کو فروغ دیتا ہے اور پیداوار میں اضافہ کرتا ہے۔",
    },
    image: "/images/hormones-product.jpg",
    disadvantages: {
      en: [
        {
          title: "Unnatural Growth",
          description: "Synthetic hormones force unnatural growth patterns that can weaken plants.",
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
          question: "How does organic hormone control differ from synthetic hormones?",
          answer:
            "Organic hormone control works with the plant's natural processes rather than forcing growth. It provides the building blocks for the plant to produce its own hormones in balanced amounts, resulting in healthier, more resilient plants.",
        },
        {
          question: "When should I apply the hormone control solution?",
          answer:
            "For best results, apply during the early growth stages and again when flowering begins. Follow the specific instructions for your crop type as timing can vary.",
        },
        {
          question: "Will this help with fruit production?",
          answer:
            "Yes, our organic hormone control helps improve flowering, fruit set, and fruit development, often resulting in higher yields and better quality produce.",
        },
        {
          question: "Is it safe for all types of plants?",
          answer:
            "Our product is safe for vegetables, fruits, flowers, and ornamental plants. However, we recommend testing on a small area first for sensitive or rare plant varieties.",
        },
        {
          question: "How long until I see results?",
          answer:
            "You may notice improved vigor within 1-2 weeks, but the full benefits for growth, flowering, and fruiting will develop over the entire growing season.",
        },
      ],
      ur: [
        {
          question: "نامیاتی ہارمون کنٹرول مصنوعی ہارمونز سے کیسے مختلف ہے؟",
          answer:
            "نامیاتی ہارمون کنٹرول نشوونما پر زور دینے کے بجائے پودے کے قدرتی عمل کے ساتھ کام کرتا ہے۔ یہ پودے کو متوازن مقدار میں اپنے ہارمونز پیدا کرنے کے لیے بلڈنگ بلاکس فراہم کرتا ہے، جس کے نتیجے میں صحت مند، زیادہ لچکدار پودے ہوتے ہیں۔",
        },
        {
          question: "مجھے ہارمون کنٹرول سلوشن کب لگانا چاہیے؟",
          answer:
            "بہترین نتائج کے لیے، ابتدائی نشوونما کے مراحل کے دوران اور پھر جب پھول آنا شروع ہو تو دوبارہ لگائیں۔ اپنی فصل کی قسم کے لیے مخصوص ہدایات پر عمل کریں کیونکہ ٹائمنگ مختلف ہو سکتی ہے۔",
        },
        {
          question: "کیا یہ پھل کی پیداوار میں مدد کرے گا؟",
          answer:
            "ہاں، ہمارا نامیاتی ہارمون کنٹرول پھولوں، پھل سیٹ، اور پھل کی نشوونما کو بہتر بنانے میں مدد کرتا ہے، جس کے نتیجے میں اکثر زیادہ پیداوار اور بہتر معیار کی پیداوار ہوتی ہے۔",
        },
        {
          question: "کیا یہ تمام قسم کے پودوں کے لیے محفوظ ہے؟",
          answer:
            "ہماری مصنوعات سبزیوں، پھلوں، پھولوں، اور زینتی پودوں کے لیے محفوظ ہے۔ تاہم، ہم حساس یا نایاب پودوں کی اقسام کے لیے پہلے ایک چھوٹے سے علاقے پر ٹیسٹ کرنے کی تجویز کرتے ہیں۔",
        },
        {
          question: "نتائج دیکھنے میں کتنا وقت لگے گا؟",
          answer:
            "آپ کو 1-2 ہفتوں کے اندر بہتر توانائی نظر آ سکتی ہے، لیکن نشوونما، پھولوں، اور پھلوں کے لیے مکمل فوائد پوری اگاؤ کے موسم میں تیار ہوں گے۔",
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
          text: "میں 20 سالوں سے ٹماٹر اگا رہا ہوں اور کبھی بھی اتنے صحت مند پودے نہیں دیکھے۔ پھل کی پیداوار کم از کم 30% بڑھ گئی اور ٹماٹر کا ذائقہ حیرت انگیز ہے۔ یہ نامیاتی ہارمون کنٹرول ایک گیم چینجر ہے!",
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
          text: "ایک تجارتی نامیاتی کسان کے طور پر، میں اپنی نامیاتی سرٹیفیکیشن سے سمجھوتہ کیے بغیر پیداوار کو بہتر بنانے کے طریقے تلاش کر رہا تھا۔ اس مصنوعات نے بالکل وہی فراہم کیا جس کی مجھے ضرورت تھی۔ میرے گاہکوں نے میری پیداوار کے بہتر معیار کو نوٹ کیا ہے۔",
          location: "بویریا، جرمنی",
        },
      ],
    },
  },
  {
    id: 3,
    slug: "nutrition-control",
    name: {
      en: "Nutrition Control",
      ur: "غذائیت کنٹرول",
    },
    shortDescription: {
      en: "Complete organic plant nutrition",
      ur: "مکمل نامیاتی پودوں کی غذائیت",
    },
    description: {
      en: "Our organic nutrition control solution provides balanced nutrients for optimal plant growth. Enhance soil health and plant vitality with our complete organic formula.",
      ur: "ہمارا نامیاتی غذائیت کنٹرول حل پودوں کی بہترین نشوونما کے لیے متوازن غذائی اجزاء فراہم کرتا ہے۔ ہمارے مکمل نامیاتی فارمولے کے ساتھ مٹی کی صحت اور پودوں کی توانائی کو بڑھائیں۔",
    },
    excerpt: {
      en: "Provide your plants with complete nutrition using our organic solution. Improves soil health and promotes vigorous growth without synthetic fertilizers.",
      ur: "ہمارے نامیاتی حل کا استعمال کرتے ہوئے اپنے پودوں کو مکمل غذائیت فراہم کریں۔ مصنوعی کھادوں کے بغیر مٹی کی صحت کو بہتر بناتا ہے اور مضبوط نشوونما کو فروغ دیتا ہے۔",
    },
    image: "/images/nutrition-product.jpg",
    disadvantages: {
      en: [
        {
          title: "Nutrient Imbalance",
          description: "Synthetic fertilizers often provide limited nutrients, creating imbalances in soil chemistry.",
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
          title: "Dependency Cycle",
          description: "Plants become dependent on synthetic inputs, requiring increasing amounts over time.",
        },
      ],
      ur: [
        {
          title: "غذائی عدم توازن",
          description:
            "مصنوعی کھادیں اکثر محدود غذائی اجزاء فراہم کرتی ہیں، جس سے مٹی کی کیمسٹری میں عدم توازن پیدا ہوتا ہے۔",
        },
        {
          title: "مٹی کی تنزلی",
          description:
            "کیمیائی کھادیں فائدہ مند مٹی کے مائیکرو آرگنزم کو نقصان پہنچا سکتی ہیں اور وقت کے ساتھ مٹی کی صحت کو کم کر سکتی ہیں۔",
        },
        {
          title: "پانی کی آلودگی",
          description:
            "مصنوعی غذائی اجزاء آسانی سے زمینی پانی اور آبی راستوں میں رس جاتے ہیں، جس سے آلودگی پیدا ہوتی ہے۔",
        },
        {
          title: "انحصار کا چکر",
          description:
            "پودے مصنوعی ان پٹس پر منحصر ہو جاتے ہیں، جس کے لیے وقت کے ساتھ بڑھتی ہوئی مقدار کی ضرورت ہوتی ہے۔",
        },
      ],
    },
    advantages: {
      en: [
        {
          title: "Complete Nutrition",
          description: "Provides a full spectrum of macro and micronutrients for optimal plant health.",
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
            "ہاں، ہمارا نامیاتی غذائیت کنٹرول اندرونی پودوں کے لیے بالکل مناسب ہے۔ محدود مٹی کی مقدار والے کنٹینر پودوں کے لیے نصف طاقت استعمال کریں۔",
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
          text: "میں نے سالوں سے بہت سی نامیاتی کھادیں آزمائی ہیں، لیکن یہ غذائیت کنٹرول سلوشن اب تک بہترین ہے۔ میرے سبزیوں کے باغ نے اس سال ذائقہ دار، غذائیت سے بھرپور پیداوار کی بہتات پیدا کی!",
          location: "اوریگون، امریکہ",
        },
        {
          name: "راج شرما",
          avatar: "/images/avatar-8.jpg",
          rating: 4,
          text: "ایک ایسے شخص کے طور پر جو کمیونٹی گارڈن کا انتظام کرتا ہے، مجھے ایک قابل اعتماد نامیاتی غذائیت کے حل کی ضرورت تھی جو مختلف پودوں کے لیے کام کرتا ہے۔ اس مصنوعات نے میری توقعات سے بڑھ کر کام کیا۔ ہمارے ممبران نے صحت مند پودوں اور بہتر فصلوں کو نوٹس کیا ہے۔",
          location: "برٹش کولمبیا، کینیڈا",
        },
        {
          name: "صوفی لارینٹ",
          avatar: "/images/avatar-9.jpg",
          rating: 5,
          text: "میں نے پچھلے سال اپنے انگور کے باغ کے لیے اس نامیاتی غذائیت کنٹرول پر سوئچ کیا، اور فرق قابل ذکر ہے۔ بیلیں زیادہ طاقتور ہیں، اور انگور نے بہتر ذائقہ پروفائل تیار کیے۔ یہ ہمارے نامیاتی اگاؤ پروگرام کا ایک مستقل حصہ ہوگا۔",
          location: "بورڈو، فرانس",
        },
      ],
    },
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}
