'use strict'

class ProjectController {
	async idex({auth}){
		const user = await auth.getUser();
		console.log(user);
	}
}

module.exports = ProjectController
