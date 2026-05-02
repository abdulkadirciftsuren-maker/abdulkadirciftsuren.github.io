import React, { useState, useRef, useEffect } from 'react';

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const T = {
  TR: {
    search:'Berber, kuaför, masaj, makyaj ara...', login:'Giriş Yap', register:'Kayıt Ol',
    hero1:'Dünyanın Her Yerinden', hero2:'Profesyoneller Bir Arada',
    heroSub:'Saç • Sakal • Makyaj • Masaj • Tırnak',
    btn1:'Saçını Dene', btn2:'Haritada Bul', btn3:'İş Ara',
    cats:'Kategoriler', stories:'Hikayeler', addStory:'Hikaye Ekle',
    feed:'Akış', map:'Harita', edu:'Eğitim', jobs:'İş İlanları',
    share:'Ne paylaşmak istiyorsunuz?', nearby:'Yakınındaki Ustalar',
    trending:'Trend', latestJobs:'Güncel İlanlar', appointment:'Randevu Al',
    share2:'Paylaş', seeAll:'Tümünü Gör', reels:'Reels',
    menHair:'Erkek Saç', beard:'Sakal', womenHair:'Kadın Saç',
    makeup:'Makyaj', massage:'Masaj', skincare:'Cilt Bakım',
    nails:'Tırnak', trainings:'Eğitimler', jobsMenu:'İş İlanları', mapMenu:'Harita',
    explore:'Keşfet', barbers:'Berberler', hairdressers:'Kuaförler',
    myProfile:'Profilim', appointments:'Randevularım', customers:'Müşterilerim',
    gallery:'Galeri', statistics:'İstatistikler', certificates:'Sertifikalarım',
    liveStream:'Canlı Yayın', messages:'Mesajlar', settings:'Ayarlar',
    proFor:'Profesyoneller İçin', learnGrow:'Öğren & Büyü', other:'Diğer',
    videoBtn:'Video', photoBtn:'Fotoğraf', hairStyle:'Saç Stili',
    massageBtn:'Masaj', jobPost:'İş İlanı', mapShow:'Haritada Göster',
    apply:'Başvur', postJob:'İlan Ver', homePage:'Ana Sayfa',
    allProfs:'Tüm Profesyoneller', bookNow:'Hemen Rezerve Et',
    reviews:'Yorum', rating:'Puan', distance:'km uzaklıkta',
    sendMsg:'Mesaj Gönder', follow:'Takip Et', following:'Takip Ediliyor',
    noAppointments:'Henüz randevunuz yok', noMessages:'Henüz mesajınız yok',
    filter:'Filtrele', sortBy:'Sırala', newest:'En Yeni', popular:'Popüler',
    comingSoon:'Yakında aktif olacak', backHome:'Ana Sayfaya Dön',
    liveNow:'Şu an canlı yayında', watching:'izliyor',
    profileInfo:'Profil Bilgileri', editProfile:'Profili Düzenle',
    totalPosts:'Toplam Gönderi', totalFollowers:'Takipçi', totalFollowing:'Takip',
    back:'Geri', confirmed:'Onaylı', edit:'Düzenle', user:'Kullanıcı',
    nextAppt:'Sonraki Randevu', lastAppts:'Son Randevular', details:'Detaylar',
    completed:'Tamamlandı', daysAgo:'gün önce', favorites:'Favoriler',
    comments2:'Yorumlar', quickAccess:'Hızlı Erişim', likes:'Beğeni',
  },
  DE: {
    search:'Friseur, Kosmetik, Massage suchen...', login:'Anmelden', register:'Registrieren',
    hero1:'Profis aus aller Welt', hero2:'Alle an einem Ort',
    heroSub:'Haare • Bart • Make-up • Massage • Nägel',
    btn1:'Look testen', btn2:'Auf der Karte', btn3:'Job suchen',
    cats:'Kategorien', stories:'Storys', addStory:'Story hinzufügen',
    feed:'Feed', map:'Karte', edu:'Ausbildung', jobs:'Stellenangebote',
    share:'Was möchten Sie teilen?', nearby:'Profis in der Nähe',
    trending:'Trends', latestJobs:'Aktuelle Stellen', appointment:'Termin',
    share2:'Teilen', seeAll:'Alle anzeigen', reels:'Reels',
    menHair:'Herrenfriseur', beard:'Bart', womenHair:'Damenfriseur',
    makeup:'Make-up', massage:'Massage', skincare:'Hautpflege',
    nails:'Nägel', trainings:'Ausbildungen', jobsMenu:'Jobs', mapMenu:'Karte',
    explore:'Entdecken', barbers:'Barbiere', hairdressers:'Friseure',
    myProfile:'Mein Profil', appointments:'Termine', customers:'Kunden',
    gallery:'Galerie', statistics:'Statistiken', certificates:'Zertifikate',
    liveStream:'Live-Stream', messages:'Nachrichten', settings:'Einstellungen',
    proFor:'Für Profis', learnGrow:'Lernen & Wachsen', other:'Sonstiges',
    videoBtn:'Video', photoBtn:'Foto', hairStyle:'Haarstil',
    massageBtn:'Massage', jobPost:'Stellenanzeige', mapShow:'Auf Karte zeigen',
    apply:'Bewerben', postJob:'Anzeige', homePage:'Startseite',
    allProfs:'Alle Profis', bookNow:'Jetzt buchen',
    reviews:'Bewertungen', rating:'Bewertung', distance:'km entfernt',
    sendMsg:'Nachricht senden', follow:'Folgen', following:'Gefolgt',
    noAppointments:'Keine Termine', noMessages:'Keine Nachrichten',
    filter:'Filtern', sortBy:'Sortieren', newest:'Neueste', popular:'Beliebt',
    comingSoon:'Demnächst verfügbar', backHome:'Zur Startseite',
    liveNow:'Jetzt live', watching:'schaut zu',
    profileInfo:'Profilinformationen', editProfile:'Profil bearbeiten',
    totalPosts:'Beiträge', totalFollowers:'Follower', totalFollowing:'Folgt',
    back:'Zurück', confirmed:'Bestätigt', edit:'Bearbeiten', user:'Benutzer',
    nextAppt:'Nächster Termin', lastAppts:'Letzte Termine', details:'Details',
    completed:'Abgeschlossen', daysAgo:'Tage her', favorites:'Favoriten',
    comments2:'Bewertungen', quickAccess:'Schnellzugriff', likes:'Gefällt mir',
  },
  EN: {
    search:'Search barber, salon, massage...', login:'Sign In', register:'Sign Up',
    hero1:'From Around The World', hero2:'Professionals Together',
    heroSub:'Hair • Beard • Makeup • Massage • Nails',
    btn1:'Try Your Look', btn2:'Find on Map', btn3:'Find Jobs',
    cats:'Categories', stories:'Stories', addStory:'Add Story',
    feed:'Feed', map:'Map', edu:'Education', jobs:'Jobs',
    share:'What would you like to share?', nearby:'Nearby Masters',
    trending:'Trending', latestJobs:'Latest Jobs', appointment:'Book Now',
    share2:'Share', seeAll:'See All', reels:'Reels',
    menHair:"Men's Hair", beard:'Beard', womenHair:"Women's Hair",
    makeup:'Makeup', massage:'Massage', skincare:'Skincare',
    nails:'Nails', trainings:'Trainings', jobsMenu:'Jobs', mapMenu:'Map',
    explore:'Explore', barbers:'Barbers', hairdressers:'Hairdressers',
    myProfile:'My Profile', appointments:'Appointments', customers:'Customers',
    gallery:'Gallery', statistics:'Statistics', certificates:'Certificates',
    liveStream:'Live Stream', messages:'Messages', settings:'Settings',
    proFor:'For Professionals', learnGrow:'Learn & Grow', other:'Other',
    videoBtn:'Video', photoBtn:'Photo', hairStyle:'Hair Style',
    massageBtn:'Massage', jobPost:'Job Post', mapShow:'Show on Map',
    apply:'Apply', postJob:'Post Job', homePage:'Home',
    allProfs:'All Professionals', bookNow:'Book Now',
    reviews:'Reviews', rating:'Rating', distance:'km away',
    sendMsg:'Send Message', follow:'Follow', following:'Following',
    noAppointments:'No appointments yet', noMessages:'No messages yet',
    filter:'Filter', sortBy:'Sort By', newest:'Newest', popular:'Popular',
    comingSoon:'Coming soon', backHome:'Back to Home',
    liveNow:'Live now', watching:'watching',
    profileInfo:'Profile Info', editProfile:'Edit Profile',
    totalPosts:'Posts', totalFollowers:'Followers', totalFollowing:'Following',
    back:'Back', confirmed:'Confirmed', edit:'Edit', user:'User',
    nextAppt:'Next Appointment', lastAppts:'Recent Appointments', details:'Details',
    completed:'Completed', daysAgo:'days ago', favorites:'Favorites',
    comments2:'Reviews', quickAccess:'Quick Access', likes:'Likes',
  },
  RU: {
    search:'Поиск парикмахера, салона...', login:'Войти', register:'Регистрация',
    hero1:'Со всего мира', hero2:'Профессионалы вместе',
    heroSub:'Волосы • Борода • Макияж • Массаж • Ногти',
    btn1:'Примерить образ', btn2:'На карте', btn3:'Найти работу',
    cats:'Категории', stories:'Истории', addStory:'Добавить историю',
    feed:'Лента', map:'Карта', edu:'Обучение', jobs:'Вакансии',
    share:'Что хотите поделиться?', nearby:'Мастера рядом',
    trending:'Тренды', latestJobs:'Актуальные вакансии', appointment:'Записаться',
    share2:'Поделиться', seeAll:'Все', reels:'Рилс',
    menHair:'Мужские стрижки', beard:'Борода', womenHair:'Женские стрижки',
    makeup:'Макияж', massage:'Массаж', skincare:'Уход за кожей',
    nails:'Ногти', trainings:'Обучение', jobsMenu:'Вакансии', mapMenu:'Карта',
    explore:'Исследовать', barbers:'Барберы', hairdressers:'Парикмахеры',
    myProfile:'Мой профиль', appointments:'Записи', customers:'Клиенты',
    gallery:'Галерея', statistics:'Статистика', certificates:'Сертификаты',
    liveStream:'Прямой эфир', messages:'Сообщения', settings:'Настройки',
    proFor:'Для профессионалов', learnGrow:'Учись и расти', other:'Другое',
    videoBtn:'Видео', photoBtn:'Фото', hairStyle:'Стиль волос',
    massageBtn:'Массаж', jobPost:'Вакансия', mapShow:'Показать на карте',
    apply:'Подать заявку', postJob:'Разместить', homePage:'Главная',
    allProfs:'Все профессионалы', bookNow:'Записаться',
    reviews:'Отзывы', rating:'Оценка', distance:'км',
    sendMsg:'Написать', follow:'Подписаться', following:'Подписан',
    noAppointments:'Нет записей', noMessages:'Нет сообщений',
    filter:'Фильтр', sortBy:'Сортировка', newest:'Новые', popular:'Популярные',
    comingSoon:'Скоро будет доступно', backHome:'На главную',
    liveNow:'Сейчас в эфире', watching:'смотрит',
    profileInfo:'Информация профиля', editProfile:'Редактировать',
    totalPosts:'Публикации', totalFollowers:'Подписчики', totalFollowing:'Подписки',
    back:'Назад', confirmed:'Подтверждено', edit:'Редактировать', user:'Пользователь',
    nextAppt:'Следующая запись', lastAppts:'Последние записи', details:'Детали',
    completed:'Завершено', daysAgo:'дн. назад', favorites:'Избранное',
    comments2:'Отзывы', quickAccess:'Быстрый доступ', likes:'Нравится',
  },
  AR: {
    search:'ابحث عن حلاق أو صالون...', login:'تسجيل الدخول', register:'إنشاء حساب',
    hero1:'من حول العالم', hero2:'محترفون معاً',
    heroSub:'شعر • لحية • مكياج • مساج • أظافر',
    btn1:'جرب إطلالتك', btn2:'ابحث على الخريطة', btn3:'ابحث عن عمل',
    cats:'الفئات', stories:'القصص', addStory:'إضافة قصة',
    feed:'الخلاصة', map:'الخريطة', edu:'التعليم', jobs:'الوظائف',
    share:'ماذا تريد أن تشارك؟', nearby:'الحرفيون القريبون',
    trending:'الرائج', latestJobs:'أحدث الوظائف', appointment:'احجز الآن',
    share2:'مشاركة', seeAll:'عرض الكل', reels:'ريلز',
    menHair:'شعر الرجال', beard:'اللحية', womenHair:'شعر النساء',
    makeup:'مكياج', massage:'مساج', skincare:'العناية بالبشرة',
    nails:'أظافر', trainings:'تدريبات', jobsMenu:'وظائف', mapMenu:'خريطة',
    explore:'استكشاف', barbers:'الحلاقون', hairdressers:'مصففو الشعر',
    myProfile:'ملفي', appointments:'المواعيد', customers:'العملاء',
    gallery:'المعرض', statistics:'الإحصائيات', certificates:'الشهادات',
    liveStream:'البث المباشر', messages:'الرسائل', settings:'الإعدادات',
    proFor:'للمحترفين', learnGrow:'تعلم وانمو', other:'أخرى',
    videoBtn:'فيديو', photoBtn:'صورة', hairStyle:'تسريحة',
    massageBtn:'مساج', jobPost:'وظيفة', mapShow:'عرض على الخريطة',
    apply:'تقدم', postJob:'نشر وظيفة', homePage:'الرئيسية',
    allProfs:'جميع المحترفين', bookNow:'احجز الآن',
    reviews:'مراجعات', rating:'تقييم', distance:'كم',
    sendMsg:'إرسال رسالة', follow:'متابعة', following:'تتابع',
    noAppointments:'لا مواعيد حتى الآن', noMessages:'لا رسائل حتى الآن',
    filter:'تصفية', sortBy:'ترتيب', newest:'الأحدث', popular:'الأكثر شعبية',
    comingSoon:'قريباً', backHome:'العودة للرئيسية',
    liveNow:'مباشر الآن', watching:'يشاهد',
    profileInfo:'معلومات الملف', editProfile:'تعديل الملف',
    totalPosts:'منشورات', totalFollowers:'متابعون', totalFollowing:'متابَعون',
    back:'رجوع', confirmed:'مؤكد', edit:'تعديل', user:'المستخدم',
    nextAppt:'الموعد القادم', lastAppts:'المواعيد الأخيرة', details:'تفاصيل',
    completed:'مكتمل', daysAgo:'أيام مضت', favorites:'المفضلة',
    comments2:'مراجعات', quickAccess:'وصول سريع', likes:'إعجاب',
  },
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const COUNTRIES = [
  {name:'TÜRKİYE',code:'TR',flag:'🇹🇷',color:'#FF6B6B'},
  {name:'ALMANYA',code:'DE',flag:'🇩🇪',color:'#FFD700'},
  {name:'FRANSA',code:'FR',flag:'🇫🇷',color:'#74B9FF'},
  {name:'İTALYA',code:'IT',flag:'🇮🇹',color:'#55EFC4'},
  {name:'İNGİLTERE',code:'GB',flag:'🇬🇧',color:'#FD79A8'},
  {name:'İSPANYA',code:'ES',flag:'🇪🇸',color:'#FDCB6E'},
  {name:'HOLLANDA',code:'NL',flag:'🇳🇱',color:'#A29BFE'},
  {name:'BELÇİKA',code:'BE',flag:'🇧🇪',color:'#81ECEC'},
  {name:'AVUSTURYA',code:'AT',flag:'🇦🇹',color:'#FF7675'},
  {name:'İSVİÇRE',code:'CH',flag:'🇨🇭',color:'#E17055'},
  {name:'POLONYA',code:'PL',flag:'🇵🇱',color:'#FAB1A0'},
  {name:'İSVEÇ',code:'SE',flag:'🇸🇪',color:'#00B894'},
  {name:'NORVEÇ',code:'NO',flag:'🇳🇴',color:'#6C5CE7'},
  {name:'DANİMARKA',code:'DK',flag:'🇩🇰',color:'#FD79A8'},
  {name:'FİNLANDİYA',code:'FI',flag:'🇫🇮',color:'#74B9FF'},
  {name:'YUNANİSTAN',code:'GR',flag:'🇬🇷',color:'#55EFC4'},
  {name:'PORTEKİZ',code:'PT',flag:'🇵🇹',color:'#FDCB6E'},
  {name:'RUSYA',code:'RU',flag:'🇷🇺',color:'#A29BFE'},
  {name:'ABD',code:'US',flag:'🇺🇸',color:'#81ECEC'},
  {name:'JAPONYA',code:'JP',flag:'🇯🇵',color:'#FF6B6B'},
  {name:'ÇİN',code:'CN',flag:'🇨🇳',color:'#FFD700'},
  {name:'GÜNEY KORE',code:'KR',flag:'🇰🇷',color:'#74B9FF'},
  {name:'SUUDİ ARABİSTAN',code:'SA',flag:'🇸🇦',color:'#55EFC4'},
  {name:'BAE',code:'AE',flag:'🇦🇪',color:'#FD79A8'},
  {name:'AVUSTRALYA',code:'AU',flag:'🇦🇺',color:'#FDCB6E'},
  {name:'BREZİLYA',code:'BR',flag:'🇧🇷',color:'#81ECEC'},
  {name:'KANADA',code:'CA',flag:'🇨🇦',color:'#FF6B6B'},
  {name:'SİNGAPUR',code:'SG',flag:'🇸🇬',color:'#00B894'},
  {name:'HİNDİSTAN',code:'IN',flag:'🇮🇳',color:'#E17055'},
  {name:'KATAR',code:'QA',flag:'🇶🇦',color:'#6C5CE7'},
];

const HERO_PHOTOS = [
  'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=320&q=85',
  'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=320&q=85',
  'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=320&q=85',
  'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=320&q=85',
  'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=320&q=85',
  'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=320&q=85',
  'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=320&q=85',
  'https://images.unsplash.com/photo-1543832923-44667a44c804?w=320&q=85',
];

const PROFESSIONALS = [
  {id:1, name:'Ahmet Usta', spec:'Erkek Saç & Sakal', city:'München', rating:4.9, reviews:234, dist:0.3, followers:1240, posts:89, photo:'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=300&q=80', avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80', category:'barbers'},
  {id:2, name:'Ayşe Kuaför', spec:'Kadın Saç & Boyama', city:'Berlin', rating:4.8, reviews:187, dist:0.7, followers:2100, posts:143, photo:'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=80', avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80', category:'hairdressers'},
  {id:3, name:'Zen Masaj', spec:'Thai & Aromaterapi', city:'Hamburg', rating:4.9, reviews:98, dist:1.2, followers:876, posts:45, photo:'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&q=80', avatar:'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&q=80', category:'massage'},
  {id:4, name:'Makyaj Studio', spec:'Gelin & Gece Makyajı', city:'Frankfurt', rating:4.7, reviews:156, dist:1.8, followers:3400, posts:210, photo:'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&q=80', avatar:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80', category:'makeup'},
  {id:5, name:'Nail Art Pro', spec:'Jel & Akrilik Tırnak', city:'Köln', rating:4.8, reviews:203, dist:2.1, followers:1890, posts:167, photo:'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&q=80', avatar:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80', category:'nails'},
  {id:6, name:'Cilt Bakım Merkezi', spec:'Cilt Analizi & Terapi', city:'Düsseldorf', rating:4.6, reviews:89, dist:2.5, followers:654, posts:78, photo:'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&q=80', avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80', category:'skincare'},
  {id:7, name:'Berber Pro', spec:'Erkek Saç & Sakal', city:'Stuttgart', rating:4.9, reviews:312, dist:3.0, followers:2890, posts:198, photo:'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=300&q=80', avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80', category:'barbers'},
  {id:8, name:'Saç Boyama Uzmanı', spec:'Balayaj & Ombre', city:'Leipzig', rating:4.7, reviews:145, dist:3.5, followers:1560, posts:123, photo:'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80', avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80', category:'hairdressers'},
];

const REELS = [
  {id:1, user:'Ahmet Usta', avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80', thumb:'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=85', likes:1240, comments:89, desc:'Fade kesim + sakal kombinasyonu 🔥', tags:['#fade','#sakal'], category:'barbers'},
  {id:2, user:'Ayşe Kuaför', avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80', thumb:'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=85', likes:2340, comments:156, desc:'Balayaj dönüşümü ✨', tags:['#balayaj','#saçboyama'], category:'hairdressers'},
  {id:3, user:'Zen Masaj', avatar:'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&q=80', thumb:'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=85', likes:890, comments:45, desc:'Thai masaj tekniği 🌿', tags:['#masaj','#terapi'], category:'massage'},
  {id:4, user:'Makyaj Studio', avatar:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80', thumb:'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=85', likes:4560, comments:234, desc:'Gelin makyajı 💍', tags:['#gelinmakyaj','#makyaj'], category:'makeup'},
  {id:5, user:'Nail Art Pro', avatar:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80', thumb:'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=85', likes:3210, comments:178, desc:'Nail art tasarımı 💅', tags:['#nailart','#tırnak'], category:'nails'},
  {id:6, user:'Berber Pro', avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80', thumb:'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=85', likes:1890, comments:92, desc:'Sakal şekillendirme 💈', tags:['#sakal','#berber'], category:'barbers'},
];

const STORIES = [
  {name:'Ahmet U.', role:'Berber', photo:'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=200&q=80'},
  {name:'Ayşe K.', role:'Kuaför', photo:'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=200&q=80'},
  {name:'Selin M.', role:'Makyaj', photo:'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=200&q=80'},
  {name:'Murat B.', role:'Sakal', photo:'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=200&q=80'},
  {name:'Fatma G.', role:'Masaj', photo:'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&q=80'},
  {name:'Ali R.', role:'Berber', photo:'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=200&q=80'},
];

const POSTS = [
  {id:1, author:'Ahmet Usta', loc:'München, Bayern', badge:'barbers', badgeC:'rgba(56,178,172,0.15)', badgeT:'#38b2ac', time:'2s', text:'Bugünkü en güzel kesimlerimden! Fade + sakal kombinasyonu. Randevu için mesaj atın!', avaPhoto:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80', mediaPhoto:'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=85', tags:['#fade','#sakal','#münchen'], likes:142, comments:23, type:'video'},
  {id:2, author:'Ayşe Kuaför', loc:'Berlin, Almanya', badge:'hairdressers', badgeC:'rgba(237,100,166,0.15)', badgeT:'#ed64a6', time:'5s', text:'Balyaj tekniği ile muhteşem dönüşüm! Bu ay özel fiyat!', avaPhoto:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80', mediaPhoto:'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=85', tags:['#balyaj','#saçboyama'], likes:287, comments:41, type:'photo'},
  {id:3, author:'Zen Masaj', loc:'Hamburg', badge:'massage', badgeC:'rgba(59,130,246,0.15)', badgeT:'#3b82f6', time:'3s', text:'Thai masaj ve aromaterapi paketlerimiz hazır!', avaPhoto:'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&q=80', mediaPhoto:'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=85', tags:['#masaj','#terapi'], likes:198, comments:34, type:'photo'},
  {id:4, author:'Makyaj Studio', loc:'Frankfurt', badge:'makeup', badgeC:'rgba(239,68,68,0.15)', badgeT:'#ef4444', time:'1g', text:'Gelin makyajı portfolyomdan! 7 yıllık deneyim!', avaPhoto:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80', mediaPhoto:'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=85', tags:['#gelinmakyaj','#makyaj'], likes:512, comments:67, type:'photo'},
];

const JOBS = [
  {title:'Kalfa Berber Aranıyor', loc:'München • Tam Zamanlı', sal:'2.200-2.800€/ay', icon:'scissors', color:'#38b2ac', urgent:true},
  {title:'Masaj Terapisti', loc:'Berlin • Tam Zamanlı', sal:'2.000-2.600€/ay', icon:'heart', color:'#3b82f6', urgent:false},
  {title:'Makyaj Sanatçısı', loc:'Frankfurt • Yarı Zamanlı', sal:'1.500-2.000€/ay', icon:'sparkles', color:'#ed64a6', urgent:true},
  {title:'Tırnak Tasarımcısı', loc:'Köln • Serbest', sal:'1.200-2.000€/ay', icon:'award', color:'#9333ea', urgent:false},
  {title:'Cilt Bakım Uzmanı', loc:'Hamburg • Tam Zamanlı', sal:'2.000-2.500€/ay', icon:'award', color:'#06b6d4', urgent:false},
];

const NEARBY = [
  {name:'Ahmet Usta', spec:'Erkek Saç & Sakal', rating:4.9, dist:0.3, photo:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80'},
  {name:'Güzellik Salonu Elif', spec:'Kadın Saç', rating:4.8, dist:0.7, photo:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80'},
  {name:'Zen Masaj', spec:'Masaj & Terapi', rating:4.9, dist:1.2, photo:'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&q=80'},
  {name:'Make-up Studio', spec:'Makyaj', rating:4.7, dist:2.1, photo:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80'},
];

const TRENDS = ['#BalayajSaç','#FadeKesim','#GelNail','#GalinMakyaj','#ThaiMasaj','#CiltBakım','#SakalTrendi'];

const WOMEN_HAIR = [
  {id:1, name:'Balayaj', photo:'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80'},
  {id:2, name:'Bob Kesim', photo:'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=80'},
  {id:3, name:'Ombre', photo:'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&q=80'},
  {id:4, name:'Kıvırcık', photo:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80'},
  {id:5, name:'Düz Uzun', photo:'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80'},
  {id:6, name:'Pixie Kesim', photo:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80'},
];
const MAKEUP_STYLES = [
  {id:1, name:'Doğal Makyaj', photo:'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&q=80'},
  {id:2, name:'Gelin Makyajı', photo:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80'},
  {id:3, name:'Gece Makyajı', photo:'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&q=80'},
  {id:4, name:'Smoky Eye', photo:'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=300&q=80'},
  {id:5, name:'No-Makeup', photo:'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80'},
  {id:6, name:'Kokteyel', photo:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80'},
];
const NAIL_STYLES = [
  {id:1, name:'Gel Tırnak', photo:'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&q=80'},
  {id:2, name:'Nail Art', photo:'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&q=80'},
  {id:3, name:'Fransız Tırnak', photo:'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&q=80'},
  {id:4, name:'Akrilik', photo:'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&q=80'},
  {id:5, name:'Ombre Tırnak', photo:'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&q=80'},
  {id:6, name:'Glitter', photo:'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&q=80'},
];

const HAIR_STYLES = [
  {id:1, name:'Fade Kesim', photo:'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=85', cat:'Erkek', desc:'Modern ve şık'},
  {id:2, name:'Pompadour', photo:'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=85', cat:'Erkek', desc:'Klasik stil'},
  {id:3, name:'Undercut', photo:'https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=400&q=85', cat:'Erkek', desc:'Trend kesim'},
  {id:4, name:'Klasik Kesim', photo:'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=85', cat:'Erkek', desc:'Her ortama uygun'},
  {id:5, name:'Crew Cut', photo:'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=400&q=85', cat:'Erkek', desc:'Kısa ve temiz'},
  {id:6, name:'Dalgalı Stil', photo:'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&q=85', cat:'Erkek', desc:'Doğal görünüm'},
  {id:7, name:'Tam Sakal', photo:'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=85', cat:'Sakal', desc:'Güçlü görünüm'},
  {id:8, name:'Kısa Sakal', photo:'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=85', cat:'Sakal', desc:'Bakımlı stil'},
  {id:9, name:'Çizgi Sakal', photo:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85', cat:'Sakal', desc:'Modern çizgi'},
  {id:10, name:'Bıyık', photo:'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=85', cat:'Sakal', desc:'Klasik bıyık'},
  {id:11, name:'Sakal+Saç Kombo', photo:'https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=400&q=85', cat:'Sakal', desc:'Komple bakım'},
  {id:12, name:'Uzun Sakal', photo:'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=400&q=85', cat:'Sakal', desc:'Doğal uzun'},
  {id:13, name:'Balayaj', photo:'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=85', cat:'Kadın Saç', desc:'Doğal renk geçişi'},
  {id:14, name:'Bob Kesim', photo:'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=85', cat:'Kadın Saç', desc:'Şık ve modern'},
  {id:15, name:'Ombre', photo:'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=85', cat:'Kadın Saç', desc:'Renk geçişi'},
  {id:16, name:'Kıvırcık Stil', photo:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=85', cat:'Kadın Saç', desc:'Doğal kıvırcık'},
  {id:17, name:'Düz Uzun', photo:'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=85', cat:'Kadın Saç', desc:'Klasik uzun saç'},
  {id:18, name:'Pixie Kesim', photo:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=85', cat:'Kadın Saç', desc:'Kısa ve cesur'},
];

const LIVE_STREAMS = [
  {user:'Ahmet Usta',    viewers:2340, avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80', title:'Canlı Fade Kesim',    cat:'barbers',
   video:'https://assets.mixkit.co/videos/preview/mixkit-man-getting-a-haircut-4579-large.mp4',
   fallback:'https://res.cloudinary.com/demo/video/upload/sea_turtle.mp4',
   photo:'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=85'},
  {user:'Ayşe Kuaför',  viewers:5670, avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80', title:'Balayaj Canlı',        cat:'hairdressers',
   video:'https://assets.mixkit.co/videos/preview/mixkit-hairdresser-combing-hair-of-a-client-4544-large.mp4',
   fallback:'https://res.cloudinary.com/demo/video/upload/dog.mp4',
   photo:'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=85'},
  {user:'Makyaj Studio',viewers:12030,avatar:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80', title:'Gelin Makyajı',        cat:'makeup',
   video:'https://assets.mixkit.co/videos/preview/mixkit-woman-applying-eyeshadow-on-her-eyelid-4649-large.mp4',
   fallback:'https://res.cloudinary.com/demo/video/upload/cld-sample.mp4',
   photo:'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=85'},
  {user:'Berber Pro',   viewers:891,  avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80', title:'Sakal Şekillendirme', cat:'barbers',
   video:'https://assets.mixkit.co/videos/preview/mixkit-barber-shop-haircut-4672-large.mp4',
   fallback:'https://res.cloudinary.com/demo/video/upload/elephants.mp4',
   photo:'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=85'},
  {user:'Nail Art Pro', viewers:445,  avatar:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80', title:'Nail Art Dersi',       cat:'nails',
   video:'https://assets.mixkit.co/videos/preview/mixkit-nail-polishing-close-up-4638-large.mp4',
   fallback:'https://res.cloudinary.com/demo/video/upload/flower.mp4',
   photo:'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=85'},
  {user:'Zen Masaj',    viewers:328,  avatar:'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&q=80', title:'Thai Masaj',           cat:'massage',
   video:'https://assets.mixkit.co/videos/preview/mixkit-therapist-giving-back-massage-4616-large.mp4',
   fallback:'https://res.cloudinary.com/demo/video/upload/sea_turtle.mp4',
   photo:'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=85'},
];

const CAT_DATA = {
  barbers:{icon:'scissors',color:'#38b2ac',bg:'rgba(56,178,172,0.1)'},
  hairdressers:{icon:'sparkles',color:'#ed64a6',bg:'rgba(237,100,166,0.1)'},
  makeup:{icon:'sparkles',color:'#f59e0b',bg:'rgba(245,158,11,0.1)'},
  massage:{icon:'heart',color:'#3b82f6',bg:'rgba(59,130,246,0.1)'},
  nails:{icon:'award',color:'#9333ea',bg:'rgba(147,51,234,0.1)'},
  skincare:{icon:'award',color:'#06b6d4',bg:'rgba(6,182,212,0.1)'},
  edu:{icon:'book',color:'#10b981',bg:'rgba(16,185,129,0.1)'},
  map:{icon:'map',color:'#38b2ac',bg:'rgba(56,178,172,0.1)'},
  jobs:{icon:'briefcase',color:'#9333ea',bg:'rgba(147,51,234,0.1)'},
};

// ─── ICONS ────────────────────────────────────────────────────────────────────
const Ic = ({n, s=16, c='currentColor', f='none'}) => {
  const d = {
    scissors:<><path d="M6 9a3 3 0 100-6 3 3 0 000 6z"/><path d="M6 9l7.5 7.5M6 9l7.5-7.5M18 21l-7.5-7.5M18 3l-7.5 7.5"/><circle cx="18" cy="21" r="3"/><circle cx="18" cy="3" r="3"/></>,
    sparkles:<path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>,
    heart:<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>,
    star:<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
    map:<><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></>,
    briefcase:<><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></>,
    book:<><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></>,
    home:<><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
    search:<><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
    user:<><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
    pin:<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>,
    camera:<><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></>,
    video:<><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></>,
    play:<polygon points="5 3 19 12 5 21 5 3"/>,
    calendar:<><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
    share:<><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></>,
    message:<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>,
    trending:<><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></>,
    dollar:<><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></>,
    award:<><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></>,
    menu:<><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></>,
    close:<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    chevL:<polyline points="15 18 9 12 15 6"/>,
    chevR:<polyline points="9 18 15 12 9 6"/>,
    plus:<><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    settings:<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></>,
    image:<><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></>,
    users:<><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></>,
    barChart:<><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
    radio:<><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"/></>,
    logIn:<><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></>,
    userPlus:<><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></>,
    edit:<><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></>,
    check:<polyline points="20 6 9 17 4 12"/>,
    bell:<path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>,
  };
  return <svg width={s} height={s} viewBox="0 0 24 24" fill={f} stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{d[n]}</svg>;
};

// ─── CSS ──────────────────────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Tenor+Sans&family=Cormorant+Garamond:wght@600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');
  *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'DM Sans',sans-serif;background:#0a0a0f;color:#e8e0d0;overflow-x:hidden;}
  ::-webkit-scrollbar{width:4px;height:4px;}
  ::-webkit-scrollbar-thumb{background:#c9a227;border-radius:2px;}
  ::-webkit-scrollbar-track{background:rgba(201,162,39,0.05);}

  .strip1{height:20px;background:#070709;overflow:hidden;display:flex;align-items:center;border-bottom:1px solid rgba(201,162,39,0.08);}
  .s1t{display:flex;white-space:nowrap;animation:s1r 45s linear infinite;}
  @keyframes s1r{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  .s1i{display:inline-flex;align-items:center;gap:5px;padding:0 12px;font-size:9px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;border-right:1px solid rgba(201,162,39,0.07);}
  .s1c{font-size:8px;opacity:0.4;letter-spacing:2px;}

  .strip2{height:28px;background:#080809;overflow:hidden;display:flex;align-items:center;border-bottom:1px solid rgba(201,162,39,0.15);}
  .s2t{display:flex;white-space:nowrap;animation:s2r 22s linear infinite;}
  @keyframes s2r{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  .s2i{display:inline-flex;align-items:center;gap:5px;padding:0 12px;border-right:1px solid rgba(255,255,255,0.04);}
  .s2f{width:32px;height:21px;object-fit:cover;border-radius:3px;box-shadow:0 1px 4px rgba(0,0,0,0.5);}
  .s2c{font-size:10px;color:rgba(232,224,208,0.8);font-weight:700;letter-spacing:0.8px;}

  .navbar{position:sticky;top:0;z-index:1000;background:rgba(8,8,12,0.98);backdrop-filter:blur(24px);display:flex;flex-direction:column;border-bottom:1px solid rgba(201,162,39,0.15);box-shadow:0 4px 30px rgba(0,0,0,0.6);}
  .navbar::after{content:'';height:2px;background:linear-gradient(90deg,transparent,#c9a227,#e4c55a,#c9a227,transparent);}
  .lbar{height:70px;display:flex;align-items:center;padding:0 16px;border-bottom:1px solid rgba(201,162,39,0.07);position:relative;}
  .mtog{flex-shrink:0;background:rgba(201,162,39,0.1);border:1px solid rgba(201,162,39,0.3);color:#c9a227;width:44px;height:44px;min-width:44px;border-radius:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s;-webkit-tap-highlight-color:transparent;touch-action:manipulation;position:relative;z-index:2;}
  .mtog:hover,.mtog:active{background:rgba(201,162,39,0.22);transform:scale(1.06);}
  .lc{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;text-align:center;pointer-events:none;}
  .lt{display:flex;align-items:center;gap:16px;justify-content:center;width:100%;}
  .lgem{width:54px;height:54px;border-radius:50%;background:radial-gradient(circle at 32% 28%,#ffffff 0%,#fff8dc 15%,#ffd700 40%,#f9a825 70%,#c8860b 100%);display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 3px rgba(255,215,0,0.2),0 0 22px rgba(255,200,0,0.7),0 0 44px rgba(255,150,0,0.3),0 6px 18px rgba(0,0,0,0.2),inset 0 3px 8px rgba(255,255,255,0.8),inset 0 -3px 6px rgba(100,50,0,0.2);animation:gg 2.5s ease-in-out infinite;position:relative;overflow:hidden;flex-shrink:0;}
  .lgem::before{content:'';position:absolute;inset:0;border-radius:50%;background:conic-gradient(transparent,rgba(255,255,255,0.5) 60deg,transparent 120deg);animation:gs 4s linear infinite;}
  @keyframes gg{0%,100%{box-shadow:0 0 20px rgba(255,200,0,0.6),0 6px 16px rgba(0,0,0,0.25);}50%{box-shadow:0 0 40px rgba(255,215,0,1),0 0 70px rgba(255,180,0,0.5),0 6px 16px rgba(0,0,0,0.25);}}
  @keyframes gs{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
  .lgem svg{position:relative;z-index:2;}
  .ltx{font-family:'Cormorant Garamond',serif;font-size:44px;letter-spacing:7px;font-weight:700;text-transform:uppercase;background:linear-gradient(160deg,#fffacd 0%,#ffd700 30%,#e4b800 55%,#c8a020 75%,#8b6914 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;filter:drop-shadow(0 2px 8px rgba(184,134,11,0.5));animation:hg 3s ease-in-out infinite alternate;}
  .lsub{font-size:10px;letter-spacing:3px;text-transform:uppercase;font-weight:700;display:flex;align-items:center;justify-content:center;gap:0;margin-top:3px;}
  .nbar{height:54px;display:flex;align-items:center;padding:0 20px;gap:14px;border-top:1px solid rgba(201,162,39,0.07);}
  .nsr{flex:1;max-width:400px;display:flex;align-items:center;gap:8px;background:rgba(201,162,39,0.04);border:1px solid rgba(201,162,39,0.18);border-radius:50px;padding:9px 18px;transition:all 0.2s;}
  .nsr:focus-within{border-color:rgba(201,162,39,0.45);box-shadow:0 0 0 3px rgba(201,162,39,0.08);}
  .nsr input{background:none;border:none;outline:none;color:#e8e0d0;font-size:14px;width:100%;font-family:'DM Sans',sans-serif;}
  .nsr input::placeholder{color:rgba(232,224,208,0.3);}
  .nr{display:flex;align-items:center;gap:10px;margin-left:auto;}
  .lsel{background:rgba(201,162,39,0.06);border:1px solid rgba(201,162,39,0.2);color:#e8e0d0;padding:7px 12px;border-radius:14px;cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;font-weight:600;}
  .lsel option{background:#111118;color:#e8e0d0;}
  .bin{background:transparent;border:1.5px solid rgba(201,162,39,0.4);color:#c9a227;padding:8px 20px;border-radius:22px;cursor:pointer;font-size:13px;font-family:'DM Sans',sans-serif;font-weight:700;display:flex;align-items:center;gap:6px;transition:all 0.25s;}
  .bin:hover{background:rgba(201,162,39,0.1);border-color:#c9a227;}
  .bup{background:linear-gradient(135deg,#c9a227,#e4c55a);border:none;color:#080600;padding:8px 20px;border-radius:22px;cursor:pointer;font-size:13px;font-weight:700;font-family:'DM Sans',sans-serif;display:flex;align-items:center;gap:6px;box-shadow:0 4px 14px rgba(201,162,39,0.3);transition:all 0.25s;}
  .bup:hover{transform:translateY(-2px);}

  .cat-nav{height:46px;display:flex;align-items:center;padding:0 16px;gap:6px;overflow-x:auto;border-top:1px solid rgba(201,162,39,0.07);scrollbar-width:none;background:rgba(6,6,10,0.95);}
  .cat-nav::-webkit-scrollbar{display:none;}
  .cat-nav-item{display:inline-flex;align-items:center;gap:5px;padding:6px 13px;border-radius:20px;border:1px solid rgba(201,162,39,0.12);background:rgba(201,162,39,0.03);color:rgba(232,224,208,0.55);font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:'DM Sans',sans-serif;transition:all 0.2s;flex-shrink:0;}
  .cat-nav-item:hover{background:rgba(201,162,39,0.09);border-color:rgba(201,162,39,0.3);color:#e4c55a;}
  .cat-nav-item.act{background:rgba(201,162,39,0.14);border-color:#c9a227;color:#c9a227;}

  .layout{display:flex;min-height:100vh;}
  .sidebar{width:220px;flex-shrink:0;position:fixed;right:0;left:auto;top:172px;bottom:0;background:#0d0d14;border-left:1px solid rgba(201,162,39,0.15);border-right:none;overflow-y:auto;transition:transform 0.3s;z-index:901;padding-top:14px;border-radius:16px 0 0 0;}
  .sidebar.closed{transform:translateX(220px);}
  .sbs{padding:14px 14px 5px;font-size:9px;color:rgba(201,162,39,0.55);text-transform:uppercase;letter-spacing:2px;font-weight:800;}
  .sbi{display:flex;align-items:center;gap:9px;padding:10px 14px;cursor:pointer;font-size:13px;font-weight:500;transition:all 0.2s;border-right:3px solid transparent;border-left:none;border-radius:12px 0 0 12px;margin-left:6px;margin-right:0;}
  .sbi:hover{background:rgba(201,162,39,0.06);}
  .sbi.act{background:linear-gradient(135deg,rgba(201,162,39,0.04),rgba(201,162,39,0.12));font-weight:700;}

  .main{flex:1;margin-left:0;margin-right:290px;transition:all 0.3s;background:#0a0a0f;min-width:0;}
  .main.exp{margin-right:0;}
  .mc{padding:24px;}

  .hero{position:relative;height:420px;overflow:hidden;}
  .hphs{position:absolute;inset:0;display:flex;animation:hs 50s linear infinite;}
  @keyframes hs{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  .hph{min-width:260px;height:420px;background-size:cover;background-position:center;flex-shrink:0;filter:brightness(0.42) saturate(1.1);}
  .hovl{position:absolute;inset:0;background:linear-gradient(160deg,rgba(5,3,10,0.78) 0%,rgba(10,5,20,0.5) 50%,rgba(5,10,5,0.72) 100%);}
  .hcon{position:absolute;inset:0;z-index:3;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px 40px;}
  .ht1{color:rgba(201,162,39,0.85);display:block;font-size:12px;font-weight:700;margin-bottom:12px;letter-spacing:6px;text-transform:uppercase;text-shadow:0 2px 8px rgba(0,0,0,0.8);}
  .ht2{font-family:'Cormorant Garamond',serif;font-size:54px;font-weight:800;background:linear-gradient(135deg,#e4c55a,#ffd700,#c9a227,#e4c55a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:hg 3s ease-in-out infinite alternate;display:block;margin-bottom:12px;line-height:1.1;}
  @keyframes hg{from{filter:drop-shadow(0 0 10px rgba(201,162,39,0.4))}to{filter:drop-shadow(0 0 32px rgba(201,162,39,0.95))}}
  @keyframes shimmer{0%{background-position:-400% center}100%{background-position:400% center}}
  @keyframes livePulse{0%,100%{box-shadow:0 0 0 0 rgba(239,68,68,0.6)}50%{box-shadow:0 0 0 8px rgba(239,68,68,0)}}
  @keyframes tapeScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  .live-row{margin-bottom:24px;}
  .live-row-hd{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;}
  .live-tape{overflow:hidden;border-radius:18px;position:relative;}
  .live-tape-inner{display:flex;white-space:nowrap;animation:tapeScroll 32s linear infinite;}
  .live-tape-inner:hover{animation-play-state:paused;}
  .live-tape-card{display:inline-block;flex-shrink:0;width:140px;height:210px;position:relative;overflow:hidden;cursor:pointer;vertical-align:top;}
  .live-tape-card:first-child{border-radius:18px 0 0 18px;}
  .live-tape-card:last-child{border-radius:0 18px 18px 0;}
  .live-tape-bg{position:absolute;inset:0;background-size:cover;background-position:center;transition:transform 0.4s;}
  .live-tape-card:hover .live-tape-bg{transform:scale(1.06);}
  .live-tape-grad{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.85) 0%,rgba(0,0,0,0.1) 55%,transparent 100%);}
  .live-tape-top{position:absolute;top:8px;left:8px;display:flex;align-items:center;gap:5px;}
  .live-tape-lbdg{background:#ef4444;color:#fff;font-size:8px;font-weight:800;padding:3px 7px;border-radius:6px;letter-spacing:0.8px;display:flex;align-items:center;gap:3px;}
  .live-tape-dot{width:5px;height:5px;border-radius:50%;background:#fff;animation:lp 1s ease-in-out infinite;}
  .live-tape-bot{position:absolute;bottom:0;left:0;right:0;padding:10px 10px 12px;}
  .live-tape-av{width:28px;height:28px;border-radius:50%;border:1.5px solid rgba(255,255,255,0.5);object-fit:cover;flex-shrink:0;}
  .live-tape-name{font-size:11px;font-weight:800;color:#fff;line-height:1.2;}
  .live-tape-view{font-size:10px;color:rgba(255,255,255,0.6);margin-top:1px;}
  @keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
  @keyframes countUp{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}
  .ltx-glam{font-family:'Cormorant Garamond',serif;font-size:30px;font-weight:700;letter-spacing:5px;text-transform:uppercase;background:linear-gradient(90deg,#8b6914 0%,#c9a227 15%,#ffd700 35%,#fffacd 50%,#ffd700 65%,#c9a227 85%,#8b6914 100%);background-size:400% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 6s linear infinite;line-height:1.1;}
  .ltx-world{font-family:'DM Sans',sans-serif;font-size:11px;font-weight:300;letter-spacing:8px;text-transform:uppercase;color:rgba(228,197,90,0.55);line-height:1;}
  .logo-live{display:inline-flex;align-items:center;gap:5px;background:rgba(94,234,212,0.08);border:1px solid rgba(94,234,212,0.22);border-radius:20px;padding:2px 8px;font-size:9px;color:#5eead4;font-weight:700;letter-spacing:0.5px;font-family:'DM Sans',sans-serif;}
  .logo-live-dot{width:5px;height:5px;border-radius:50%;background:#5eead4;animation:lp 1.4s ease-in-out infinite;flex-shrink:0;}
  .hero-stats{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:18px;animation:fadeUp 0.9s ease 0.5s both;}
  .hstat{display:flex;align-items:center;gap:6px;background:rgba(255,255,255,0.06);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.1);border-radius:24px;padding:7px 16px;font-size:12px;color:rgba(255,255,255,0.7);font-weight:600;font-family:'DM Sans',sans-serif;animation:countUp 0.6s ease both;}
  .hstat:nth-child(1){animation-delay:0.6s;}.hstat:nth-child(2){animation-delay:0.8s;}.hstat:nth-child(3){animation-delay:1s;}
  .hstat-n{font-weight:800;color:#fcd34d;margin-right:3px;}
  .hsub{color:rgba(232,224,208,0.42);font-size:15px;margin-bottom:30px;letter-spacing:2.5px;}
  .hbts{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;}
  .hbg{background:linear-gradient(135deg,#8b6914,#c9a227,#e4c55a);color:#080600;border:none;padding:14px 30px;border-radius:30px;font-weight:800;font-size:14px;cursor:pointer;font-family:'DM Sans',sans-serif;box-shadow:0 4px 20px rgba(201,162,39,0.4);display:flex;align-items:center;gap:8px;transition:all 0.3s;letter-spacing:0.5px;}
  .hbg:hover{transform:translateY(-3px);box-shadow:0 10px 36px rgba(201,162,39,0.65);}
  .hbs{background:rgba(255,255,255,0.05);color:rgba(232,224,208,0.8);border:1px solid rgba(232,224,208,0.18);padding:14px 26px;border-radius:30px;font-size:14px;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600;display:flex;align-items:center;gap:8px;transition:all 0.3s;backdrop-filter:blur(8px);}
  .hbs:hover{background:rgba(201,162,39,0.1);border-color:rgba(201,162,39,0.35);color:#e4c55a;transform:translateY(-2px);}

  .shd{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;}
  .stit{font-size:18px;font-weight:800;color:#e8e0d0;display:flex;align-items:center;gap:8px;font-family:'Cormorant Garamond',serif;letter-spacing:0.5px;}
  .smore{color:#c9a227;font-size:13px;cursor:pointer;font-weight:700;opacity:0.75;}
  .smore:hover{opacity:1;}

  /* REELS */
  .reels-wrap{display:flex;gap:10px;overflow-x:auto;padding-bottom:10px;margin-bottom:28px;scrollbar-width:none;}
  .reels-wrap::-webkit-scrollbar{display:none;}
  .reel{flex-shrink:0;width:140px;border-radius:18px;overflow:hidden;position:relative;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.55);transition:transform 0.25s;border:1px solid rgba(201,162,39,0.1);}
  .reel:hover{transform:scale(1.04);}
  .reel-img{width:100%;height:220px;object-fit:cover;}
  .reel-grad{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.92),transparent 50%);}
  .reel-play{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:44px;height:44px;background:rgba(201,162,39,0.18);border-radius:50%;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);border:1px solid rgba(201,162,39,0.35);}
  .reel-user{position:absolute;top:10px;left:10px;display:flex;align-items:center;gap:6px;}
  .reel-av{width:32px;height:32px;border-radius:50%;object-fit:cover;border:2px solid #c9a227;}
  .reel-nm{font-size:11px;color:#fff;font-weight:700;}
  .reel-bot{position:absolute;bottom:0;left:0;right:0;padding:10px;}
  .reel-desc{font-size:11px;color:rgba(255,255,255,0.85);margin-bottom:6px;line-height:1.3;}
  .reel-stats{display:flex;align-items:center;gap:8px;font-size:11px;color:rgba(255,255,255,0.65);font-weight:600;}

  /* KATEGORILER */
  .cgrid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-bottom:24px;}
  .ccard{position:relative;border-radius:18px;overflow:hidden;height:140px;cursor:pointer;transition:all 0.35s;box-shadow:0 4px 18px rgba(0,0,0,0.12);}
  .ccard:hover{transform:translateY(-8px) scale(1.03);box-shadow:0 18px 40px rgba(0,0,0,0.22);}
  .cph{position:absolute;inset:0;background-size:cover;background-position:center;transition:transform 0.4s;filter:brightness(0.85);}
  .ccard:hover .cph{transform:scale(1.12);filter:brightness(1);}
  .cgr{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.88),rgba(0,0,0,0.1) 60%,transparent);}
  .cbdg{position:absolute;top:8px;right:8px;font-size:9px;padding:3px 8px;border-radius:8px;font-weight:800;backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.2);}
  .cico{position:absolute;top:8px;left:8px;width:30px;height:30px;border-radius:10px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.3);}
  .cbot{position:absolute;bottom:0;left:0;right:0;padding:12px;}
  .clbl{font-size:13px;font-weight:800;color:#fff;text-shadow:0 1px 4px rgba(0,0,0,0.8);margin-bottom:2px;}
  .csub{font-size:10px;color:rgba(255,255,255,0.65);}

  /* STORIES */
  .sw{position:relative;margin-bottom:24px;padding:0 20px;}
  .ss{display:flex;gap:10px;overflow-x:hidden;scroll-behavior:smooth;padding:4px 2px 10px;}
  .snv{position:absolute;top:50%;transform:translateY(-50%);width:34px;height:34px;background:linear-gradient(135deg,#38b2ac,#319795);border:none;border-radius:50%;color:#fff;cursor:pointer;z-index:10;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 14px rgba(56,178,172,0.5);transition:all 0.2s;}
  .snv:hover{transform:translateY(-50%) scale(1.15);}
  .snv.l{left:-6px;}.snv.r{right:-6px;}
  .sadd{background:linear-gradient(135deg,rgba(56,178,172,0.08),rgba(237,100,166,0.08));border:2px dashed rgba(56,178,172,0.4);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;border-radius:18px;min-width:90px;height:150px;flex-shrink:0;cursor:pointer;}
  .scard{min-width:90px;height:150px;border-radius:18px;cursor:pointer;position:relative;overflow:hidden;flex-shrink:0;transition:transform 0.25s;box-shadow:0 4px 16px rgba(0,0,0,0.15);}
  .scard:hover{transform:scale(1.06);}
  .sph{position:absolute;inset:0;background-size:cover;background-position:center;filter:brightness(0.72);}
  .srng{position:absolute;top:10px;left:50%;transform:translateX(-50%);width:52px;height:52px;border-radius:50%;border:3px solid #38b2ac;animation:rp 2s ease-in-out infinite;}
  @keyframes rp{0%,100%{box-shadow:0 0 0 0 rgba(56,178,172,0.6)}50%{box-shadow:0 0 0 8px rgba(56,178,172,0)}}
  .sbot{position:absolute;bottom:0;left:0;right:0;padding:8px;background:linear-gradient(to top,rgba(0,0,0,0.85),transparent);}
  .slbl{font-size:11px;color:#fff;font-weight:700;text-align:center;}
  .srl{font-size:10px;color:rgba(255,255,255,0.6);text-align:center;}

  /* COMPOSER */
  .comp{background:#fff;border:1.5px solid rgba(56,178,172,0.15);border-radius:20px;padding:18px;margin-bottom:20px;box-shadow:0 2px 14px rgba(56,178,172,0.06);}
  .ctop{display:flex;gap:12px;align-items:center;margin-bottom:14px;}
  .cav{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#38b2ac,#ed64a6);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .cinp{flex:1;background:rgba(56,178,172,0.05);border:1.5px solid rgba(56,178,172,0.2);border-radius:25px;padding:11px 18px;color:#94a3b8;font-size:14px;cursor:pointer;font-family:'DM Sans',sans-serif;}
  .cbtns{display:flex;gap:8px;flex-wrap:wrap;}
  .cbtn{display:flex;align-items:center;gap:6px;padding:8px 16px;border-radius:20px;border:none;cursor:pointer;font-size:12px;font-weight:700;font-family:'DM Sans',sans-serif;transition:all 0.2s;}
  .cbtn:hover{transform:translateY(-2px);}

  /* POST */
  .post{background:#fff;border:1.5px solid rgba(56,178,172,0.1);border-radius:20px;margin-bottom:18px;overflow:hidden;transition:all 0.25s;box-shadow:0 2px 14px rgba(56,178,172,0.05);}
  .post:hover{border-color:rgba(56,178,172,0.3);transform:translateY(-3px);box-shadow:0 10px 30px rgba(56,178,172,0.12);}
  .phd{display:flex;align-items:center;gap:12px;padding:16px;}
  .pav{width:48px;height:48px;border-radius:50%;background-size:cover;background-position:center;flex-shrink:0;border:2.5px solid rgba(56,178,172,0.3);}
  .pnm{font-weight:800;font-size:15px;color:#1a2a2a;}
  .plc{font-size:12px;color:#94a3b8;margin-top:2px;display:flex;align-items:center;gap:4px;}
  .pbdg{font-size:11px;padding:5px 12px;border-radius:14px;font-weight:700;display:flex;align-items:center;gap:4px;}
  .ptxt{font-size:14px;line-height:1.7;color:#475569;padding:0 16px 14px;}
  .pmed{border-radius:16px;height:250px;background-size:cover;background-position:center;margin:0 16px 12px;cursor:pointer;position:relative;overflow:hidden;}
  .pmovl{position:absolute;inset:0;background:rgba(0,0,0,0.05);}
  .pplay{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:60px;height:60px;background:linear-gradient(135deg,rgba(56,178,172,0.93),rgba(49,151,149,0.93));border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 24px rgba(56,178,172,0.6);transition:transform 0.25s;}
  .pmed:hover .pplay{transform:translate(-50%,-50%) scale(1.14);}
  .ptags{display:flex;gap:6px;flex-wrap:wrap;padding:0 16px 12px;}
  .ptag{background:rgba(56,178,172,0.08);color:#38b2ac;font-size:11px;padding:4px 10px;border-radius:10px;border:1px solid rgba(56,178,172,0.2);cursor:pointer;font-weight:600;}
  .pacts{display:flex;gap:3px;padding:10px 16px 16px;border-top:1px solid rgba(56,178,172,0.08);}
  .pact{flex:1;display:flex;align-items:center;justify-content:center;gap:5px;padding:9px 4px;border:none;border-radius:20px;background:transparent;color:#94a3b8;cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;font-weight:600;transition:all 0.2s;}
  .pact:hover{background:rgba(56,178,172,0.08);color:#38b2ac;}

  /* TABS */
  .tabs{display:flex;gap:4px;margin-bottom:18px;background:#fff;padding:5px;border-radius:28px;border:1.5px solid rgba(56,178,172,0.15);box-shadow:0 2px 14px rgba(56,178,172,0.08);}
  .tab{flex:1;padding:9px 4px;border-radius:22px;border:none;background:transparent;color:#94a3b8;cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;font-weight:600;transition:all 0.2s;display:flex;align-items:center;justify-content:center;gap:5px;}
  .tab.act{background:linear-gradient(135deg,#38b2ac,#319795);color:#fff;box-shadow:0 4px 14px rgba(56,178,172,0.4);}
  .tab:hover:not(.act){color:#38b2ac;background:rgba(56,178,172,0.07);}

  /* PROF CARDS */
  .pgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:24px;}
  .pcard{background:#111118;border:1px solid rgba(201,162,39,0.1);border-radius:18px;overflow:hidden;cursor:pointer;transition:all 0.25s;box-shadow:0 4px 20px rgba(0,0,0,0.4);}
  .pcard:hover{border-color:rgba(201,162,39,0.32);transform:translateY(-5px);box-shadow:0 16px 40px rgba(0,0,0,0.6);}
  .pcard-img{height:160px;background-size:cover;background-position:center;position:relative;}
  .pcard-ovl{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.78),transparent);}
  .pcard-body{padding:14px;}
  .pcard-name{font-size:15px;font-weight:800;color:#e8e0d0;margin-bottom:3px;}
  .pcard-spec{font-size:12px;color:rgba(232,224,208,0.45);margin-bottom:10px;display:flex;align-items:center;gap:4px;}
  .pcard-foot{display:flex;align-items:center;gap:8px;}
  .pcard-rat{display:flex;align-items:center;gap:3px;font-size:12px;color:#c9a227;font-weight:700;}
  .pcard-dist{font-size:11px;color:rgba(232,224,208,0.38);display:flex;align-items:center;gap:3px;margin-left:auto;}
  .pbk{padding:8px 16px;background:linear-gradient(135deg,#c9a227,#e4c55a);color:#080600;border:none;border-radius:12px;font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;}

  /* RIGHT PANEL */
  .rp{width:290px;position:fixed;right:0;top:0;bottom:0;padding:220px 14px 16px;overflow-y:auto;background:#0d0d14;border-left:1px solid rgba(201,162,39,0.1);z-index:799;}
  .rptit{font-size:11px;color:rgba(201,162,39,0.6);text-transform:uppercase;letter-spacing:2px;font-weight:800;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid rgba(201,162,39,0.1);display:flex;align-items:center;gap:6px;}
  .brow{display:flex;align-items:center;gap:10px;padding:10px 8px;border-radius:14px;cursor:pointer;transition:all 0.2s;margin-bottom:4px;}
  .brow:hover{background:rgba(201,162,39,0.06);}
  .bav{width:42px;height:42px;border-radius:50%;background-size:cover;background-position:center;flex-shrink:0;border:2px solid rgba(201,162,39,0.18);}
  .bnm{font-size:13px;font-weight:700;color:#e8e0d0;}
  .bds{font-size:11px;color:rgba(232,224,208,0.38);display:flex;align-items:center;gap:3px;margin-top:2px;}
  .bst{margin-left:auto;color:#c9a227;font-size:12px;font-weight:800;display:flex;align-items:center;gap:2px;}
  .ji{padding:10px 0;border-bottom:1px solid rgba(201,162,39,0.07);}
  .ji:last-child{border-bottom:none;}
  .jitl{font-size:13px;font-weight:700;color:#e8e0d0;margin-bottom:3px;}
  .jilc{font-size:11px;color:rgba(232,224,208,0.38);display:flex;align-items:center;gap:3px;}
  .jisl{font-size:12px;font-weight:700;}
  .ttag{padding:8px 0;border-bottom:1px solid rgba(201,162,39,0.06);color:#c9a227;font-size:13px;cursor:pointer;font-weight:600;display:flex;align-items:center;gap:6px;opacity:0.75;}
  .ttag:hover{opacity:1;}

  /* JOB CARDS */
  .jcard{background:#111118;border:1px solid rgba(201,162,39,0.1);border-radius:18px;padding:18px;margin-bottom:14px;cursor:pointer;transition:all 0.25s;box-shadow:0 4px 20px rgba(0,0,0,0.35);}
  .jcard:hover{border-color:rgba(201,162,39,0.3);transform:translateX(5px);}
  .jchd{display:flex;align-items:center;gap:12px;margin-bottom:10px;}
  .jcic{width:40px;height:40px;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .jctit{font-size:16px;font-weight:800;color:#e8e0d0;}
  .jclc{font-size:12px;color:rgba(232,224,208,0.4);margin-bottom:8px;display:flex;align-items:center;gap:4px;}
  .jcsl{font-size:14px;font-weight:700;margin-bottom:14px;display:flex;align-items:center;gap:4px;}
  .japl{border:none;padding:10px 22px;border-radius:16px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:800;color:#fff;}
  .jurg{background:#EF4444;color:#fff;font-size:9px;font-weight:800;padding:2px 7px;border-radius:6px;}

  /* LIVE */
  .lgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;}
  .lcard{border-radius:16px;overflow:hidden;cursor:pointer;position:relative;box-shadow:0 6px 20px rgba(0,0,0,0.15);transition:transform 0.25s;}
  .lcard:hover{transform:scale(1.04);}
  .limg{width:100%;height:200px;object-fit:cover;}
  .lovl{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.8),rgba(0,0,0,0.2) 60%,transparent);}
  .lbdg{position:absolute;top:10px;left:10px;background:#EF4444;color:#fff;font-size:10px;font-weight:800;padding:4px 10px;border-radius:20px;display:flex;align-items:center;gap:4px;}
  .lbdg::before{content:'';width:6px;height:6px;background:#fff;border-radius:50%;animation:lp 1s ease-in-out infinite;}
  @keyframes lp{0%,100%{opacity:1}50%{opacity:0.3}}
  .lbot{position:absolute;bottom:0;left:0;right:0;padding:12px;}
  .luser{display:flex;align-items:center;gap:8px;margin-bottom:6px;}
  .lav{width:32px;height:32px;border-radius:50%;object-fit:cover;border:2px solid #c9a227;}
  .lnm{font-size:13px;color:#fff;font-weight:700;}
  .lwch{font-size:11px;color:rgba(255,255,255,0.7);}
  .ltit{font-size:12px;color:rgba(255,255,255,0.85);}

  /* PROFILE PAGE */
  .prof-hero{background:linear-gradient(135deg,#38b2ac,#ed64a6);height:160px;border-radius:20px;margin-bottom:60px;position:relative;}
  .prof-av{width:100px;height:100px;border-radius:50%;border:4px solid #fff;position:absolute;bottom:-50px;left:30px;background-size:cover;background-position:center;box-shadow:0 8px 24px rgba(0,0,0,0.15);}
  .prof-stats{display:flex;gap:24px;padding:70px 30px 20px;}
  .pstat{text-align:center;}
  .pstat-n{font-size:20px;font-weight:800;color:#1a2a2a;}
  .pstat-l{font-size:11px;color:#94a3b8;font-weight:600;}

  /* MAP */
  .mapbox{background:#fff;border:1.5px solid rgba(56,178,172,0.15);border-radius:20px;padding:20px;margin-bottom:20px;}
  .mapph{border-radius:16px;height:220px;background-size:cover;background-position:center;display:flex;align-items:center;justify-content:center;cursor:pointer;position:relative;overflow:hidden;}
  .mapovl{position:absolute;inset:0;background:rgba(0,20,40,0.55);}
  .mapinn{position:relative;z-index:2;text-align:center;}
  .mapbtn{background:linear-gradient(135deg,#38b2ac,#319795);color:#fff;border:none;padding:12px 24px;border-radius:22px;font-weight:700;font-size:14px;cursor:pointer;font-family:'DM Sans',sans-serif;margin-top:12px;display:flex;align-items:center;gap:6px;}
  .mfilt{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px;}
  .mfb{background:rgba(56,178,172,0.08);border:1.5px solid rgba(56,178,172,0.2);color:#38b2ac;font-size:12px;padding:6px 14px;border-radius:16px;cursor:pointer;font-weight:700;font-family:'DM Sans',sans-serif;transition:all 0.2s;}
  .mfb.act{background:#38b2ac;color:#fff;border-color:#38b2ac;}

  /* EDU */
  .egrid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;}
  .ecard{background:#fff;border:1.5px solid rgba(56,178,172,0.12);border-radius:18px;overflow:hidden;cursor:pointer;transition:all 0.25s;}
  .ecard:hover{border-color:#38b2ac;transform:translateY(-4px);}
  .eph{height:120px;background-size:cover;background-position:center;position:relative;}
  .epovl{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.6),transparent);}
  .ebody{padding:14px;}
  .etit{font-size:13px;font-weight:800;color:#1a2a2a;margin-bottom:4px;}
  .edesc{font-size:11px;color:#94a3b8;margin-bottom:8px;}
  .ebdg{background:rgba(56,178,172,0.1);color:#38b2ac;font-size:10px;padding:3px 10px;border-radius:8px;font-weight:700;display:inline-flex;align-items:center;gap:4px;border:1px solid rgba(56,178,172,0.2);}

  /* HAIR TRY MODAL */
  .htmodal{position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:3000;display:flex;align-items:center;justify-content:center;padding:20px;}
  .htbox{background:#f8fafb;border-radius:24px;width:100%;max-width:620px;max-height:92vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,0.5);}
  .hthd{background:linear-gradient(135deg,#38b2ac,#ed64a6);padding:20px 24px;border-radius:24px 24px 0 0;display:flex;align-items:center;justify-content:space-between;}
  .hthd-tit{font-size:18px;font-weight:800;color:#fff;}
  .hthd-sub{font-size:12px;color:rgba(255,255,255,0.8);margin-top:2px;}
  .htclose{background:rgba(255,255,255,0.2);border:none;color:#fff;width:32px;height:32px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;}
  .htsteps{display:flex;padding:16px 24px;gap:8px;border-bottom:1px solid rgba(56,178,172,0.1);}
  .htstep{flex:1;text-align:center;padding:10px;border-radius:12px;font-size:12px;font-weight:700;cursor:pointer;transition:all 0.2s;}
  .htstep.act{background:linear-gradient(135deg,#38b2ac,#319795);color:#fff;}
  .htstep:not(.act){background:rgba(56,178,172,0.08);color:#94a3b8;}
  .htbody{padding:24px;}
  .upload-area{border:2px dashed rgba(56,178,172,0.4);border-radius:16px;padding:20px;text-align:center;cursor:pointer;transition:all 0.2s;background:#fff;display:flex;align-items:center;gap:14px;}
  .upload-area:hover{border-color:#38b2ac;background:rgba(56,178,172,0.06);}
  .upload-icon{width:48px;height:48px;background:linear-gradient(135deg,rgba(56,178,172,0.15),rgba(237,100,166,0.15));border-radius:14px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .upload-tit{font-size:14px;font-weight:700;color:#1a2a2a;margin-bottom:3px;text-align:left;}
  .upload-sub{font-size:12px;color:#94a3b8;text-align:left;}
  .style-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;}
  .photo-preview{position:relative;border-radius:20px;overflow:hidden;background:#1a2a2a;min-height:280px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
  .photo-preview img.face{width:100%;height:280px;object-fit:cover;opacity:0.85;}
  .hair-overlay{position:absolute;inset:0;display:flex;align-items:flex-start;justify-content:center;padding-top:10px;}
  .hair-overlay img{width:65%;opacity:0.9;mix-blend-mode:multiply;filter:brightness(0.8) contrast(1.2);}
  .camera-btn{background:linear-gradient(135deg,#ed64a6,#d53f8c);color:#fff;border:none;padding:10px 20px;border-radius:14px;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:700;font-size:13px;display:flex;align-items:center;gap:8px;transition:all 0.2s;}
  .camera-btn:hover{transform:translateY(-2px);}
  .style-card{border-radius:14px;overflow:hidden;cursor:pointer;border:2.5px solid transparent;transition:all 0.2s;position:relative;}
  .style-card.sel{border-color:#38b2ac;box-shadow:0 0 0 2px rgba(56,178,172,0.3);}
  .style-card img{width:100%;height:90px;object-fit:cover;}
  .style-nm{font-size:11px;font-weight:700;text-align:center;padding:5px 4px;color:#1a2a2a;background:#f8fafb;}
  .style-check{position:absolute;top:6px;right:6px;width:22px;height:22px;background:#38b2ac;border-radius:50%;display:flex;align-items:center;justify-content:center;}
  .ai-result{border-radius:20px;overflow:hidden;position:relative;background:linear-gradient(135deg,#0f172a,#1e293b);padding:30px;text-align:center;min-height:250px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;}
  .ai-progress{width:100%;background:rgba(255,255,255,0.1);border-radius:50px;height:8px;overflow:hidden;}
  .ai-bar{height:100%;background:linear-gradient(90deg,#38b2ac,#ed64a6);border-radius:50px;animation:aiprog 2s ease-in-out infinite;}
  @keyframes aiprog{0%{width:0%}50%{width:80%}100%{width:100%}}
  .htfoot{padding:16px 24px;border-top:1px solid rgba(56,178,172,0.1);display:flex;gap:10px;}
  .htbtn{flex:1;padding:12px;border-radius:14px;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;transition:all 0.2s;}
  .htbtn.pri{background:linear-gradient(135deg,#38b2ac,#319795);color:#fff;}
  .htbtn.sec{background:rgba(56,178,172,0.08);color:#38b2ac;border:1.5px solid rgba(56,178,172,0.2);}

  /* AUTH MODAL */
  .auth-modal{position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:4000;display:flex;align-items:center;justify-content:center;padding:20px;}
  .auth-box{background:#fff;border-radius:24px;width:100%;max-width:460px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.4);}
  .auth-hd{background:linear-gradient(135deg,#38b2ac,#9333ea);padding:28px 24px;text-align:center;}
  .auth-logo{font-family:'Tenor Sans',sans-serif;font-size:28px;color:#fff;letter-spacing:4px;margin-bottom:4px;}
  .auth-sub{font-size:13px;color:rgba(255,255,255,0.8);}
  .auth-tabs{display:flex;background:#f8fafb;border-bottom:1px solid rgba(56,178,172,0.1);}
  .auth-tab{flex:1;padding:14px;text-align:center;font-size:14px;font-weight:700;cursor:pointer;border:none;background:transparent;font-family:'DM Sans',sans-serif;transition:all 0.2s;}
  .auth-tab.act{color:#38b2ac;border-bottom:3px solid #38b2ac;}
  .auth-tab:not(.act){color:#94a3b8;}
  .auth-body{padding:24px;}
  .auth-type{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px;}
  .auth-type-btn{padding:14px;border-radius:14px;border:2px solid rgba(56,178,172,0.2);background:#fff;cursor:pointer;text-align:center;transition:all 0.2s;font-family:'DM Sans',sans-serif;}
  .auth-type-btn.act{border-color:#38b2ac;background:rgba(56,178,172,0.06);}
  .auth-inp{width:100%;padding:12px 16px;border:1.5px solid rgba(56,178,172,0.2);border-radius:12px;font-size:14px;font-family:'DM Sans',sans-serif;outline:none;margin-bottom:12px;color:#1a2a2a;background:#f8fafb;box-sizing:border-box;}
  .auth-inp:focus{border-color:#38b2ac;background:#fff;}
  .auth-btn{width:100%;padding:14px;background:linear-gradient(135deg,#38b2ac,#319795);color:#fff;border:none;border-radius:14px;font-size:15px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;margin-top:4px;}
  .auth-divider{text-align:center;color:#94a3b8;font-size:13px;margin:16px 0;position:relative;}
  .auth-divider::before,.auth-divider::after{content:'';position:absolute;top:50%;width:40%;height:1px;background:rgba(56,178,172,0.15);}
  .auth-divider::before{left:0;}.auth-divider::after{right:0;}

  /* WOMEN MODAL */
  .women-modal{position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:3500;display:flex;align-items:center;justify-content:center;padding:20px;}
  .women-box{background:#f8fafb;border-radius:24px;width:100%;max-width:620px;max-height:92vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,0.5);}
  .women-hd{background:linear-gradient(135deg,#ed64a6,#9333ea);padding:20px 24px;border-radius:24px 24px 0 0;display:flex;align-items:center;justify-content:space-between;}

  /* COMING SOON */
  .coming{background:#fff;border-radius:24px;padding:60px 40px;text-align:center;box-shadow:0 4px 24px rgba(56,178,172,0.08);border:1.5px solid rgba(56,178,172,0.12);}
  .coming-ico{width:80px;height:80px;border-radius:24px;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;}
  .coming-tit{font-size:22px;font-weight:800;color:#1a2a2a;margin-bottom:8px;}
  .coming-sub{font-size:14px;color:#94a3b8;margin-bottom:28px;}
  .back-btn{background:linear-gradient(135deg,#38b2ac,#319795);color:#fff;border:none;padding:13px 30px;border-radius:20px;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:700;font-size:14px;}

  /* MESSAGES */
  .msg-list{display:flex;flex-direction:column;gap:8px;}
  .msg-item{display:flex;align-items:center;gap:12px;padding:14px;background:#fff;border-radius:16px;cursor:pointer;border:1.5px solid rgba(56,178,172,0.1);transition:all 0.2s;}
  .msg-item:hover{border-color:#38b2ac;transform:translateX(4px);}
  .msg-av{width:50px;height:50px;border-radius:50%;background-size:cover;background-position:center;flex-shrink:0;border:2.5px solid rgba(56,178,172,0.2);}
  .msg-nm{font-size:14px;font-weight:700;color:#1a2a2a;}
  .msg-prev{font-size:12px;color:#94a3b8;margin-top:2px;}
  .msg-time{font-size:11px;color:#94a3b8;margin-left:auto;}

  /* APPOINTMENTS */
  .apt-list{display:flex;flex-direction:column;gap:12px;}
  .apt-item{background:#fff;border-radius:16px;padding:16px;border:1.5px solid rgba(56,178,172,0.12);box-shadow:0 2px 12px rgba(56,178,172,0.05);}
  .apt-hd{display:flex;align-items:center;gap:12px;margin-bottom:10px;}
  .apt-av{width:46px;height:46px;border-radius:50%;background-size:cover;background-position:center;border:2px solid rgba(56,178,172,0.2);}
  .apt-nm{font-size:14px;font-weight:700;color:#1a2a2a;}
  .apt-sp{font-size:12px;color:#94a3b8;}
  .apt-dt{font-size:13px;color:#38b2ac;font-weight:700;display:flex;align-items:center;gap:6px;}
  .apt-st{padding:4px 12px;border-radius:10px;font-size:11px;font-weight:700;}

  .menu-fab{position:fixed;top:18px;right:18px;z-index:1300;background:rgba(8,8,12,0.7);border:1.5px solid rgba(201,162,39,0.5);color:#c9a227;width:46px;height:46px;border-radius:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(18px);transition:all 0.25s;touch-action:manipulation;-webkit-tap-highlight-color:transparent;box-shadow:0 4px 20px rgba(0,0,0,0.45),0 0 0 1px rgba(201,162,39,0.1);}
  .menu-fab:hover,.menu-fab:active{background:rgba(201,162,39,0.2);border-color:#c9a227;transform:scale(1.07);}
  .mob-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:899;}
  @media(max-width:768px){.mob-overlay{display:block;}}
  @media(max-width:1100px){.rp{display:none;}.main{margin-right:0;}}
  
  .mobile-nav{display:none;position:fixed;bottom:18px;left:0;right:0;z-index:960;background:transparent;border:none;padding:0 14px;transition:transform 0.35s cubic-bezier(.4,0,.2,1),opacity 0.35s ease;pointer-events:auto;}
  .mobile-nav.nav-hidden{transform:translateY(90px);opacity:0;pointer-events:none;}
  .mobile-nav-inner{display:flex;justify-content:space-around;align-items:center;}
  .mobile-nav-item{display:flex;align-items:center;justify-content:center;cursor:pointer;width:54px;height:54px;border-radius:50%;background:rgba(8,8,14,0.6);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1.5px solid rgba(255,255,255,0.07);transition:all 0.25s;-webkit-tap-highlight-color:transparent;touch-action:manipulation;}
  .mobile-nav-item.act{background:rgba(255,255,255,0.12);border-color:rgba(255,255,255,0.25);box-shadow:0 0 20px rgba(255,255,255,0.15),0 4px 16px rgba(0,0,0,0.4);}
  .mobile-nav-item:active{transform:scale(0.9);}
  .mobile-nav-label{display:none;}

  @media(max-width:768px){
    .strip1{height:14px!important;}
    .strip2{height:20px!important;}
    .s1i{font-size:8px!important;padding:0 8px!important;letter-spacing:0.8px!important;}
    .s2f{width:22px!important;height:15px!important;}
    .s2c{font-size:9px!important;}
    .s2i{gap:4px!important;padding:0 8px!important;}
    .sidebar{display:block!important;transform:translateX(220px)!important;top:132px!important;padding-top:14px!important;width:220px!important;border-radius:16px 0 0 16px!important;}
    .sidebar:not(.closed){transform:translateX(0)!important;box-shadow:-6px 0 24px rgba(0,0,0,0.5);}
    .main{margin-left:0!important;margin-right:0!important;padding-bottom:72px;}
    .cgrid{grid-template-columns:repeat(2,1fr);}
    .pgrid{grid-template-columns:1fr;}
    .lgrid{grid-template-columns:1fr;}
    .mobile-nav{display:flex;}
    .nsr{max-width:100%!important;flex:1;}
    .nr{gap:6px!important;}
    .bin{padding:6px 12px!important;font-size:12px!important;}
    .reels-wrap{gap:8px;}
    .reel{width:120px;}
    .reel-img{height:190px;}
    .hbts{gap:8px;}
    .hbg{padding:10px 16px!important;font-size:13px!important;}
    .hbs{padding:10px 14px!important;font-size:12px!important;}
    .htbox{max-height:95vh;border-radius:20px 20px 0 0;}
    .women-box{max-height:95vh;border-radius:20px 20px 0 0;}
    .htmodal{align-items:flex-end;padding:0;}
    .women-modal{align-items:flex-end;padding:0;}
    .auth-box{border-radius:20px 20px 0 0;}
    .auth-modal{align-items:flex-end;padding:0;}
    .lbar{height:52px!important;padding:0 12px!important;}
    .ltx-glam{font-size:22px!important;letter-spacing:3px!important;}
    .ltx-world{font-size:9px!important;letter-spacing:5px!important;}
    .logo-live{display:none!important;}
    .lsub{display:none!important;}
    .lt{gap:6px!important;}
    .nbar{height:40px!important;padding:0 12px!important;}
    .hcon{padding:14px 18px!important;}
    .ht1{font-size:10px!important;letter-spacing:4px!important;margin-bottom:8px!important;}
    .ht2{font-size:32px!important;margin-bottom:8px!important;}
    .hsub{font-size:12px!important;margin-bottom:16px!important;letter-spacing:1.5px!important;}
    .hero-stats{gap:5px!important;margin-top:10px!important;}
    .hstat{padding:5px 10px!important;font-size:10px!important;}
    .live-tape-card{width:120px!important;height:180px!important;}
    .menu-fab{top:10px!important;right:12px!important;width:40px!important;height:40px!important;}
  }

  @media(orientation:landscape) and (max-height:500px){
    .strip1,.strip2{display:none!important;}
    .main{padding-bottom:0!important;}
    .lbar{height:40px!important;padding:0 10px!important;}
    .nbar{height:34px!important;padding:0 10px!important;}
    .cat-nav{height:30px!important;}
    .ltx{font-size:18px!important;letter-spacing:1px!important;}
    .lsub{display:none!important;}
    .hero{height:200px!important;}
    .menu-fab{top:6px!important;right:10px!important;width:36px!important;height:36px!important;}
    .sidebar{top:108px!important;}
    .mobile-nav{display:flex!important;bottom:auto!important;top:50%!important;left:auto!important;right:10px!important;transform:translateY(-50%)!important;padding:0!important;width:auto!important;}
    .mobile-nav.nav-hidden{transform:translateY(-50%) translateX(70px)!important;opacity:0;}
    .mobile-nav-inner{flex-direction:column!important;gap:8px;}
    .mobile-nav-item{width:44px!important;height:44px!important;}
  }

  @media(min-width:1024px){
    .ltx-glam{font-size:42px!important;letter-spacing:6px!important;}
    .ltx-world{font-size:15px!important;letter-spacing:10px!important;}
    .lbar{height:80px!important;}
  }

  /* ── GLAMI ASİSTAN ──────────────────────────────── */
  @keyframes assistPulse{0%,100%{box-shadow:0 0 0 0 rgba(147,51,234,0.4),0 6px 24px rgba(147,51,234,0.5)}50%{box-shadow:0 0 0 12px rgba(147,51,234,0),0 6px 30px rgba(147,51,234,0.7)}}
  .glami-fab{position:fixed;left:18px;bottom:110px;z-index:950;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#9333ea,#ed64a6);border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 6px 24px rgba(147,51,234,0.5);animation:assistPulse 3s ease-in-out infinite;-webkit-tap-highlight-color:transparent;touch-action:manipulation;transition:transform 0.2s;}
  .glami-fab:hover{transform:scale(1.1);}
  .glami-fab-lbl{font-size:8px;font-weight:800;color:#fff;letter-spacing:1px;margin-top:1px;font-family:'DM Sans',sans-serif;}
  @media(min-width:769px){.glami-fab{left:18px;bottom:auto;top:50%;transform:translateY(-50%);}
    .glami-fab:hover{transform:translateY(-50%) scale(1.1);}}

  .glami-panel{position:fixed;left:0;top:0;bottom:0;width:340px;background:#080810;border-right:1.5px solid rgba(147,51,234,0.25);z-index:1050;transform:translateX(-340px);transition:transform 0.35s cubic-bezier(.4,0,.2,1);display:flex;flex-direction:column;box-shadow:8px 0 40px rgba(0,0,0,0.8);}
  .glami-panel.open{transform:translateX(0);}
  @media(max-width:768px){.glami-panel{width:100%;transform:translateX(-100%);}}

  .glami-hd{padding:16px;background:linear-gradient(135deg,rgba(147,51,234,0.2),rgba(237,100,166,0.12));border-bottom:1px solid rgba(147,51,234,0.18);display:flex;align-items:center;gap:12px;}
  .glami-avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#9333ea,#ed64a6);display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 0 16px rgba(147,51,234,0.5);}
  .glami-title{font-size:18px;font-weight:800;background:linear-gradient(135deg,#c4b5fd,#f9a8d4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-family:'Cormorant Garamond',serif;letter-spacing:2px;}
  .glami-subtitle{font-size:10px;color:rgba(196,181,253,0.55);font-weight:500;letter-spacing:0.5px;margin-top:1px;}
  .glami-close{margin-left:auto;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.4);width:30px;height:30px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .glami-close:hover{background:rgba(255,255,255,0.12);}

  .glami-tabs{display:flex;border-bottom:1px solid rgba(147,51,234,0.1);background:rgba(0,0,0,0.3);}
  .glami-tab{flex:1;padding:10px 4px 8px;font-size:10px;font-weight:700;color:rgba(232,224,208,0.3);cursor:pointer;border:none;background:transparent;font-family:'DM Sans',sans-serif;border-bottom:2px solid transparent;display:flex;flex-direction:column;align-items:center;gap:3px;transition:all 0.2s;letter-spacing:0.3px;}
  .glami-tab.act{color:#c4b5fd;border-bottom-color:#9333ea;}
  .glami-body{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;}
  .glami-body::-webkit-scrollbar{width:3px;}
  .glami-body::-webkit-scrollbar-thumb{background:rgba(147,51,234,0.3);}

  .gchat-msgs{display:flex;flex-direction:column;gap:10px;flex:1;margin-bottom:12px;}
  .gmsg{max-width:85%;padding:10px 14px;border-radius:18px;font-size:13px;line-height:1.6;font-family:'DM Sans',sans-serif;}
  .gmsg.bot{background:rgba(147,51,234,0.1);border:1px solid rgba(147,51,234,0.2);color:#e8e0d0;border-radius:4px 18px 18px 18px;align-self:flex-start;}
  .gmsg.user{background:linear-gradient(135deg,#9333ea,#7c3aed);color:#fff;border-radius:18px 18px 4px 18px;align-self:flex-end;}
  .gchat-inp{display:flex;gap:8px;align-items:center;}
  .gchat-input{flex:1;background:rgba(147,51,234,0.06);border:1.5px solid rgba(147,51,234,0.2);border-radius:22px;padding:10px 16px;color:#e8e0d0;font-size:13px;font-family:'DM Sans',sans-serif;outline:none;}
  .gchat-input:focus{border-color:rgba(147,51,234,0.5);}
  .gchat-input::placeholder{color:rgba(232,224,208,0.25);}
  .gchat-btn{width:40px;height:40px;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .gchat-send{background:linear-gradient(135deg,#9333ea,#7c3aed);}
  .gchat-voice{background:rgba(237,100,166,0.15);border:1.5px solid rgba(237,100,166,0.3)!important;}

  .ggame-cards{display:flex;flex-direction:column;gap:10px;}
  .ggame-card{background:rgba(147,51,234,0.06);border:1.5px solid rgba(147,51,234,0.15);border-radius:16px;padding:14px 16px;cursor:pointer;transition:all 0.2s;display:flex;align-items:center;gap:12px;}
  .ggame-card:hover{border-color:rgba(147,51,234,0.4);background:rgba(147,51,234,0.1);}
  .ggame-icon{width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .ggame-t{font-size:13px;font-weight:700;color:#e8e0d0;margin-bottom:2px;}
  .ggame-s{font-size:11px;color:rgba(232,224,208,0.4);}
  .ggame-q{font-size:14px;font-weight:700;color:#e8e0d0;margin-bottom:14px;line-height:1.5;}
  .ggame-opts{display:flex;flex-direction:column;gap:8px;margin-bottom:14px;}
  .ggame-opt{background:rgba(255,255,255,0.04);border:1.5px solid rgba(255,255,255,0.08);border-radius:12px;padding:10px 14px;cursor:pointer;font-size:13px;color:rgba(232,224,208,0.8);font-family:'DM Sans',sans-serif;text-align:left;transition:all 0.2s;}
  .ggame-opt:hover{border-color:rgba(147,51,234,0.4);}
  .ggame-opt.ok{border-color:#10b981!important;background:rgba(16,185,129,0.1)!important;color:#6ee7b7!important;}
  .ggame-opt.no{border-color:#ef4444!important;background:rgba(239,68,68,0.08)!important;color:#fca5a5!important;}
  .ggame-score{text-align:center;padding:20px;background:rgba(147,51,234,0.08);border-radius:16px;border:1px solid rgba(147,51,234,0.2);}
  .ggame-score-n{font-size:48px;font-weight:800;background:linear-gradient(135deg,#c4b5fd,#f9a8d4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}

  .gnote-area{width:100%;background:rgba(255,255,255,0.03);border:1.5px solid rgba(147,51,234,0.15);border-radius:14px;padding:14px;color:#e8e0d0;font-size:13px;font-family:'DM Sans',sans-serif;resize:none;outline:none;min-height:240px;line-height:1.7;box-sizing:border-box;}
  .gnote-area:focus{border-color:rgba(147,51,234,0.4);}
  .gnote-area::placeholder{color:rgba(232,224,208,0.2);}
  .gnote-save{width:100%;padding:11px;background:linear-gradient(135deg,#9333ea,#7c3aed);color:#fff;border:none;border-radius:12px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;margin-top:10px;}

  .gcam-video{width:100%;border-radius:16px;background:#000;min-height:200px;object-fit:cover;transform:scaleX(-1);}
  .gcam-placeholder{width:100%;min-height:200px;background:rgba(147,51,234,0.06);border:1.5px dashed rgba(147,51,234,0.2);border-radius:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:rgba(232,224,208,0.35);font-size:13px;font-family:'DM Sans',sans-serif;}
  .gcam-btns{display:flex;gap:10px;margin-top:12px;}
  .gcam-btn{flex:1;padding:10px;border-radius:12px;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;transition:all 0.2s;}
  .gcam-start{background:linear-gradient(135deg,#9333ea,#ed64a6);color:#fff;}
  .gcam-stop{background:rgba(239,68,68,0.12);color:#ef4444;border:1.5px solid rgba(239,68,68,0.25)!important;}

  .gpremium-badge{display:inline-flex;align-items:center;gap:4px;background:linear-gradient(135deg,rgba(245,158,11,0.15),rgba(201,162,39,0.1));border:1px solid rgba(201,162,39,0.3);border-radius:10px;padding:2px 8px;font-size:9px;font-weight:800;color:#f59e0b;letter-spacing:0.5px;}

  /* ── PREMIUM SİSTEM ────────────────────────────── */
  .premium-lock{display:inline-flex;align-items:center;gap:4px;background:linear-gradient(135deg,#f59e0b,#c9a227);color:#080600;font-size:9px;font-weight:800;padding:3px 8px;border-radius:8px;letter-spacing:0.5px;cursor:pointer;flex-shrink:0;}
  .premium-modal{position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:5000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(8px);}
  .premium-box{background:linear-gradient(160deg,#0d0a1a,#1a0d30,#0d0a1a);border:1px solid rgba(201,162,39,0.3);border-radius:28px;width:100%;max-width:400px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.8),0 0 0 1px rgba(201,162,39,0.1);}
  .premium-hd{padding:28px 24px 20px;text-align:center;background:linear-gradient(135deg,rgba(201,162,39,0.1),rgba(147,51,234,0.08));}
  .premium-crown{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#f59e0b,#c9a227);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;box-shadow:0 0 30px rgba(245,158,11,0.5),0 0 60px rgba(245,158,11,0.2);animation:hg 2s ease-in-out infinite alternate;}
  .premium-title{font-family:'Cormorant Garamond',serif;font-size:28px;font-weight:700;background:linear-gradient(135deg,#ffd700,#e4c55a,#c9a227);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:2px;}
  .premium-sub{font-size:13px;color:rgba(232,224,208,0.5);margin-top:4px;}
  .premium-features{padding:0 24px 20px;display:flex;flex-direction:column;gap:10px;}
  .pf-item{display:flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(201,162,39,0.05);border:1px solid rgba(201,162,39,0.1);border-radius:14px;}
  .pf-icon{width:32px;height:32px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .pf-text{font-size:13px;color:#e8e0d0;font-weight:600;}
  .pf-sub{font-size:11px;color:rgba(232,224,208,0.4);margin-top:1px;}
  .premium-pricing{padding:0 24px 20px;display:flex;gap:10px;}
  .price-card{flex:1;background:rgba(255,255,255,0.04);border:1.5px solid rgba(201,162,39,0.2);border-radius:16px;padding:14px;text-align:center;cursor:pointer;transition:all 0.2s;}
  .price-card.sel{border-color:#c9a227;background:rgba(201,162,39,0.1);}
  .price-card-period{font-size:11px;color:rgba(232,224,208,0.5);font-weight:700;margin-bottom:4px;}
  .price-card-amount{font-size:20px;font-weight:800;color:#ffd700;}
  .price-card-save{font-size:9px;background:#10b981;color:#fff;padding:2px 6px;border-radius:6px;font-weight:800;margin-top:4px;display:inline-block;}
  .premium-cta{padding:0 24px 24px;}
  .premium-btn{width:100%;padding:14px;background:linear-gradient(135deg,#c9a227,#e4c55a);color:#080600;border:none;border-radius:16px;font-size:15px;font-weight:800;cursor:pointer;font-family:'DM Sans',sans-serif;box-shadow:0 4px 20px rgba(201,162,39,0.4);transition:all 0.3s;}
  .premium-btn:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(201,162,39,0.6);}
  .premium-skip{text-align:center;margin-top:10px;font-size:12px;color:rgba(232,224,208,0.3);cursor:pointer;}
`;

// ─── REELS COMPONENT ──────────────────────────────────────────────────────────
function ReelsSection({t, reels, filter}) {
  const filtered = filter ? reels.filter(r => r.category === filter) : reels;
  return (
    <div>
      <div className="shd">
        <div className="stit"><Ic n="play" s={20} c="#ef4444" f="#ef4444"/>{t.reels}</div>
        <div className="smore">{t.seeAll} →</div>
      </div>
      <div className="reels-wrap">
        {filtered.map(r => (
          <div key={r.id} className="reel">
            <img className="reel-img" src={r.thumb} alt={r.desc}/>
            <div className="reel-grad"/>
            <div className="reel-play"><Ic n="play" s={20} f="#fff" c="#fff"/></div>
            <div className="reel-user">
              <img className="reel-av" src={r.avatar} alt={r.user}/>
              <span className="reel-nm">{r.user}</span>
            </div>
            <div className="reel-bot">
              <div className="reel-desc">{r.desc}</div>
              <div className="reel-stats">
                <Ic n="heart" s={12} c="rgba(255,255,255,0.8)"/>
                {r.likes.toLocaleString()}
                <Ic n="message" s={12} c="rgba(255,255,255,0.8)"/>
                {r.comments}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── PROF LIST COMPONENT ───────────────────────────────────────────────────────
function ProfList({t, profs, title, onBook}) {
  return (
    <div>
      <div className="shd">
        <div className="stit"><Ic n="users" s={20} c="#38b2ac"/>{title}</div>
        <div className="smore">{t.seeAll} →</div>
      </div>
      <div className="pgrid">
        {profs.map(p => (
          <div key={p.id} className="pcard">
            <div className="pcard-img" style={{backgroundImage:`url(${p.photo})`}}>
              <div className="pcard-ovl"/>
            </div>
            <div className="pcard-body">
              <div className="pcard-name">{p.name}</div>
              <div className="pcard-spec"><Ic n="pin" s={12}/>{p.city} • {p.spec}</div>
              <div className="pcard-foot">
                <div className="pcard-rat"><Ic n="star" s={13} fill="#f59e0b" c="#f59e0b"/>{p.rating}</div>
                <div className="pcard-dist"><Ic n="pin" s={10}/>{p.dist} {t.distance}</div>
                <button className="pbk" onClick={e=>{e.stopPropagation();if(onBook)onBook();}}>
                  <Ic n="star" s={11} c="#080600"/>{t.bookNow}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CATEGORY PAGE ─────────────────────────────────────────────────────────────
function CategoryPage({t, catKey, label, reels, profs, onBook}) {
  const cd = CAT_DATA[catKey] || {icon:'sparkles', color:'#38b2ac', bg:'rgba(56,178,172,0.1)'};
  const filteredReels = reels.filter(r => r.category === catKey);
  const filteredProfs = profs.filter(p => p.category === catKey);
  return (
    <div>
      <div style={{background:`linear-gradient(135deg,${cd.color}22,${cd.color}08)`,border:`1.5px solid ${cd.color}33`,borderRadius:'20px',padding:'24px',marginBottom:'20px',display:'flex',alignItems:'center',gap:'16px'}}>
        <div style={{width:'60px',height:'60px',background:cd.color,borderRadius:'16px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Ic n={cd.icon} s={28} c="#fff"/>
        </div>
        <div>
          <div style={{fontSize:'22px',fontWeight:'800',color:'#1a2a2a'}}>{label}</div>
          <div style={{fontSize:'13px',color:'#64748b',marginTop:'4px'}}>{filteredProfs.length} profesyonel • {filteredReels.length} video</div>
        </div>
      </div>
      {filteredReels.length > 0 && <ReelsSection t={t} reels={filteredReels} filter={null}/>}
      {filteredProfs.length > 0 && <ProfList t={t} profs={filteredProfs} title={t.allProfs} onBook={onBook}/>}
      {filteredReels.length === 0 && filteredProfs.length === 0 && (
        <div className="coming">
          <div className="coming-ico" style={{background:cd.bg}}><Ic n={cd.icon} s={36} c={cd.color}/></div>
          <div className="coming-tit">{label}</div>
          <div className="coming-sub">{t.comingSoon}</div>
        </div>
      )}
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
const dbl = [...COUNTRIES, ...COUNTRIES];
const dblP = [...HERO_PHOTOS, ...HERO_PHOTOS];

export default function App() {
  const [sideOpen, setSideOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('feed');
  const [activePage, setActivePage] = useState('home');
  const [lang, setLang] = useState('TR');
  const [storyModal, setStoryModal] = useState(null);
  const [hairTry, setHairTry] = useState(false);
  const [womenTry, setWomenTry] = useState(false);
  const [hairStep, setHairStep] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [_womenStep, setWomenStep] = useState(1);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedWomenStyle, setSelectedWomenStyle] = useState(null);
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const [uploadedWomenPhoto, setUploadedWomenPhoto] = useState(null);
  const [authModal, setAuthModal] = useState(false);
  const [authTab, setAuthTab] = useState('login');
  const [authType, setAuthType] = useState('customer');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [selectedWomenColor, setSelectedWomenColor] = useState('#1a1a1a');
  const [womenCategory, setWomenCategory] = useState('hair');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [mapFilter, setMapFilter] = useState('Hepsi');
  const scrollRef = useRef(null);
  const lastScrollY = useRef(0);
  const [navVisible, setNavVisible] = useState(true);
  const [isPremium, setIsPremium] = useState(false);
  const [showPremium, setShowPremium] = useState(false);
  const [premiumPlan, setPremiumPlan] = useState('yearly');
  const [assistOpen, setAssistOpen] = useState(false);
  const [assistTab, setAssistTab] = useState('chat');
  const glamiGreets = {
    TR:['Merhaba! Ben Glami, GlamWorld yapay zeka asistanıyım. Size nasıl yardımcı olabilirim?','Hoş geldiniz! Saç modeli, makyaj, randevu veya berber bulmak için buradayım!','Merhaba! Bugün sizin için ne yapabilirim? Sormaktan çekinmeyin!','Selam! Güzellik ve bakım konusunda aklınıza takılan her şeyi sorabilirsiniz.'],
    DE:['Hallo! Ich bin Glami, der GlamWorld KI-Assistent. Wie kann ich Ihnen helfen?','Willkommen! Fragen Sie mich alles über Haare, Make-up und Termine!'],
    EN:['Hello! I\'m Glami, your GlamWorld AI assistant. How can I help you today?','Welcome! Ask me anything about hair, makeup, bookings, or finding professionals!','Hi there! What can I help you with today?'],
    RU:['Привет! Я Глами, ИИ-ассистент GlamWorld. Чем могу помочь?','Добро пожаловать! Спрашивайте всё о волосах, макияже и записях!'],
    AR:['مرحباً! أنا غلامي، مساعذكاء الاصطناعي لـ GlamWorld. كيف يمكنني مساعدتك؟','أهلاً! اسألني عن الشعر والمكياج والمواعيد!'],
  };
  const getGlamiGreet = (l) => { const arr = glamiGreets[l]||glamiGreets.EN; return arr[Math.floor(Math.random()*arr.length)]; };
  const [assistMsgs, setAssistMsgs] = useState([{from:'bot',text:getGlamiGreet('TR')}]);
  const [assistInput, setAssistInput] = useState('');
  const [noteText, setNoteText] = useState('');
  const [activeGame, setActiveGame] = useState(null);
  const [gameStep, setGameStep] = useState(0);
  const [gameScore, setGameScore] = useState(0);
  const [gameAnswered, setGameAnswered] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [_camActive, setCamActive] = useState(false);
  const cameraRef = useRef(null);
  const t = T[lang] || T.TR;
  const scroll = dir => { if(scrollRef.current) scrollRef.current.scrollLeft += dir*200; };

  useEffect(() => {
    const onScroll = () => {
      const curr = window.scrollY;
      if (curr > lastScrollY.current + 8 && curr > 60) setNavVisible(false);
      else if (curr < lastScrollY.current - 5) setNavVisible(true);
      lastScrollY.current = curr;
    };
    window.addEventListener('scroll', onScroll, {passive:true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const glamiRespond = (input) => {
    const q = input.toLowerCase();
    const isDE = lang==='DE', isRU = lang==='RU', isAR = lang==='AR', isTR = lang==='TR';
    const pick = (tr,de,en,ru,ar) => isTR?tr:isDE?de:isRU?ru:isAR?ar:en;
    const rnd = arr => arr[Math.floor(Math.random()*arr.length)];
    const hi    = pick(rnd(['Merhaba! Size nasıl yardımcı olabilirim?','Hoş geldiniz! Saç, makyaj veya randevu hakkında sorularınızı bekliyorum!','Selam! Bugün ne öğrenmek istersiniz?']),'Hallo! Ich bin Glami, der GlamWorld KI-Assistent. Frag mich alles über Haare, Make-up und Termine!','Hello! I\'m Glami, GlamWorld\'s AI assistant. Ask me anything about hair, makeup, appointments!','Привет! Я Глами, ИИ-ассистент GlamWorld. Спрашивай всё о волосах, макияже и записях!','مرحبا! أنا غلامي، مساعد الذكاء الاصطناعي لـ GlamWorld. اسألني عن الشعر والمكياج والمواعيد!');
    const hair  = pick('Yüz şekline göre öneri: Oval→her stil, Yuvarlak→uzun katmanlı, Kare→dalgalı, Kalp→orta boy. Hangi model ilginizi çekiyor?','Styltipp nach Gesichtsform: Oval→jeder Stil, Rund→lang gestuft, Eckig→wellig, Herzförmig→mittellang.','Face shape tips: Oval→any style, Round→long layered, Square→wavy, Heart→medium length. Which interests you?','Советы по форме лица: Овал→любой стиль, Круглое→длинные слои, Квадрат→волнистый, Сердце→средняя длина.','نصائح حسب شكل الوجه: بيضاوي←أي تسريحة، مستدير←طبقات طويلة، مربع←موجي، قلب←طول متوسط.');
    const barb  = pick('Haritamızda en yakın berberleri bulabilirsiniz! "Haritada Bul" butonuna tıklayın veya menüden Harita seçin.','Finde die nächsten Friseure auf unserer Karte! Klicke auf "Auf der Karte" oder wähle Karte im Menü.','Find nearest barbers on our map! Click "Find on Map" or select Map from the menu.','Найди ближайших барберов на нашей карте! Нажми "На карте" или выбери Карту в меню.','ابحث عن أقرب الحلاقين على خريطتنا! انقر "ابحث على الخريطة" أو اختر الخريطة من القائمة.');
    const mkup  = pick('Makyajın altın kuralı: cilt tonunu tanı! Sıcak ton→warm renkler, Soğuk ton→cool tonlar. Doğal makyaj için az ürün çok etki!','Goldene Make-up-Regel: Kenne deinen Hautton! Warm→warme Farben, Kühl→kühle Töne. Weniger ist mehr!','Golden makeup rule: know your undertone! Warm→warm colors, Cool→cool tones. Less is more!','Золотое правило макияжа: знай свой подтон! Тёплый→тёплые цвета, Холодный→холодные тона.','قاعدة المكياج الذهبية: اعرف لون بشرتك! دافئ←ألوان دافئة، بارد←ألوان باردة.');
    const appt  = pick('Randevu almak için: Profesyonel profiline git → Randevu Al butonuna tıkla → Tarih/saat seç. Kolay!','Termin buchen: Profil des Profis öffnen → Termin buchen klicken → Datum/Zeit wählen. Einfach!','To book: Open professional\'s profile → Click Book Now → Choose date/time. Easy!','Записаться: Открой профиль мастера → Нажми "Записаться" → Выбери дату/время. Просто!','للحجز: افتح ملف المحترف → انقر احجز الآن → اختر التاريخ والوقت. سهل!');
    const price = pick('Fiyatlar profesyonele göre değişir. Her profil sayfasında güncel fiyat listesi bulunur.','Preise variieren je nach Profi. Aktuelle Preisliste auf jeder Profilseite.','Prices vary by professional. Current price list on each profile page.','Цены зависят от мастера. Актуальный прайс-лист на каждой странице профиля.','تختلف الأسعار حسب المحترف. قائمة الأسعار الحالية في كل صفحة ملف شخصي.');
    const def   = pick('GlamWorld\'de 50.000+ uzman profesyonel sizi bekliyor. 190 ülkede, 7/24 hizmet. Başka ne öğrenmek istersiniz?','Über 50.000 Profis warten auf GlamWorld. In 190 Ländern, 24/7 verfügbar. Was möchtest du wissen?','50,000+ professionals await on GlamWorld. 190 countries, 24/7. What else would you like to know?','Более 50.000 профессионалов ждут вас на GlamWorld. 190 стран, 24/7. Что ещё хотите узнать?','أكثر من 50,000 محترف ينتظرونك على GlamWorld. 190 دولة، 24/7. ماذا تريد أن تعرف أيضاً؟');
    if (q.match(/merhaba|selam|hello|hallo|hi |hey|привет|مرحب/)) return hi;
    if (q.match(/saç|hair|haare|волос|شعر|model|stil|frisur/)) return hair;
    if (q.match(/berber|kuaför|barber|salon|friseur|парикмах|حلاق/)) return barb;
    if (q.match(/makyaj|makeup|make-up|make up|макияж|مكياج/)) return mkup;
    if (q.match(/randevu|appointment|termin|запис|موعد|book/)) return appt;
    if (q.match(/fiyat|ücret|price|preis|цена|سعر|cost|para/)) return price;
    return def;
  };

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang==='TR'?'tr-TR':lang==='DE'?'de-DE':lang==='RU'?'ru-RU':lang==='AR'?'ar-SA':'en-US';
      u.rate = 0.9; u.pitch = 1.05;
      window.speechSynthesis.speak(u);
    }
  };

  const sendGlamiMsg = () => {
    if (!assistInput.trim()) return;
    const resp = glamiRespond(assistInput);
    setAssistMsgs(p => [...p, {from:'user',text:assistInput}, {from:'bot',text:resp}]);
    setAssistInput('');
    setTimeout(() => speakText(resp), 200);
  };

  const stopCamera = () => {
    if (cameraRef.current?.srcObject) cameraRef.current.srcObject.getTracks().forEach(t=>t.stop());
    if (cameraRef.current) cameraRef.current.srcObject = null;
    setCamActive(false);
  };

  const GAMES = [
    {
      id:'quiz', icon:'scissors', color:'#9333ea',
      title: lang==='TR'?'Saç Stili Bul':'Find Your Style',
      desc: lang==='TR'?'4 soruda saç stilin':'4 questions about your hair',
      questions:[
        {q:lang==='TR'?'Saçına ne kadar zaman ayırırsın?':'How much time for your hair?', opts:lang==='TR'?['5 dakika','20 dakika','1+ saat','Umurumda değil']:['5 min','20 min','1+ hour','Don\'t care'], ans:0},
        {q:lang==='TR'?'Kişiliğin nasıl?':'What\'s your personality?', opts:lang==='TR'?['Klasik & Şık','Modern & Trend','Cesur & Yaratıcı','Doğal & Sade']:['Classic','Modern','Bold','Natural'], ans:2},
        {q:lang==='TR'?'Saçın yapısı?':'Your hair type?', opts:lang==='TR'?['Düz','Dalgalı','Kıvırcık','İnce']:['Straight','Wavy','Curly','Fine'], ans:1},
        {q:lang==='TR'?'Hangi rengi seversin?':'Favorite color tone?', opts:lang==='TR'?['Doğal Renkler','Canlı Renkler','Koyu Tonlar','Açık Tonlar']:['Natural','Vivid','Dark','Light'], ans:0},
      ],
      results:lang==='TR'?['Klasik Kesim — zamanın ötesinde!','Fade & Pompadour — trend ve etkileyici!','Balayaj & Ombre — cesur ve özgün!','Kısa & Şık — pratik ve modern!']:['Classic Cut — timeless!','Fade & Pompadour — bold & trending!','Balayaj & Ombre — brave & unique!','Short & Chic — practical & modern!']
    },
    {
      id:'facts', icon:'sparkles', color:'#ed64a6',
      title: lang==='TR'?'Güzellik Bilgisi':'Beauty Facts',
      desc: lang==='TR'?'Doğru mu Yanlış mı?':'True or False?',
      questions:[
        {q:lang==='TR'?'Saçı soğuk suyla yıkamak parlaklığı artırır.':'Cold water rinse makes hair shinier.', opts:lang==='TR'?['Doğru','Yanlış']:['True','False'], ans:0},
        {q:lang==='TR'?'Makyajı uyumadan önce mutlaka temizlemek gerekir.':'You must always remove makeup before sleeping.', opts:lang==='TR'?['Doğru','Yanlış']:['True','False'], ans:0},
        {q:lang==='TR'?'Saç boyası saçı kalıcı olarak hasara uğratır.':'Hair dye permanently damages hair.', opts:lang==='TR'?['Doğru','Yanlış']:['True','False'], ans:1},
        {q:lang==='TR'?'SPF içeren ürünler her mevsim kullanılmalıdır.':'SPF products should be used year-round.', opts:lang==='TR'?['Doğru','Yanlış']:['True','False'], ans:0},
      ]
    },
    {
      id:'color', icon:'heart', color:'#f59e0b',
      title: lang==='TR'?'Renk Eşleştir':'Color Match',
      desc: lang==='TR'?'Hangi renk hangi isim?':'Which color is which name?',
      questions:[
        {q:lang==='TR'?'Bu renk hangisi?':'What is this color?', color:'#D4A574', opts:lang==='TR'?['Bakır','Balayaj','Kumral','Altın Sarısı']:['Copper','Balayage','Brunette','Golden Blonde'], ans:2},
        {q:lang==='TR'?'Bu saç renginin ismi?':'Name this hair color:', color:'#8B4513', opts:lang==='TR'?['Siyah','Bronz','Kastanye','Kızıl']:['Black','Bronze','Chestnut','Auburn'], ans:2},
        {q:lang==='TR'?'Bu renk tonu?':'This color tone?', color:'#C0A882', opts:lang==='TR'?['Platin','Karamel','Küllü Sarı','Bej']:['Platinum','Caramel','Ash Blonde','Beige'], ans:1},
        {q:lang==='TR'?'Bu açık tonu?':'This light tone?', color:'#F5DEB3', opts:lang==='TR'?['Platin Sarısı','Altın','Beyaz','Krem Sarısı']:['Platinum','Golden','White','Champagne'], ans:0},
      ]
    }
  ];

  const cats = [
    {key:'menHair', label:t.menHair, sub:`50+ ${lang==='TR'?'Model':'Model'}`, badge:lang==='TR'?'Trend':'Trend', icon:'scissors', color:'#38b2ac', catKey:'barbers', photo:'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=85'},
    {key:'beard', label:t.beard, sub:`30+ ${lang==='TR'?'Stil':'Style'}`, badge:lang==='TR'?'Popüler':'Popular', icon:'scissors', color:'#ed64a6', catKey:'barbers', photo:'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=85'},
    {key:'womenHair', label:t.womenHair, sub:`60+ ${lang==='TR'?'Model':'Model'}`, badge:lang==='TR'?'Yeni':'New', icon:'sparkles', color:'#9333ea', catKey:'hairdressers', photo:'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=85'},
    {key:'makeup', label:t.makeup, sub:lang==='TR'?'Tüm Tipler':'All Types', badge:'Premium', icon:'sparkles', color:'#f59e0b', catKey:'makeup', photo:'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=85'},
    {key:'massage', label:t.massage, sub:lang==='TR'?'Terapi':'Therapy', badge:lang==='TR'?'Yeni!':'New!', icon:'heart', color:'#3b82f6', catKey:'massage', photo:'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=85'},
    {key:'skincare', label:t.skincare, sub:lang==='TR'?'Profesyonel':'Professional', badge:lang==='TR'?'Önerilen':'Recommended', icon:'award', color:'#10b981', catKey:'skincare', photo:'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=85'},
    {key:'nails', label:t.nails, sub:'Nail Art', badge:lang==='TR'?'Trend':'Trend', icon:'award', color:'#ef4444', catKey:'nails', photo:'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=85'},
    {key:'trainings', label:t.trainings, sub:lang==='TR'?'Sertifikalı':'Certified', badge:lang==='TR'?'Sertifika':'Certificate', icon:'book', color:'#8b5cf6', catKey:'edu', photo:'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=85'},
    {key:'jobsMenu', label:t.jobsMenu, sub:`100+ ${lang==='TR'?'İlan':'Jobs'}`, badge:lang==='TR'?'Acil':'Urgent', icon:'briefcase', color:'#06b6d4', catKey:'jobs', photo:'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&q=85'},
    {key:'mapMenu', label:t.mapMenu, sub:lang==='TR'?'Yakınımda':'Nearby', badge:lang==='TR'?'Canlı':'Live', icon:'map', color:'#84cc16', catKey:'map', photo:'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=400&q=85'},
  ];

  const sideGroups = [
    {sec:null, items:[
      ['home', t.homePage, '#38b2ac', 'home'],
      ['search', t.explore, '#9333ea', 'explore'],
      ['scissors', t.barbers, '#ed64a6', 'barbers'],
      ['sparkles', t.hairdressers, '#f59e0b', 'hairdressers'],
      ['sparkles', t.makeup, '#ef4444', 'makeup'],
      ['heart', t.massage, '#3b82f6', 'massage'],
      ['sparkles', t.nails, '#10b981', 'nails'],
      ['award', t.skincare, '#06b6d4', 'skincare'],
    ]},
    {sec:t.proFor, items:[
      ['user', t.myProfile, '#38b2ac', 'profile'],
      ['calendar', t.appointments, '#9333ea', 'appointments'],
      ['users', t.customers, '#ed64a6', 'customers'],
      ['image', t.gallery, '#f59e0b', 'gallery'],
      ['barChart', t.statistics, '#3b82f6', 'statistics'],
    ]},
    {sec:t.learnGrow, items:[
      ['book', t.trainings, '#10b981', 'edu'],
      ['award', t.certificates, '#f59e0b', 'certificates'],
      ['radio', t.liveStream, '#ef4444', 'liveStream'],
    ]},
    {sec:t.other, items:[
      ['map', t.map, '#38b2ac', 'map'],
      ['briefcase', t.jobs, '#9333ea', 'jobs'],
      ['message', t.messages, '#ed64a6', 'messages'],
      ['settings', t.settings, '#94a3b8', 'settings'],
    ]},
  ];

  const navigate = (page) => {
    setActivePage(page);
    setSideOpen(false);
    setShowProfileMenu(false);
    if(page === 'map') setActiveTab('map');
    if(page === 'edu') setActiveTab('edu');
    if(page === 'jobs') setActiveTab('jobs');
    if(page === 'home') setActiveTab('feed');
  };

  const renderContent = () => {
    // Category pages
    const catPages = ['barbers','hairdressers','makeup','massage','nails','skincare'];
    if(catPages.includes(activePage)) {
      const labels = {barbers:t.barbers, hairdressers:t.hairdressers, makeup:t.makeup, massage:t.massage, nails:t.nails, skincare:t.skincare};
      return (
        <div>
          <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'20px'}}>
            <button onClick={()=>navigate('home')} style={{background:'rgba(56,178,172,0.1)',border:'none',borderRadius:'12px',padding:'8px 16px',cursor:'pointer',color:'#38b2ac',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'13px',display:'flex',alignItems:'center',gap:'6px'}}>
              <Ic n="chevL" s={14}/>{t.back}
            </button>
            <div style={{fontSize:'20px',fontWeight:'800',color:'#1a2a2a'}}>{labels[activePage]}</div>
          </div>
          <CategoryPage t={t} catKey={activePage} label={labels[activePage]} reels={REELS} profs={PROFESSIONALS} onBook={()=>!isPremium&&setShowPremium(true)}/>
        </div>
      );
    }

    if(activePage === 'explore') {
      return (
        <div>
          <div className="shd">
            <div className="stit"><Ic n="search" s={20} c="#9333ea"/>{t.explore}</div>
            <button onClick={()=>navigate('home')} style={{background:'rgba(56,178,172,0.1)',border:'none',borderRadius:'12px',padding:'7px 14px',cursor:'pointer',color:'#38b2ac',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'12px'}}>← {t.homePage}</button>
          </div>
          <div className="cgrid">
            {cats.map((cat,ci) => (
              <div key={ci} className="ccard" onClick={() => navigate(cat.catKey)}>
                <div className="cph" style={{backgroundImage:`url(${cat.photo})`}}/>
                <div className="cgr"/>
                <div className="cico" style={{background:cat.color}}><Ic n={cat.icon} s={15} c="#fff"/></div>
                <div className="cbot"><div className="clbl">{cat.label}</div><div className="csub">{cat.sub}</div></div>
              </div>
            ))}
          </div>
          <ReelsSection t={t} reels={REELS} filter={null}/>
        </div>
      );
    }

    if(activePage === 'profile') {
      const isPro = userData?.type === 'professional';
      return (
        <div>
          {/* PROFIL HERO */}
          <div style={{borderRadius:'24px',overflow:'hidden',marginBottom:'16px',position:'relative'}}>
            <div style={{height:'180px',background:'linear-gradient(135deg,#38b2ac,#ed64a6,#9333ea)',position:'relative'}}>
              <div style={{position:'absolute',inset:0,backgroundImage:'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80)',backgroundSize:'cover',backgroundPosition:'center',opacity:0.3}}/>
            </div>
            <div style={{background:'#fff',padding:'0 24px 24px',position:'relative'}}>
              <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:'16px'}}>
                <div style={{width:'90px',height:'90px',borderRadius:'50%',background:'linear-gradient(135deg,#38b2ac,#ed64a6)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:'36px',fontWeight:'800',border:'4px solid #fff',marginTop:'-45px',boxShadow:'0 4px 16px rgba(0,0,0,0.15)',flexShrink:0}}>
                  {userData?.name?userData.name[0].toUpperCase():'U'}
                </div>
                <div style={{display:'flex',gap:'8px',paddingTop:'8px'}}>
                  <button style={{padding:'9px 18px',background:'rgba(56,178,172,0.08)',color:'#38b2ac',border:'1.5px solid rgba(56,178,172,0.25)',borderRadius:'14px',cursor:'pointer',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'13px',display:'flex',alignItems:'center',gap:'6px'}}>
                    <Ic n="edit" s={14}/>{t.edit||'Edit'}
                  </button>
                  <button style={{padding:'9px 18px',background:'linear-gradient(135deg,#38b2ac,#319795)',color:'#fff',border:'none',borderRadius:'14px',cursor:'pointer',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'13px',display:'flex',alignItems:'center',gap:'6px'}}>
                    <Ic n="share" s={14}/>{t.share2}
                  </button>
                </div>
              </div>
              <div style={{fontSize:'22px',fontWeight:'800',color:'#1a2a2a',marginBottom:'4px'}}>{userData?.name||'Kullanıcı'}</div>
              <div style={{fontSize:'13px',color:'#64748b',marginBottom:'8px',display:'flex',alignItems:'center',gap:'6px'}}>
                <Ic n="pin" s={13} c="#94a3b8"/>München, Almanya
                {isPro && <span style={{background:'linear-gradient(135deg,#38b2ac,#319795)',color:'#fff',fontSize:'10px',padding:'2px 10px',borderRadius:'20px',fontWeight:'700',marginLeft:'4px'}}>PRO</span>}
              </div>
              {isPro && <div style={{fontSize:'13px',color:'#475569',marginBottom:'16px'}}>Erkek Kuaförü & Berber • 5 yıl deneyim</div>}
              {/* İSTATİSTİKLER */}
              <div style={{display:'flex',gap:'0',background:'#f8fafb',borderRadius:'16px',overflow:'hidden',border:'1.5px solid rgba(56,178,172,0.1)'}}>
                {[
                  {n:isPro?'234':'12',  l:t.appointments, icon:'calendar',c:'#38b2ac'},
                  {n:isPro?'4.9':'5.0', l:t.rating,       icon:'star',    c:'#f59e0b'},
                  {n:isPro?'1.2K':'89', l:isPro?t.totalFollowers:t.likes, icon:'heart', c:'#ed64a6'},
                  {n:isPro?'89':'23',   l:isPro?t.totalPosts:t.comments2, icon:'image', c:'#9333ea'},
                ].map((s,i)=>(
                  <div key={i} style={{flex:1,padding:'16px 8px',textAlign:'center',borderRight:i<3?'1px solid rgba(56,178,172,0.1)':'none'}}>
                    <div style={{display:'flex',justifyContent:'center',marginBottom:'4px'}}><Ic n={s.icon} s={16} c={s.c}/></div>
                    <div style={{fontSize:'18px',fontWeight:'800',color:'#1a2a2a'}}>{s.n}</div>
                    <div style={{fontSize:'10px',color:'#94a3b8',fontWeight:'600'}}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RANDEVU KARTI */}
          <div style={{background:'linear-gradient(135deg,#38b2ac,#319795)',borderRadius:'20px',padding:'20px',marginBottom:'16px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div>
              <div style={{color:'rgba(255,255,255,0.8)',fontSize:'12px',fontWeight:'600',marginBottom:'4px'}}>{t.nextAppt}</div>
              <div style={{color:'#fff',fontSize:'16px',fontWeight:'800'}}>Pazartesi, 28 Nisan</div>
              <div style={{color:'rgba(255,255,255,0.8)',fontSize:'13px',marginTop:'2px'}}>14:00 • Ahmet Usta</div>
            </div>
            <button style={{background:'rgba(255,255,255,0.2)',color:'#fff',border:'none',padding:'10px 18px',borderRadius:'14px',cursor:'pointer',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'13px'}}>{t.details}</button>
          </div>

          {/* HIZLI ERİŞİM */}
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'10px',marginBottom:'16px'}}>
            {[
              {icon:'calendar',label:t.appointments, color:'#38b2ac',bg:'rgba(56,178,172,0.1)', page:'appointments'},
              {icon:'message', label:t.messages,     color:'#ed64a6',bg:'rgba(237,100,166,0.1)',page:'messages'},
              {icon:'heart',   label:t.favorites,    color:'#ef4444',bg:'rgba(239,68,68,0.1)',  page:'profile'},
              {icon:'star',    label:t.comments2,    color:'#f59e0b',bg:'rgba(245,158,11,0.1)', page:'profile'},
            ].map((item,i)=>(
              <div key={i} onClick={()=>navigate(item.page)} style={{background:'#fff',border:`1.5px solid ${item.bg}`,borderRadius:'16px',padding:'16px 8px',textAlign:'center',cursor:'pointer',transition:'all 0.2s'}}>
                <div style={{width:'42px',height:'42px',background:item.bg,borderRadius:'12px',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 8px'}}>
                  <Ic n={item.icon} s={20} c={item.color}/>
                </div>
                <div style={{fontSize:'11px',fontWeight:'700',color:'#1a2a2a'}}>{item.label}</div>
              </div>
            ))}
          </div>

          {/* SON RANDEVULAR */}
          <div style={{background:'#fff',borderRadius:'20px',padding:'20px',marginBottom:'16px',border:'1.5px solid rgba(56,178,172,0.12)'}}>
            <div style={{fontSize:'16px',fontWeight:'800',color:'#1a2a2a',marginBottom:'14px',display:'flex',alignItems:'center',gap:'8px'}}>
              <Ic n="calendar" s={18} c="#38b2ac"/>{t.lastAppts}
            </div>
            {PROFESSIONALS.slice(0,3).map((p,i)=>(
              <div key={i} style={{display:'flex',alignItems:'center',gap:'12px',padding:'12px',background:'#f8fafb',borderRadius:'14px',marginBottom:'8px'}}>
                <div style={{width:'46px',height:'46px',borderRadius:'50%',backgroundImage:`url(${p.avatar})`,backgroundSize:'cover',backgroundPosition:'center',border:'2px solid rgba(56,178,172,0.2)',flexShrink:0}}/>
                <div style={{flex:1}}>
                  <div style={{fontWeight:'700',fontSize:'14px',color:'#1a2a2a'}}>{p.name}</div>
                  <div style={{fontSize:'12px',color:'#94a3b8'}}>{p.spec}</div>
                </div>
                <div style={{textAlign:'right'}}>
                  <div style={{fontSize:'11px',color:'#38b2ac',fontWeight:'700'}}>{t.completed}</div>
                  <div style={{fontSize:'11px',color:'#94a3b8'}}>3 {t.daysAgo}</div>
                </div>
              </div>
            ))}
          </div>

          {/* GALERİ */}
          <div style={{background:'#fff',borderRadius:'20px',padding:'20px',border:'1.5px solid rgba(56,178,172,0.12)'}}>
            <div style={{fontSize:'16px',fontWeight:'800',color:'#1a2a2a',marginBottom:'14px',display:'flex',alignItems:'center',gap:'8px'}}>
              <Ic n="image" s={18} c="#9333ea"/>{t.gallery}
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'8px'}}>
              {[...PROFESSIONALS,...PROFESSIONALS.slice(0,3)].slice(0,6).map((p,i)=>(
                <div key={i} style={{borderRadius:'12px',overflow:'hidden',height:'100px',backgroundImage:`url(${p.photo})`,backgroundSize:'cover',backgroundPosition:'center',cursor:'pointer'}}/>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if(activePage === 'messages') {
      return (
        <div>
          <div className="shd">
            <div className="stit"><Ic n="message" s={20} c="#ed64a6"/>{t.messages}</div>
            <button onClick={()=>navigate('home')} style={{background:'rgba(56,178,172,0.1)',border:'none',borderRadius:'12px',padding:'7px 14px',cursor:'pointer',color:'#38b2ac',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'12px'}}>← {t.homePage}</button>
          </div>
          <div className="msg-list">
            {PROFESSIONALS.map(p => (
              <div key={p.id} className="msg-item">
                <div className="msg-av" style={{backgroundImage:`url(${p.avatar})`}}/>
                <div style={{flex:1}}>
                  <div className="msg-nm">{p.name}</div>
                  <div className="msg-prev">{p.spec} • {p.city}</div>
                </div>
                <div className="msg-time">Az önce</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if(activePage === 'appointments') {
      return (
        <div>
          <div className="shd">
            <div className="stit"><Ic n="calendar" s={20} c="#9333ea"/>{t.appointments}</div>
            <button onClick={()=>navigate('home')} style={{background:'rgba(56,178,172,0.1)',border:'none',borderRadius:'12px',padding:'7px 14px',cursor:'pointer',color:'#38b2ac',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'12px'}}>← {t.homePage}</button>
          </div>
          <div className="apt-list">
            {PROFESSIONALS.slice(0,4).map(p => (
              <div key={p.id} className="apt-item">
                <div className="apt-hd">
                  <div className="apt-av" style={{backgroundImage:`url(${p.avatar})`}}/>
                  <div style={{flex:1}}>
                    <div className="apt-nm">{p.name}</div>
                    <div className="apt-sp">{p.spec}</div>
                  </div>
                  <span className="apt-st" style={{background:'rgba(56,178,172,0.1)',color:'#38b2ac'}}>{t.confirmed}</span>
                </div>
                <div className="apt-dt"><Ic n="calendar" s={14}/>Pazartesi, 28 Nisan 2026 • 14:00</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if(activePage === 'liveStream') {
      return (
        <div>
          <div className="shd">
            <div className="stit"><Ic n="radio" s={20} c="#ef4444"/>{t.liveStream}</div>
            <button onClick={()=>navigate('home')} style={{background:'rgba(56,178,172,0.1)',border:'none',borderRadius:'12px',padding:'7px 14px',cursor:'pointer',color:'#38b2ac',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'12px'}}>← {t.homePage}</button>
          </div>
          <div className="lgrid">
            {LIVE_STREAMS.map((l,i) => (
              <div key={i} className="lcard">
                <img className="limg" src={l.photo} alt={l.title}/>
                <div className="lovl"/>
                <div className="lbdg"><Ic n="radio" s={10} c="#fff"/>{t.liveNow}</div>
                <div className="lbot">
                  <div className="luser">
                    <img className="lav" src={l.avatar} alt={l.user}/>
                    <div>
                      <div className="lnm">{l.user}</div>
                      <div className="lwch">{l.viewers} {t.watching}</div>
                    </div>
                  </div>
                  <div className="ltit">{l.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Coming soon pages
    const comingPages = ['customers','gallery','statistics','certificates','settings'];
    if(comingPages.includes(activePage)) {
      const icons = {customers:'users',gallery:'image',statistics:'barChart',certificates:'award',settings:'settings'};
      const labels = {customers:t.customers,gallery:t.gallery,statistics:t.statistics,certificates:t.certificates,settings:t.settings};
      return (
        <div className="coming">
          <div className="coming-ico" style={{background:'rgba(56,178,172,0.1)'}}>
            <Ic n={icons[activePage]||'star'} s={36} c="#38b2ac"/>
          </div>
          <div className="coming-tit">{labels[activePage]}</div>
          <div className="coming-sub">{t.comingSoon}</div>
          <button className="back-btn" onClick={()=>navigate('home')}>← {t.backHome}</button>
        </div>
      );
    }

    // Main home feed
    return (
      <div>
        {/* CANLI YAYINLAR */}
        <div className="live-row">
          <div className="live-row-hd">
            <div className="stit">
              <svg width="16" height="16" viewBox="0 0 8 8" style={{marginRight:6}}><circle cx="4" cy="4" r="4" fill="#ef4444"/><circle cx="4" cy="4" r="2" fill="#fff" opacity="0.9" style={{animation:'lp 1s ease-in-out infinite'}}/></svg>
              {lang==='TR'?'Canlı Yayınlar':lang==='DE'?'Live-Streams':lang==='RU'?'Прямые эфиры':lang==='AR'?'البث المباشر':'Live Streams'}
            </div>
            <div className="smore" onClick={()=>navigate('liveStream')}>
              {lang==='TR'?'Tümü':'All'} →
            </div>
          </div>
          <div className="live-tape">
            <div className="live-tape-inner">
              {[...LIVE_STREAMS,...LIVE_STREAMS].map((l,i)=>(
                <div key={i} className="live-tape-card" onClick={()=>navigate('liveStream')}>
                  {/* Arka plan poster — video yüklenene kadar */}
                  <div style={{position:'absolute',inset:0,backgroundImage:`url(${l.photo})`,backgroundSize:'cover',backgroundPosition:'center'}}/>
                  {/* Gerçek Video */}
                  <video
                    autoPlay muted loop playsInline
                    style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}
                    onError={e=>{const v=e.target;if(v.dataset.tried){v.style.display='none';}else{v.dataset.tried='1';v.src=l.fallback;v.load();}}}
                  >
                    <source src={l.video} type="video/mp4"/>
                  </video>
                  <div className="live-tape-grad"/>
                  <div className="live-tape-top">
                    <div className="live-tape-lbdg"><div className="live-tape-dot"/>LIVE</div>
                    <div style={{fontSize:'9px',color:'#fff',fontWeight:700,background:'rgba(0,0,0,0.5)',padding:'2px 6px',borderRadius:4}}>{l.viewers.toLocaleString()}</div>
                  </div>
                  <div className="live-tape-bot">
                    <div style={{display:'flex',alignItems:'center',gap:'6px'}}>
                      <img className="live-tape-av" src={l.avatar} alt={l.user}/>
                      <div>
                        <div className="live-tape-name">{l.user}</div>
                        <div className="live-tape-view">{lang==='TR'?'izliyor':lang==='DE'?'sehen':lang==='RU'?'смотрит':'watching'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* REELS */}
        <ReelsSection t={t} reels={REELS} filter={null}/>

        {/* KATEGORİLER */}
        <div className="shd">
          <div className="stit"><Ic n="sparkles" s={20} c="#f59e0b"/>{t.cats}</div>
          <div className="smore">{t.seeAll} →</div>
        </div>
        <div className="cgrid">
          {cats.map((cat,ci) => (
            <div key={ci} className="ccard" onClick={() => navigate(cat.catKey)}>
              <div className="cph" style={{backgroundImage:`url(${cat.photo})`}}/>
              <div className="cgr"/>
              <div className="cico" style={{background:cat.color}}><Ic n={cat.icon} s={15} c="#fff"/></div>
              <div className="cbdg" style={{background:`${cat.color}22`,color:cat.color,borderColor:`${cat.color}44`}}>{cat.badge}</div>
              <div className="cbot"><div className="clbl">{cat.label}</div><div className="csub">{cat.sub}</div></div>
            </div>
          ))}
        </div>

        {/* HİKAYELER */}
        <div className="shd">
          <div className="stit"><Ic n="sparkles" s={20} c="#ed64a6"/>{t.stories}</div>
        </div>
        <div className="sw">
          <button className="snv l" onClick={() => scroll(-1)}><Ic n="chevL" s={14}/></button>
          <div className="ss" ref={scrollRef}>
            <div className="sadd">
              <Ic n="plus" s={28} c="#38b2ac"/>
              <span style={{fontSize:'11px',color:'#64748b',fontWeight:'700'}}>{t.addStory}</span>
            </div>
            {STORIES.map((s,si) => (
              <div key={si} className="scard" onClick={() => setStoryModal(si)}>
                <div className="sph" style={{backgroundImage:`url(${s.photo})`}}/>
                <div className="srng"/>
                <div className="sbot">
                  <div className="slbl">{s.name}</div>
                  <div className="srl">{s.role}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="snv r" onClick={() => scroll(1)}><Ic n="chevR" s={14}/></button>
        </div>

        {/* TABS */}
        <div className="tabs">
          {[['feed','home',t.feed],['map','map',t.map],['edu','book',t.edu],['jobs','briefcase',t.jobs]].map(([v,icon,l]) => (
            <button key={v} className={`tab ${activeTab===v?'act':''}`} onClick={() => setActiveTab(v)}>
              <Ic n={icon} s={14}/>{l}
            </button>
          ))}
        </div>

        {/* AKIŞ */}
        {activeTab==='feed' && (
          <>
            <div className="comp">
              <div className="ctop">
                <div className="cav"><Ic n="user" s={20} c="#fff"/></div>
                <div className="cinp">{t.share}</div>
              </div>
              <div className="cbtns">
                <button className="cbtn" style={{background:'rgba(239,68,68,0.1)',color:'#ef4444'}}><Ic n="video" s={14}/>{t.videoBtn}</button>
                <button className="cbtn" style={{background:'rgba(16,185,129,0.1)',color:'#10b981'}}><Ic n="camera" s={14}/>{t.photoBtn}</button>
                <button className="cbtn" style={{background:'rgba(56,178,172,0.1)',color:'#38b2ac'}}><Ic n="scissors" s={14}/>{t.hairStyle}</button>
                <button className="cbtn" style={{background:'rgba(249,168,212,0.2)',color:'#db2777'}}><Ic n="heart" s={14}/>{t.massageBtn}</button>
                <button className="cbtn" style={{background:'rgba(147,51,234,0.1)',color:'#9333ea'}}><Ic n="briefcase" s={14}/>{t.jobPost}</button>
              </div>
            </div>
            {POSTS.map(post => (
              <div key={post.id} className="post">
                <div className="phd">
                  <div className="pav" style={{backgroundImage:`url(${post.avaPhoto})`}}/>
                  <div style={{flex:1}}>
                    <div className="pnm">{post.author}</div>
                    <div className="plc"><Ic n="pin" s={11}/>{post.loc} • {post.time}</div>
                  </div>
                  <div className="pbdg" style={{background:post.badgeC,color:post.badgeT}}>
                    <Ic n="scissors" s={11} c={post.badgeT}/>{t[post.badge]||post.badge}
                  </div>
                </div>
                <div className="ptxt">{post.text}</div>
                <div className="pmed" style={{backgroundImage:`url(${post.mediaPhoto})`}}>
                  <div className="pmovl"/>
                  {post.type==='video' && <div className="pplay"><Ic n="play" s={24} f="#fff" c="#fff"/></div>}
                </div>
                <div className="ptags">{post.tags.map((tag,ti) => <span key={ti} className="ptag">{tag}</span>)}</div>
                <div className="pacts">
                  <button className="pact"><Ic n="heart" s={15}/>{post.likes}</button>
                  <button className="pact"><Ic n="message" s={15}/>{post.comments}</button>
                  <button className="pact"><Ic n="calendar" s={15}/>{t.appointment}</button>
                  <button className="pact"><Ic n="share" s={15}/>{t.share2}</button>
                </div>
              </div>
            ))}
          </>
        )}

        {/* HARİTA */}
        {activeTab==='map' && (
          <div>
            <div className="mapbox">
              <div style={{fontSize:'16px',fontWeight:'800',color:'#1a2a2a',marginBottom:'14px',display:'flex',alignItems:'center',gap:'8px'}}>
                <Ic n="map" s={18} c="#38b2ac"/>{t.nearby}
              </div>
              <div className="mfilt">
                {[t.feed==='Akış'?'Hepsi':'All',t.barbers,t.hairdressers,t.makeup,t.massage,t.nails].map((f,fi) => (
                  <button key={fi} className={`mfb ${mapFilter===f?'act':''}`} onClick={() => setMapFilter(f)}>{f}</button>
                ))}
              </div>
              <div className="mapph" style={{backgroundImage:'url(https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=85)'}}>
                <div className="mapovl"/>
                <div className="mapinn">
                  <Ic n="map" s={44} c="#38b2ac"/>
                  <div style={{color:'#fff',fontWeight:'800',fontSize:'16px',marginTop:'8px'}}>{t.mapShow}</div>
                  <button className="mapbtn" onClick={() => window.open('https://www.google.com/maps/search/kuaför+berber','_blank')}>
                    <Ic n="pin" s={14}/>{t.btn2}
                  </button>
                </div>
              </div>
            </div>
            <ProfList t={t} profs={PROFESSIONALS} title={t.nearby} onBook={()=>setShowPremium(!isPremium?true:false)}/>
          </div>
        )}

        {/* EĞİTİM */}
        {activeTab==='edu' && (
          <div>
            <div className="shd">
              <div className="stit"><Ic n="book" s={20} c="#9333ea"/>{t.edu}</div>
              <div className="smore">{t.seeAll} →</div>
            </div>
            <div className="egrid">
              {[
                {photo:'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=85', title:'Profesyonel Saç Kesim', desc:'Fade, undercut, klasik', badge:'4.9 • 2.400'},
                {photo:'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=85', title:'Makyaj Sanatı', desc:'Gündüz, gece, gelin', badge:'4.8 • 1.800'},
                {photo:'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=85', title:'Masaj Terapisi', desc:'Thai, İsveç, aromaterapi', badge:'4.9 • 980'},
                {photo:'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=85', title:'Tırnak Tasarımı', desc:'Jel, akrilik, nail art', badge:'4.7 • 1.200'},
              ].map((edu,ei) => (
                <div key={ei} className="ecard">
                  <div className="eph" style={{backgroundImage:`url(${edu.photo})`}}>
                    <div className="epovl"/>
                  </div>
                  <div className="ebody">
                    <div className="etit">{edu.title}</div>
                    <div className="edesc">{edu.desc}</div>
                    <div className="ebdg"><Ic n="star" s={10} f="#f59e0b" c="#f59e0b"/>{edu.badge}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* İŞ İLANLARI */}
        {activeTab==='jobs' && (
          <div>
            <div className="shd">
              <div className="stit"><Ic n="briefcase" s={20} c="#9333ea"/>{t.jobs}</div>
              <div className="smore">{t.postJob} →</div>
            </div>
            {JOBS.map((job,ji) => (
              <div key={ji} className="jcard">
                <div className="jchd">
                  <div className="jcic" style={{background:`${job.color}18`}}>
                    <Ic n={job.icon} s={20} c={job.color}/>
                  </div>
                  <div className="jctit">{job.title}</div>
                  {job.urgent && <span className="jurg">{lang==='TR'?'ACİL':'URGENT'}</span>}
                </div>
                <div className="jclc"><Ic n="pin" s={12}/>{job.loc}</div>
                <div className="jcsl" style={{color:job.color}}><Ic n="dollar" s={14} c={job.color}/>{job.sal}</div>
                <button className="japl" style={{background:`linear-gradient(135deg,${job.color},${job.color}dd)`}}>{t.apply}</button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <style>{CSS}</style>

      {/* PREMIUM MODAL */}
      {showPremium && (
        <div className="premium-modal" onClick={()=>setShowPremium(false)}>
          <div className="premium-box" onClick={e=>e.stopPropagation()}>
            <div className="premium-hd">
              <div className="premium-crown">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#080600" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <div className="premium-title">GlamWorld Premium</div>
              <div className="premium-sub">{lang==='TR'?'Sınırsız güzellik deneyimi':lang==='DE'?'Unbegrenzte Beauty-Erfahrung':lang==='RU'?'Безлимитный опыт красоты':'Unlimited beauty experience'}</div>
            </div>
            <div className="premium-features">
              {[
                {icon:'calendar',color:'#38b2ac',bg:'rgba(56,178,172,0.15)',
                 text:lang==='TR'?'Sınırsız Randevu':lang==='DE'?'Unbegrenzte Termine':'Unlimited Bookings',
                 sub:lang==='TR'?'İstediğin kadar randevu al':'Book as many as you want'},
                {icon:'message',color:'#ed64a6',bg:'rgba(237,100,166,0.15)',
                 text:lang==='TR'?'Profesyonellerle Mesajlaşma':lang==='DE'?'Nachrichten mit Profis':'Message Professionals',
                 sub:lang==='TR'?'Doğrudan iletişim kur':'Direct communication'},
                {icon:'radio',color:'#ef4444',bg:'rgba(239,68,68,0.15)',
                 text:lang==='TR'?'Canlı Yayın Erişimi':lang==='DE'?'Live-Stream Zugang':'Live Stream Access',
                 sub:lang==='TR'?'Tüm yayınları izle':'Watch all streams'},
                {icon:'sparkles',color:'#9333ea',bg:'rgba(147,51,234,0.15)',
                 text:lang==='TR'?'Glami AI Sınırsız':lang==='DE'?'Glami KI Unbegrenzt':'Glami AI Unlimited',
                 sub:lang==='TR'?'Sınırsız AI danışmanlık':'Unlimited AI advice'},
              ].map((f,i)=>(
                <div key={i} className="pf-item">
                  <div className="pf-icon" style={{background:f.bg}}><Ic n={f.icon} s={16} c={f.color}/></div>
                  <div><div className="pf-text">{f.text}</div><div className="pf-sub">{f.sub}</div></div>
                  <div style={{marginLeft:'auto'}}><Ic n="check" s={16} c="#10b981"/></div>
                </div>
              ))}
            </div>
            <div className="premium-pricing">
              {[
                {id:'monthly',period:lang==='TR'?'Aylık':lang==='DE'?'Monatlich':'Monthly',price:'9.99€',save:null},
                {id:'yearly', period:lang==='TR'?'Yıllık':lang==='DE'?'Jährlich':'Yearly',  price:'79.99€',save:lang==='TR'?'%33 İndirim':lang==='DE'?'33% Rabatt':'33% Off'},
              ].map(p=>(
                <div key={p.id} className={`price-card${premiumPlan===p.id?' sel':''}`} onClick={()=>setPremiumPlan(p.id)}>
                  <div className="price-card-period">{p.period}</div>
                  <div className="price-card-amount">{p.price}</div>
                  {p.save && <div className="price-card-save">{p.save}</div>}
                </div>
              ))}
            </div>
            <div className="premium-cta">
              <button className="premium-btn" onClick={()=>{setIsPremium(true);setShowPremium(false);}}>
                {lang==='TR'?'7 Gün Ücretsiz Dene':lang==='DE'?'7 Tage kostenlos testen':lang==='RU'?'7 дней бесплатно':'7-Day Free Trial'}
              </button>
              <div className="premium-skip" onClick={()=>setShowPremium(false)}>
                {lang==='TR'?'Şimdilik geç':lang==='DE'?'Überspringen':lang==='RU'?'Пропустить':'Skip for now'}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* YÜZEN MENÜ BUTONU */}
      <button className="menu-fab" onClick={() => setSideOpen(p => !p)}>
        <Ic n={sideOpen?'close':'menu'} s={22}/>
      </button>

      {/* GLAMİ ASİSTAN BUTONU */}
      <button className="glami-fab" onClick={() => { if(!assistOpen) setAssistMsgs([{from:'bot',text:getGlamiGreet(lang)}]); setAssistOpen(p=>!p); }}>
        <Ic n="sparkles" s={20} c="#fff"/>
        <span className="glami-fab-lbl">GLAMİ</span>
      </button>

      {/* GLAMİ PANEL */}
      <div className={`glami-panel${assistOpen?' open':''}`}>
        <div className="glami-hd">
          <div className="glami-avatar"><Ic n="sparkles" s={22} c="#fff"/></div>
          <div>
            <div className="glami-title">Glami</div>
            <div className="glami-subtitle">GlamWorld AI Asistan · 7/24</div>
          </div>
          <button className="glami-close" onClick={()=>setAssistOpen(false)} style={{width:36,height:36,borderRadius:10,background:'rgba(239,68,68,0.12)',border:'1px solid rgba(239,68,68,0.25)',color:'#ef4444',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
            <Ic n="close" s={16} c="#ef4444"/>
          </button>
        </div>

        <div className="glami-tabs">
          {[
            ['chat',  'message',  lang==='TR'?'Sohbet':lang==='DE'?'Chat':lang==='RU'?'Чат':'Chat',    '#5eead4'],
            ['game',  'play',     lang==='TR'?'Oyunlar':lang==='DE'?'Spiele':lang==='RU'?'Игры':'Games', '#f9a8d4'],
            ['note',  'edit',     lang==='TR'?'Notlar':lang==='DE'?'Notizen':lang==='RU'?'Заметки':'Notes','#fde68a'],
            ['tips',  'sparkles', lang==='TR'?'İpuçları':lang==='DE'?'Tipps':lang==='RU'?'Советы':'Tips', '#86efac'],
          ].map(([id,ic,lbl,col])=>(
            <button key={id} className={`glami-tab${assistTab===id?' act':''}`} onClick={()=>setAssistTab(id)}>
              <Ic n={ic} s={15} c={assistTab===id?col:'rgba(232,224,208,0.25)'}/>
              {lbl}
            </button>
          ))}
        </div>

        <div className="glami-body">

          {/* SOHBET */}
          {assistTab==='chat' && <>
            <div className="gchat-msgs">
              {assistMsgs.map((m,i)=>(
                <div key={i} className={`gmsg ${m.from}`}>{m.text}</div>
              ))}
            </div>
            <div className="gchat-inp">
              <input className="gchat-input" value={assistInput} onChange={e=>setAssistInput(e.target.value)}
                onKeyDown={e=>e.key==='Enter'&&sendGlamiMsg()}
                placeholder={lang==='TR'?'Bir şeyler sor...':'Ask something...'}/>
              <button className="gchat-btn gchat-voice" onClick={()=>speakText(assistMsgs[assistMsgs.length-1]?.text||'')}>
                <Ic n="radio" s={16} c="#ed64a6"/>
              </button>
              <button className="gchat-btn gchat-send" onClick={sendGlamiMsg}>
                <Ic n="chevR" s={16} c="#fff"/>
              </button>
            </div>
          </>}

          {/* OYUNLAR */}
          {assistTab==='game' && <>
            {!activeGame ? (
              <div className="ggame-cards">
                {GAMES.map(g=>(
                  <div key={g.id} className="ggame-card" onClick={()=>{setActiveGame(g);setGameStep(0);setGameScore(0);setGameAnswered(false);}}>
                    <div className="ggame-icon" style={{background:`${g.color}22`}}><Ic n={g.icon} s={20} c={g.color}/></div>
                    <div><div className="ggame-t">{g.title}</div><div className="ggame-s">{g.desc}</div></div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                {gameStep < activeGame.questions.length ? (
                  <div className="ggame-active">
                    <div style={{fontSize:'11px',color:'rgba(196,181,253,0.5)',marginBottom:'8px',fontWeight:700}}>{activeGame.title} — {gameStep+1}/{activeGame.questions.length}</div>
                    <div className="ggame-q">{activeGame.questions[gameStep].q}
                      {activeGame.id==='color' && <div style={{width:'60px',height:'60px',borderRadius:'12px',background:activeGame.questions[gameStep].color,margin:'10px auto 0',border:'2px solid rgba(255,255,255,0.15)'}}/>}
                    </div>
                    <div className="ggame-opts">
                      {activeGame.questions[gameStep].opts.map((o,oi)=>(
                        <button key={oi} className={`ggame-opt${gameAnswered?(oi===activeGame.questions[gameStep].ans?' ok':gameAnswered&&' no'):''}` } disabled={gameAnswered}
                          onClick={()=>{
                            if(gameAnswered) return;
                            setGameAnswered(true);
                            if(oi===activeGame.questions[gameStep].ans) setGameScore(s=>s+1);
                            setTimeout(()=>{setGameStep(s=>s+1);setGameAnswered(false);},1200);
                          }}>
                          {o}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="ggame-score">
                    <div className="ggame-score-n">{gameScore}/{activeGame.questions.length}</div>
                    <div style={{fontSize:'14px',color:'#e8e0d0',margin:'8px 0 4px',fontWeight:700}}>
                      {activeGame.id==='quiz' ? activeGame.results[Math.min(gameScore, activeGame.results.length-1)] : (gameScore>=3?'Harika!':'Tekrar dene!')}
                    </div>
                    <div style={{fontSize:'11px',color:'rgba(232,224,208,0.4)',marginBottom:'16px'}}>
                      {lang==='TR'?`${activeGame.questions.length} sorudan ${gameScore} doğru`:`${gameScore} of ${activeGame.questions.length} correct`}
                    </div>
                    <button onClick={()=>setActiveGame(null)} style={{background:'linear-gradient(135deg,#9333ea,#7c3aed)',color:'#fff',border:'none',padding:'10px 24px',borderRadius:'12px',cursor:'pointer',fontFamily:'DM Sans,sans-serif',fontWeight:700,fontSize:'13px'}}>
                      {lang==='TR'?'Oyunlara Dön':'Back to Games'}
                    </button>
                  </div>
                )}
              </div>
            )}
          </>}

          {/* NOT DEFTERİ */}
          {assistTab==='note' && <>
            <textarea className="gnote-area" value={noteText} onChange={e=>setNoteText(e.target.value)}
              placeholder={lang==='TR'?'Notlarınızı buraya yazın...\n\nRandevu zamanları, saç modeli fikirleri, ürün listeleri...':'Write your notes here...\n\nAppointment times, hair ideas, product lists...'}/>
            <button className="gnote-save" onClick={()=>{localStorage.setItem('glamiNote',noteText);alert(lang==='TR'?'Not kaydedildi!':'Note saved!');}}>
              {lang==='TR'?'Kaydet':'Save'}
            </button>
          </>}

          {/* İPUÇLARI */}
          {assistTab==='tips' && <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            {[
              {ic:'scissors',col:'#5eead4',
               title:lang==='TR'?'Saç Bakım Sırrı':lang==='DE'?'Haarpflege-Tipp':lang==='RU'?'Уход за волосами':'Hair Care Secret',
               text:lang==='TR'?'Saçını soğuk suyla durulayın. Kütikülü kapatır, parlaklığı 2x artırır!':lang==='DE'?'Spüle Haare mit kaltem Wasser. Schließt die Kutikula und macht sie 2x glänzender!':lang==='RU'?'Споласкивайте волосы холодной водой. Закрывает кутикулу, удваивает блеск!':'Rinse hair with cold water. Seals cuticles, doubles shine!'},
              {ic:'sparkles',col:'#f9a8d4',
               title:lang==='TR'?'Makyaj Püf Noktası':lang==='DE'?'Make-up-Trick':lang==='RU'?'Секрет макияжа':'Makeup Trick',
               text:lang==='TR'?'Astar (primer) uygulamak makyajınızı 2-3 kat daha uzun süre tutar.':lang==='DE'?'Primer lässt Make-up 2-3x länger halten.':lang==='RU'?'Праймер делает макияж держащимся в 2-3 раза дольше.':'Primer makes your makeup last 2-3x longer.'},
              {ic:'heart',col:'#fde68a',
               title:lang==='TR'?'Cilt Bakım Rutini':lang==='DE'?'Hautpflege-Routine':lang==='RU'?'Уход за кожей':'Skincare Routine',
               text:lang==='TR'?'Sabah C vitamini serumu, akşam retinol. Bu ikili cilt yaşlanmasını yavaşlatır.':lang==='DE'?'Morgens Vitamin-C-Serum, abends Retinol. Dieses Duo verlangsamt die Hautalterung.':lang==='RU'?'Утром витамин C, вечером ретинол. Этот дуэт замедляет старение кожи.':'Morning Vitamin C serum, evening retinol. This duo slows skin aging.'},
              {ic:'award',col:'#86efac',
               title:lang==='TR'?'Sakal Bakımı':lang==='DE'?'Bartpflege':lang==='RU'?'Уход за бородой':'Beard Care',
               text:lang==='TR'?'Sakal yağı kullanmak sakalı yumuşatır ve altındaki cildi besler. Haftada 2-3 kez yeterli.':lang==='DE'?'Bartöl weicht den Bart auf und nährt die Haut darunter. 2-3 Mal pro Woche reicht.':lang==='RU'?'Масло для бороды смягчает её и питает кожу под ней. 2-3 раза в неделю достаточно.':'Beard oil softens the beard and nourishes the skin beneath. 2-3 times a week is enough.'},
            ].map((tip,ti)=>(
              <div key={ti} style={{background:`${tip.col}0d`,border:`1px solid ${tip.col}30`,borderRadius:'14px',padding:'14px',display:'flex',gap:'10px',alignItems:'flex-start'}}>
                <div style={{width:'34px',height:'34px',borderRadius:'10px',background:`${tip.col}22`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  <Ic n={tip.ic} s={16} c={tip.col}/>
                </div>
                <div>
                  <div style={{fontSize:'12px',fontWeight:'800',color:'#e8e0d0',marginBottom:'4px'}}>{tip.title}</div>
                  <div style={{fontSize:'11px',color:'rgba(232,224,208,0.6)',lineHeight:1.6}}>{tip.text}</div>
                </div>
              </div>
            ))}
          </div>}

        </div>
      </div>

      {/* Glami panel overlay */}
      {assistOpen && <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.3)',zIndex:1049,backdropFilter:'blur(2px)'}} onClick={()=>{setAssistOpen(false);stopCamera();}}/>}

      {/* STORY MODAL */}
      {storyModal !== null && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.9)',zIndex:2000,display:'flex',alignItems:'center',justifyContent:'center'}} onClick={() => setStoryModal(null)}>
          <div style={{width:'340px',height:'570px',borderRadius:'26px',overflow:'hidden',position:'relative',border:'2px solid rgba(56,178,172,0.4)'}} onClick={e => e.stopPropagation()}>
            <div style={{position:'absolute',inset:0,backgroundImage:`url(${STORIES[storyModal].photo})`,backgroundSize:'cover',backgroundPosition:'center'}}/>
            <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(0,0,0,0.9),rgba(0,0,0,0.2) 60%,transparent)'}}/>
            <button style={{position:'absolute',top:'14px',right:'14px',background:'rgba(255,255,255,0.15)',border:'none',color:'#fff',width:'32px',height:'32px',borderRadius:'50%',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',zIndex:2}} onClick={() => setStoryModal(null)}><Ic n="close"/></button>
            <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'28px',textAlign:'center'}}>
              <div style={{fontSize:'24px',fontWeight:'800',color:'#fff',marginBottom:'6px'}}>{STORIES[storyModal].name}</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.65)',marginBottom:'20px',display:'flex',alignItems:'center',justifyContent:'center',gap:'6px'}}><Ic n="scissors" s={14}/>{STORIES[storyModal].role}</div>
              <button style={{background:'linear-gradient(135deg,#38b2ac,#5eead4)',color:'#0d4f4f',border:'none',padding:'13px 32px',borderRadius:'26px',fontWeight:'800',fontSize:'15px',cursor:'pointer',fontFamily:'DM Sans,sans-serif'}}>{t.appointment}</button>
            </div>
          </div>
        </div>
      )}

      {/* AUTH MODAL */}
      {authModal && (
        <div className="auth-modal" onClick={()=>setAuthModal(false)}>
          <div className="auth-box" onClick={e=>e.stopPropagation()}>
            <div className="auth-hd">
              <div className="auth-logo">GlamWorld</div>
              <div className="auth-sub">{authTab==='login'?'Hesabınıza giriş yapın':'Yeni hesap oluşturun'}</div>
            </div>
            <div className="auth-tabs">
              {[['login','Giriş Yap'],['register','Kayıt Ol']].map(([k,l])=>(
                <button key={k} className={`auth-tab ${authTab===k?'act':''}`} onClick={()=>setAuthTab(k)}>{l}</button>
              ))}
            </div>
            <div className="auth-body">
              {authTab==='register' && (
                <div className="auth-type">
                  {[['customer','Müşteri','user'],['professional','Profesyonel','scissors']].map(([k,l,ic])=>(
                    <div key={k} className={`auth-type-btn ${authType===k?'act':''}`} onClick={()=>setAuthType(k)}>
                      <div style={{width:'40px',height:'40px',borderRadius:'12px',background:authType===k?'rgba(56,178,172,0.15)':'#f0fdf9',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 8px'}}>
                        <Ic n={ic} s={20} c={authType===k?'#38b2ac':'#94a3b8'}/>
                      </div>
                      <div style={{fontSize:'14px',fontWeight:'700',color:authType===k?'#38b2ac':'#64748b'}}>{l}</div>
                      <div style={{fontSize:'11px',color:'#94a3b8',marginTop:'3px'}}>{k==='customer'?'Hizmet al':'Hizmet ver'}</div>
                    </div>
                  ))}
                </div>
              )}
              {authTab==='login' ? (
                <div>
                  <input className="auth-inp" placeholder="E-posta adresi" type="email"/>
                  <input className="auth-inp" placeholder="Şifre" type="password"/>
                  <button className="auth-btn" onClick={(e)=>{
                    const form = e.target.closest('.auth-body');
                    const email = form.querySelector('input[type=email]').value;
                    const pass = form.querySelector('input[type=password]').value;
                    if(!email||!pass){alert('Lütfen e-posta ve şifrenizi girin!');return;}
                    setLoggedIn(true);
                    setUserData({name:email.split('@')[0],type:'customer',email});
                    setAuthModal(false);
                  }}>Giriş Yap</button>
                  <div className="auth-divider">veya</div>
                  <button onClick={()=>{setLoggedIn(true);setUserData({name:'Google Kullanıcı',type:'customer'});setAuthModal(false);}} style={{width:'100%',padding:'12px',background:'#fff',border:'1.5px solid #e0e0e0',borderRadius:'14px',color:'#333',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'14px',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px',boxShadow:'0 2px 8px rgba(0,0,0,0.08)',marginBottom:'10px'}}>
                    <svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    Google ile Giriş Yap
                  </button>
                  <button onClick={()=>setAuthTab('register')} style={{width:'100%',padding:'12px',background:'transparent',border:'1.5px solid rgba(56,178,172,0.3)',borderRadius:'14px',color:'#38b2ac',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'14px',cursor:'pointer'}}>Hesap Oluştur</button>
                </div>
              ) : (
                <div>
                  <input className="auth-inp" placeholder="Ad Soyad" type="text"/>
                  <input className="auth-inp" placeholder="E-posta adresi" type="email"/>
                  <input className="auth-inp" placeholder="Telefon (isteğe bağlı)" type="tel"/>
                  {authType==='professional' && (
                    <>
                      <select className="auth-inp" style={{cursor:'pointer'}}>
                        <option>Branş seçin...</option>
                        <option>Erkek Kuaförü / Berber</option>
                        <option>Kadın Kuaförü</option>
                        <option>Makyaj Uzmanı</option>
                        <option>Masaj Terapisti</option>
                        <option>Tırnak Uzmanı</option>
                        <option>Cilt Bakım Uzmanı</option>
                      </select>
                      <input className="auth-inp" placeholder="Şehir" type="text"/>
                      <input className="auth-inp" placeholder="Sertifika / Deneyim yılı" type="text"/>
                    </>
                  )}
                  {authType==='customer' && (
                    <>
                      <input className="auth-inp" placeholder="Şehir" type="text"/>
                    </>
                  )}
                  <input className="auth-inp" placeholder="Şifre" type="password"/>
                  <input className="auth-inp" placeholder="Şifre tekrar" type="password"/>
                  <button onClick={()=>{setLoggedIn(true);setUserData({name:'Google Kullanıcı',type:authType});setAuthModal(false);}} style={{width:'100%',padding:'12px',background:'#fff',border:'1.5px solid #e0e0e0',borderRadius:'14px',color:'#333',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'14px',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px',boxShadow:'0 2px 8px rgba(0,0,0,0.08)',marginBottom:'10px'}}>
                    <svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    Google ile Kayıt Ol
                  </button>
                  <button className="auth-btn" onClick={(e)=>{
                    const form = e.target.closest('.auth-body');
                    const name = form.querySelector('input[type=text]')?.value;
                    const email = form.querySelector('input[type=email]')?.value;
                    const pass = form.querySelectorAll('input[type=password]')[0]?.value;
                    if(!name||!email||!pass){alert('Lütfen ad, e-posta ve şifre alanlarını doldurun!');return;}
                    setLoggedIn(true);
                    setUserData({name,type:authType,email});
                    setAuthModal(false);
                  }}>
                    {authType==='customer'?'Müşteri Olarak Kayıt Ol':'Profesyonel Olarak Kayıt Ol'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* WOMEN TRY MODAL */}
      {womenTry && (
        <div className="women-modal" onClick={()=>setWomenTry(false)}>
          <div className="women-box" onClick={e=>e.stopPropagation()}>
            <div className="women-hd">
              <div>
                <div style={{fontSize:'18px',fontWeight:'800',color:'#fff'}}>Kadın — Saç, Makyaj & Tırnağını Dene</div>
                <div style={{fontSize:'12px',color:'rgba(255,255,255,0.8)',marginTop:'2px'}}>Yapay Zeka ile Yeni Görünümünü Keşfet</div>
              </div>
              <button style={{background:'rgba(255,255,255,0.2)',border:'none',color:'#fff',width:'32px',height:'32px',borderRadius:'50%',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}} onClick={()=>setWomenTry(false)}><Ic n="close" s={16}/></button>
            </div>

            {/* Kategori tabları */}
            <div style={{display:'flex',gap:'6px',padding:'12px 16px',background:'#fff',borderBottom:'1px solid rgba(237,100,166,0.1)',overflowX:'auto'}}>
              {[
                {k:'photo',icon:'camera',label:'Fotoğraf Yükle'},
                {k:'hair',icon:'sparkles',label:'Saç Modelleri'},
                {k:'makeup',icon:'star',label:'Makyaj Stilleri'},
                {k:'nails',icon:'award',label:'Tırnak Tasarımı'},
                {k:'ai',icon:'trending',label:'Yapay Zeka'},
              ].map(({k,icon,label})=>(
                <button key={k} onClick={()=>setWomenCategory(k)} style={{display:'flex',alignItems:'center',gap:'5px',padding:'8px 12px',borderRadius:'20px',border:'none',cursor:'pointer',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'12px',whiteSpace:'nowrap',background:womenCategory===k?'linear-gradient(135deg,#ed64a6,#9333ea)':'rgba(237,100,166,0.08)',color:womenCategory===k?'#fff':'#64748b',transition:'all 0.2s'}}>
                  <Ic n={icon} s={13} c={womenCategory===k?'#fff':'#64748b'}/>{label}
                </button>
              ))}
            </div>

            <div style={{padding:'20px'}}>
              {/* FOTOĞRAF YÜKLE */}
              {womenCategory==='photo' && (
                <div>
                  {!uploadedWomenPhoto ? (
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px'}}>
                      {[
                        {icon:'image',label:'Telefon Galerisi',sub:'Cihazınızdaki fotoğraflar'},
                        {icon:'camera',label:'Kamera ile Çek',sub:'Anında fotoğraf çek'},
                        {icon:'image',label:'Google Fotoğraflar',sub:'Bulut depolama'},
                        {icon:'image',label:'Dosyalarım',sub:'Bilgisayar dosyaları'},
                      ].map((opt,oi)=>(
                        <div key={oi} onClick={()=>{
                          const inp=document.createElement('input');
                          inp.type='file';inp.accept='image/*';
                          if(oi===1) inp.capture='user';
                          inp.onchange=e=>{if(e.target.files[0])setUploadedWomenPhoto(URL.createObjectURL(e.target.files[0]));};
                          inp.click();
                        }} style={{background:'#fff',border:'1.5px solid rgba(237,100,166,0.2)',borderRadius:'16px',padding:'18px',cursor:'pointer',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:'10px'}}>
                          <div style={{width:'48px',height:'48px',background:'linear-gradient(135deg,rgba(237,100,166,0.15),rgba(147,51,234,0.1))',borderRadius:'14px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <Ic n={opt.icon} s={22} c="#ed64a6"/>
                          </div>
                          <div>
                            <div style={{fontSize:'13px',fontWeight:'700',color:'#1a2a2a'}}>{opt.label}</div>
                            <div style={{fontSize:'11px',color:'#94a3b8',marginTop:'2px'}}>{opt.sub}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <div style={{borderRadius:'20px',overflow:'hidden',marginBottom:'14px'}}>
                        <img src={uploadedWomenPhoto} alt="" style={{width:'100%',height:'280px',objectFit:'cover',display:'block'}}/>
                      </div>
                      <div style={{display:'flex',gap:'8px'}}>
                        <button onClick={()=>setUploadedWomenPhoto(null)} style={{flex:1,padding:'10px',background:'rgba(239,68,68,0.08)',color:'#ef4444',border:'1.5px solid rgba(239,68,68,0.15)',borderRadius:'12px',cursor:'pointer',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'12px'}}>Değiştir</button>
                        <button onClick={()=>setWomenCategory('hair')} style={{flex:2,padding:'10px',background:'linear-gradient(135deg,#ed64a6,#9333ea)',color:'#fff',border:'none',borderRadius:'12px',cursor:'pointer',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'12px'}}>Stil Seçmeye Devam Et</button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* SAÇ MODELLERİ */}
              {womenCategory==='hair' && (
                <div>
                  <div style={{fontSize:'14px',fontWeight:'800',color:'#1a2a2a',marginBottom:'14px',display:'flex',alignItems:'center',gap:'6px'}}><Ic n="sparkles" s={16} c="#ed64a6"/>Kadın Saç Modelleri</div>
                  <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'10px'}}>
                    {WOMEN_HAIR.map(s=>(
                      <div key={s.id} onClick={()=>setSelectedWomenStyle(s.id)} style={{borderRadius:'14px',overflow:'hidden',cursor:'pointer',border:selectedWomenStyle===s.id?'2.5px solid #ed64a6':'2px solid transparent',transition:'all 0.2s',boxShadow:'0 2px 8px rgba(0,0,0,0.1)',position:'relative'}}>
                        <img src={s.photo} alt={s.name} style={{width:'100%',height:'110px',objectFit:'cover',display:'block'}}/>
                        {selectedWomenStyle===s.id && <div style={{position:'absolute',top:'6px',right:'6px',background:'#ed64a6',borderRadius:'50%',width:'22px',height:'22px',display:'flex',alignItems:'center',justifyContent:'center'}}><Ic n="check" s={12} c="#fff"/></div>}
                        <div style={{fontSize:'11px',fontWeight:'700',textAlign:'center',padding:'7px 4px',background:'#fff',color:'#1a2a2a'}}>{s.name}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{marginTop:'16px'}}>
                    <div style={{fontSize:'13px',fontWeight:'700',color:'#1a2a2a',marginBottom:'10px',display:'flex',alignItems:'center',gap:'6px'}}><Ic n="sparkles" s={13} c="#ed64a6"/>Saç Rengi Seç</div>
                    <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
                      {['#1a1a1a','#6b3f1a','#f4d03f','#c0392b','#f0ead6','#808080','#2980b9','#8e44ad','#e91e63','#ff6b6b'].map((c,ci)=>(
                        <div key={ci} onClick={()=>setSelectedWomenColor(c)} style={{width:'32px',height:'32px',borderRadius:'50%',background:c,cursor:'pointer',border:selectedWomenColor===c?'3px solid #ed64a6':'2px solid rgba(0,0,0,0.1)',transition:'all 0.2s',boxShadow:'0 2px 6px rgba(0,0,0,0.15)'}}/>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* MAKYAJ STİLLERİ */}
              {womenCategory==='makeup' && (
                <div>
                  <div style={{fontSize:'14px',fontWeight:'800',color:'#1a2a2a',marginBottom:'14px',display:'flex',alignItems:'center',gap:'6px'}}><Ic n="star" s={16} c="#9333ea"/>Makyaj Stilleri</div>
                  <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'10px'}}>
                    {MAKEUP_STYLES.map(s=>(
                      <div key={s.id} onClick={()=>setSelectedWomenStyle(s.id)} style={{borderRadius:'14px',overflow:'hidden',cursor:'pointer',border:selectedWomenStyle===s.id?'2.5px solid #9333ea':'2px solid transparent',transition:'all 0.2s',boxShadow:'0 2px 8px rgba(0,0,0,0.1)',position:'relative'}}>
                        <img src={s.photo} alt={s.name} style={{width:'100%',height:'110px',objectFit:'cover',display:'block'}}/>
                        {selectedWomenStyle===s.id && <div style={{position:'absolute',top:'6px',right:'6px',background:'#9333ea',borderRadius:'50%',width:'22px',height:'22px',display:'flex',alignItems:'center',justifyContent:'center'}}><Ic n="check" s={12} c="#fff"/></div>}
                        <div style={{fontSize:'11px',fontWeight:'700',textAlign:'center',padding:'7px 4px',background:'#fff',color:'#1a2a2a'}}>{s.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TIRNAK TASARIMLARI */}
              {womenCategory==='nails' && (
                <div>
                  <div style={{fontSize:'14px',fontWeight:'800',color:'#1a2a2a',marginBottom:'14px',display:'flex',alignItems:'center',gap:'6px'}}><Ic n="award" s={16} c="#f59e0b"/>Tırnak Tasarımları</div>
                  <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'10px',marginBottom:'20px'}}>
                    {NAIL_STYLES.map(s=>(
                      <div key={s.id} onClick={()=>setSelectedWomenStyle(s.id)} style={{borderRadius:'14px',overflow:'hidden',cursor:'pointer',border:selectedWomenStyle===s.id?'2.5px solid #f59e0b':'2px solid transparent',transition:'all 0.2s',boxShadow:'0 2px 8px rgba(0,0,0,0.1)',position:'relative'}}>
                        <img src={s.photo} alt={s.name} style={{width:'100%',height:'100px',objectFit:'cover',display:'block'}}/>
                        {selectedWomenStyle===s.id && <div style={{position:'absolute',top:'6px',right:'6px',background:'#f59e0b',borderRadius:'50%',width:'22px',height:'22px',display:'flex',alignItems:'center',justifyContent:'center'}}><Ic n="check" s={12} c="#fff"/></div>}
                        <div style={{fontSize:'11px',fontWeight:'700',textAlign:'center',padding:'7px 4px',background:'#fff',color:'#1a2a2a'}}>{s.name}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{fontSize:'13px',fontWeight:'700',color:'#1a2a2a',marginBottom:'10px'}}>Tırnak Rengi Seç:</div>
                  <div style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
                    {['#ff1744','#e91e63','#ff6b6b','#ff9800','#ffd700','#4caf50','#2196f3','#9c27b0','#ffffff','#1a1a1a','#c0c0c0','#d4a96a'].map((c,ci)=>(
                      <div key={ci} onClick={()=>setSelectedWomenColor(c)} style={{width:'30px',height:'30px',borderRadius:'50%',background:c,cursor:'pointer',border:selectedWomenColor===c?'3px solid #38b2ac':'2px solid rgba(0,0,0,0.15)',transition:'all 0.2s',boxShadow:'0 2px 4px rgba(0,0,0,0.15)'}}/>
                    ))}
                  </div>
                </div>
              )}

              {/* YAPAY ZEKA */}
              {womenCategory==='ai' && (
                <div>
                  <div style={{background:'linear-gradient(135deg,#1a0530,#2d1060)',borderRadius:'20px',padding:'24px',textAlign:'center',marginBottom:'16px'}}>
                    {uploadedWomenPhoto ? (
                      <div style={{position:'relative',display:'inline-block',marginBottom:'16px'}}>
                        <img src={uploadedWomenPhoto} alt="" style={{width:'160px',height:'160px',borderRadius:'50%',objectFit:'cover',border:'4px solid #ed64a6',display:'block'}}/>
                        <div style={{position:'absolute',bottom:0,right:0,background:'linear-gradient(135deg,#ed64a6,#9333ea)',borderRadius:'50%',width:'40px',height:'40px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                          <Ic n="sparkles" s={20} c="#fff"/>
                        </div>
                      </div>
                    ) : (
                      <div style={{width:'160px',height:'160px',borderRadius:'50%',background:'rgba(237,100,166,0.1)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px'}}>
                        <Ic n="user" s={60} c="#ed64a6"/>
                      </div>
                    )}
                    <div style={{color:'#f9a8d4',fontSize:'13px',fontWeight:'700',letterSpacing:'2px',marginBottom:'12px'}}>YAPAY ZEKA ANALİZ EDİYOR</div>
                    <div style={{background:'rgba(255,255,255,0.1)',borderRadius:'50px',height:'8px',overflow:'hidden',marginBottom:'12px'}}>
                      <div style={{height:'100%',background:'linear-gradient(90deg,#ed64a6,#9333ea)',borderRadius:'50px',animation:'aiprog 2s ease-in-out infinite'}}/>
                    </div>
                    <div style={{color:'rgba(255,255,255,0.6)',fontSize:'12px'}}>Seçilen görünüm uygulanıyor...</div>
                  </div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px'}}>
                    <button onClick={()=>{const link=document.createElement('a');link.download='glamworld-look.jpg';link.href=uploadedWomenPhoto||'';link.click();}} style={{padding:'12px',background:'rgba(237,100,166,0.08)',color:'#ed64a6',border:'1.5px solid rgba(237,100,166,0.2)',borderRadius:'14px',cursor:'pointer',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'13px',display:'flex',alignItems:'center',justifyContent:'center',gap:'6px'}}>
                      <Ic n="image" s={15}/>Galeriye Kaydet
                    </button>
                    <button onClick={()=>alert('Uzmanınıza gönderildi!')} style={{padding:'12px',background:'linear-gradient(135deg,#ed64a6,#9333ea)',color:'#fff',border:'none',borderRadius:'14px',cursor:'pointer',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'13px',display:'flex',alignItems:'center',justifyContent:'center',gap:'6px'}}>
                      <Ic n="share" s={15}/>Uzmanına Gönder
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* HAIR TRY MODAL */}
      {hairTry && (
        <div className="htmodal" onClick={()=>setHairTry(false)}>
          <div className="htbox" onClick={e=>e.stopPropagation()}>
            {/* HEADER */}
            <div className="hthd">
              <div>
                <div className="hthd-tit">Erkek — Saç & Sakalını Dene</div>
                <div className="hthd-sub">Yapay Zeka ile Yeni Görünümünü Keşfet</div>
              </div>
              <button className="htclose" onClick={()=>setHairTry(false)}><Ic n="close" s={16}/></button>
            </div>

            {/* STEP TABS */}
            <div style={{display:'flex',gap:'6px',padding:'12px 16px',background:'#f8fafb',borderBottom:'1px solid rgba(56,178,172,0.1)',overflowX:'auto'}}>
              {[
                {s:1,icon:'camera',label:'Fotoğraf Yükle'},
                {s:2,icon:'video',label:'Kamera Aç'},
                {s:3,icon:'sparkles',label:'Stil Seç'},
                {s:4,icon:'star',label:'Yapay Zeka'},
              ].map(({s,icon,label})=>(
                <button key={s} onClick={()=>setHairStep(s)} style={{display:'flex',alignItems:'center',gap:'6px',padding:'8px 14px',borderRadius:'20px',border:'none',cursor:'pointer',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'12px',whiteSpace:'nowrap',background:hairStep===s?'linear-gradient(135deg,#38b2ac,#319795)':'rgba(56,178,172,0.08)',color:hairStep===s?'#fff':'#64748b',transition:'all 0.2s'}}>
                  <Ic n={icon} s={14} c={hairStep===s?'#fff':'#64748b'}/>{label}
                </button>
              ))}
            </div>

            <div style={{padding:'20px'}}>

              {/* STEP 1 - FOTOĞRAF YÜKLE */}
              {hairStep===1 && (
                <div>
                  {!uploadedPhoto ? (
                    <div>
                      <div style={{fontSize:'14px',fontWeight:'700',color:'#1a2a2a',marginBottom:'14px',textAlign:'center'}}>Nereden yüklemek istiyorsunuz?</div>
                      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px'}}>
                        {[
                          {icon:'image',label:'Telefon Galerisi',sub:'Cihazınızdaki fotoğraflar',accept:'image/*'},
                          {icon:'camera',label:'Google Fotoğraflar',sub:'Google Drive & Fotoğraflar',accept:'image/*'},
                          {icon:'image',label:'Dosyalarım',sub:'Bilgisayar ve bulut',accept:'image/*'},
                          {icon:'video',label:'Anında Çek',sub:'Kamera ile çek',accept:'image/*',capture:'user'},
                        ].map((opt,oi)=>(
                          <div key={oi} onClick={()=>{
                            const inp = document.createElement('input');
                            inp.type='file';
                            inp.accept=opt.accept;
                            if(opt.capture) inp.capture=opt.capture;
                            inp.onchange=e=>{if(e.target.files[0])setUploadedPhoto(URL.createObjectURL(e.target.files[0]));};
                            inp.click();
                          }} style={{background:'#fff',border:'1.5px solid rgba(56,178,172,0.2)',borderRadius:'16px',padding:'18px',cursor:'pointer',textAlign:'center',transition:'all 0.2s',display:'flex',flexDirection:'column',alignItems:'center',gap:'10px'}}>
                            <div style={{width:'48px',height:'48px',background:'linear-gradient(135deg,rgba(56,178,172,0.15),rgba(237,100,166,0.1))',borderRadius:'14px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                              <Ic n={opt.icon} s={22} c="#38b2ac"/>
                            </div>
                            <div>
                              <div style={{fontSize:'13px',fontWeight:'700',color:'#1a2a2a'}}>{opt.label}</div>
                              <div style={{fontSize:'11px',color:'#94a3b8',marginTop:'2px'}}>{opt.sub}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div style={{borderRadius:'20px',overflow:'hidden',position:'relative',marginBottom:'14px',background:'#1a2a2a'}}>
                        <img src={uploadedPhoto} alt="Yüzünüz" style={{width:'100%',height:'300px',objectFit:'cover',display:'block'}}/>
                        {selectedStyle && (
                          <div style={{position:'absolute',top:0,left:0,right:0,height:'50%',display:'flex',justifyContent:'center',alignItems:'flex-start',pointerEvents:'none'}}>
                            <img src={HAIR_STYLES.find(s=>s.id===selectedStyle)?.photo} alt="Saç" style={{width:'70%',objectFit:'cover',opacity:0.85,mixBlendMode:'multiply'}}/>
                          </div>
                        )}
                        <div style={{position:'absolute',top:'10px',left:'10px',background:'rgba(56,178,172,0.9)',borderRadius:'10px',padding:'5px 12px',color:'#fff',fontSize:'11px',fontWeight:'700'}}>
                          {selectedStyle?HAIR_STYLES.find(s=>s.id===selectedStyle)?.name:'Stil seçilmedi'}
                        </div>
                      </div>
                      <div style={{display:'flex',gap:'8px',marginBottom:'16px'}}>
                        <button onClick={()=>setUploadedPhoto(null)} style={{flex:1,padding:'10px',background:'rgba(239,68,68,0.08)',color:'#ef4444',border:'1.5px solid rgba(239,68,68,0.15)',borderRadius:'12px',cursor:'pointer',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'12px'}}>Değiştir</button>
                        <button onClick={()=>{
                          const link=document.createElement('a');
                          link.download='glamworld-saç.jpg';
                          link.href=uploadedPhoto;
                          link.click();
                        }} style={{flex:1,padding:'10px',background:'rgba(56,178,172,0.08)',color:'#38b2ac',border:'1.5px solid rgba(56,178,172,0.15)',borderRadius:'12px',cursor:'pointer',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'12px',display:'flex',alignItems:'center',justifyContent:'center',gap:'5px'}}>
                          <Ic n="image" s={13}/>Kaydet
                        </button>
                        <button onClick={()=>alert('Kuaförünüze gönderildi! Yakında randevu alabileceksiniz.')} style={{flex:1,padding:'10px',background:'linear-gradient(135deg,#ed64a6,#d53f8c)',color:'#fff',border:'none',borderRadius:'12px',cursor:'pointer',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'12px'}}>Kuaföre Gönder</button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 2 - KAMERA AÇ */}
              {hairStep===2 && (
                <div style={{textAlign:'center'}}>
                  <div style={{background:'#1a2a2a',borderRadius:'20px',height:'280px',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'16px',position:'relative',overflow:'hidden'}}>
                    <div style={{color:'rgba(255,255,255,0.5)',fontSize:'14px'}}>Kamera başlatılıyor...</div>
                    <div style={{position:'absolute',bottom:'16px',left:'50%',transform:'translateX(-50%)'}}>
                      <button onClick={()=>{
                        const inp=document.createElement('input');
                        inp.type='file';
                        inp.accept='image/*';
                        inp.capture='user';
                        inp.onchange=e=>{if(e.target.files[0]){setUploadedPhoto(URL.createObjectURL(e.target.files[0]));setHairStep(1);}};
                        inp.click();
                      }} style={{background:'#38b2ac',color:'#fff',border:'none',padding:'12px 28px',borderRadius:'25px',cursor:'pointer',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'14px',display:'flex',alignItems:'center',gap:'8px'}}>
                        <Ic n="camera" s={18}/>Fotoğraf Çek
                      </button>
                    </div>
                  </div>
                  <div style={{fontSize:'13px',color:'#94a3b8'}}>Kameranızı açmak için butona basın</div>
                </div>
              )}

              {/* STEP 3 - STİL SEÇ */}
              {hairStep===3 && (
                <div>
                  {uploadedPhoto && (
                    <div style={{display:'flex',gap:'10px',background:'#fff',borderRadius:'14px',padding:'12px',marginBottom:'16px',border:'1.5px solid rgba(56,178,172,0.15)',alignItems:'center'}}>
                      <img src={uploadedPhoto} alt="" style={{width:'46px',height:'46px',borderRadius:'50%',objectFit:'cover',border:'2px solid #38b2ac'}}/>
                      <div style={{flex:1}}>
                        <div style={{fontSize:'13px',fontWeight:'700',color:'#1a2a2a'}}>Fotoğrafın Hazır</div>
                        <div style={{fontSize:'11px',color:'#94a3b8'}}>Aşağıdan kategori ve stil seç</div>
                      </div>
                    </div>
                  )}
                  {!uploadedPhoto && (
                    <div style={{background:'rgba(56,178,172,0.05)',border:'1.5px dashed rgba(56,178,172,0.3)',borderRadius:'12px',padding:'12px',marginBottom:'14px',textAlign:'center',cursor:'pointer'}} onClick={()=>setHairStep(1)}>
                      <div style={{fontSize:'12px',color:'#38b2ac',fontWeight:'700'}}>Fotoğraf ekle (isteğe bağlı)</div>
                    </div>
                  )}

                  {/* Kategori tabları */}
                  {[{label:'Erkek Saç',cat:'Erkek'},{label:'Erkek Sakal',cat:'Sakal'},{label:'Kadın Saç',cat:'Kadın Saç'}].map(({label,cat},ci)=>(
                    <div key={ci}>
                      <div style={{fontSize:'13px',fontWeight:'800',color:'#1a2a2a',marginBottom:'10px',marginTop:ci>0?'16px':'0',display:'flex',alignItems:'center',gap:'6px'}}>
                        <Ic n={ci===2?'sparkles':'scissors'} s={14} c={ci===0?'#38b2ac':ci===1?'#ed64a6':'#9333ea'}/>
                        {label}
                      </div>
                      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'8px'}}>
                        {HAIR_STYLES.filter(s=>s.cat===cat).map(s=>(
                          <div key={s.id} onClick={()=>{setSelectedStyle(s.id);setHairStep(4);}} style={{borderRadius:'12px',overflow:'hidden',cursor:'pointer',border:selectedStyle===s.id?'2.5px solid #38b2ac':'2px solid transparent',transition:'all 0.2s',position:'relative',boxShadow:'0 2px 8px rgba(0,0,0,0.1)'}}>
                            <img src={s.photo} alt={s.name} style={{width:'100%',height:'80px',objectFit:'cover',display:'block'}}/>
                            {selectedStyle===s.id && <div style={{position:'absolute',top:'5px',right:'5px',background:'#38b2ac',borderRadius:'50%',width:'20px',height:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}><Ic n="check" s={11} c="#fff"/></div>}
                            <div style={{fontSize:'10px',fontWeight:'700',textAlign:'center',padding:'5px 3px',background:'#f8fafb',color:'#1a2a2a'}}>{s.name}</div>
                          </div>
                        ))}
                        {/* Eğer o kategoride model yoksa ekle */}
                        {HAIR_STYLES.filter(s=>s.cat===cat).length===0 && (
                          <div style={{gridColumn:'1/-1',padding:'20px',textAlign:'center',color:'#94a3b8',fontSize:'13px'}}>Yakında eklenecek</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* STEP 4 - YAPAY ZEKA */}
              {hairStep===4 && (
                <div>
                  <div style={{background:'linear-gradient(135deg,#0f172a,#1e293b)',borderRadius:'20px',padding:'24px',textAlign:'center',marginBottom:'16px'}}>
                    {uploadedPhoto ? (
                      <div style={{position:'relative',display:'inline-block',marginBottom:'16px'}}>
                        <img src={uploadedPhoto} alt="" style={{width:'160px',height:'160px',borderRadius:'50%',objectFit:'cover',border:'4px solid #38b2ac',display:'block'}}/>
                        <div style={{position:'absolute',bottom:0,right:0,background:'linear-gradient(135deg,#38b2ac,#ed64a6)',borderRadius:'50%',width:'40px',height:'40px',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 4px 12px rgba(56,178,172,0.5)'}}>
                          <Ic n="sparkles" s={20} c="#fff"/>
                        </div>
                      </div>
                    ) : (
                      <div style={{width:'160px',height:'160px',borderRadius:'50%',background:'rgba(56,178,172,0.1)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px'}}>
                        <Ic n="user" s={60} c="#38b2ac"/>
                      </div>
                    )}
                    <div style={{color:'#5eead4',fontSize:'13px',fontWeight:'700',letterSpacing:'2px',marginBottom:'12px'}}>YAPAY ZEKA ANALİZ EDİYOR</div>
                    <div style={{background:'rgba(255,255,255,0.1)',borderRadius:'50px',height:'8px',overflow:'hidden',marginBottom:'12px'}}>
                      <div style={{height:'100%',background:'linear-gradient(90deg,#38b2ac,#ed64a6)',borderRadius:'50px',animation:'aiprog 2s ease-in-out infinite'}}/>
                    </div>
                    <div style={{color:'rgba(255,255,255,0.6)',fontSize:'12px',marginBottom:'16px'}}>
                      {selectedStyle?`"${HAIR_STYLES.find(s=>s.id===selectedStyle)?.name}" stili uygulanıyor...`:'Önce bir stil seçin'}
                    </div>
                    {selectedStyle && (
                      <div style={{background:'rgba(56,178,172,0.15)',border:'1px solid rgba(56,178,172,0.3)',borderRadius:'14px',padding:'14px'}}>
                        <div style={{color:'#5eead4',fontSize:'13px',fontWeight:'700',marginBottom:'4px'}}>Seçilen Stil: {HAIR_STYLES.find(s=>s.id===selectedStyle)?.name}</div>
                        <div style={{color:'rgba(255,255,255,0.6)',fontSize:'11px'}}>Gerçek uygulama için salon randevusu alın</div>
                      </div>
                    )}
                  </div>

                  {/* Renk değiştir */}
                  <div style={{background:'#fff',borderRadius:'16px',padding:'16px',border:'1.5px solid rgba(56,178,172,0.12)',marginBottom:'16px'}}>
                    <div style={{fontSize:'13px',fontWeight:'700',color:'#1a2a2a',marginBottom:'12px',display:'flex',alignItems:'center',gap:'6px'}}><Ic n="sparkles" s={14} c="#ed64a6"/>Saç Rengi Seç</div>
                    <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
                      {[
                        {name:'Siyah',color:'#1a1a1a'},{name:'Kahve',color:'#6b3f1a'},{name:'Sarı',color:'#f4d03f'},
                        {name:'Kızıl',color:'#c0392b'},{name:'Platin',color:'#f0ead6'},{name:'Gri',color:'#808080'},
                        {name:'Mavi',color:'#2980b9'},{name:'Mor',color:'#8e44ad'},
                      ].map((c,ci)=>(
                        <div key={ci} title={c.name} style={{width:'32px',height:'32px',borderRadius:'50%',background:c.color,cursor:'pointer',border:'3px solid transparent',transition:'all 0.2s',boxShadow:'0 2px 6px rgba(0,0,0,0.2)'}}
                          onClick={e=>{document.querySelectorAll('.color-sel').forEach(el=>el.style.borderColor='transparent');e.currentTarget.style.borderColor='#38b2ac';}}
                          className="color-sel"/>
                      ))}
                    </div>
                  </div>

                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px'}}>
                    <button onClick={()=>{
                      const link=document.createElement('a');
                      link.download='glamworld-saç-modeli.jpg';
                      link.href=uploadedPhoto||'';
                      link.click();
                    }} style={{padding:'12px',background:'rgba(56,178,172,0.08)',color:'#38b2ac',border:'1.5px solid rgba(56,178,172,0.2)',borderRadius:'14px',cursor:'pointer',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'13px',display:'flex',alignItems:'center',justifyContent:'center',gap:'6px'}}>
                      <Ic n="image" s={15}/>Galeriye Kaydet
                    </button>
                    <button onClick={()=>alert('Kuaförünüze gönderildi! Yakında randevu sistemi aktif olacak.')} style={{padding:'12px',background:'linear-gradient(135deg,#ed64a6,#d53f8c)',color:'#fff',border:'none',borderRadius:'14px',cursor:'pointer',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'13px',display:'flex',alignItems:'center',justifyContent:'center',gap:'6px'}}>
                      <Ic n="share" s={15}/>Kuaföre Gönder
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ŞERİTLER — doğal scroll ile kaybolur */}
      <div>
        <div className="strip1">
          <div className="s1t">
            {dbl.map((c,i) => (
              <span key={i} className="s1i" style={{color:['#5eead4','#c3e86d','#f9a8d4','#93c5fd'][i%4]}}>
                {c.name} <span className="s1c">{c.code}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="strip2">
          <div className="s2t">
            {dbl.map((c,i) => (
              <span key={i} className="s2i">
                <img className="s2f" src={`https://flagcdn.com/${c.code.toLowerCase()}.svg`} alt={c.name} onError={e=>{e.target.style.display='none'}}/>
                <span className="s2c" style={{color:['#5eead4','#c3e86d','#f9a8d4','#93c5fd'][i%4]}}>{c.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="lbar">
          <div className="lc" style={{position:'absolute',left:'50%',transform:'translateX(-50%)',whiteSpace:'nowrap'}}>
            {/* GLAM + WORLD shimmer */}
            <div style={{display:'flex',alignItems:'baseline',gap:'10px',justifyContent:'center'}}>
              <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                <div style={{width:'22px',height:'1px',background:'linear-gradient(90deg,transparent,#c9a227)'}}/>
                <svg width="6" height="6" viewBox="0 0 8 8"><polygon points="4,0 8,4 4,8 0,4" fill="#e4c55a"/></svg>
              </div>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'1px'}}>
                <span className="ltx-glam">GLAM</span>
                <span className="ltx-world">WORLD</span>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                <svg width="6" height="6" viewBox="0 0 8 8"><polygon points="4,0 8,4 4,8 0,4" fill="#e4c55a"/></svg>
                <div style={{width:'22px',height:'1px',background:'linear-gradient(90deg,#c9a227,transparent)'}}/>
              </div>
            </div>
            {/* Subtitle */}
            <div className="lsub" style={{marginTop:'2px'}}>
              {lang==='TR' && <><span style={{color:'#5eead4'}}>GÜZELLİK</span><span style={{color:'rgba(201,162,39,0.4)',margin:'0 6px'}}>•</span><span style={{color:'#f9a8d4'}}>BAKIM</span><span style={{color:'rgba(201,162,39,0.4)',margin:'0 6px'}}>•</span><span style={{color:'#c9a227'}}>PLATFORMU</span></>}
              {lang==='DE' && <><span style={{color:'#5eead4'}}>BEAUTY</span><span style={{color:'rgba(201,162,39,0.4)',margin:'0 6px'}}>•</span><span style={{color:'#f9a8d4'}}>PFLEGE</span><span style={{color:'rgba(201,162,39,0.4)',margin:'0 6px'}}>•</span><span style={{color:'#c9a227'}}>PLATTFORM</span></>}
              {lang==='EN' && <><span style={{color:'#5eead4'}}>BEAUTY</span><span style={{color:'rgba(201,162,39,0.4)',margin:'0 6px'}}>•</span><span style={{color:'#f9a8d4'}}>CARE</span><span style={{color:'rgba(201,162,39,0.4)',margin:'0 6px'}}>•</span><span style={{color:'#c9a227'}}>PLATFORM</span></>}
              {lang==='RU' && <><span style={{color:'#5eead4'}}>КРАСОТА</span><span style={{color:'rgba(201,162,39,0.4)',margin:'0 6px'}}>•</span><span style={{color:'#f9a8d4'}}>УХОД</span><span style={{color:'rgba(201,162,39,0.4)',margin:'0 6px'}}>•</span><span style={{color:'#c9a227'}}>ПЛАТФОРМА</span></>}
              {lang==='AR' && <><span style={{color:'#5eead4'}}>جمال</span><span style={{color:'rgba(201,162,39,0.4)',margin:'0 6px'}}>•</span><span style={{color:'#f9a8d4'}}>عناية</span><span style={{color:'rgba(201,162,39,0.4)',margin:'0 6px'}}>•</span><span style={{color:'#c9a227'}}>منصة</span></>}
            </div>
          </div>
        </div>
        <div className="nbar">
          <div className="nsr"><Ic n="search" s={16} c="#94a3b8"/><input placeholder={t.search}/></div>
          <div className="nr">
            <select className="lsel" value={lang} onChange={e => setLang(e.target.value)}>
              <option value="TR">🇹🇷 TR</option>
              <option value="DE">🇩🇪 DE</option>
              <option value="EN">🇬🇧 EN</option>
              <option value="RU">🇷🇺 RU</option>
              <option value="AR">🇸🇦 AR</option>
            </select>
            {loggedIn ? (
              <div style={{position:'relative'}}>
                <button onClick={()=>setShowProfileMenu(p=>!p)} style={{display:'flex',alignItems:'center',gap:'8px',padding:'6px 14px 6px 6px',borderRadius:'22px',border:'2px solid #38b2ac',background:'rgba(56,178,172,0.08)',color:'#38b2ac',cursor:'pointer',fontFamily:'DM Sans,sans-serif',fontWeight:'700',fontSize:'13px'}}>
                  <div style={{width:'30px',height:'30px',borderRadius:'50%',background:'linear-gradient(135deg,#38b2ac,#ed64a6)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:'13px',fontWeight:'800',flexShrink:0}}>
                    {userData?.name?userData.name[0].toUpperCase():'U'}
                  </div>
                  {userData?.name||'Profilim'}
                  <Ic n="chevR" s={12} c="#38b2ac"/>
                </button>
                {showProfileMenu && (
                  <div style={{position:'absolute',right:0,top:'110%',background:'#fff',borderRadius:'16px',boxShadow:'0 8px 30px rgba(0,0,0,0.15)',border:'1.5px solid rgba(56,178,172,0.15)',minWidth:'200px',zIndex:999,overflow:'hidden'}}>
                    <div style={{padding:'16px',background:'linear-gradient(135deg,rgba(56,178,172,0.08),rgba(237,100,166,0.05))',borderBottom:'1px solid rgba(56,178,172,0.1)'}}>
                      <div style={{width:'44px',height:'44px',borderRadius:'50%',background:'linear-gradient(135deg,#38b2ac,#ed64a6)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:'18px',fontWeight:'800',marginBottom:'8px'}}>
                        {userData?.name?userData.name[0].toUpperCase():'U'}
                      </div>
                      <div style={{fontWeight:'800',color:'#1a2a2a',fontSize:'14px'}}>{userData?.name}</div>
                      <div style={{fontSize:'11px',color:'#94a3b8',marginTop:'2px'}}>{userData?.type==='professional'?(lang==='TR'?'Profesyonel':lang==='DE'?'Profi':lang==='RU'?'Профессионал':'Professional'):(lang==='TR'?'Müşteri':lang==='DE'?'Kunde':lang==='RU'?'Клиент':'Customer')}</div>
                    </div>
                    {[
                      {icon:'user',    label:t.myProfile,    action:()=>{setActivePage('profile');setShowProfileMenu(false);}},
                      {icon:'calendar',label:t.appointments, action:()=>{setActivePage('appointments');setShowProfileMenu(false);}},
                      {icon:'message', label:t.messages,     action:()=>{setActivePage('messages');setShowProfileMenu(false);}},
                      {icon:'settings',label:t.settings,     action:()=>{setActivePage('settings');setShowProfileMenu(false);}},
                    ].map((item,i)=>(
                      <div key={i} onClick={item.action} style={{display:'flex',alignItems:'center',gap:'10px',padding:'12px 16px',cursor:'pointer',transition:'all 0.2s',color:'#475569',fontSize:'14px',fontWeight:'600'}}
                        onMouseOver={e=>e.currentTarget.style.background='rgba(56,178,172,0.06)'}
                        onMouseOut={e=>e.currentTarget.style.background='transparent'}>
                        <Ic n={item.icon} s={16} c="#94a3b8"/>{item.label}
                      </div>
                    ))}
                    <div style={{borderTop:'1px solid rgba(56,178,172,0.1)'}}>
                      <div onClick={()=>{setLoggedIn(false);setUserData(null);setShowProfileMenu(false);setAuthModal(true);setAuthTab('login');}} style={{display:'flex',alignItems:'center',gap:'10px',padding:'12px 16px',cursor:'pointer',color:'#ef4444',fontSize:'14px',fontWeight:'600'}}
                        onMouseOver={e=>e.currentTarget.style.background='rgba(239,68,68,0.05)'}
                        onMouseOut={e=>e.currentTarget.style.background='transparent'}>
                        <Ic n="logIn" s={16} c="#ef4444"/>Çıkış Yap / Hesap Değiştir
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button className="bin" onClick={()=>{setAuthModal(true);setAuthTab('login');}}><Ic n="logIn" s={14}/>{t.login}</button>
            )}
          </div>
        </div>
      </nav>

      <div className="layout">
        {/* MOBİL OVERLAY — sadece mobilde görünür */}
        {sideOpen && <div className="mob-overlay" onClick={()=>setSideOpen(false)}/>}
        
        {/* SIDEBAR */}
        <div className={`sidebar ${sideOpen?'':'closed'}`}>
          {sideGroups.map((g,gi) => (
            <div key={gi}>
              {g.sec && <div className="sbs">{g.sec}</div>}
              {g.items.map(([icon,label,color,page],ii) => (
                <div key={ii}
                  className={`sbi ${activePage===page?'act':''}`}
                  onClick={() => navigate(page)}
                  style={{color: activePage===page ? color : undefined, borderLeftColor: activePage===page ? color : 'transparent'}}
                >
                  <Ic n={icon} s={17} c={color}/>{label}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ANA İÇERİK */}
        <div className="main">
          {/* HERO — sadece ana sayfada */}
          {activePage === 'home' && (
            <div className="hero">
              <div className="hphs">
                {dblP.map((p,i) => <div key={i} className="hph" style={{backgroundImage:`url(${p})`}}/>)}
              </div>
              <div className="hovl"/>
              <div className="hcon">
                <span className="ht1">{t.hero1}</span>
                <span className="ht2">{t.hero2}</span>
                <div className="hsub">{t.heroSub}</div>
                <div className="hbts">
                  <button className="hbg" onClick={()=>{setHairTry(true);setHairStep(1);}} style={{background:'linear-gradient(135deg,#b8860b,#ffd700,#daa520)'}}><Ic n="scissors" s={16} c="#1a0a00"/>{lang==='TR'?'Saç & Sakalını Dene':lang==='DE'?'Haar & Bart testen':lang==='EN'?'Try Hair & Beard':lang==='RU'?'Примерить причёску':'جرب شعرك ولحيتك'}</button>
                  <button className="hbs" onClick={()=>{setWomenTry(true);setWomenStep(1);}} style={{background:'linear-gradient(135deg,rgba(237,100,166,0.9),rgba(147,51,234,0.9))',color:'#fff',border:'none'}}><Ic n="sparkles" s={16}/>{lang==='TR'?'Saç, Makyaj & Tırnağını Dene':lang==='DE'?'Haar, Make-up & Nägel testen':lang==='EN'?'Try Hair, Makeup & Nails':lang==='RU'?'Примерить образ':'جرب شعرك ومكياجك'}</button>
                  <button className="hbs"><Ic n="map" s={16}/>{t.btn2}</button>
                  <button className="hbs"><Ic n="briefcase" s={16}/>{t.btn3}</button>
                </div>
                {/* Hero istatistikleri */}
                <div className="hero-stats">
                  <div className="hstat"><Ic n="users" s={13} c="#5eead4"/><span><span className="hstat-n">50K+</span>{lang==='TR'?'Profesyonel':lang==='DE'?'Profis':lang==='RU'?'Профи':'Professionals'}</span></div>
                  <div className="hstat"><Ic n="pin" s={13} c="#f9a8d4"/><span><span className="hstat-n">190</span>{lang==='TR'?'Ülke':lang==='DE'?'Länder':lang==='RU'?'Стран':'Countries'}</span></div>
                  <div className="hstat"><Ic n="star" s={13} c="#fde68a" f="#fde68a"/><span><span className="hstat-n">4.9</span>{lang==='TR'?'Puan':lang==='DE'?'Sterne':lang==='RU'?'Оценка':'Rating'}</span></div>
                  <div className="hstat" style={{borderColor:'rgba(94,234,212,0.3)'}}><div className="logo-live-dot"/><span style={{color:'#5eead4',fontWeight:700}}>2,847 {lang==='TR'?'Çevrimiçi':lang==='DE'?'Online':lang==='RU'?'Онлайн':'Online'}</span></div>
                </div>
              </div>
            </div>
          )}

          <div className="mc">{renderContent()}</div>
        </div>

        {/* SAĞ PANEL */}
        <div className="rp">
          <div className="rptit"><Ic n="pin" s={13}/>{t.nearby}</div>
          {NEARBY.map((b,bi) => (
            <div key={bi} className="brow">
              <div className="bav" style={{backgroundImage:`url(${b.photo})`}}/>
              <div>
                <div className="bnm">{b.name}</div>
                <div className="bds"><Ic n="pin" s={10}/>{b.dist} {t.distance}</div>
              </div>
              <div className="bst"><Ic n="star" s={12} f="#f59e0b" c="#f59e0b"/>{b.rating}</div>
            </div>
          ))}

          <div className="rptit" style={{marginTop:'20px'}}><Ic n="briefcase" s={13}/>{t.latestJobs}</div>
          {JOBS.slice(0,3).map((job,ji) => (
            <div key={ji} className="ji">
              <div className="jitl" style={{color:job.color}}>{job.title}</div>
              <div className="jilc"><Ic n="pin" s={10}/>{job.loc}</div>
              <div className="jisl" style={{color:job.color,marginTop:'4px'}}>{job.sal}</div>
            </div>
          ))}

          <div className="rptit" style={{marginTop:'20px'}}><Ic n="trending" s={13}/>{t.trending}</div>
          {TRENDS.map((tag,ti) => (
            <div key={ti} className="ttag"><Ic n="trending" s={13}/>{tag}</div>
          ))}
        </div>
      </div>

      {/* MOBİL ALT MENÜ — cam balonlar */}
      <div className={`mobile-nav${navVisible?'':' nav-hidden'}`}>
        <div className="mobile-nav-inner">
          {[
            {icon:'home',    page:'home',         color:'#5eead4'},
            {icon:'search',  page:'explore',      color:'#c4b5fd'},
            {icon:'scissors',page:'barbers',      color:'#f9a8d4'},
            {icon:'calendar',page:'appointments', color:'#86efac'},
            {icon:'user',    page:'profile',      color:'#fde68a'},
          ].map((item,i)=>(
            <div key={i} className={`mobile-nav-item ${activePage===item.page?'act':''}`} onClick={()=>navigate(item.page)}>
              <Ic n={item.icon} s={22} c={activePage===item.page ? item.color : item.color+'70'}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
