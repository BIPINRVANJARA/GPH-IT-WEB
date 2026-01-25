-- Create timetables table
CREATE TABLE IF NOT EXISTS public.timetables (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    division TEXT,
    semester INTEGER,
    file_url TEXT NOT NULL,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create assignments table
CREATE TABLE IF NOT EXISTS public.assignments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    subject TEXT NOT NULL,
    semester INTEGER,
    file_url TEXT NOT NULL,
    due_date TIMESTAMP WITH TIME ZONE,
    is_published BOOLEAN DEFAULT true,
    file_type TEXT DEFAULT 'pdf',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create lab_manuals table
CREATE TABLE IF NOT EXISTS public.lab_manuals (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    subject TEXT NOT NULL,
    semester INTEGER,
    file_url TEXT NOT NULL,
    is_published BOOLEAN DEFAULT true,
    file_type TEXT DEFAULT 'pdf',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Add RLS policies (Security)
ALTER TABLE public.timetables ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lab_manuals ENABLE ROW LEVEL SECURITY;

-- Timetables policies
-- Using DO blocks to avoid "policy already exists" errors if re-running
DO $$
BEGIN
    DROP POLICY IF EXISTS "Public timetables are viewable by everyone" ON public.timetables;
    DROP POLICY IF EXISTS "Timetables are insertable by authenticated users only" ON public.timetables;
    DROP POLICY IF EXISTS "Timetables are updatable by authenticated users only" ON public.timetables;
    DROP POLICY IF EXISTS "Timetables are deletable by authenticated users only" ON public.timetables;
END $$;

CREATE POLICY "Public timetables are viewable by everyone" 
ON public.timetables FOR SELECT USING (true);

CREATE POLICY "Timetables are insertable by authenticated users only" 
ON public.timetables FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Timetables are updatable by authenticated users only" 
ON public.timetables FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Timetables are deletable by authenticated users only" 
ON public.timetables FOR DELETE TO authenticated USING (true);

-- Assignments policies
DO $$
BEGIN
    DROP POLICY IF EXISTS "Public assignments are viewable by everyone" ON public.assignments;
    DROP POLICY IF EXISTS "Assignments are insertable by authenticated users only" ON public.assignments;
    DROP POLICY IF EXISTS "Assignments are updatable by authenticated users only" ON public.assignments;
    DROP POLICY IF EXISTS "Assignments are deletable by authenticated users only" ON public.assignments;
END $$;

CREATE POLICY "Public assignments are viewable by everyone" 
ON public.assignments FOR SELECT USING (true);

CREATE POLICY "Assignments are insertable by authenticated users only" 
ON public.assignments FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Assignments are updatable by authenticated users only" 
ON public.assignments FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Assignments are deletable by authenticated users only" 
ON public.assignments FOR DELETE TO authenticated USING (true);

-- Lab Manuals policies
DO $$
BEGIN
    DROP POLICY IF EXISTS "Public lab_manuals are viewable by everyone" ON public.lab_manuals;
    DROP POLICY IF EXISTS "Lab_manuals are insertable by authenticated users only" ON public.lab_manuals;
    DROP POLICY IF EXISTS "Lab_manuals are updatable by authenticated users only" ON public.lab_manuals;
    DROP POLICY IF EXISTS "Lab_manuals are deletable by authenticated users only" ON public.lab_manuals;
END $$;

CREATE POLICY "Public lab_manuals are viewable by everyone" 
ON public.lab_manuals FOR SELECT USING (true);

CREATE POLICY "Lab_manuals are insertable by authenticated users only" 
ON public.lab_manuals FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Lab_manuals are updatable by authenticated users only" 
ON public.lab_manuals FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Lab_manuals are deletable by authenticated users only" 
ON public.lab_manuals FOR DELETE TO authenticated USING (true);
