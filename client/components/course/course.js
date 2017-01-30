
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class Course extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			course: {
				title : ''
			}
		}
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
		this.courseRow = this.courseRow.bind(this);
	}

	onClickSave() {
		this.props.actions.createCourse(this.state.course);
		const setCourse = this.state.course;
		setCourse.title = '';
		this.setState({course : setCourse});
	}
	onTitleChange(event) {
		const course = this.state.course;
		course.title = event.target.value;
		this.setState({course : course})
	}

	courseRow(course, index) {
		return <div key={index}>{course.title}</div>
	}

	render() {
		return(
			<div>
				<h1>Courses</h1>
				{this.props.courses.map(this.courseRow)}
				<h2>Add Course</h2>
				<input type="text" value={this.state.course.title}
					   onChange={this.onTitleChange}/>
				<input type="submit" value ="save" onClick={this.onClickSave}/>
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		courses: state.courses
	};
}

function mapDispatchToProps(dispatch) {
	return {
		//createCourse: (course) => dispatch(courseActions.createCourse(course))
		actions: bindActionCreators(courseActions, dispatch)
	}
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps)
export default connectedStateAndProps(Course)
