import React from 'react'
import style from './Home.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import avatar1 from '../../assets/photo-1472099645785-5658abf4ff4e.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'

export function Home() {

  const [cards, setCards] = useState([
    {
      "id": 1,
      "slug": "mastering-golden-hour-photography",
      "title": "إتقان تصوير الساعة الذهبية: دليل شامل",
      "excerpt": "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.",
      "content": "الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي. ذلك الوقت القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء ناعماً ودافئاً وساحراً.\n\n## لماذا الساعة الذهبية؟\n\nالضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان دافئة ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات تكتسب توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.\n\n## التحضير المسبق\n\nخطط لجلسة التصوير مسبقاً. استخدم تطبيقات مثل PhotoPills لمعرفة وقت الساعة الذهبية بدقة في موقعك. وصل قبل 30 دقيقة لاختيار أفضل زاوية.\n\n## إعدادات الكاميرا\n\nاستخدم ISO منخفض للحصول على أقل ضوضاء. فتحة العدسة تعتمد على ما تريد: f/1.8-f/2.8 للبورتريهات مع خلفية ضبابية، أو f/8-f/11 للمناظر الطبيعية الحادة.\n\n## التكوين الفني\n\nضع الشمس خلف موضوعك للحصول على تأثير الإضاءة الخلفية الساحر. أو استخدمها كمصدر جانبي لإبراز الملمس والعمق.\n\n## الخلاصة\n\nالساعة الذهبية هي هدية للمصورين. استغلها جيداً وستحصل على صور لا تُنسى تتميز بجمالها الطبيعي.",
      "category": "إضاءة",
      "author": {
        "name": "سالم أحمد",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        "role": "مصور محترف"
      },
      "image": "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop",
      "date": "2026-01-15",
      "readTime": "8 دقائق للقراءة",
      "featured": true,
      "tags": ["إضاءة", "الساعة الذهبية", "تصوير خارجي"]
    },
    {
      "id": 2,
      "slug": "portrait-photography-secrets",
      "title": "أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",
      "excerpt": "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.",
      "content": "تصوير البورتريه هو فن التقاط جوهر الإنسان في صورة واحدة. ليس مجرد توثيق الملامح، بل كشف القصة خلف العيون.\n\n## التواصل مع الموضوع\n\nقبل أن تمسك الكاميرا، تحدث مع الشخص. اجعله يشعر بالراحة. الابتسامة الحقيقية والنظرة الطبيعية تأتي فقط عندما يثق بك الموضوع.\n\n## اختيار العدسة المناسبة\n\nعدسات 85mm و 50mm هي الكلاسيكيات لتصوير البورتريه. توفر ضغطاً مثالياً للملامح وخلفية ضبابية جميلة.\n\n## الإضاءة الطبيعية\n\nالنافذة الكبيرة هي أفضل صديق لمصور البورتريه. ضع الموضوع بزاوية 45 درجة من النافذة للحصول على إضاءة ثلاثية الأبعاد رائعة.\n\n## التركيز على العيون\n\nالعيون هي نافذة الروح. تأكد دائماً من أن العيون حادة ومركزة. استخدم نقطة تركيز واحدة على العين الأقرب للكاميرا.\n\n## الخلفية والتكوين\n\nاختر خلفية بسيطة لا تشتت الانتباه. استخدم قاعدة الأثلاث لوضع العيون في النقاط القوية.\n\n## الخلاصة\n\nالبورتريه الناجح يحكي قصة. عندما تجمع بين التقنية والتواصل الإنساني، تخلق صوراً خالدة.",
      "category": "بورتريه",
      "author": {
        "name": "محمد علي",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        "role": "مصور بورتريه"
      },
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      "date": "2026-01-12",
      "readTime": "6 دقائق للقراءة",
      "featured": true,
      "tags": ["بورتريه", "تصوير أشخاص", "إضاءة طبيعية"]
    },
    {
      "id": 3,
      "slug": "landscape-photography-guide",
      "title": "دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",
      "excerpt": "استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.",
      "content": "تصوير المناظر الطبيعية هو رحلة إلى قلب الطبيعة. إنه فن يتطلب الصبر والتخطيط والعين الفنية لرؤية الجمال في كل مكان.\n\n## المعدات الأساسية\n\nحامل ثلاثي قوي ضروري للحصول على صور حادة. عدسة واسعة الزاوية (16-35mm) مثالية لالتقاط المشاهد الواسعة. فلاتر ND و Polarizer ستفتح لك آفاقاً إبداعية جديدة.\n\n## توقيت التصوير\n\nالساعة الزرقاء والساعة الذهبية هي أفضل الأوقات. الضوء يكون ناعماً والألوان غنية. لا تخف من التصوير في الطقس الدرامي - الغيوم والعواصف تضيف شخصية للصورة.\n\n## التكوين الفني\n\nابحث عن عناصر المقدمة المثيرة للاهتمام. صخرة، زهرة، أو مسار يقود العين نحو الخلفية. استخدم خطوط التوجيه لخلق عمق في الصورة.\n\n## إعدادات الكاميرا\n\nفتحة f/8-f/16 للحصول على حدة من المقدمة للخلفية. ISO منخفض قدر الإمكان. استخدم وضع Live View والتكبير للتركيز اليدوي الدقيق.\n\n## المعالجة اللاحقة\n\nصور بصيغة RAW لأقصى مرونة في التعديل. تعديل الإضاءة والألوان بلطف يبرز جمال المشهد دون إفراط.\n\n## الخلاصة\n\nتصوير المناظر الطبيعية يعلمك التأمل والصبر. كل صورة هي ذكرى من رحلة لا تُنسى.",
      "category": "مناظر طبيعية",
      "author": {
        "name": "إبراهيم حسن",
        "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        "role": "مصور طبيعة"
      },
      "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      "date": "2026-01-10",
      "readTime": "10 دقائق للقراءة",
      "featured": true,
      "tags": ["مناظر طبيعية", "تصوير خارجي", "طبيعة"]
    },



  ]);


  const [latestCard, setLatestCard] = useState([

    {
      "id": 4,
      "slug": "camera-settings-basics",
      "title": "أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي",
      "excerpt": "افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.",
      "content": "مثلث التعريض الضوئي هو أساس كل صورة ناجحة. فهم هذه العناصر الثلاثة يحررك من الوضع التلقائي ويمنحك السيطرة الإبداعية الكاملة.\n\n## فتحة العدسة (Aperture)\n\nفتحة العدسة تتحكم في كمية الضوء وعمق الميدان. الأرقام الصغيرة (f/1.4, f/2.8) تعني فتحة أكبر، ضوء أكثر، وخلفية ضبابية. الأرقام الكبيرة (f/11, f/16) تعني حدة أكبر في كل الصورة.\n\n## سرعة الغالق (Shutter Speed)\n\nسرعة الغالق تتحكم في تجميد الحركة. 1/500 ثانية تجمد الرياضيين، 1/60 مناسبة للمواضيع الثابتة، والسرعات البطيئة تخلق تأثيرات ضبابية إبداعية.\n\n## حساسية ISO\n\nISO هو حساسية المستشعر للضوء. ISO 100-400 للإضاءة الجيدة، أعلى من ذلك للإضاءة المنخفضة. كلما زاد ISO، زادت الضوضاء في الصورة.\n\n## التوازن بين الثلاثة\n\nهذه العناصر مترابطة. إذا زدت واحداً، يجب تعديل الآخرين للحفاظ على التعريض الصحيح. تدرب على الوضع اليدوي حتى تصبح هذه العلاقة طبيعية.\n\n## نصائح عملية\n\nابدأ بوضع أولوية فتحة العدسة (Av/A) للتحكم في عمق الميدان، أو أولوية الغالق (Tv/S) للتحكم في الحركة.\n\n## الخلاصة\n\nإتقان مثلث التعريض يفتح لك عالماً من الإبداع. تدرب يومياً وستصبح هذه الإعدادات طبيعة ثانية.",
      "category": "تقنيات",
      "author": {
        "name": "داود خالد",
        "avatar": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
        "role": "مدرب تصوير"
      },
      "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop",
      "date": "2026-01-08",
      "readTime": "7 دقائق للقراءة",
      "featured": false,
      "tags": ["إعدادات الكاميرا", "مبتدئين", "تقنيات"]
    },
    {
      "id": 5,
      "slug": "photo-composition-rules",
      "title": "قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",
      "excerpt": "تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.",
      "content": "التكوين هو الفرق بين صورة عادية وصورة استثنائية. إنه كيفية ترتيب العناصر داخل الإطار لتوجيه عين المشاهد وإيصال رسالتك.\n\n## قاعدة الأثلاث\n\nقسّم الإطار إلى تسعة أجزاء متساوية بخطين أفقيين وعموديين. ضع العناصر المهمة على هذه الخطوط أو تقاطعاتها للحصول على توازن بصري جذاب.\n\n## الخطوط التوجيهية\n\nاستخدم الخطوط الطبيعية في المشهد - طريق، نهر، سور - لقيادة عين المشاهد نحو الموضوع الرئيسي.\n\n## الإطار داخل الإطار\n\nاستخدم عناصر في المقدمة كإطار طبيعي: باب، نافذة، أغصان شجرة. هذا يضيف عمقاً ويركز الانتباه.\n\n## التماثل والأنماط\n\nالتماثل يخلق شعوراً بالهدوء والتوازن. الأنماط المتكررة تجذب العين. كسر النمط يخلق نقطة اهتمام قوية.\n\n## المساحة السلبية\n\nلا تخف من الفراغ. المساحة الفارغة حول الموضوع يمكن أن تكون قوية بنفس قوة الموضوع نفسه.\n\n## كسر القواعد\n\nاعرف القواعد جيداً، ثم اكسرها بوعي. أحياناً الصورة غير التقليدية هي الأقوى تأثيراً.\n\n## الخلاصة\n\nالتكوين مهارة تتطور مع الممارسة. صوّر كثيراً، ادرس أعمال المصورين العظماء، وطور عينك الفنية.",
      "category": "تقنيات",
      "author": {
        "name": "ليث محمود",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
        "role": "فنان بصري"
      },
      "image": "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=400&fit=crop",
      "date": "2026-01-05",
      "readTime": "9 دقائق للقراءة",
      "featured": false,
      "tags": ["تكوين", "قواعد التصوير", "فن"]
    },
    {
      "id": 6,
      "slug": "mobile-photography-tips",
      "title": "تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك",
      "excerpt": "اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.",
      "content": "أفضل كاميرا هي التي معك دائماً. هاتفك الذكي يمكن أن يلتقط صوراً مذهلة إذا عرفت كيف تستخدمه بشكل صحيح.\n\n## نظّف العدسة\n\nأبسط نصيحة وأهمها. العدسة المتسخة تسبب ضبابية وفقدان للتباين. امسحها بقطعة قماش ناعمة قبل كل جلسة تصوير.\n\n## استخدم الإضاءة الطبيعية\n\nكاميرات الهواتف تتألق في الإضاءة الجيدة. صوّر بالقرب من النوافذ أو في الخارج. تجنب الإضاءة القاسية المباشرة.\n\n## ثبّت يدك\n\nالاهتزاز عدو الصورة الحادة. أمسك الهاتف بكلتا يديك، اسند مرفقيك على جسمك، أو استخدم حاملاً ثلاثياً صغيراً.\n\n## تجنب التكبير الرقمي\n\nالتكبير الرقمي يفقد الجودة. بدلاً من ذلك، اقترب من موضوعك أو قص الصورة لاحقاً.\n\n## جرب تطبيقات التصوير\n\nتطبيقات مثل Lightroom Mobile و VSCO توفر تحكماً يدوياً وأدوات تحرير قوية. صوّر بصيغة RAW إذا كان هاتفك يدعمها.\n\n## التكوين مهم\n\nفعّل شبكة الأثلاث في إعدادات الكاميرا. طبق قواعد التكوين نفسها التي تستخدمها مع الكاميرا الاحترافية.\n\n## الخلاصة\n\nهاتفك أداة إبداعية قوية. المهارة والعين الفنية أهم من المعدات. صوّر كل يوم وشاهد تطورك.",
      "category": "معدات",
      "author": {
        "name": "جمال عبدالله",
        "avatar": "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
        "role": "مصور ومراجع تقني"
      },
      "image": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
      "date": "2026-01-03",
      "readTime": "8 دقائق للقراءة",
      "featured": false,
      "tags": ["تصوير الهاتف", "نصائح", "مبتدئين"]
    }

  ])

  function formatGregorianToArabic(dateString) {
    const date = new Date(dateString);
    const arabicMonths = [
      'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
      'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
    ];

    const day = date.getDate();
    const month = arabicMonths[date.getMonth()];
    const year = date.getFullYear();

    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    const arabicDay = day.toString().split('').map(d => arabicNumerals[parseInt(d)]).join('');
    const arabicYear = year.toString().split('').map(y => arabicNumerals[parseInt(y)]).join('');

    return `${arabicDay} ${month} ${arabicYear}`;
  }

  return (

    <div className={`${style.home}`}>
      <div className={` ${style.containerFluid} container-fluid d-flex justify-content-center align-items-center`}>

        <div className="square-grid">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>

        <section className={`d-inline ${style.mainHomeText}`}>
          <div className={`${style.welcomeBar}`}>
            <div className={`${style.textWhite} text-white`}>مرحباً بك في عدسة</div>
            <div className={`${style.circle1} rounded-circle`}></div>
            <div className={`${style.circle2} rounded-circle`}></div>
          </div>
          <div>
            <h1 className={style.mainHeading1}>
              اكتشف <span className={style.highlight}>فن</span>
            </h1>
            <h1 className={style.mainHeading2}>التصوير الفوتوغرافي  </h1>

            <p className={`${style.subText} mt-4`}>
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في <br />.التصوير
            </p>
            <div className=" d-flex justify-content-center align-items-center">
              <Link className={` ${style.btnSecondary}  mt-4 me-3  text-decoration-none text-center`} to="/aboutus">اعرف المزيد</Link>
              <Link className={` ${style.btnPrimary}  mt-4 text-decoration-none text-center`} to="/blog">استكشف المقالات</Link>
            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-center " >
            <div className={`${style.statBox}  mt-5 me-3 p-3 text-center`}>
              <h2 className={style.statNumber}>6</h2>
              <p className={style.statLabel}>كاتب</p>
            </div>
            <div className={`${style.statBox}  mt-5 me-3 p-3 text-center`}>
              <h2 className={style.statNumber}>4</h2>
              <p className={style.statLabel}>تصنيفات</p>
            </div>
            <div className={`${style.statBox}  mt-5 me-3 p-3 text-center`}>
              <h2 className={style.statNumber}>110+الف</h2>
              <p className={style.statLabel}>قارئ</p>
            </div>
            <div className={`${style.statBox}  mt-5 me-3 p-3 text-center`}>
              <h2 className={style.statNumber}>50+</h2>
              <p className={style.statLabel}>مقالة</p>
            </div>
          </div>
        </section>
      </div>

      <section className={`${style.featuresSection} py-5`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center position-relative">
              <div className={`${style.welcomeBar2} `}>
                <div className={`${style.textOrange} `}>مميز</div>
                <div className={`${style.circle1} rounded-circle`}></div>
                <div className={`${style.circle2} rounded-circle`}></div>
              </div>
              <h2 className={style.featuresTitle}>مقالات مختارة</h2>
              <p className={`${style.featuresSubtitle} text-sm-end`}>محتوى منتقى لبدء رحلة تعلمك</p>

              <Link className={` ${style.btnPrimary1}  mt-4 me-3  text-decoration-none `} to="/blog"> عرض الكل</Link>
            </div>
          </div>
        </div>



        {cards.map((card) => (
          <div className="container mt-4" key={card.id}>
            <div className={`${style.featuredHero} row p-0 align-items-stretch`}>
              <div className={`col-lg-6 col-12 p-0 ${style.heroContent}`} dir="rtl">
                <div className={style.metaRow}>
                  <div className={`${style.welcomeBar3} me-3`}>
                    <div className={`${style.textOrange} `}>{card.category}</div>
                  </div>
                  <div className={style.readTime}>{card.readTime}</div>
                </div>
                <h2 className={style.heroTitle}>{card.title}</h2>
                <p className={style.heroExcerpt}>{card.excerpt}</p>

                <div className="d-flex justify-content-between align-items-end mt-4">
                  <div className={style.heroAuthor}>
                    <img src={card.author?.avatar} className={style.authorAvatar} />
                    <div>
                      <div className={style.authorName}>{card.author?.name}</div>
                      <div className={style.authorDate}>{formatGregorianToArabic(card.date)}</div>
                    </div>
                  </div>
                  <Link to={`/blog/${card.slug}`} className={`text-decoration-none ${style.info}`}>اقرأ المقال</Link>

                </div>
              </div>

              <div className={`col-lg-6 col-12 p-0 ${style.heroImage}`} style={{ backgroundImage: `url(${card.image})` }}></div>
            </div>
          </div>
        ))}



      </section>
      <section className={`${style.category} container-fluid `}>
        <div className="text-center mb-5">
          <div className={`${style.welcomeBar2} d-inline-flex mb-3 justify-content-center`}>
            <div className={`${style.textOrange}`}>التصنيفات</div>
            <div className={`${style.circle1} rounded-circle`}></div>
            <div className={`${style.circle2} rounded-circle`}></div>
          </div>
          <h2 className={style.categoriesTitle}>استكشف حسب الموضوع</h2>
          <p className={style.categoriesSubtitle}>اعثر على محتوى مصنف حسب اهتماماتك</p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4 ">
            <div className={`${style.categoryCard} `}>
              <div className={style.categoryIcon}>⚙️</div>
              <h3 className={style.categoryName}>تقنيات</h3>
              <p className={style.articleCount}>5 مقالة</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className={style.categoryCard}>
              <div className={style.categoryIcon}>🏔️</div>
              <h3 className={style.categoryName}>مناظر طبيعية</h3>
              <p className={style.articleCount}>2 مقالة</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className={style.categoryCard}>
              <div className={style.categoryIcon}>👤</div>
              <h3 className={style.categoryName}>بورتريه</h3>
              <p className={style.articleCount}>3 مقالة</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className={style.categoryCard}>
              <div className={style.categoryIcon}>💡</div>
              <h3 className={style.categoryName}>إضاءة</h3>
              <p className={style.articleCount}>3 مقالة</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4 ms-auto">
            <div className={style.categoryCard}>
              <div className={style.categoryIcon}>🔧</div>
              <h3 className={style.categoryName}>معدات</h3>
              <p className={style.articleCount}>3 مقالة</p>
            </div>
          </div>
        </div>
      </section>
      {/* Latest articles section */}
      <section className={`${style.container}`} >

        <div className={`container `}>
          <div className={`${style.latestHeader} mb-5`}>

            <div className={style.latestTitleGroup}>
              <div className={`${style.welcomeBar2} d-inline-flex mb-3 justify-content-center`}>
                <div className={`${style.textOrange}`}>البحث</div>
                <div className={`${style.circle1} rounded-circle`}></div>
                <div className={`${style.circle2} rounded-circle`}></div>
              </div>
              <h2 className={style.latestTitle}>أحدث المقالات</h2>
              <p className={style.latestSubtitle}>محتوى جديد طازج من المطبعة</p>
            </div>
          </div>

          <div className="row">
            {latestCard.map((latestCard) => (
              <div key={latestCard.id} className="col-lg-4 col-md-6 mb-4">
                <div className={style.articleCard}>
                  <div
                    className={style.articleImage}
                    style={{
                      backgroundImage: latestCard.image ? `url(${latestCard.image})` : undefined,
                      backgroundColor: latestCard.image ? undefined : '#e9e9e9'
                    }}
                  />
                  <div className={style.categoryBadge}>{latestCard.category}</div>
                  <div className={style.articleBody} dir='rtl'>
                    <div className={style.articleMeta}>
                      <span className={style.articleReadTime}>{latestCard.readTime}</span>
                      <span className={style.articleDate}>{formatGregorianToArabic(latestCard.date)}</span>

                    </div>
                    <h3 className={style.articleTitle}>{latestCard.title}</h3>
                    <p className={style.articleExcerpt}>{latestCard.excerpt}</p>

                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div className={style.articleAuthor}>
                        <img
                          src={latestCard.author?.avatar}
                          className={style.authorAvatarSmall}
                          alt={latestCard.author?.name || 'author avatar'}
                          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://via.placeholder.com/36'; }}
                        />
                        <div className={style.authorMeta}>
                          <div className={style.authorName}>{latestCard.author?.name}</div>
                          <div className={style.authorRole}>{latestCard.author?.role}</div>
                        </div>
                      </div>
                      <Link to={`/blog/${latestCard.slug}`} className={`text-decoration-none ${style.info}`}>اقرأ</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${style.mail} mb-0`}>

        <div className={`${style.cont}  mx-auto `}>
          <div className={`${style.mailLogo}`}>

            <svg className={`${style.mailbox} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>

          <h2 className={`${style.mailTitle} text-white mt-3`}>اشترك في
            <span className={`${style.mailSpan}`}> نشرتنا الإخبارية</span>
          </h2>


          <p className={`${style.mailPargh}`}>احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>
          <div className="d-flex flex-row justify-content-center " dir='rtl'>
            <input type="text" placeholder='أدخل بريدك الإلكتروني' className={style.footInput} dir='rtl' />
            <button className={` ${style.btnMail}`}>اشترك الان</button>
          </div>
          <div className={`${style.props} d-flex justify-content-between justify-content-center`} dir='rtl'>

            <img src={avatar1} alt="" className={`${style.icon}`} />
            <img src={avatar2} alt="" className={`${style.icon}`} />
            <img src={avatar3} alt="" className={`${style.icon}`} />

            <div className="text">انضم لـ +10,000 مصور</div>
            .
            <div className="text">بدون إزعاج</div>
            .
            <div className="test">إلغاء الاشتراك في أي وقت</div>
          </div>

        </div>




      </section>
    </div>
  )
}
