'use strict'

const User = use('App/Models/User');

class UserController {
	async register({request}){
		const {username, email, password} = request.all();
		const user = await User.create({
			username,
			email,
			password
		});
		return user;
	}
}

module.exports = UserController
