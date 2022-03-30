export const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

export const fetchRoutines = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const info = await response.json();
    console.log("fetchRoutine_info =>", info);
    return info;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMyRoutines = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const info = await response.json();
    console.log("fetchMyRoutine_info =>", info);
    return info;
  } catch (error) {
    console.error(error);
  }
};

export const fetchActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const info = await response.json();
    console.log("fetchActivities_info =>", info);
    return info;
  } catch (error) {
    console.error(`Error retrieving activities ${error}`);
    // throw error;
  }
};

export const fetchActivitiesId = async (activityId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/activities/${activityId}/routines`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const info = await response.json();

    return info;
  } catch (error) {
    console.error(error);
  }
};

export const addActivities = async (name, description) => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });
    const info = await response.json();
    console.log("addActivities_info =>", data);
    return info;
  } catch (error) {
    console.error(error);
  }
};

export const AddRoutines = async (localSourcedToken, name, goal, isPublic) => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localSourcedToken}`,
      },

      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic,
      }),
    });
    const info = await response.json();
    console.log("addRoutines_info =>", info);
    return info;
  } catch (error) {
    console.error(error);
  }
};

export const addRoutineActivities = async (
  routineId,
  activityId,
  count,
  duration
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/routines${routineId}/activities`,
      {
        method: "POST",
        body: JSON.stringify({
          activityId: activityId,
          count: count,
          duration: duration,
        }),
      }
    );
    const info = await response.json();

    return info;
  } catch (error) {
    console.error(error);
  }
};

export const updateRoutines = async (name, goal, isPublic, routineId) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        goal: goal,
      }),
    });
    const info = await response.json();
    console.log("addRoutines_info =>", info);
    return info;
  } catch (err) {
    console.log(err);
  }
};

export const updateActivities = async (name, description, activityId) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${activityId}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });
    const info = await response.json();

    return info;
  } catch (err) {
    console.log(err);
  }
};

export const updateRoutineActivities = async (routineId, count, duration) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/routine_activities/${activityId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          count: count,
          duration: duration,
        }),
      }
    );
    const info = await response.json();

    return info;
  } catch (err) {
    console.log(err);
  }
};

export const deleteRoutinesActivities = async (routineActivityId, token) => {
  try {
    const response = await fetch(
      `${BASE_URL}/routine_activities/${routine_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const info = await response.json();

    return info;
  } catch (err) {
    console.log(err);
  }
};

export const deleteRoutines = async (routine_id, token) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routine_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const info = await response.json();

    return info;
  } catch (err) {
    console.log(err);
  }
};

export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const info = await response.json();
    return info;
  } catch (error) {
    console.error(error);
  }
};

export const register = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const info = await response.json();

    return info;
  } catch (error) {
    console.error(`Error registering a user ${error}`);
  }
};

export const userInfo = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const info = await response.json();

    return info;
  } catch (error) {
    console.error(`Error retrieving user information ${error}`);
    // throw error;
  }
};
