export const createRoute = route => {
  return $.ajax({
    method: "POST",
    url: `/api/users/${route.user_id}/routes`,
    data: { route }
  })
};


export const updateRoute = route => {
  // debugger
  return $.ajax({
    method: "PATCH",
    url: `/api/routes/${route.id}`,
    data: { route }
  })
};

export const fetchRoute = id => (
  $.ajax({
    method: "Get",
    url: `/api/routes/${id}`,
  })
);

export const fetchRoutes = (id) => (
  $.ajax({
    method: "Get",
    url: `/api/users/${id}/routes`,
  })
);
export const deleteRoute = (routeId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/routes/${routeId}`,
  })
);
