export interface TimeSlot {
    time: string;
    mon: string;
    tue: string;
    wed: string;
    thu: string;
    fri: string;
}

export interface DivisionSchedule {
    name: string; // "A" or "B" or "General"
    room?: string;
    schedule: TimeSlot[];
}

export interface SemesterSchedule {
    semester: number;
    termDate: string;
    divisions: DivisionSchedule[];
}

export const timetableData: SemesterSchedule[] = [
    {
        semester: 4,
        termDate: "22/12/2025 to 29/04/2026",
        divisions: [
            {
                name: "A (731)",
                schedule: [
                    { time: "09:30 to 10:30", mon: "MAD-(PVP)", tue: "A.JAVA-(NKK)", wed: "A.JAVA-(NKK)", thu: "FML-(BPM)", fri: "A1-UIUX-(VPP)-303B" },
                    { time: "10:30 to 11:30", mon: "CYBER-(DKP)", tue: "ENTR-(HNR)", wed: "FML-(BPM)", thu: "MCN-(NKK)", fri: "A2-A.JAVA-(NKK)-306B" },
                    { time: "11:30 to 12:30", mon: "MCN-(NKK)", tue: "A1-CYBER-(DKP)-303B", wed: "A2-FML-(BPM)-737A", thu: "MCN-(NKK)", fri: "A3-MAD-(PVP)-738A" },
                    { time: "12:30 to 01:30", mon: "ENTR-(HNR)", tue: "UIUX-T(OJP)", wed: "A1-FML-(BPM)-737A", thu: "A2-UIUX-(VPP)-303A", fri: "A3-CYBER-(DKP)-303B" },
                    { time: "02:00 to 03:00", mon: "A2-MAD-(PVP)-738A", tue: "A3-FML-(BPM)-737A", wed: "A1-A.JAVA-(NKK)-306A", thu: "A2-CYBER-(DKP)-303B", fri: "A3-UIUX-(VPP)-738A" },
                    { time: "03:00 to 04:00", mon: "CYBER-(DKP)", tue: "FML-(BPM)", wed: "MAD-(PVP)", thu: "MCN-Tut-(NKK)", fri: "A.JAVA-(NKK)" },
                    { time: "04:10 to 05:10", mon: "MAD-(PVP)", tue: "ENTR-(HNR)", wed: "CYBER-(DKP)", thu: "UIUX-T(OJP)", fri: "A1-MAD-(PVP)-738A" },
                    { time: "05:10 to 06:10", mon: "-", tue: "-", wed: "-", thu: "-", fri: "A3-A.JAVA-(NKK)-306B" },
                ],
            },
            {
                name: "B (732)",
                schedule: [
                    { time: "09:30 to 10:30", mon: "B1-CYBER-(DKP)-303A", tue: "B2-FML-(BPM)-737A", wed: "B3-A.JAVA-(AJB)-306B", thu: "CYBER-(DKP)", fri: "ENTR-(HNR)" },
                    { time: "10:30 to 11:30", mon: "MAD-(CBP)", tue: "MCN-Tut-(CDS)", wed: "FML-(BPM)", thu: "MCN-(CDS)", fri: "MAD-(CBP)" },
                    { time: "11:30 to 12:30", mon: "CYBER-(DKP)", tue: "B1-UIUX-(VPP)-738B", wed: "B2-AJAVA-(AJB)-306B", thu: "B3-MAD-(CBP)-738A", fri: "MAD-(CBP)" },
                    { time: "12:30 to 01:30", mon: "A.JAVA-(AJB)", tue: "FML-(BPM)", wed: "ENTR-(HNR)", thu: "UIUX-T(BSP)", fri: "B1-MAD-(CBP)-738B" },
                    { time: "02:00 to 03:00", mon: "B2-CYBER-(DKP)-303B", tue: "B3-UIUX-(VPP)-303A", wed: "MCN-(CDS)", thu: "AJAVA (AJB)", fri: "UIUX-T(BSP)" },
                    { time: "03:00 to 04:00", mon: "ENTR-(HNR)", tue: "B1-A.JAVA-(AJB)-306B", wed: "B2-MAD-(CBP)-738A", thu: "B3-FML-(BPM)-737B", fri: "CYBER-(DKP)" },
                    { time: "04:10 to 05:10", mon: "A.JAVA-(AJB)", tue: "FML-(BPM)", wed: "MCN-(CDS)", thu: "B1-FML-(BPM)-737A", fri: "B2-UIUX-(VPP)-303B" },
                    { time: "05:10 to 06:10", mon: "-", tue: "-", wed: "-", thu: "-", fri: "B3-CYBER-(DKP)-303A" },
                ],
            },
        ],
    },
    {
        semester: 6,
        termDate: "22/12/2025 to 29/04/2026",
        divisions: [
            {
                name: "A (732/733)",
                schedule: [
                    { time: "09:30 to 10:30", mon: "FBC-(CDS)-732", tue: "CYBER-OJP)-732", wed: "A1-CYBER-(JJP)-737A", thu: "A2-CLOUD-(HIR)-738A", fri: "A3-FBG-(CDS)-737B" },
                    { time: "10:30 to 11:30", mon: "A2-SD-(AJB)-737A", tue: "A3-SD-(PD)-301", wed: "CLOUD-(HIR)-733", thu: "CYBER-(JP)-733", fri: "A1-CLOUD-(HIR)-738A" },
                    { time: "11:30 to 12:30", mon: "A2-CYBER-((JP)-737B", tue: "A3-FBC-(CDS)-738B", wed: "A1-SD-(HNR)-305", thu: "A2-FBC-(CDS)-737B", fri: "A3-SD-(PD)-301" },
                    { time: "12:30 to 01:30", mon: "CYBER-UJP)-733", tue: "CLOUD-(HIR)-733", wed: "FBC-(CDS)-733", thu: "A1-CLOUD-(HIR)-738A", fri: "A2-FBC-(CDS)-738B" },
                    { time: "02:00 to 03:00", mon: "A3-CYBER-UJP)-737B", tue: "A2-SD-(AJB)-306B", wed: "A3-SD-(PDI)-302", thu: "CLOUD-(HIR)-731", fri: "CYBER-OJP)-731" },
                    { time: "03:00 to 04:00", mon: "A1-FBG-(CDS)-738B", tue: "A2-CYBER-UJP)-737B", wed: "A3-CLOUD-(HIR)-738A", thu: "A1-CYBER-UJP)-737A", fri: "A1-FBC-(CDS)-738B" },
                    { time: "04:10 to 05:10", mon: "A2-CLOUD-(HIR)-737A", tue: "A3-CYBER-OJP)-737B", wed: "FBC-(CDS)-733", thu: "A1-SD-(HNR)-305", fri: "A2-SD-(AJB)-301" },
                    { time: "05:10 to 06:10", mon: "A3-CLOUD-(HIR)-738A", tue: "A1-SD-(HNR)-305", wed: "-", thu: "-", fri: "-" },
                ],
            },
            {
                name: "B (733/723)",
                schedule: [
                    { time: "09:30 to 10:30", mon: "FBC-(BSP)-733", tue: "CLOUD-(CGP)-733", wed: "B1-CYBER-(VAG)-306B", thu: "B2-CLOUD-(CGP)-306A", fri: "B3-FBC-(BSP)-738B" },
                    { time: "10:30 to 11:30", mon: "B1-SD-(PNP)-736", tue: "B2-FBC-(BSP)-738B", wed: "B3-CLOUD-(CGP)-737B", thu: "B1-CLOUD-(CGP)-306A", fri: "B2-FBC-(BSP)-738B" },
                    { time: "11:30 to 12:30", mon: "B3-CYBER-(VAG)-306B", tue: "FBC-(BSP)-733", wed: "CYBER-(VAG)-733", thu: "B1-SD-(PNP)-302", fri: "B2-CYBER-(VAG)-303A" },
                    { time: "12:30 to 01:30", mon: "B3-SD-(PVP)-736", tue: "CYBER-(VAG)-723", wed: "B1-CYBER-(VAG)-303B", thu: "B2-CLOUD-(CGP)-306B", fri: "B3-FBC-(BSP)-738B" },
                    { time: "02:00 to 03:00", mon: "B1-SD-(NKK)-306A", tue: "B3-SD-(PVP) -736", wed: "FBC-(BSP)-733", thu: "CYBER-(VAG)-733", fri: "CLOUD-(CGP)-733" },
                    { time: "03:00 to 04:00", mon: "B1-FBC-(BSP)-303B", tue: "B2-SD-(PDJ) -302", wed: "B3-CYBER-(VAG)-303A", thu: "B1-CLOUD-(CGP)-303A", fri: "B2-SD-(PDJ) -302" },
                    { time: "04:10 to 05:10", mon: "B3-SD-(PVP)-301", tue: "CLOUD-(CGP)-733", wed: "CYBER-(VAG)-733", thu: "B1-FBC-(BSP)-738B", fri: "B2-CYBER-(VAG)-303B" },
                    { time: "05:10 to 06:10", mon: "B3-CLOUD-(CGP)-306A", tue: "B2-SD-(PD)-301", wed: "-", thu: "-", fri: "-" },
                ],
            },
        ],
    },
];
