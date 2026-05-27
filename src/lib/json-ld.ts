export type JsonLdValue = Record<string, unknown>;

export function buildJsonLd<T extends JsonLdValue>(payload: T) {
  return JSON.stringify(payload).replace(/</g, "\\u003c");
}
