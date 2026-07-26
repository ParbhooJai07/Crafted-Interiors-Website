// TODO: replace placeholders with real business contact details.
export const CONTACT = {
  phone: "+27 21 555 0124",
  phoneRaw: "+27215550124",
  whatsappRaw: "27724448921",
  whatsappDisplay: "+27 72 444 8921",
  email: "studio@craftedinteriors.co.za",
  address: "Unit 42, The Workshop District, Woodstock, Cape Town, 7925",
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
