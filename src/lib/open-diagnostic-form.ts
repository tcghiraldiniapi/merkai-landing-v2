export const OPEN_DIAGNOSTIC_FORM_EVENT = "open-diagnostic-form";

export function openDiagnosticForm() {
  window.dispatchEvent(new CustomEvent(OPEN_DIAGNOSTIC_FORM_EVENT));
}
