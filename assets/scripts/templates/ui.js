const getProjectsSuccess = (data) => {
  // console.log(data)
  const showProjectsHtml = showProjectsTemplate({ projects: data.projects })
  $('.content').html('').append(showProjectsHtml)
  if (data.projects.length === 0) {
    $('.content').html('You\'ll need to all a project first!')
  }
}
