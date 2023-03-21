import * as _ from 'lodash';
import { LESSONS, USERS } from './database-data';
import { DbUser } from './db-user';

class InMemoryDatabase {
	public userCounter = 0;

	public readAllLessons() {
		return _.values(LESSONS);
	}

	public createUser(email: string, password: string): DbUser {
		this.userCounter++;

		const id = this.userCounter;
		const user: DbUser = {
			id,
			email,
			password,
		};

		USERS[id] = user;

		return user;
	}
}

export const db = new InMemoryDatabase();
