-- Create student_projects table
CREATE TABLE public.student_projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    year INTEGER,
    team_members TEXT, -- JSON or comma separated string
    image_url TEXT,
    project_url TEXT,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create placements table
CREATE TABLE public.placements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_name TEXT NOT NULL,
    company_name TEXT NOT NULL,
    package TEXT, -- e.g. "5 LPA"
    designation TEXT,
    image_url TEXT,
    year INTEGER,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create testimonials table
CREATE TABLE public.testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    role TEXT, -- e.g. "Alumni, Batch 2023"
    content TEXT NOT NULL,
    image_url TEXT,
    rating INTEGER DEFAULT 5,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.student_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.placements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Updates triggers
CREATE TRIGGER update_student_projects_updated_at BEFORE UPDATE ON public.student_projects FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_placements_updated_at BEFORE UPDATE ON public.placements FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON public.testimonials FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Policies
-- Public Read
CREATE POLICY "Published projects are viewable by everyone" ON public.student_projects FOR SELECT USING (is_published = true);
CREATE POLICY "Published placements are viewable by everyone" ON public.placements FOR SELECT USING (is_published = true);
CREATE POLICY "Published testimonials are viewable by everyone" ON public.testimonials FOR SELECT USING (is_published = true);

-- Admin Write
CREATE POLICY "Admins can manage student_projects" ON public.student_projects FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage placements" ON public.placements FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage testimonials" ON public.testimonials FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Faculty Write (Optional, matching existing pattern)
CREATE POLICY "Faculty can manage student_projects" ON public.student_projects FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'faculty'));
CREATE POLICY "Faculty can manage placements" ON public.placements FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'faculty'));
CREATE POLICY "Faculty can manage testimonials" ON public.testimonials FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'faculty'));
