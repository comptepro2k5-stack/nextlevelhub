const SUPABASE_URL = "https://cztzuoyuusyyngogspvu.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6dHp1b3l1dXN5eW5nb2dzcHZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNzk1OTYsImV4cCI6MjA5NDg1NTU5Nn0.Hx__HK5BJJAfjHv7BpOIdgatXaTgt-nzeSHoUH3PL6c";

export const AUTH_REDIRECT_URL = `${window.location.origin}/auth-callback.html`;
export const DASHBOARD_URL = `${window.location.origin}/dashboard.html`;
export const LOGIN_URL = `${window.location.origin}/login.html`;

export function isSupabaseConfigured() {
  return (
    SUPABASE_URL.startsWith("https://") &&
    SUPABASE_URL.includes(".supabase.co") &&
    !SUPABASE_URL.includes("YOUR_PROJECT_REF") &&
    SUPABASE_ANON_KEY.length > 40 &&
    SUPABASE_ANON_KEY !== "YOUR_SUPABASE_ANON_KEY"
  );
}

export function createSupabaseClient() {
  if (!window.supabase) {
    throw new Error("La librairie Supabase n'est pas chargee.");
  }

  return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      detectSessionInUrl: true,
      flowType: "pkce",
      persistSession: true,
      autoRefreshToken: true
    }
  });
}
