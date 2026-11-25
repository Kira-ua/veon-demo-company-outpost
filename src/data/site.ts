// Facts from veon/client.json only (company.contacts, geography[1], C-001…C-011). Nothing invented.
export const NOTE = "Розділ у розробці";

export const phones = {
  free: { label: "Безкоштовно по Україні", display: "0-800-401-911", href: "tel:0800401911" },
  duty: { label: "Черговий", display: "+38 (067) 670-51-22", href: "tel:+380676705122" },
  office: { label: "Офіс", display: "+38 (032) 260-1-911", href: "tel:+380322601911" },
  director: { label: "Директор", display: "+38 (032) 260-2-800", href: "tel:+380322602800" },
  hr: { label: "Кадри", display: "(068) 837-06-68", href: "tel:+380688370668" },
} as const;

export const email = { display: "company-outpost@ukr.net", href: "mailto:company-outpost@ukr.net" };

export const address = {
  display: "вул. Коцюбинського, 6, м. Львів, 79005",
  map: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("вул. Коцюбинського, 6, Львів, 79005"),
};

export const socials = [
  { name: "Facebook", handle: "company.outpost", href: "https://www.facebook.com/company.outpost", icon: "facebook" },
  { name: "Instagram", handle: "outpost_lviv", href: "https://www.instagram.com/outpost_lviv/", icon: "instagram" },
  { name: "YouTube", handle: "outpostcompany5572", href: "https://www.youtube.com/@outpostcompany5572", icon: "youtube" },
] as const;

export const legalName = "Підприємство Охоронно-юридичної Компанії «Аутпост»";

export const nav = [
  { href: "#services", label: "Послуги" },
  { href: "#pult", label: "Ціни" },
  { href: "#coverage", label: "Покриття" },
  { href: "#proof", label: "Чому ми" },
  { href: "#clients", label: "Клієнтам" },
  { href: "#contacts", label: "Контакти" },
] as const;

// Rapid response groups, geography[1]. Coordinates: public city centres (WGS84), used only to place points on the scheme.
export const cities = [
  { name: "Львів", lat: 49.8397, lon: 24.0297, base: true },
  { name: "Мостиська", lat: 49.795, lon: 23.15 },
  { name: "Дрогобич", lat: 49.35, lon: 23.505 },
  { name: "Борислав", lat: 49.2867, lon: 23.4317 },
  { name: "Трускавець", lat: 49.2786, lon: 23.5058 },
  { name: "Стрий", lat: 49.26, lon: 23.85 },
  { name: "Червоноград", lat: 50.3867, lon: 24.2289 },
] as const;

export const serviceGroups = [
  {
    id: "obiekt",
    title: "Об’єкт",
    items: [
      { name: "Пультова охорона", text: "Сигналізація на власний пульт централізованої охорони з виїздом групи реагування." },
      { name: "Фізична охорона", text: "Охоронники на об’єкті; вартість залежить від складності об’єкта й кількості постів." },
      { name: "Кінологічна служба", text: "Охорона із залученням службових собак." },
      { name: "Проектування та монтаж систем", text: "Сигналізація, відеоспостереження, контроль доступу." },
    ],
  },
  {
    id: "liudy",
    title: "Люди й події",
    items: [
      { name: "VIP-охорона", text: "Особиста охорона." },
      { name: "Охорона масових заходів", text: "Серед заходів, які ми охороняли, — ЄВРО 2012 з футболу." },
      { name: "Екстрена допомога", text: "Виїзд групи швидкого реагування на конфлікти, ДТП, критичні ситуації." },
    ],
  },
  {
    id: "vantazhi",
    title: "Вантажі й цінності",
    items: [
      { name: "Охорона вантажів", text: "Охорона вантажів під час перевезення." },
      { name: "Супровід цінностей", text: "Супровід та охорона матеріальних цінностей." },
      { name: "Моніторинг транспорту", text: "Моніторинг вантажного й пасажирського транспорту." },
    ],
  },
] as const;

export const prices = [
  { label: "Пультова охорона", value: "від 550 грн/міс" },
  { label: "Тривожна кнопка", value: "600–1000 грн/міс" },
  { label: "Обслуговування сигналізації", value: "400–800 грн/міс" },
  { label: "Пожежний моніторинг", value: "безкоштовно", note: "у складі охоронного обладнання" },
  { label: "Монтаж обладнання", value: "після обстеження", note: "ціна договірна" },
] as const;
