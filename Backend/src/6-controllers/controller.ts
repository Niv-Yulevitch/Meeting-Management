import express, { NextFunction, Request, Response } from "express";
import MeetingModel from "../4-models/meetingModel";
import logic from "../5-logic/logic";

const router = express.Router();

// GET http://localhost:3001/api/groups
router.get("/api/groups", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const groups = await logic.getAllGroups();
        response.json(groups);
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:3001/api/meetings
router.get("/api/meetings", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const meetings = await logic.getAllMeetings();
        response.json(meetings);
    }
    catch (err: any) {
        next(err);
    }
});

// POST http://localhost:3001/api/meetings
router.post("/api/meetings", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const meeting = new MeetingModel(request.body);
        console.log(meeting);
        const addMeeting = await logic.addMeeting(meeting);
        response.status(201).json(addMeeting);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;
