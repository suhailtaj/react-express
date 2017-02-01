
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
		if(this.state.course.title.trim().length > 0) {
			this.props.actions.createCourse(this.state.course);
			const setCourse = this.state.course;
			setCourse.title = '';
			this.setState({course : setCourse});
		}
	}
	onTitleChange(event) {
		const course = this.state.course;
		course.title = event.target.value;
		this.setState({course : course})
	}

	courseRow(course, index) {

		return (
			//<div>
			<div key={index} className="card card-outline-primary mb-3 text-center col-md-5" style={{ display:'inline-block', margin:'10px',border:'1px solid blue'}}>
				<div className="card-block">
					<blockquote className="card-blockquote">
						<p>{course.title}</p>
					</blockquote>
				</div>
			</div>
			//<div className="col-md-2"></div>
			//</div>
		)
		//return <div key={index}>{course.title}</div>
	}

	render() {
		return(
			<div>
				<h1>Courses</h1>
				<div>
					{this.props.courses.map(this.courseRow)}
				</div>

				<h2>Add Course</h2>
				<div className="form-group">
					<div className="col-md-6">
						<label>Title</label>
					</div>
					<div className="col-md-6">
						<input className="form-control" type="text" value={this.state.course.title}
							   onChange={this.onTitleChange} required = {true}/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-md-6">
						<button type="button" className="btn btn-default" style={{width:'150px',marginRight:'20px'}} onClick={this.onClickSave}>Cancel</button>
						<button type="button" className="btn btn-primary" style={{width:'150px',marginRight:'20px'}} onClick={this.onClickSave}>Save</button>
					</div>
				</div>

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
