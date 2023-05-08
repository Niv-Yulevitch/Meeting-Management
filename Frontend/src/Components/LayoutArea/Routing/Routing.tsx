import { Navigate, Route, Routes } from "react-router-dom";
import AddMeeting from "../../MeetingsArea/AddMeeting/AddMeeting";
import MeetingsList from "../../MeetingsArea/MeetingsList/MeetingsList";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/meetings" element={<MeetingsList />} />
                <Route path="/meetings/new" element={<AddMeeting />} />
                <Route path="/" element={<Navigate to="/meetings" />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default Routing;
