export class Tarea{
	constructor(
		public _id: string,
		public title: string,
		public description: string,
		public assignedTo: string,
		public dueDate: Date,
        public completed: boolean
	){}
}