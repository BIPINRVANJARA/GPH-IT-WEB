-- Create infrastructure_facilities table
CREATE TABLE IF NOT EXISTS public.infrastructure_facilities (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    count TEXT NOT NULL,
    icon TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.infrastructure_facilities ENABLE ROW LEVEL SECURITY;

-- Policies
DO $$
BEGIN
    DROP POLICY IF EXISTS "Public facilities are viewable by everyone" ON public.infrastructure_facilities;
    DROP POLICY IF EXISTS "Facilities are insertable by authenticated users only" ON public.infrastructure_facilities;
    DROP POLICY IF EXISTS "Facilities are updatable by authenticated users only" ON public.infrastructure_facilities;
    DROP POLICY IF EXISTS "Facilities are deletable by authenticated users only" ON public.infrastructure_facilities;
END $$;

CREATE POLICY "Public facilities are viewable by everyone" 
ON public.infrastructure_facilities FOR SELECT USING (true);

CREATE POLICY "Facilities are insertable by authenticated users only" 
ON public.infrastructure_facilities FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Facilities are updatable by authenticated users only" 
ON public.infrastructure_facilities FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Facilities are deletable by authenticated users only" 
ON public.infrastructure_facilities FOR DELETE TO authenticated USING (true);
