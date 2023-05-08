class MeetingModel {
    public meetingId: number;
    public groupId: number;
    public fromDate: Date;
    public toDate: Date;
    public details: string;
    public roomName: string;
    // public genreName: string; // This will be needed in the frontend

    public constructor(meeting: MeetingModel) {
        this.meetingId = meeting.meetingId;
        this.groupId = meeting.groupId;
        this.fromDate = meeting.fromDate;
        this.toDate = meeting.toDate;
        this.details = meeting.details;
        this.roomName = meeting.roomName;
    };
}

export default MeetingModel;