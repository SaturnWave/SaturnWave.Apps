import type { Language } from "./site";

export type PolicySection = { heading: string; paragraphs: readonly string[] };

export type PrivacyPolicy = {
  title: string;
  /** The day this text last changed, written out for readers (stores ask for a stable, dated page). */
  updated: string;
  intro: string;
  sections: readonly PolicySection[];
};

export type Game = {
  /** The game's address on the site: /games/<slug>/. Store listings link to it, so it never changes. */
  slug: string;
  name: Record<Language, string>;
  /** True while the game's name is not final; the pages then say so. */
  workingTitle: boolean;
  summary: Record<Language, string>;
  androidPackage: string;
  /** The store page, once the game is published. */
  storeUrl?: string;
  privacy: Record<Language, PrivacyPolicy>;
};

const museumPuzzle: Game = {
  slug: "museum-puzzle",
  name: { en: "Museum Puzzle", tr: "Müze Yapbozu" },
  workingTitle: true,
  summary: {
    en: "A match-3 puzzle game: a young painter restores a museum, one jigsaw piece of a public-domain painting at a time.",
    tr: "Bir eşleştirme bulmacası: genç bir ressam, kamu malı tabloların yapboz parçalarıyla bir müzeyi onarır.",
  },
  androidPackage: "com.saturnwave.museumpuzzle",
  privacy: {
    en: {
      title: "Privacy Policy",
      updated: "28 October 2026",
      intro:
        "This policy explains what the game Museum Puzzle, made by SaturnWave, does with your data. It applies to the current version of the game on Android and, when it is released there, on iPhone and iPad.",
      sections: [
        {
          heading: "In short",
          paragraphs: [
            "The game keeps your game on your phone and, while Cloud save is on, a copy of your progress and wallet in an account on the servers of Unity Gaming Services. Purchases are made through Google Play or the App Store and are checked by our server code at Unity. If you allow it, the game sends short statistics without any ID to Aptabase. The game never asks for your name, e-mail address or password, has no advertising network and sends no advertising ID.",
          ],
        },
        {
          heading: "Who is responsible",
          paragraphs: [
            "SaturnWave (Arcan Caglayan), Edmonton, Alberta, Canada, is responsible for the data described here. You can reach us at saturnwave.apps@gmail.com.",
          ],
        },
        {
          heading: "What stays on your phone",
          paragraphs: [
            "The game keeps your progress, your wallet (coins, lives and boosters, including coins you bought), your settings and the records of the level attempts you play on your phone.",
            "An attempt record holds the level's number, the moves, the result and the boosters used. It holds no name and nothing about your phone, only a random identifier the game gave this phone. Attempt records never leave the phone.",
          ],
        },
        {
          heading: "Cloud save and your player account",
          paragraphs: [
            "The game opens an invisible player account for you. It asks for no name, e-mail address or password; a random player ID identifies the account. Your progress, your wallet and the list of your purchases are kept in this account on the servers of Unity Gaming Services, which Unity Technologies runs on our behalf.",
            "Without internet the game plays just the same; your save syncs once you are back online. Your settings, your statistics choice and your attempt records are not part of the cloud save. You can turn the cloud save off with the Cloud save switch in Settings > Account and cloud save; the game then connects to no account and syncs nothing.",
          ],
        },
        {
          heading: "Google Play Games and Game Center",
          paragraphs: [
            "If Google Play Games (Game Center on iPhone and iPad) is on on your phone, your account can be linked to it, so that your save comes back on a new phone. For this, Google or Apple confirms your player ID in this game to Unity; your name, e-mail address and friends list never reach the game.",
          ],
        },
        {
          heading: "Purchases",
          paragraphs: [
            "Purchases are made by Google Play or the App Store; your card and payment details never reach the game or us.",
            "To tell that a purchase is real, the game sends the purchase record the store gave (the product, the order ID and the store's signed record) to our server code at Unity. The server asks Google Play or Apple about it and keeps the result in your account. Refunded purchases are marked in this list. To prevent fraud, an anonymous trace of your purchases is kept for 36 months, also after you delete your data.",
          ],
        },
        {
          heading: "What Unity receives",
          paragraphs: [
            "The game's purchase library is Unity's. On every purchase attempt, Unity receives the product, the price, the store's receipt, your phone's model and language, and on iPhone and iPad the app identifier Apple gives your device; Unity uses them for its financial records, its legal obligations and to prevent fraud.",
            "While Cloud save is on, the same library asks Unity for its settings when the game connects to Unity (with the ID Unity gives this installation and the game's version), and at every sign-in to your account it sends Unity a sign-in notice: your player code, the IDs Unity gives this installation, your phone's model, system version, language and region settings, storage size and the time it was switched on, the game's version, when it was installed and whether it came from a store. No advertising ID is sent. These cannot be turned off; while Cloud save is off, only what goes with purchase attempts is sent. Unity's own privacy policy applies to what Unity does with this data: https://unity.com/legal/privacy-policy",
          ],
        },
        {
          heading: "Game statistics (only if you allow them)",
          paragraphs: [
            "The game asks you once whether it may count how it is played. If you allow it, it sends Aptabase, an analytics service, short notes: the game opening, the level you play, whether you won and how many moves were left, the painting and room you completed, the shop opening and what you bought there (without payment details). Each note holds its time and a random number for that session only, with the game's version and your phone's operating system and language. Aptabase counts them in the European Union; from your connection's IP address it works out your approximate location (country and region), and it does not store your IP address.",
            "The notes hold no name, e-mail address, advertising ID or ID that recognises your phone, and they are never used for advertising. If you say no, the game works just the same. You can change your choice at any time with the Game statistics switch in Settings.",
          ],
        },
        {
          heading: "Backups, reinstalling and new phones",
          paragraphs: [
            "If your phone's backup is turned on, Android may add the game's files and your game account's session to its own backup in your Google account. That backup follows Google's terms.",
            "If you uninstall and reinstall the game or change phones, your progress and coins come back in only two ways: from your cloud save if your account is linked to Google Play Games or Game Center, otherwise from your phone's backup (if backup is on and a backup was made). Without either, the game starts over and the old save cannot be found. Refunds are asked for from Google Play or Apple.",
          ],
        },
        {
          heading: "Deleting your data",
          paragraphs: [
            "In the game: Settings > Account and cloud save > Delete my data deletes your account and your save in the cloud at once; you choose whether to delete the progress on the phone too. The attempt records can be deleted in Settings > Privacy and data. Uninstalling the game deletes all of its data from the phone.",
            "If you no longer have the game, write to saturnwave.apps@gmail.com with your player code (shown in Settings > Account and cloud save) and we will delete your account and cloud save. Only the anonymous purchase trace described above is kept, for 36 months.",
          ],
        },
        {
          heading: "Services we use",
          paragraphs: [
            "Unity Technologies (Unity Gaming Services: the player account, cloud save, settings and our server code; the purchase library), Google (Google Play, Google Play Games), Apple (App Store, Game Center) and Aptabase (game statistics, only with your permission). Unity and the stores may process data outside your country, including in the United States; Aptabase processes the statistics in the European Union. We do not sell your data and do not share it with anyone else.",
          ],
        },
        {
          heading: "Legal basis and your rights",
          paragraphs: [
            "Where the GDPR or a similar law applies: the player account, cloud save and purchase checks are needed to provide the game you asked for; the anonymous purchase trace serves fraud prevention and our legal obligations; game statistics are sent only with your consent, which you can withdraw at any time.",
            "You can ask us for a copy of your data, to correct or delete it, or object to its use, by writing to saturnwave.apps@gmail.com. You can also complain to your data protection authority.",
          ],
        },
        {
          heading: "Children",
          paragraphs: [
            "The game is not directed at children under 13 and we do not knowingly collect personal data from them. If you believe a child under 13 has given us data, write to us and we will delete it.",
          ],
        },
        {
          heading: "Changes",
          paragraphs: [
            "If advertising or other services are added to the game, this policy will be updated before they arrive, and the game will ask for any consent they need. The date at the top shows the latest change.",
          ],
        },
      ],
    },
    tr: {
      title: "Gizlilik Politikası",
      updated: "28 Ekim 2026",
      intro:
        "Bu politika, SaturnWave'in geliştirdiği Müze Yapbozu oyununun verilerinizle ne yaptığını anlatır. Oyunun Android'deki ve yayımlandığında iPhone ve iPad'deki şu anki sürümü için geçerlidir.",
      sections: [
        {
          heading: "Kısaca",
          paragraphs: [
            "Oyun oyununuzu telefonunuzda tutar; Bulut kaydı açıkken ilerlemenizin ve cüzdanınızın bir kopyasını da Unity Gaming Services'in sunucularındaki bir hesapta saklar. Satın almalar Google Play ya da App Store üzerinden yapılır ve Unity'deki sunucu kodumuzca doğrulanır. İzin verirseniz oyun Aptabase'e kimlik içermeyen kısa istatistikler gönderir. Oyun adınızı, e-posta adresinizi ya da bir parola sormaz; reklam ağı yoktur ve reklam kimliği gönderilmez.",
          ],
        },
        {
          heading: "Veri sorumlusu",
          paragraphs: [
            "Burada anlatılan verilerden SaturnWave (Arcan Caglayan), Edmonton, Alberta, Kanada sorumludur. Bize saturnwave.apps@gmail.com adresinden ulaşabilirsiniz.",
          ],
        },
        {
          heading: "Telefonunuzda kalanlar",
          paragraphs: [
            "Oyun ilerlemenizi, cüzdanınızı (satın aldığınız altın dahil altın, can ve güçlendiriciler), ayarlarınızı ve oynadığınız bölüm denemelerinin kayıtlarını telefonunuzda tutar.",
            "Bir deneme kaydı bölümün numarasını, hamleleri, sonucu ve kullanılan güçlendiricileri içerir. Kayıtta adınız ya da telefonunuzun bilgisi yoktur, yalnızca oyunun bu telefona verdiği rastgele bir kimlik vardır. Deneme kayıtları telefondan çıkmaz.",
          ],
        },
        {
          heading: "Bulut kaydı ve oyuncu hesabınız",
          paragraphs: [
            "Oyun sizin için görünmez bir oyuncu hesabı açar. Adınızı, e-postanızı ya da bir parola sormaz; hesabı rastgele bir oyuncu kimliği tanır. İlerlemeniz, cüzdanınız ve satın almalarınızın listesi bu hesapta, Unity Technologies'in bizim adımıza işlettiği Unity Gaming Services sunucularında saklanır.",
            "İnternet yokken oyun aynen oynanır; kayıt bağlantı gelince eşitlenir. Ayarlarınız, istatistik izniniz ve deneme kayıtlarınız bulut kaydına girmez. Bulut kaydını Ayarlar > Hesap ve bulut kaydı'ndaki Bulut kaydı anahtarıyla kapatabilirsiniz; o zaman oyun hesaba bağlanmaz ve hiçbir şey eşitlenmez.",
          ],
        },
        {
          heading: "Google Play Games ve Game Center",
          paragraphs: [
            "Telefonunuzda Google Play Games (iPhone ve iPad'de Game Center) açıksa hesabınız ona bağlanabilir; böylece kaydınız yeni bir telefonda geri gelir. Bunun için Google ya da Apple, bu oyundaki oyuncu kimliğinizi Unity'ye doğrular; adınız, e-postanız ve arkadaş listeniz oyuna gelmez.",
          ],
        },
        {
          heading: "Satın almalar",
          paragraphs: [
            "Satın almaları Google Play ya da App Store yapar; kart ve ödeme bilgileriniz oyuna da bize de gelmez.",
            "Bir satın almanın gerçek olduğunu anlamak için oyun, mağazanın verdiği satın alma kaydını (ürün, sipariş kimliği, mağazanın imzalı kaydı) Unity'deki sunucu kodumuza gönderir. Sunucu bunu Google Play'e ya da Apple'a sorar ve sonucu hesabınızda saklar. İade edilen satın almalar bu listede işaretlenir. Sahtekârlığı önlemek için satın almalarınızın kimliksiz bir izi, verilerinizi sildikten sonra da 36 ay saklanır.",
          ],
        },
        {
          heading: "Unity'ye gidenler",
          paragraphs: [
            "Oyunun satın alma altyapısı Unity'nindir. Her satın alma denemesinde Unity'ye ürün, fiyat, mağazanın fişi, telefonunuzun modeli ve dili, iPhone ve iPad'de de Apple'ın cihaza verdiği uygulama kimliği gider; Unity bunları kendi mali kayıtları, yasal yükümlülükleri ve sahtekârlığı önlemek için kullanır.",
            "Bulut kaydı açıkken aynı altyapı, oyun Unity'ye bağlandığında Unity'den kendi ayarlarını ister (Unity'nin bu kuruluma verdiği kimlikle ve oyunun sürümüyle) ve hesabınıza her girişte Unity'ye bir giriş bildirimi gönderir: oyuncu kodunuz, Unity'nin bu kuruluma verdiği kimlikler, telefonunuzun modeli, işletim sisteminin sürümü, dili ve bölge ayarları, depolama alanının büyüklüğü ve açıldığı an, oyunun sürümü, kurulduğu an ve bir mağazadan kurulup kurulmadığı. Reklam kimliği gitmez. Bu gönderimler kapatılamaz; Bulut kaydı kapalıyken yalnız satın alma denemelerindekiler gider. Unity'nin bu verilerle yaptıklarına Unity'nin kendi gizlilik politikası uygulanır: https://unity.com/legal/privacy-policy",
          ],
        },
        {
          heading: "Oyun istatistikleri (yalnız izin verirseniz)",
          paragraphs: [
            "Oyun, nasıl oynandığını sayıp sayamayacağını size bir kez sorar. İzin verirseniz Aptabase adlı ölçüm hizmetine kısa notlar gönderir: oyunun açılması, oynadığınız bölüm, kazanıp kazanmadığınız ve kaç hamle kaldığı, tamamladığınız tablo ve oda, mağazanın açılması ve mağazada ne aldığınız (ödeme bilgisi olmadan). Her notta zamanı ve yalnızca o oturuma ait rastgele bir numara olur; oyunun sürümü, telefonunuzun işletim sistemi ve dili de gider. Aptabase notları Avrupa Birliği'nde sayar; bağlantınızın IP adresinden yaklaşık konumunuzu (ülke ve bölge) çıkarır ve IP adresini saklamaz.",
            "Notlarda adınız, e-postanız, reklam kimliğiniz ya da telefonunuzu tanıyan bir kimlik yoktur; notlar reklam için kullanılmaz. İzin vermezseniz oyun aynen çalışır. Kararınızı Ayarlar'daki Oyun istatistikleri anahtarıyla istediğiniz zaman değiştirebilirsiniz.",
          ],
        },
        {
          heading: "Yedekleme, yeniden kurulum ve yeni telefon",
          paragraphs: [
            "Telefonunuzun yedeklemesi açıksa Android oyunun dosyalarını ve oyun hesabınızın oturumunu Google hesabınızdaki kendi yedeğine katabilir. Bu yedek Google'ın kurallarına tabidir.",
            "Oyunu silip yeniden kurarsanız ya da telefon değiştirirseniz ilerlemeniz ve altınınız yalnız iki yoldan geri gelir: hesabınız Google Play Games'e ya da Game Center'a bağlıysa bulut kaydından, değilse telefonunuzun yedeğinden (yedekleme açıksa ve yedek alınmışsa). İkisi de yoksa oyun baştan başlar ve eski kayıt bulunamaz. Satın alma iadesini Google Play'den ya da Apple'dan istersiniz.",
          ],
        },
        {
          heading: "Verilerinizi silmek",
          paragraphs: [
            "Oyunun içinden: Ayarlar > Hesap ve bulut kaydı > Verilerimi sil, buluttaki hesabınızı ve kaydınızı hemen siler; telefondaki ilerlemeyi de silip silmeyeceğinizi siz seçersiniz. Deneme kayıtları Ayarlar > Gizlilik ve veri'den silinebilir. Oyunu kaldırmak bütün verilerini telefondan siler.",
            "Oyun artık telefonunuzda değilse saturnwave.apps@gmail.com adresine oyuncu kodunuzla (Ayarlar > Hesap ve bulut kaydı'nda yazar) yazın; hesabınızı ve bulut kaydınızı sileriz. Yalnız yukarıda anlatılan kimliksiz satın alma izi 36 ay saklanır.",
          ],
        },
        {
          heading: "Kullandığımız hizmetler",
          paragraphs: [
            "Unity Technologies (Unity Gaming Services: oyuncu hesabı, bulut kaydı, ayarlar ve sunucu kodumuz; satın alma altyapısı), Google (Google Play, Google Play Games), Apple (App Store, Game Center) ve Aptabase (oyun istatistikleri, yalnız izninizle). Unity ve mağazalar verileri ülkenizin dışında, Amerika Birleşik Devletleri dahil, işleyebilir; Aptabase istatistikleri Avrupa Birliği'nde işler. Verilerinizi satmayız ve başka kimseyle paylaşmayız.",
          ],
        },
        {
          heading: "Hukuki dayanak ve haklarınız",
          paragraphs: [
            "GDPR, KVKK ya da benzeri bir yasanın uygulandığı yerlerde: oyuncu hesabı, bulut kaydı ve satın alma doğrulaması, istediğiniz oyunu sunabilmek için gereklidir; kimliksiz satın alma izi sahtekârlığı önlemeye ve yasal yükümlülüklerimize hizmet eder; oyun istatistikleri yalnızca açık rızanızla gönderilir ve rızanızı istediğiniz zaman geri alabilirsiniz.",
            "Verilerinizin bir kopyasını isteme, düzeltilmesini ya da silinmesini isteme ve kullanımına itiraz etme haklarınızı saturnwave.apps@gmail.com adresine yazarak kullanabilirsiniz. Ayrıca ülkenizin veri koruma kurumuna şikâyette bulunabilirsiniz.",
          ],
        },
        {
          heading: "Çocuklar",
          paragraphs: [
            "Oyun 13 yaşından küçük çocuklara yönelik değildir ve onlardan bilerek kişisel veri toplamayız. 13 yaşından küçük bir çocuğun bize veri verdiğini düşünüyorsanız bize yazın, sileriz.",
          ],
        },
        {
          heading: "Değişiklikler",
          paragraphs: [
            "Oyuna reklam ya da başka hizmetler eklenirse bu politika onlar gelmeden önce güncellenir ve oyun gereken izni sorar. En son değişikliğin tarihi sayfanın başında yazar.",
          ],
        },
      ],
    },
  },
};

