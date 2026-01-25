import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DivisionSchedule } from "@/data/timetableData";

interface TimetableGridProps {
    division: DivisionSchedule;
    termDate: string;
}

export const TimetableGrid = ({ division, termDate }: TimetableGridProps) => {
    return (
        <Card className="w-full overflow-hidden">
            <CardHeader className="bg-muted/30 pb-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                    <CardTitle className="text-xl">
                        Division {division.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-muted-foreground whitespace-nowrap">
                        Term: {termDate}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-muted/10 hover:bg-muted/10">
                                <TableHead className="w-[120px] font-bold">Time</TableHead>
                                <TableHead className="min-w-[140px] font-bold">Monday</TableHead>
                                <TableHead className="min-w-[140px] font-bold">Tuesday</TableHead>
                                <TableHead className="min-w-[140px] font-bold">Wednesday</TableHead>
                                <TableHead className="min-w-[140px] font-bold">Thursday</TableHead>
                                <TableHead className="min-w-[140px] font-bold">Friday</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {division.schedule.map((slot, index) => (
                                <TableRow key={index} className="hover:bg-muted/5">
                                    <TableCell className="font-medium whitespace-nowrap bg-muted/5">
                                        {slot.time}
                                    </TableCell>
                                    <TableCell className="border-l">{slot.mon}</TableCell>
                                    <TableCell className="border-l">{slot.tue}</TableCell>
                                    <TableCell className="border-l">{slot.wed}</TableCell>
                                    <TableCell className="border-l">{slot.thu}</TableCell>
                                    <TableCell className="border-l">{slot.fri}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
};
