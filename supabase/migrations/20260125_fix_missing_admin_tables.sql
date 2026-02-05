
-- Consolidate missing tables: newsletters, student_projects, placements, testimonials
-- Wrapped in IF NOT EXISTS to prevent errors if they partly exist

-- 1. Newsletters
CREATE TABLE IF NOT EXISTS public.newsletters (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    edition TEXT NOT NULL,
    publication_date DATE NOT NULL,
    highlights TEXT,
    file_url TEXT NOT NULL,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- 2. Student Projects
CREATE TABLE IF NOT EXISTS public.student_projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    year INTEGER,
    team_members TEXT,
    image_url TEXT,
    project_url TEXT,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- 3. Placements
CREATE TABLE IF NOT EXISTS public.placements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_name TEXT NOT NULL,
    company_name TEXT NOT NULL,
    package TEXT,
    designation TEXT,
    image_url TEXT,
    year INTEGER,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- 4. Testimonials
CREATE TABLE IF NOT EXISTS public.testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    role TEXT,
    content TEXT NOT NULL,
    image_url TEXT,
    rating INTEGER DEFAULT 5,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS (idempotent operations)
ALTER TABLE public.newsletters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.placements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Triggers (using DO block for safety)
DO $$
BEGIN
    -- newsletters
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_newsletters_updated_at') THEN
        CREATE TRIGGER update_newsletters_updated_at BEFORE UPDATE ON public.newsletters FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
    END IF;
    -- student_projects
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_student_projects_updated_at') THEN
        CREATE TRIGGER update_student_projects_updated_at BEFORE UPDATE ON public.student_projects FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
    END IF;
    -- placements
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_placements_updated_at') THEN
        CREATE TRIGGER update_placements_updated_at BEFORE UPDATE ON public.placements FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
    END IF;
    -- testimonials
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_testimonials_updated_at') THEN
        CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON public.testimonials FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
    END IF;
END $$;

-- Policies
-- We drop existing policies to ensure clean state and avoid "relation already exists" errors, 
-- then recreate them. This is safer than complex IF NOT EXISTS checks for policies.

-- Newsletters Policies
DROP POLICY IF EXISTS "Published newsletters are viewable by everyone" ON public.newsletters;
DROP POLICY IF EXISTS "Admins can manage newsletters" ON public.newsletters;
DROP POLICY IF EXISTS "Faculty can manage newsletters" ON public.newsletters;

CREATE POLICY "Published newsletters are viewable by everyone" ON public.newsletters FOR SELECT USING (is_published = true);
CREATE POLICY "Admins can manage newsletters" ON public.newsletters FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Faculty can manage newsletters" ON public.newsletters FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'faculty'));

-- Student Projects Policies
DROP POLICY IF EXISTS "Published projects are viewable by everyone" ON public.student_projects;
DROP POLICY IF EXISTS "Admins can manage student_projects" ON public.student_projects;
DROP POLICY IF EXISTS "Faculty can manage student_projects" ON public.student_projects;

CREATE POLICY "Published projects are viewable by everyone" ON public.student_projects FOR SELECT USING (is_published = true);
CREATE POLICY "Admins can manage student_projects" ON public.student_projects FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Faculty can manage student_projects" ON public.student_projects FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'faculty'));

-- Placements Policies
DROP POLICY IF EXISTS "Published placements are viewable by everyone" ON public.placements;
DROP POLICY IF EXISTS "Admins can manage placements" ON public.placements;
DROP POLICY IF EXISTS "Faculty can manage placements" ON public.placements;

CREATE POLICY "Published placements are viewable by everyone" ON public.placements FOR SELECT USING (is_published = true);
CREATE POLICY "Admins can manage placements" ON public.placements FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Faculty can manage placements" ON public.placements FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'faculty'));

-- Testimonials Policies
DROP POLICY IF EXISTS "Published testimonials are viewable by everyone" ON public.testimonials;
DROP POLICY IF EXISTS "Admins can manage testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Faculty can manage testimonials" ON public.testimonials;

CREATE POLICY "Published testimonials are viewable by everyone" ON public.testimonials FOR SELECT USING (is_published = true);
CREATE POLICY "Admins can manage testimonials" ON public.testimonials FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Faculty can manage testimonials" ON public.testimonials FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'faculty'));