const pastelRows: Game = {
  slug: "pastel-rows",
  name: { en: "Pastel Rows", tr: "Pastel Rows" },
  workingTitle: false,
  summary: {
    en: "A calm block puzzle: place pieces on a square grid and clear full rows and columns, in Classic, Adventure, a Daily puzzle and a weekly League.",
    tr: "Sakin bir blok bulmacası: parçaları kare bir ızgaraya yerleştirip dolu satır ve sütunları temizlersin; Klasik, Macera, Günlük bulmaca ve haftalık Lig.",
  },
  androidPackage: "com.saturnwave.pastelrows",
  privacy: {
    en: {
      title: "Privacy Policy",
      updated: "16 November 2026",
      intro:
        "This policy explains what the game Pastel Rows, made by SaturnWave, does with your data. It applies to the current version of the game on Android.",
      sections: [
        {
          heading: "In short",
          paragraphs: [
            "Classic and Adventure play on your phone without an account. The first time you open the Daily puzzle or the League, the game opens an anonymous player account on the servers of Unity Gaming Services, so that scores can be checked and ranked fairly. The game never asks for your name, e-mail address or password. This version has no purchases, no advertising and no analytics, and sends no advertising ID.",
          ],
        },
        {
          heading: "Who is responsible",
          paragraphs: [
            "SaturnWave (Arcan Caglayan), Edmonton, Alberta, Canada, is responsible for the data described here. You can reach us at saturnwave.apps@gmail.com.",
          ],
        },
        {
          heading: "What stays on your phone",
          paragraphs: [
            "The game keeps your progress, your records, your wallet (gold, lives and boosters), your settings and your unfinished Daily and League attempts on your phone.",
            "The reminders you can turn on (lives refilled, a new Daily puzzle) are planned on the phone itself; nothing is sent for them.",
          ],
        },
        {
          heading: "Your player account",
          paragraphs: [
            "The account has a random player ID and a display name the game makes from two words and a number, for example \"Amber Fox 4821\". You cannot type a name, and no text you write is sent.",
            "The account holds your gold balance, the rewards you claimed and your Daily, Tournament and League attempts: the moves you made and your score. Our server code at Unity replays every attempt to check its score, so a changed game cannot send a false one. The account is kept until you delete it.",
          ],
        },
        {
          heading: "What other players see",
          paragraphs: [
            "Your display name and your scores appear on the Daily and Tournament boards and in your League group. League groups may include computer players; they are always marked as bots. Boards are deleted after 35 days and League groups after 5 weeks.",
          ],
        },
        {
          heading: "What Unity receives",
          paragraphs: [
            "Unity Technologies runs the player account, its storage, our server code and the boards for us (Unity Gaming Services). When the game connects, Unity's libraries also send Unity the technical data these services need, such as an ID Unity gives this installation, your phone's model and system version, the game's version and your connection's IP address. No advertising ID is sent. Unity keeps our server code's logs for 7 days; they never hold your player ID. Unity's own privacy policy applies to what Unity does with this data: https://unity.com/legal/privacy-policy",
          ],
        },
        {
          heading: "Backups, reinstalling and new phones",
          paragraphs: [
            "The game turns Android's automatic backup off. If you move to a new phone with Android's phone-to-phone transfer, the game's files and its sign-in may come along, and your account with them.",
            "If you uninstall the game or change phones without such a transfer, the game starts over with a new account. The old account stays on the server until you ask us to delete it.",
          ],
        },
        {
          heading: "Deleting your data",
          paragraphs: [
            "In the game: Settings > Account > Delete account deletes your account and its gold, rewards, attempts and scores from the server; you choose whether the save on the phone is deleted too. Uninstalling the game deletes all of its data from the phone.",
            "If you no longer have the game, write to saturnwave.apps@gmail.com with your player code (shown in Settings > Account) and we will delete your account within a few days.",
            "After a deletion, scores already counted in a League group stay there without your name or ID until the group is deleted (at most 5 weeks), the anti-cheat checks keep an anonymous tag for 3 days, and the server logs are gone within 7 days. We keep an e-mail request with its player code for 30 days as the record of our reply. Nothing else stays.",
          ],
        },
        {
          heading: "Services we use",
          paragraphs: [
            "Unity Technologies (Unity Gaming Services: the player account, its storage, our server code and the boards) and Google (Google Play, which installs and updates the game). Unity may process data outside your country, including in the United States. We do not sell your data and do not share it with anyone else.",
          ],
        },
        {
          heading: "Legal basis and your rights",
          paragraphs: [
            "Where the GDPR or a similar law applies: the player account and its data are needed to provide the Daily puzzle, the Tournament and the League you open; the anti-cheat checks serve fair play for every player.",
            "You can ask us for a copy of your data, to correct or delete it, or object to its use, by writing to saturnwave.apps@gmail.com. You can also complain to your data protection authority.",
          ],
        },
        {
          heading: "Children",
          paragraphs: [
            "The game is not directed at children under 13 and we do not knowingly collect personal data from them. If you believe a child under 13 has given us data, write to us and we will delete it.",
          ],
        },
        {
          heading: "Changes",
          paragraphs: [
            "If purchases, advertising or other services are added to the game, this policy will be updated before they arrive, and the game will ask for any consent they need. The date at the top shows the latest change.",
          ],
        },
      ],
    },
    tr: {
      title: "Gizlilik Politikası",
      updated: "16 Kasım 2026",
      intro:
        "Bu politika, SaturnWave'in geliştirdiği Pastel Rows oyununun verilerinizle ne yaptığını anlatır. Oyunun Android'deki şu anki sürümü için geçerlidir.",
      sections: [
        {
          heading: "Kısaca",
          paragraphs: [
            "Klasik ve Macera, telefonunuzda hesapsız oynanır. Günlük bulmacayı ya da Lig'i ilk açtığınızda oyun, skorlar doğrulanıp adil sıralanabilsin diye Unity Gaming Services'in sunucularında anonim bir oyuncu hesabı açar. Oyun adınızı, e-posta adresinizi ya da bir parola sormaz. Bu sürümde satın alma, reklam ve ölçüm yoktur; reklam kimliği gönderilmez.",
          ],
        },
        {
          heading: "Veri sorumlusu",
          paragraphs: [
            "Burada anlatılan verilerden SaturnWave (Arcan Caglayan), Edmonton, Alberta, Kanada sorumludur. Bize saturnwave.apps@gmail.com adresinden ulaşabilirsiniz.",
          ],
        },
        {
          heading: "Telefonunuzda kalanlar",
          paragraphs: [
            "Oyun ilerlemenizi, rekorlarınızı, cüzdanınızı (altın, can ve güçlendiriciler), ayarlarınızı ve bitmemiş Günlük ve Lig denemelerinizi telefonunuzda tutar.",
            "Açabileceğiniz hatırlatmalar (canların doldu, yeni Günlük bulmaca) telefonun kendisinde planlanır; bunlar için hiçbir şey gönderilmez.",
          ],
        },
        {
          heading: "Oyuncu hesabınız",
          paragraphs: [
            "Hesabın rastgele bir oyuncu kimliği ve oyunun iki kelime ile bir sayıdan ürettiği bir görünen adı vardır, örneğin \"Kehribar Tilki 4821\". Ad yazamazsınız; yazdığınız hiçbir metin gönderilmez.",
            "Hesap altın bakiyenizi, aldığınız ödülleri ve Günlük, Turnuva ve Lig denemelerinizi (yaptığınız hamleler ve skorunuz) tutar. Unity'deki sunucu kodumuz her denemeyi baştan oynatıp skorunu doğrular; böylece değiştirilmiş bir oyun yanlış skor gönderemez. Hesap, siz silene kadar saklanır.",
          ],
        },
        {
          heading: "Öteki oyuncuların gördükleri",
          paragraphs: [
            "Görünen adınız ve skorlarınız Günlük ve Turnuva tablolarında ve Lig grubunuzda görünür. Lig gruplarında bilgisayar oyuncuları olabilir; bunlar her zaman bot olarak işaretlenir. Tablolar 35 gün, Lig grupları 5 hafta sonra silinir.",
          ],
        },
        {
          heading: "Unity'ye gidenler",
          paragraphs: [
            "Oyuncu hesabını, saklama alanını, sunucu kodumuzu ve tabloları bizim adımıza Unity Technologies işletir (Unity Gaming Services). Oyun bağlandığında Unity'nin kütüphaneleri bu hizmetlerin gerektirdiği teknik verileri de Unity'ye gönderir: Unity'nin bu kuruluma verdiği bir kimlik, telefonunuzun modeli ve sistem sürümü, oyunun sürümü ve bağlantınızın IP adresi gibi. Reklam kimliği gitmez. Unity sunucu kodumuzun kayıtlarını 7 gün tutar; bu kayıtlarda oyuncu kimliğiniz yoktur. Unity'nin bu verilerle yaptıklarına Unity'nin kendi gizlilik politikası uygulanır: https://unity.com/legal/privacy-policy",
          ],
        },
        {
          heading: "Yedekleme, yeniden kurulum ve yeni telefon",
          paragraphs: [
            "Oyun Android'in otomatik yedeklemesini kapatır. Yeni telefona Android'in telefondan telefona aktarımıyla geçerseniz oyunun dosyaları ve oturumu, onlarla birlikte de hesabınız gelebilir.",
            "Oyunu silerseniz ya da böyle bir aktarım olmadan telefon değiştirirseniz oyun yeni bir hesapla baştan başlar. Eski hesap, silmemizi isteyene kadar sunucuda kalır.",
          ],
        },
        {
          heading: "Verilerinizi silmek",
          paragraphs: [
            "Oyunun içinden: Ayarlar > Hesap > Hesabı sil, hesabınızı ve onunla birlikte altınınızı, ödüllerinizi, denemelerinizi ve skorlarınızı sunucudan siler; telefondaki kaydın da silinip silinmeyeceğini siz seçersiniz. Oyunu kaldırmak bütün verilerini telefondan siler.",
            "Oyun artık telefonunuzda değilse saturnwave.apps@gmail.com adresine oyuncu kodunuzla (Ayarlar > Hesap'ta yazar) yazın; hesabınızı birkaç gün içinde sileriz.",
            "Silmeden sonra bir Lig grubunda sayılmış skorlar, grup silinene kadar (en çok 5 hafta) adınız ve kimliğiniz olmadan orada kalır; hile denetimi 3 gün boyunca kimliksiz bir işaret tutar; sunucu kayıtları 7 gün içinde silinir. E-postayla gelen isteği, oyuncu koduyla birlikte, yanıtımızın kaydı olarak 30 gün saklarız. Başka hiçbir şey kalmaz.",
          ],
        },
        {
          heading: "Kullandığımız hizmetler",
          paragraphs: [
            "Unity Technologies (Unity Gaming Services: oyuncu hesabı, saklama alanı, sunucu kodumuz ve tablolar) ve Google (oyunu kuran ve güncelleyen Google Play). Unity verileri ülkenizin dışında, Amerika Birleşik Devletleri dahil, işleyebilir. Verilerinizi satmayız ve başka kimseyle paylaşmayız.",
          ],
        },
        {
          heading: "Hukuki dayanak ve haklarınız",
          paragraphs: [
            "GDPR ya da benzeri bir yasanın uygulandığı yerlerde: oyuncu hesabı ve verileri, açtığınız Günlük bulmacayı, Turnuvayı ve Lig'i sunabilmek için gereklidir; hile denetimi bütün oyuncular için adil oyuna hizmet eder.",
            "Verilerinizin bir kopyasını isteme, düzeltilmesini ya da silinmesini isteme ve kullanımına itiraz etme haklarınızı saturnwave.apps@gmail.com adresine yazarak kullanabilirsiniz. Ayrıca ülkenizin veri koruma kurumuna şikâyette bulunabilirsiniz.",
          ],
        },
        {
          heading: "Çocuklar",
          paragraphs: [
            "Oyun 13 yaşından küçük çocuklara yönelik değildir ve onlardan bilerek kişisel veri toplamayız. 13 yaşından küçük bir çocuğun bize veri verdiğini düşünüyorsanız bize yazın, sileriz.",
          ],
        },
        {
          heading: "Değişiklikler",
          paragraphs: [
            "Oyuna satın alma, reklam ya da başka hizmetler eklenirse bu politika onlar gelmeden önce güncellenir ve oyun gereken izni sorar. En son değişikliğin tarihi sayfanın başında yazar.",
          ],
        },
      ],
    },
  },
};

export const games: readonly Game[] = [museumPuzzle, pastelRows];

export function gameBySlug(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug);
}
