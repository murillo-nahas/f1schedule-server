import Router from "koa-router";

import { listSchedules } from "./app/useCases/listSchedules";
import { listScheduleById } from "./app/useCases/listScheduleById";
import { createSchedule } from "./app/useCases/createSchedule";
import { updateSchedule } from "./app/useCases/updateSchedule";
import { deleteSchedule } from "./app/useCases/deleteSchedule";

export const router = new Router();

router.get("/schedule", listSchedules);

router.get("/schedule/:id", listScheduleById);

router.post("/schedule", createSchedule);

router.put("/schedule/:id", updateSchedule);

router.delete("/schedule/:id", deleteSchedule);
