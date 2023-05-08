import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import MeetingModel from "../4-models/meetingModel";
import GroupModel from "../4-models/groupModel";

async function getAllGroups(): Promise<GroupModel[]> {
    const sql = "SELECT * FROM groups";
    const groups = await dal.execute(sql);
    return groups;
}

async function getAllMeetings(): Promise<MeetingModel[]> {
    const sql = "SELECT meetings.*, groupName FROM meetings JOIN groups ON meetings.groupId = groups.groupId";
    const meetings = await dal.execute(sql);
    return meetings;

}

async function addMeeting(meeting: MeetingModel): Promise<MeetingModel> {
    const sql = `INSERT INTO meetings VALUES(
                    DEFAULT,
                    ${meeting.groupId},
                    '${meeting.fromDate}',
                    '${meeting.toDate}',
                    '${meeting.details}',
                    '${meeting.roomName}'
                )`;
    const result: OkPacket = await dal.execute(sql);
    
    meeting.meetingId = result.insertId;

    return meeting;
}

export default {
    getAllGroups,
    getAllMeetings,
    addMeeting
};
