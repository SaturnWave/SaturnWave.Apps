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
  androidPackage: "com.saturnwave.puzzle",
  privacy: {
    en: {
      title: "Privacy Policy",
      updated: "22 October 2026",
      intro:
        "This policy explains what the game Museum Puzzle, made by SaturnWave, does with your data. It applies to the current version of the game.",
      sections: [
        {
          heading: "In short",
          paragraphs: [
            "The game sends nothing off your phone. It has no accounts, no advertising network and no purchases, and Unity's analytics are turned off. The game does not ask for permission to use the internet.",
          ],
        },
        {
          heading: "What stays on your phone",
          paragraphs: [
            "The game keeps your progress, your wallet (coins, lives and boosters), your settings and the records of the level attempts you play only on your phone.",
            "An attempt record holds the level's number, the moves, the result and the boosters used. It helps balance the game and never leaves the phone.",
          ],
        },
        {
          heading: "Who you are",
          paragraphs: [
            "The records hold no name, no e-mail address and no information about your phone, only a random identifier the game gave this phone.",
          ],
        },
        {
          heading: "Backups",
          paragraphs: [
            "If your phone's backup is turned on, Android may include these files in its own backup in your Google account. That backup follows Google's terms; the game cannot reach it.",
          ],
        },
        {
          heading: "Deleting your data",
          paragraphs: [
            "You can delete the attempt records in the game: Settings > Privacy and data > Delete the records. Uninstalling the game deletes all of its data from the phone.",
          ],
        },
        {
          heading: "Children",
          paragraphs: ["The game collects no personal data from anyone, children included."],
        },
        {
          heading: "Changes",
          paragraphs: [
            "If advertising, analytics or purchases are added to the game, this policy will be updated before they arrive, and the game will ask for any consent they need. The date at the top shows the latest change.",
          ],
        },
      ],
    },
    tr: {
      title: "Gizlilik Politikası",
      updated: "22 Ekim 2026",
      intro:
        "Bu politika, SaturnWave'in geliştirdiği Müze Yapbozu oyununun verilerinizle ne yaptığını anlatır. Oyunun şu anki sürümü için geçerlidir.",
      sections: [
        {
          heading: "Kısaca",
          paragraphs: [
            "Oyun hiçbir şeyi telefonunuzdan dışarı göndermez. Hesap, reklam ağı ve satın alma yoktur; Unity'nin istatistikleri kapalıdır. Oyun internet izni istemez.",
          ],
        },
        {
          heading: "Telefonunuzda kalanlar",
          paragraphs: [
            "Oyun ilerlemenizi, cüzdanınızı (altın, can ve güçlendiriciler), ayarlarınızı ve oynadığınız bölüm denemelerinin kayıtlarını yalnızca telefonunuzda tutar.",
            "Bir deneme kaydı bölümün numarasını, hamleleri, sonucu ve kullanılan güçlendiricileri içerir. Oyunu dengelemeye yarar ve telefondan çıkmaz.",
          ],
        },
        {
          heading: "Kimliğiniz",
          paragraphs: [
            "Kayıtlarda adınız, e-posta adresiniz ya da telefonunuzun bilgisi yoktur; yalnızca oyunun bu telefona verdiği rastgele bir kimlik vardır.",
          ],
        },
        {
          heading: "Yedekleme",
          paragraphs: [
            "Telefonunuzun yedeklemesi açıksa Android bu dosyaları Google hesabınızdaki kendi yedeğine katabilir. Bu yedek Google'ın kurallarına tabidir; oyun ona erişemez.",
          ],
        },
        {
          heading: "Verilerinizi silmek",
          paragraphs: [
            "Deneme kayıtlarını oyunun içinden silebilirsiniz: Ayarlar > Gizlilik ve veri > Kayıtları sil. Oyunu kaldırmak bütün verilerini telefondan siler.",
          ],
        },
        {
          heading: "Çocuklar",
          paragraphs: ["Oyun, çocuklar dahil hiç kimseden kişisel veri toplamaz."],
        },
        {
          heading: "Değişiklikler",
          paragraphs: [
            "Oyuna reklam, analiz ya da satın alma eklenirse bu politika onlar gelmeden önce güncellenir ve oyun gereken izni sorar. En son değişikliğin tarihi sayfanın başında yazar.",
          ],
        },
      ],
    },
  },
};

export const games: readonly Game[] = [museumPuzzle];

export function gameBySlug(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug);
}
