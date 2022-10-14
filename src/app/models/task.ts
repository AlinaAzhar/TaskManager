export interface TaskInfo{
    id: string,
    taskName: string,
    createdBy: string,
    assignedTo?: string,
    assignedDate?: Date,
    status: string,
    comments?: string
}