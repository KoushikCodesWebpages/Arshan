export const theme = {
  // BRAND STYLES
  brand: {
    primary: "bg-primary",
    accent: "text-tertiary", 
    textOnPrimary: "text-white",
    hoverAccent: "hover:opacity-90",
  },

  // ELEMENT STYLES
  ui: {
    input: " border border-border-light text-sm px-4 py-2 rounded-sm transition focus:ring-2 focus:ring-primary/20 outline-none",
    card: "shadow-sm border border-border-light rounded-sm transition",
    modal: "bg-white rounded-sm shadow-2xl relative",
    overlay: "fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[9999]",
  },
  
  // CARD SYSTEM
  cards: {
    base: "bg-white border border-border-light shadow-sm transition rounded-sm overflow-hidden flex flex-col group",
    imageContainer: "relative h-[160px] overflow-hidden",
    image: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
    body: "p-5 flex flex-col flex-1",
    footer: "mt-auto pt-4 border-t border-border-light flex items-center justify-between",
  },

  // TYPOGRAPHY
  text: {
    brand: "text-primary font-bold",
    main: "text-text-main",
    muted: "text-secondary font-medium",
    danger: "text-danger",
  },

  // BUTTON STYLES
  buttons: {
    base: "inline-flex items-center justify-center px-5 py-2.5 text-md font-medium rounded-sm transition active:scale-[0.98] disabled:opacity-50",
    primary: "bg-primary text-white hover:bg-slate-800 transition shadow-md font-semibold",
    secondary: "bg-secondary/10 text-secondary hover:bg-secondary/20 transition font-medium",
    tertiary: "bg-tertiary text-white hover:brightness-110 transition font-bold shadow-sm",
  },
};