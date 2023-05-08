import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import GroupModel from "../../../Models/GroupModel";
import MeetingModel from "../../../Models/MeetingModel";
import meetingsService from "../../../Services/meetingsService";
import "./AddMeeting.css";

function AddMeeting(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<MeetingModel>();

    const navigate = useNavigate()

    const [groups, setGroups] = useState<GroupModel[]>([]);

    useEffect(() => {
        meetingsService.getAllGroups()
            .then(groups => setGroups(groups))
            .catch(err => alert(err.massage));
    }, []);

    async function send(meeting: MeetingModel) {
        try {
            await meetingsService.addMeeting(meeting);
            alert("Meeting has been added");
            navigate("/meetings");
        } catch (err: any) {
            alert(err.massage);
        }
    }

    return (
        <div className="AddMeeting">
            <form onSubmit={handleSubmit(send)}>

                <h2>Add Meeting:</h2>

                <label>Group:</label>
                <select defaultValue="" required {...register("groupId", {
                    required: { value: true, message: "Missing Group Name" },
                    minLength: { value: 2, message: "Group Name must be minimum 2 chars" },
                    maxLength: { value: 100, message: "Group Name can't exceed 100 chars" }
                })}>
                    <option disabled value="">Select Group...</option>
                    {groups.map(g => <option key={g.groupId} value={g.groupId}>{g.groupName}</option>)}
                </select>
                <span>{formState.errors.groupName?.message}</span>

                <label>From:</label>
                <input type="datetime-local" required {...register("fromDate", {
                    required: { value: true, message: "Missing From Date" },
                    valueAsDate: true
                })} />
                <span>{formState.errors.fromDate?.message}</span>

                <label>To:</label>
                <input type="datetime-local" required {...register("toDate", {
                    required: { value: true, message: "Missing To Date" },
                    valueAsDate: true
                })} />
                <span>{formState.errors.toDate?.message}</span>

                <label>Details:</label>
                <input type="text" required {...register("details", {
                    required: { value: true, message: "Missing Details" },
                    minLength: { value: 2, message: "Details must be minimum 2 chars" },
                    maxLength: { value: 500, message: "Details can't exceed 500 chars" }
                })} />
                <span>{formState.errors.details?.message}</span>

                <label>Room Name:</label>
                <input type="text" required {...register("roomName", {
                    required: { value: true, message: "Missing Room Name" },
                    minLength: { value: 2, message: "Room Name must be minimum 2 chars" },
                    maxLength: { value: 100, message: "Room Name can't exceed 100 chars" }
                })} />
                <span>{formState.errors.roomName?.message}</span>

                <button>Add</button>
            </form>
        </div>
    );
}

export default AddMeeting;
