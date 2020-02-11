export class WorkloadModel {
    Year: string;
    Month: string
    WorkloadData: workload_data[]

}

class workload_data {
    Id: number;
    Name: string;
    WorkLoad: DayWeight[]
}

class MonthWorkload{
    Jan: DayWeight[];
    Feb: DayWeight;
    Mar: DayWeight;
    Apr: DayWeight;
    May: DayWeight;
    Jun: DayWeight;
    Jul: DayWeight;
    Aug: DayWeight;
    Sep: DayWeight;
    Oct: DayWeight[];
    Nov: DayWeight;
    Dec: DayWeight;
}

class DayWeight {
    Day: string
    Weight: number
}