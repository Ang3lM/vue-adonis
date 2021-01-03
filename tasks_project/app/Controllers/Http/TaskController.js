'use strict'

const Task = use('App/Models/Task');
const Project = use('App/Models/Project');
const AuthorizationService = use('App/Services/AuthorizationService');

class TaskController {
	async create({auth, request, params}){
		const user = await auth.getUser();
		var {description} = request.all();
		var {id} = request.params;
		var project =  await Project.find(id);
		var task = new Task();
		AuthorizationService.verifyPermission(project, user);
		task.fill({
			description
		});
		await project.tasks().save(task);
		return task;


	}
}

module.exports = TaskController
