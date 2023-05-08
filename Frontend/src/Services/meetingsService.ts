import axios from "axios";
import MeetingModel from "../Models/MeetingModel";
import GroupModel from "../Models/GroupModel";
import appConfig from "../Utils/Config";

class MeetingsService {

    public async getAllMeetings(): Promise<MeetingModel[]> {
        const response = await axios.get<MeetingModel[]>(appConfig.meetingsUrl)
        const meetings = response.data;
        return meetings;
    };

    public async getAllGroups(): Promise<GroupModel[]> {
        const response = await axios.get<GroupModel[]>(appConfig.groupsUrl)
        const groups = response.data;
        return groups;
    };

    public async addMeeting(meeting: MeetingModel): Promise<void> {
        const response = await axios.post<MeetingModel>(appConfig.meetingsUrl, meeting)
        const addMeeting = response.data;
    };

}

const meetingsService = new MeetingsService();

export default meetingsService;