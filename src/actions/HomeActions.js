export const PROJECTS = 'PROJECTS';

export default function showProjects(projName) {
  return (dispatch) => dispatch({
    type: PROJECTS,
    values: projName,
  })
}
