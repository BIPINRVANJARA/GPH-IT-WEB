import { Link } from "react-router-dom";
import { ArrowRight, Clock, MapPin, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return {
    day: date.getDate(),
    month: date.toLocaleDateString('en-IN', { month: 'short' }),
    year: date.getFullYear(),
  };
};

const getTypeColor = (index: number) => {
  const colors = [
    "bg-lavender text-primary-foreground",
    "bg-secondary text-secondary-foreground",
    "bg-accent text-accent-foreground",
    "bg-muted text-muted-foreground",
  ];
  return colors[index % colors.length];
};

export const EventsSection = () => {
  const { data: events, isLoading } = useQuery({
    queryKey: ["home-events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("is_published", true)
        .gte("event_date", new Date().toISOString().split('T')[0])
        .order("event_date", { ascending: true })
        .limit(4);
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <section className="py-16 bg-lavender-light">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Upcoming Events</h2>
            <p className="text-muted-foreground">Important dates from academic calendar</p>
          </div>
          <Button variant="ghost" asChild className="hidden sm:flex">
            <Link to="/academic-calendar">
              View Calendar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : events && events.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((event, index) => {
              const date = formatDate(event.event_date);
              return (
                <Card key={event.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className={`px-4 py-2 ${getTypeColor(index)}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">{date.day}</span>
                      <div className="text-right text-sm">
                        <p>{date.month}</p>
                        <p className="opacity-80">{date.year}</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-3 line-clamp-2">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      {event.description && (
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          <span className="line-clamp-1">{event.description}</span>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3 w-3" />
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card className="border-dashed">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">No upcoming events. Check back soon!</p>
            </CardContent>
          </Card>
        )}

        <div className="mt-6 text-center sm:hidden">
          <Button variant="outline" asChild>
            <Link to="/academic-calendar">
              View Calendar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
