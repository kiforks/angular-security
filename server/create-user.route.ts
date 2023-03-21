import { db } from './database';
import { Request, Response } from 'express';
import { USERS } from './database-data';

export function createUser(request: Request, response: Response) {
	const credentials = request.body;
	const user = db.createUser(credentials.email, credentials.password);

	console.log(USERS);

	response.status(200).json({ id: user.id, email: user.email });
}
