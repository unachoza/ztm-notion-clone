import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_API_KEY;

if(!supabaseUrl || !supabaseKey){
	throw new Error("Missing supabase url or key")
}

export const supabase = createClient(supabaseUrl, supabaseKey)
