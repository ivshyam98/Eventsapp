import { DateTime } from "../../../node_modules/ionic-angular/umd";
import { DateTimeData } from "../../../node_modules/ionic-angular/umd/util/datetime-util";

export interface EventItem {
    $key?:string;
    eventName: string;
    eventDescription: string;
    venue: string;
    date:string;
    time:string;
    volunteersNeeded: number;
    phone: number;
    email: string;
}