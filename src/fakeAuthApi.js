const Users = [
	{
		emailId: "tanaypratap@neog.camp",
		password: "tanay@123"
	},
	{
		emailId: "teamtanay@neog.camp",
		password: "teamtanay@123"
	},
	{
		emailId: "neogcamp@neog.camp",
		password: "neog@123"
	}
];

const findUserByEmailId = (emailId) => {
	return Users.find((user) => user.emailId === emailId);
};

export const fakeAuthApi = (emailId, password) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const user = findUserByEmailId(emailId);

			if (user && user.password === password) {
				resolve({ success: true, status: 200 });
			}
			reject({ success: false, status: 401 });
		}, 2000);
	});
};
