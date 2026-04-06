import dayjs from "dayjs";

export const formatCurrency = (value: number, currency = "USD"): string => {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    return value.toFixed(2);
  }
};

export const formatSubscriptionDateTime = (value?: string): string => {
  if (!value) return "Not provided";
  const parsedDate = dayjs(value);
  return parsedDate.isValid() ? parsedDate.format("MM/DD/YYYY") : "Not provided";
};

export const formatStatusLabel = (value?: string): string => {
  if (!value) return "Unknown";
  return value.charAt(0).toUpperCase() + value.slice(1);
};

// Mezcla un color hex con blanco según `amount` (0 = color original, 1 = blanco puro).
// Útil para generar un fondo más claro a partir del color principal de una card.
// Ejemplo: mixWithWhite("#f5c542", 0.4) → "rgb(249, 220, 142)"
export const mixWithWhite = (hex: string, amount: number): string => {
  // Extraer cada canal RGB del hex y convertir de base 16 a decimal
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // Interpolar cada canal hacia 255 (blanco) según `amount`
  const mr = Math.round(r + (255 - r) * amount);
  const mg = Math.round(g + (255 - g) * amount);
  const mb = Math.round(b + (255 - b) * amount);

  return `rgb(${mr}, ${mg}, ${mb})`;
};