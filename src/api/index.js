export const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

export const fetchRoutines = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const info = await response.json();
    return info;
  } catch (error) {
    console.error(`Error retrieving routines ${error}`);
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
    return info;
  } catch (error) {
    console.error(`Error retrieving my routines ${error}`);
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
    return info;
  } catch (error) {
    console.error(`Error retrieving activities ${error}`);
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
    console.error(`Error fetching routine Id ${error}`);
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
    return info;
  } catch (error) {
    console.error(`Error adding an activity ${error}`);
  }
};

export const addRoutines = async (localSourcedToken, name, goal, isPublic) => {
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
    return info;
  } catch (error) {
    console.error(`Error adding routines ${error}`);
  }
};

export const addRoutineActivities = async (
  localSourcedToken,
  routineId,
  activity,
  count,
  duration
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/routines/${routineId}/activities`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localSourcedToken}`,
        },
        body: JSON.stringify({
          activityId: activity,
          count: count,
          duration: duration,
        }),
      }
    );
    const info = await response.json();
    return info;
  } catch (error) {
    console.error(`Error retrieving routine Id ${error}`);
  }
};

export const updateRoutines = async (
  localSourcedToken,
  name,
  goal,
  isPublic,
  routineId
) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "PATCH",
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
    return info;
  } catch (error) {
    console.error(`Error updating routines ${error}`);
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
  } catch (error) {
    console.error(`Error updating activities ${error}`);
  }
};

export const updateRoutineActivities = async (
  localSourcedToken,
  routineActivityId,
  count,
  duration
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/routine_activities/${routineActivityId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localSourcedToken}`,
        },
        body: JSON.stringify({
          count: count,
          duration: duration,
        }),
      }
    );
    const info = await response.json();
    return info;
  } catch (error) {
    console.error(`Error updating routine activity ${error}`);
  }
};

export const deleteRoutineActivities = async (token, routineActivityId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/routine_activities/${routineActivityId}`,
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
  } catch (error) {
    console.error(`Error deleting a routine activity ${error}`);
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
  } catch (error) {
    console.error(`Error deleting a routine ${error}`);
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
    console.error(`Error loging in a user ${error}`);
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
