-- Create newsletters table
CREATE TABLE public.newsletters (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    edition TEXT NOT NULL, -- e.g. "Volume 5, Issue 4"
    publication_date DATE NOT NULL,
    highlights TEXT, -- JSON or comma separated string
    file_url TEXT NOT NULL,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.newsletters ENABLE ROW LEVEL SECURITY;

-- Updates trigger
CREATE TRIGGER update_newsletters_updated_at BEFORE UPDATE ON public.newsletters FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Policies
-- Public Read
CREATE POLICY "Published newsletters are viewable by everyone" ON public.newsletters FOR SELECT USING (is_published = true);

-- Admin Write
CREATE POLICY "Admins can manage newsletters" ON public.newsletters FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Faculty Write (Optional)
CREATE POLICY "Faculty can manage newsletters" ON public.newsletters FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'faculty'));
