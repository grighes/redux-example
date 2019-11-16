import React from 'react'
import { connect } from 'react-redux'

import * as CourseActions from '../../store/actions'

const Sidebar = ({ modules, toggleLesson }) => (
  <aside>
    {modules.map(module => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id}>
              <div>
                {lesson.title}

                <button onClick={() => toggleLesson(module, lesson)}>Selecionar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
)

const mapStateToProps = state => ({
  modules: state.modules
})

const mapDispatchToProps = dispatch => ({
  toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
