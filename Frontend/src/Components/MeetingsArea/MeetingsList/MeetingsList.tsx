import { useEffect, useState } from "react";
import GroupModel from "../../../Models/GroupModel";
import MeetingModel from "../../../Models/MeetingModel";
import meetingsService from "../../../Services/meetingsService";
import "./MeetingsList.css";

function MeetingsList(): JSX.Element {

    const [groups, setGroups] = useState<GroupModel[]>([]);
    const [meetings, setMeetings] = useState<MeetingModel[]>([]);
    const [filteredMeetings, setFilteredMeetings] = useState<MeetingModel[]>([]);

    useEffect(() => {
        meetingsService.getAllGroups()
            .then(groups => setGroups(groups))
            .catch(err => alert(err.message));


    }, []);

    let valueSelect = 0;

    function padTo2Digits(num: number) {
        return num.toString().padStart(2, '0');
    }
      
    function convertMsToHM(milliseconds: number) {
        let seconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
      
        seconds = seconds % 60;

        minutes = seconds >= 30 ? minutes + 1 : minutes;
      
        minutes = minutes % 60;

        hours = hours % 24;
      
        return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
    }

    function getMeetings(e: any) {
        valueSelect = e.currentTarget.value;

        meetingsService.getAllMeetings()
            .then(meetings => {
                setMeetings(meetings)
                setFilteredMeetings(meetings.reduce(function (filtered, meeting) {
                    if (meeting.groupId == valueSelect) {
                        const filteredValue = { meetingId: meeting.meetingId,
                            groupName: meeting.groupName,
                            fromDate: new Date(meeting.fromDate).toLocaleString(),
                            toDate: new Date(meeting.toDate).toLocaleString(),
                            details: meeting.details,
                            roomName: meeting.roomName,
                            meetingTime: convertMsToHM(new Date(meeting.toDate).getTime() - new Date(meeting.fromDate).getTime()) };
                        filtered.push(filteredValue);
                    }
                    return filtered;
                }, []))
            })
            .catch(err => alert(err.message));
    }

    return (
        <div className="MeetingsList">
            <select defaultValue="" onChange={getMeetings}>
                <option disabled value="">Select Group...</option>
                {groups.map(g => <option key={g.groupId} value={g.groupId}>{g.groupName}</option>)}
            </select>

            <table>
                <thead>
                    <tr>
                        <th>Group Name</th>
                        <th>From Date</th>
                        <th>To Date</th>
                        <th>Details</th>
                        <th>Room Name</th>
                        <th>Meeting Time</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredMeetings.map(m =>
                        <tr key={m.meetingId}>
                            <td>{m.groupName}</td>
                            <td>{m.fromDate.toString()}</td>
                            <td>{m.toDate.toString()}</td>
                            <td>{m.details}</td>
                            <td>{m.roomName}</td>
                            <td>{m.meetingTime}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default MeetingsList;
