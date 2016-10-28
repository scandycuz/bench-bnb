
export const signup = (user) => {
  $.ajax({
    url: 'api/users',
    type: 'POST',
    data: user,
    success: (data) => { console.log("success:", data) },
    error: (data) => { console.log("error:", data.responseJSON) }
  })
}

export const login = (user) => {
  $.ajax({
    url: 'api/sessions',
    type: 'POST',
    data: user,
    success: (data) => { console.log("success:", data) },
    error: (data) => { console.log("error:", data.responseJSON) }
  })
}

export const logout = (userId) => {
  $.ajax({
    url: `api/sessions/${userId}`,
    type: 'DELETE',
    success: (data) => { console.log("success:", data) },
    error: (data) => { console.log("error:", data.responseText) }
  })
}
