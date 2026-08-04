// TODO: replace placeholders with real business contact details.
export const CONTACT = {
  phone: "+27 63 468 2958",
  phoneRaw: "+27634682958",
  whatsappRaw: "27634682958",
  whatsappDisplay: "+27 63 468 2958",
  email: "Ishal.crafted@gmail.com",
  instagramHref: "https://instagram.com/crafted.interiors_",
  instagramDisplay: "crafted.interiors_",
  address: "Lenasia",
  get telHref() {
    return `tel:${this.phoneRaw}`;
  },
  get whatsappHref() {
    return `https://wa.me/${this.whatsappRaw}`;
  },
  get mailHref() {
    return `mailto:${this.email}`;
  },
} as const;
