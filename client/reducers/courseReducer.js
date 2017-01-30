export default function courseReducer(state = [], action) {
	switch(action.type) {
		case 'CREATE_COURSE' :
		 	var changeObject = [...state , Object.assign({}, action.course)];
			console.log(changeObject);
		  return changeObject;

		default:
			return state;
	}
}
