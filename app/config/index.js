
// todas las configuraciones del proyecto
export default {
	env: process.env.NODE_ENV || 'development', // Enviroment
	port: process.env.PORT || 3003, // port
	ip: process.env.IP || '127.0.0.1', // ip server
	cors: process.env.CORS || true, 
	TOKEN_SECRET: "dG9rZW51bHRyYXNlY3JldG8=", // key to unlock token
	conn: {
		host: 'jiraproject', // db domain
		user: 'myuser', // user
		password:'123456', // password
		dbName: '' // db name
	},
	
};