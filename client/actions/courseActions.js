export function createCourse(course) {
	return { type : 'CREATE_COURSE' , course : course};
}

// export function getCourses() {
// 	return { type : 'GET_COURSES'};
// }


export function loadUsers() {
	return function (dispatch) {
		let users =[];
		dispatch(loadUsersSuccess(users));
	}
}
