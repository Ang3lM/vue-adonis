'use strict'

const User = require('App/Models/User');

class UserController {
	async register({request}){
		const {email, password} = request.all();
		const user = await User.create({
			username,
			email,
			password
		});
		return user;
	}
}

module.exports = UserController
